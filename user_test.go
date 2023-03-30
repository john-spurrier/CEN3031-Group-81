package main

import (
	"bytes"
	"fmt"
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func TestMain(m *testing.M) {
	fmt.Println("Database Operative")
	var err error
	db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	// call the actual tests
	exitCode := m.Run()
	// tear down code here

	os.Exit(exitCode)
}

func TestNewUser(t *testing.T) {
	fmt.Println("New User Tested")
	// Generate an HTTP request using a JSON object as the body
	requestBody := bytes.NewBufferString(`{"username":"Alan","password":"Turing"}`)
	// issue the http request using the test library
	request, err := http.NewRequest("POST", "/users", requestBody)
	if err != nil {
		t.Fatal(err)
	}

	// Generate a recorder to transcribe the result/Response Writer from the function
	recorder := httptest.NewRecorder()

	// Call the NewUser function with the test request and response recorder
	NewUser(recorder, request)

	// Check the response status code
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	// Check the response body
	expectedResponse := "New User Endpoint"
	if !(strings.Contains(recorder.Body.String(), expectedResponse)) {
		t.Errorf("Unexpected Behavior: got %v want %v", recorder.Body.String(), expectedResponse)
	}

}

func TestLoginHandler(t *testing.T) {
	fmt.Println("Login Tested")
	// Generate an HTTP request using a JSON object as the body
	requestBody := bytes.NewBufferString(`{"username":"janedoe","password":"pass123"}`)
	// issue the http request using the test library
	request, err := http.NewRequest("POST", "/login", requestBody)
	if err != nil {
		t.Fatal(err)
	}

	// Generate a recorder to transcribe the result/Response Writer from the function
	recorder := httptest.NewRecorder()

	loginHandler(recorder, request)

	// Check the response status code
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	// Check the response body
	expectedResponse := `"Login successful"`
	if recorder.Body.String() != expectedResponse {
		t.Errorf("Unexpected Behavior: got %v want %v", recorder.Body.String(), expectedResponse)
	}
}

func TestUpdateUser(t *testing.T) {
	fmt.Println("Update User Tested")
	// Generate an HTTP request using a JSON object as the body
	requestBody := bytes.NewBufferString(`{"username":"janedoe","email":"jane@example.com","password":"pass123"}`)
	// issue the http request using the test library
	request, err := http.NewRequest("PUT", "/user/janedoe/jane@example.com", requestBody)
	if err != nil {
		t.Fatal(err)
	}

	// Generate a recorder to transcribe the result/Response Writer from the function
	recorder := httptest.NewRecorder()

	UpdateUser(recorder, request)

	// Check the response status code
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	// Check the response body
	expectedResponse := `"User Successfully Updated"`
	if recorder.Body.String() != expectedResponse {
		t.Errorf("Unexpected Behavior: got %v want %v", recorder.Body.String(), expectedResponse)
	}
}

func TestAllUsers(t *testing.T) {
	fmt.Println("All Users Tested")
	// issue the http request using the test library
	request, err := http.NewRequest("GET", "/users", nil)
	if err != nil {
		t.Fatal(err)
	}

	// Generate a recorder to transcribe the result/Response Writer from the function
	recorder := httptest.NewRecorder()

	AllUsers(recorder, request)

	// Check the response status code
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	//JSON response check is omitted due to the variability/volatility of the database
}

func TestDeleteUser(t *testing.T) {
	fmt.Println("Delete User Tested")
	requestBody := bytes.NewBufferString(`{"username":"janedoe","email":"jane@example.com","password":"pass123"}`)
	// issue the http request using the test library
	request, err := http.NewRequest("DELETE", "/user/janedoe", requestBody)
	if err != nil {
		t.Fatal(err)
	}

	// Generate a recorder to transcribe the result/Response Writer from the function
	recorder := httptest.NewRecorder()

	DeleteUser(recorder, request)

	// Check the response status code
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	// Check the response body
	expectedResponse := `"Record Deleted Successfully"`
	if !(strings.Contains(recorder.Body.String(), expectedResponse)) {
		t.Errorf("Unexpected Behavior: got %v want %v", recorder.Body.String(), expectedResponse)
	}

}
