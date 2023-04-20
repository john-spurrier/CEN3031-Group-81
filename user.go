package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"regexp"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

//var err error

type User struct {
	gorm.Model
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Package1 bool   `json:"isPackage1"`
	Package2 bool   `json:"isPackage2"`
	Package3 bool   `json:"isPackage3"`
}

// String Parser for Password Strength Requirements
// Password must be at least eight characters long
// Password must contain at least one uppercase letter
// Password must contain at least on digit
// Password Must Contain at least one special character

func isStrongPassword(password string) bool {
	regex := regexp.MustCompile(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`)
	return regex.MatchString(password)
}

func AllUsers(w http.ResponseWriter, r *http.Request) {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var users []User
	res := db.Find(&users)
	if res.Error != nil {
		// send an error to the frontend if command does not work
		w.WriteHeader(http.StatusBadRequest)
	} else {
		w.WriteHeader(http.StatusOK)
	}
	json.NewEncoder(w).Encode(users)
}

func NewUser(w http.ResponseWriter, r *http.Request) {
	//fmt.Fprintf(w, "New User Endpoint \n")
	w.Header().Set("Content-Type", "application/json")
	var user *User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if !(isStrongPassword(user.Password)) {
		http.Error(w, "Weak Password", http.StatusBadRequest)
		return
	}

	// Do something with the user object
	//fmt.Println(user.Username)
	//fmt.Println(user.Password)
	//newUser := User{Username: user.Username, Password: user.Password}
	//result := db.Create(&newUser)
	//if result.Error != nil {
	//	panic(result.Error)
	//}
	// Return a JSON response with the user object

	// Generate a hash for the given password to feed into the database
	// func GenerateFromPassword(password []byte, cost int) ([]byte, error)
	hash, err1 := bcrypt.GenerateFromPassword([]byte(user.Password), 12)
	// Return an error indicate that the hashing was unsuccessful
	if err1 != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// Pass in the hash to the database
	db.Create(&User{Username: user.Username, Email: user.Email, Password: string(hash)})
	json.NewEncoder(w).Encode(&user)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	//fmt.Fprintf(w, "Delete User Endpoint Hit")
	// Parse the request body to get the username and password
	w.Header().Set("Content-Type", "application/json")
	decoder := json.NewDecoder(r.Body)
	var credentials struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	err := decoder.Decode(&credentials)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}
	var tempUser *User
	res := db.Where("username = ? AND password = ?", credentials.Username, credentials.Password).First(&tempUser)
	if res.Error == gorm.ErrRecordNotFound {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprint(w, "\"Record Not Found\"")
		return
	}
	res2 := db.Delete(&tempUser).Error
	if res2 != nil {
		w.WriteHeader(http.StatusBadGateway)
		fmt.Fprint(w, "\"Record Didn't Delete Properly\"")
		return
	} else {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, "\"Record Deleted Successfully\"")
	}

}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	// Parse the request body to get the username and password
	w.Header().Set("Content-Type", "application/json")

	decoder := json.NewDecoder(r.Body)
	var targetUser User
	var tempUser *User
	err := decoder.Decode(&targetUser)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}
	// search the user from the database
	// use on the username since usernames must be unique
	str := targetUser.Username
	newStr := str[1 : len(str)-1]
	db.Where("username = ?", newStr).First(&tempUser)
	// use tempUser ptr to update it respective values
	res := db.Model(&tempUser).Updates(User{Package1: targetUser.Package1, Package2: targetUser.Package2, Package3: targetUser.Package3})
	if res.Error != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(w, "\"Update Error\"")
	} else {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, "\"User Successfully Updated\"")
	}
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the request body to get the username and password
	w.Header().Set("Content-Type", "application/json")
	decoder := json.NewDecoder(r.Body)
	var credentials struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	err := decoder.Decode(&credentials)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}
	//fmt.Println(credentials.Username)
	//fmt.Println(credentials.Password)

	// Check the credentials against the database
	// ...
	var user User
	var validCredentials bool
	result := db.Where("username = ?", credentials.Username).First(&user)
	if result.Error != nil {
		fmt.Println(result.Error)
	}
	if result.RowsAffected == 0 {
		// User not found or password incorrect
		validCredentials = false
	} else {
		// convert to byte array since hash is stored as string in database
		err1 := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(credentials.Password))
		// hash has not been found since error was returned
		if err1 != nil {
			validCredentials = false
		} else {
			// hash has been found
			validCredentials = true
		}
	}
	// Return a response indicating success or failure
	if validCredentials {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, "\"Login successful\"")
	} else {
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Fprint(w, "\"Invalid username or password\"")
	}
}
