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
	Password string `json:"password"`
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
	json.NewEncoder(w).Encode(&user)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Delete User Endpoint Hit")
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Update User Endpoint Hit")
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the request body to get the username and password
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
	result := db.Where("username = ? AND password = ?", "janedoe", "pass123").First(&user)
	if result.Error != nil {
		panic(result.Error)
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
		fmt.Fprint(w, "Login successful")
	} else {
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Fprint(w, "Invalid username or password")
	}
}
