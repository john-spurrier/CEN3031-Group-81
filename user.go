package main

import (
	"encoding/json"
	"fmt"
	"net/http"

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
	Package1 bool   `json:"package1"`
	Package2 bool   `json:"package2"`
	Package3 bool   `json:"package3"`
}

func AllUsers(w http.ResponseWriter, r *http.Request) {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var users []User
	db.Find(&users)
	json.NewEncoder(w).Encode(users)
}

func NewUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "New User Endpoint \n")
	w.Header().Set("Content-Type", "application/json")
	var user *User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// Do something with the user object
	fmt.Println(user.Username)
	fmt.Println(user.Password)
	//newUser := User{Username: user.Username, Password: user.Password}
	//result := db.Create(&newUser)
	//if result.Error != nil {
	//	panic(result.Error)
	//}
	// Return a JSON response with the user object
	db.Create(&User{Username: user.Username, Password: user.Password})
	json.NewEncoder(w).Encode(&user)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Delete User Endpoint Hit")
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
	}

}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Update User Endpoint Hit")
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
	db.Where("username = ? AND password = ?", targetUser.Username, targetUser.Password).First(&tempUser)
	// use tempUser ptr to update it respective values
	db.Model(&tempUser).Updates(User{Package1: targetUser.Package1, Package2: targetUser.Package2, Package3: targetUser.Package3})

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

	// Check the credentials against the database
	// ...
	var user User
	var validCredentials bool
	result := db.Where("username = ? AND password = ?", credentials.Username, credentials.Password).First(&user)
	if result.Error != nil {
		fmt.Println(result.Error)
	}
	if result.RowsAffected == 0 {
		// User not found or password incorrect
		validCredentials = false
	} else {
		// User found and password correct
		validCredentials = true
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
