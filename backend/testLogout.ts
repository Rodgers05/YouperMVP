import "dotenv/config";
import { login, logout } from "./auth.js";

async function testLogout() {
    try {
        const email = process.env.TEST_EMAIL;
        const password = process.env.TEST_PASSWORD;

        if (!email || !password) {
            throw new Error("TEST_EMAIL and TEST_PASSWORD must be configured in .env");
        }

        // Log in first
        await login(email, password);
        console.log("Login successful.");

        // Log out
        await logout();
        console.log("Logout successful.");

        console.log("Logout test completed.");

    } catch (error) {
        console.error("Logout test failed:", error);

        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

testLogout();