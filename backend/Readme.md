# ISIKO: Sign-up/Login Flow Logic

## 1. Project Overview

The Youper Sign-up/Login Flow Logic module implements user registration, login, and logout using TypeScript and Supabase Authentication.

The module is designed to provide reusable authentication functions that can be integrated into the wider Youper application.

## 2. Objectives

The objectives of this module are to:

* Register new users using email and password.
* Authenticate registered users.
* Allow authenticated users to sign out.
* Validate user input before sending authentication requests.
* Handle authentication errors.
* Provide a central module for accessing authentication functions.

## 3. Technologies Used

* **TypeScript:** Implements the authentication logic.
* **Node.js:** Runs the TypeScript scripts in the development environment.
* **Supabase Auth:** Provides registration, login, and session-management services.
* **dotenv:** Loads environment variables from the `.env` file.
* **tsx:** Executes TypeScript files during development.
* **Git:** Supports source-code version control.

## 4. Project Structure

```text
Sign up and login/
├── lib/
│   └── supabase.ts
├── signUp.ts
├── login.ts
├── logout.ts
├── auth.ts
├── testConnection.ts
├── testSignUp.ts
├── testLogin.ts
├── testLogout.ts
├── testAuthModule.ts
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── Workflow.md
```

The project may also contain this README and other documentation files.

## 5. Main Components

### `lib/supabase.ts`

Creates the Supabase client using environment variables.

### `signUp.ts`

Exports the `signUp()` function, which validates input and submits user registration requests to Supabase.

### `login.ts`

Exports the `login()` function, which validates the supplied email and authenticates the user using their password.

### `logout.ts`

Exports the `logout()` function, which signs out the current Supabase session.

### `auth.ts`

Centralizes the exports of the registration, login, and logout functions.

Other TypeScript modules can import these functions from this file.

## 6. Prerequisites

Before running the project, install:

* Node.js and npm.
* Visual Studio Code or another TypeScript-compatible editor.
* A Supabase project.
* Git, if you intend to use version control.

## 7. Installation

Clone or download the project into your development environment.

Open a terminal in the project directory and install the dependencies:

```bash
npm install
```

If the project has not yet been initialized with its dependencies, install the required packages:

```bash
npm install @supabase/supabase-js dotenv
npm install --save-dev typescript tsx @types/node
```

## 8. Environment Configuration

Create a `.env` file in the project root.

Add your own Supabase project URL and public client key:

```dotenv
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_public_key
```

Replace the placeholder values with the appropriate values from your Supabase project's API settings.

Use the project's publishable key or legacy `anon` key, as appropriate. Never use a `service_role` key or another secret key in this client-facing authentication module.

The `.env.example` file should contain the variable names but no real credentials.

Keep `.env` out of version control.

## 9. Running the Tests

Run the commands from the project root.

### Test Supabase client initialization

```bash
npx tsx testConnection.ts
```

### Test registration

```bash
npx tsx testSignUp.ts
```

Use a suitable test account. If email confirmation is enabled, check the confirmation requirements in Supabase.

### Test login

```bash
npx tsx testLogin.ts
```

### Test logout

```bash
npx tsx testLogout.ts
```

### Test the central authentication module

```bash
npx tsx testAuthModule.ts
```

### Check TypeScript

```bash
npx tsc --noEmit
```

The authentication test scripts are development utilities. They should not be treated as a production application interface.

## 10. Using the Authentication Module

Other TypeScript files can import the functions through `auth.ts`:

```typescript
import { signUp, login, logout } from "./auth";
```

Example registration call:

```typescript
const result = await signUp(
    "student@example.com",
    "ExamplePassword123!"
);
```

Example login call:

```typescript
const result = await login(
    "student@example.com",
    "ExamplePassword123!"
);
```

Example logout call:

```typescript
await logout();
```

These examples illustrate function usage. Replace the sample credentials with suitable test values when testing locally, and do not commit real passwords to source control.

Call these asynchronous functions inside appropriate asynchronous code and handle errors with `try...catch`.

## 11. Error Handling and Validation

The registration and login functions check that the required fields are provided and that the email follows a basic email format.

The registration function also checks the configured minimum password length.

Supabase can return authentication errors for reasons including invalid credentials, duplicate registrations, or unmet email-confirmation requirements.

The calling application should display appropriate user-facing messages without exposing sensitive internal details.

## 12. Security Considerations

* Never commit `.env` or real credentials to GitHub.
* Never place passwords or secret API keys in publicly shared source code.
* Use a public Supabase client key only in the intended client-facing context.
* Keep privileged server-side keys in a secure server environment.
* Validate inputs and handle authentication errors.
* Apply appropriate access controls and Row Level Security policies to protected Supabase data.
* Avoid logging passwords, access tokens, or other sensitive authentication information.
* Review the test scripts before publishing the repository.

## 13. Current Implementation Status

The following components have been implemented and tested:

* Supabase client initialization.
* User registration.
* User login.
* User logout.
* Central authentication exports.
* Login and logout through the central authentication module.
* Basic input validation and error handling.

The module has passed the login and logout tests described in the project workflow.

## 14. Limitations and Future Improvements

Potential improvements include:

* More comprehensive automated tests.
* Better separation between development tests and production code.
* Configurable session persistence for Node.js applications.
* Password-reset functionality.
* Email-confirmation handling.
* More comprehensive input validation.
* Improved user-facing error messages.
* Integration with the wider ISIKO application.

## 15. Documentation

Refer to `Workflow.md` for the step-by-step authentication workflow.

## 16. Conclusion

The ISIKO Sign-up/Login Flow Logic module provides a foundation for email-and-password authentication using TypeScript and Supabase. It separates registration, login, and logout into reusable functions and provides a central module for integration into the wider application.
