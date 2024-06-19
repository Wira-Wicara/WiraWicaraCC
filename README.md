# Documentation

## 1. Clone the Repository
Use `git clone https://github.com/Wira-Wicara/WiraWicaraCC.git` in your directory.

## 2. Install Dependencies
Use `npm install` in your terminal.

## 3. Firebase Service Account, Cloud Storage Service Account, and App SDK
You need to create a Firebase service account to use Firebase Auth, a Cloud Storage service account to be able to get voices from the Cloud Storage bucket, and an app SDK to be able to use the Firebase project.

## 4. Run the Program
Use `npm start` to start the program.

# Test the API

## Register (/register)
- **Method:** POST
- **Description:** Handles the registration of a new user using Firebase Authentication. The function performs several steps to ensure proper user registration and verification.
- **Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

## Login (/login)
- **Method:** POST
- **Description:** Handles user login using Firebase Authentication. It performs several steps to authenticate the user, generate an ID token, and set a cookie with the token if the login is successful.
- **Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

## Logout (/logout)
- **Method:** POST
- **Description:** Handles the user logout process using Firebase Authentication. It signs out the user and clears the authentication cookie.

## Reset Password (/reset-password)
- **Method:** POST
- **Description:** Sends a password reset email to a user using Firebase Authentication. The function performs input validation, attempts to send a password reset email, and handles the responses based on the outcome.
- **Body:**
  ```json
  {
    "email": "john.doe@example.com"
  }
  ```

## Store Kids (/storeKids)
- **Method:** POST
- **Description:** Stores user-provided data in a database. The function performs several steps to validate the input, store the data, and send appropriate responses.
- **Body:**
  ```json
  {
    "username": "Rio",
    "kidName": "John",
    "kidAge": 5,
    "kidDescription": "Likes to play soccer"
  }
  ```

## Get Voices (/sequential-audio)
- **Method:** GET
- **Description:** Retrieves voices from the Cloud Storage bucket.
