# ISIKO Sign-up/Login Flow Logic

## 1. Overview

The Youper Sign-up/Login Flow Logic module implements user registration, login, and logout using TypeScript and Supabase Authentication.

It provides reusable authentication functions that can be integrated into the wider Youper application.

## 2. System Components

### `lib/supabase.ts`

Initializes the Supabase client using environment variables loaded from the `.env` file.

### `signUp.ts`

Registers new users using their email address and password. It validates the input before submitting the registration request to Supabase.

### `login.ts`

Authenticates registered users using their email address and password. If authentication succeeds, Supabase returns user and session information.

### `logout.ts`

Signs out the current Supabase authentication session and reports any errors.

### `auth.ts`

Acts as the central export module for the registration, login, and logout functions.

## 3. Registration Workflow

1. The user provides an email address and password.
2. The registration function trims surrounding whitespace from the email and converts it to lowercase.
3. The function validates the required fields and basic email format.
4. Supabase receives the registration request.
5. If successful, Supabase returns user information.
6. Depending on the project's email-confirmation settings, the user may need to confirm their email before logging in.

## 4. Login Workflow

1. The user provides their email address and password.
2. The login function normalizes the email address.
3. The function checks that the required fields are provided and validates the email format.
4. Supabase verifies the credentials.
5. If authentication succeeds, Supabase returns user and session information.
6. If authentication fails, the function throws an error for the calling code to handle.

## 5. Logout Workflow

1. The application calls the logout function.
2. The function requests that Supabase sign out the current session.
3. If an error occurs, the function throws it.
4. Otherwise, the logout operation completes successfully.

## 6. Central Authentication Module

The `auth.ts` file exports the authentication functions from one location:

* `signUp`
* `login`
* `logout`

Other modules can import these functions from `./auth` rather than importing each function from a separate file.

## 7. Environment Configuration

The project uses the following environment variables:

* `SUPABASE_URL`
* `SUPABASE_ANON_KEY`

The actual values are stored in `.env`. The `.env` file must not be committed to a public repository.

The `.env.example` file documents the required variable names without exposing credentials.

## 8. Testing

The project includes test scripts for:

* Supabase client initialization
* User registration
* User login
* User logout
* Login and logout through the central authentication module

These scripts help verify that the individual functions and central exports work as expected.

## 9. Important Implementation Considerations

* Registration does not necessarily create an active session when email confirmation is required.
* A successful login returns session information, including an access token.
* Session persistence across separate Node.js executions requires appropriate session-storage configuration.
* Production applications should not expose passwords or secret API keys in source code.
* Input validation should be complemented by Supabase's authentication policies and appropriate error handling.
