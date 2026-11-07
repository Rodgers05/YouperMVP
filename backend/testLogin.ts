import "dotenv/config";
import { login } from "./login.js";

const testEmail = process.env.TEST_EMAIL;
const testPassword = process.env.TEST_PASSWORD;

async function testLogin() {
try {
if (!testEmail || !testPassword) {
throw new Error(
"TEST_EMAIL and TEST_PASSWORD must be configured in .env"
);
}

 const result = await login(testEmail, testPassword);

    console.log("Login successful!");
    console.log("User ID:", result.user.id);
    console.log("Email:", result.user.email);

    if (result.session) {
        console.log("Session created successfully.");
        console.log("Access token received.");
    }

} catch (error) {
    if (error instanceof Error) {
        console.error("Login failed:", error.message);
    } else {
        console.error("An unexpected error occurred.");
    }
}

}

testLogin();
