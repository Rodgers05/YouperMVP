import "dotenv/config";

import { login, logout } from "./auth.js";

async function testAuthModule() {
    try {
        console.log("Testing the central authentication module...");

        // Get test credentials from the .env file
        const email = process.env.TEST_EMAIL;
        const password = process.env.TEST_PASSWORD;

        if (!email || !password) {
            throw new Error(
                "TEST_EMAIL and TEST_PASSWORD must be configured in .env"
            );
        }

        // Step 1: Log in
        const result = await login(email, password);

        console.log("Login successful!");
        console.log("Authenticated user:", result.user.email);

        // Step 2: Log out
        await logout();

        console.log("Logout successful!");
        console.log("Authentication module test completed.");

    } catch (error) {
        console.error("Test failed:", error);

        if (error instanceof Error) {
            console.error("Error message:", error.message);
        }
    }
}

testAuthModule();