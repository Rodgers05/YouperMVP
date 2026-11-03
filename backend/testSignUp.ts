import "dotenv/config";
import { signUp } from "./signUp.js";

const testEmail = process.env.TEST_SIGNUP_EMAIL;
const testPassword = process.env.TEST_SIGNUP_PASSWORD;

async function testSignUp() {
try {
if (!testEmail || !testPassword) {
throw new Error(
"TEST_SIGNUP_EMAIL and TEST_SIGNUP_PASSWORD must be configured in .env"
);
}

    const result = await signUp(testEmail, testPassword);

    console.log("Registration request completed.");

    if (result.user) {
        console.log("User ID:", result.user.id);
        console.log("Email:", result.user.email);
    }

    if (result.session) {
        console.log("A session was created successfully.");
    } else {
        console.log(
            "No active session. Email confirmation may be required."
        );
    }

} catch (error) {
    if (error instanceof Error) {
        console.error("Registration failed:", error.message);
    } else {
        console.error("An unexpected error occurred.");
    }
}

}

testSignUp();
