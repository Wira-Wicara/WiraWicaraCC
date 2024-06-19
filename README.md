# Documentation
## 1. Clone the repository
Use git clone https://github.com/Wira-Wicara/WiraWicaraCC.git on your directory.

## 2. Install dependencies
Use npm install on your terminal.

## 3. Firebase Service Account, Cloud Storage Service Account, and App SDK
You need to make a firebase service account to use firebase auth, cloud storage service account to be able get voices from cloud storage bucket, and an app sdk to be able to use the firebase project.

## 4. Run the program
User npm start to start the program.


# Test the API
## Register (/register)
- Method: POST
- Description: To handle registers a new user using Firebase Authentication. The function performs several steps to ensure proper user registration and verification.
- Body {
    "email": "joh.doe@example.com",
    "password": "yourpassword"
  }

## Login (/login)
- Method: POST
- Description: To handles user login using Firebase Authentication. It performs several steps to authenticate the user, generate an ID token, and set a cookie with the token if the login is successful.
- Body {
    "email": "joh.doe@example.com",
    "password": "yourpassword"
  }

## Logout (/logout)
- Method: POST
- Description: To handles the user logout process using Firebase Authentication. It signs out the user and clears the authentication cookie.

## Reset Password (/reset-password)
- Method: POST
- Description: To sends a password reset email to a user using Firebase Authentication. The function performs input validation, attempts to send a password reset email, and handles the responses based on the outcome.
- Body {
    "email": "joh.doe@example.com"
  }

## Store Kids (/storeKids)
- Method: POST
- Description: To stores user-provided data in a database. The function performs several steps to validate the input, store the data, and send appropriate responses.
- Body {
    "username": "Rio",
  "kidName": "John",
  "kidAge": 5,
  "kidDescription": "Likes to play soccer"
}

## Get voices (/sequential-audio)
- Method: GET
- Description: To get voices from cloud storage bucket.
