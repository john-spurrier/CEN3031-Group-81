<h1>Sprint 4</h1>
<h2>Work Completed</h2>
  <p>In this Sprint</p>
<h2>List of Frontend Unit Tests</h2>
  <ul>
      <li></li>
  </ul>
 <h2>List of Backend Unit Tests</h2>
   <ul>  
    <li></li>
   </ul>
<h2>Documentation for Backend API</h2>
<p>
This backend API is built using Golang and provides several endpoints for managing user data stored in a SQLite database. 
It uses the GORM library to interface with the database and allows for creating new users, retrieving all users, deleting users,
and updating user data. Additionally, it includes a login endpoint that checks user credentials against the database and returns 
a success or failure response. The API communicates via JSON and returns JSON-encoded responses. Overall, this API provides basic 
CRUD functionality for managing user data and authentication.
 </p>
<h4>List of Functions</h4>
<ul>
  <li> AllUsers: retrieves all users from the database and returns them as JSON to the client. </li>
  <li>NewUser: adds a new user to the database based on the data sent in the request body. Returns the added user as JSON to the client. </li>
  <li>DeleteUser: deletes a user from the database based on the username and password sent in the request body. Returns a response indicating success or failure. </li>
  <li>UpdateUser: updates a user in the database based on the username and password sent in the request body. Only the package status can be updated. Returns a response indicating success or failure. </li>
  <li>loginHandler: authenticates a user based on the username and password sent in the request body. Returns a response indicating success or failure. </li>
 </ul>
