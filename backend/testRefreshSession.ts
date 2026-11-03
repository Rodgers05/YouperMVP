import "dotenv/config";

import {
    login,
    logout,
    refreshSession,
    verifyAccessToken
} from "./auth.js";

const testEmail = process.env.TEST_EMAIL;
const testPassword = process.env.TEST_PASSWORD;

async function testRefreshSession() {
    let loggedIn = false;

    try {
        if (!testEmail || !testPassword) {
            throw new Error(
                "TEST_EMAIL and TEST_PASSWORD must be configured in .env"
            );
        }

        console.log("Starting session refresh test...");

        // Step 1: Log in
        const loginResult = await login(testEmail, testPassword);
        loggedIn = true;

        console.log("Login successful.");

        if (!loginResult.session) {
            throw new Error("No session was created during login.");
        }

        console.log("Initial session created successfully.");

        // Step 2: Refresh the session
        const refreshedSession = await refreshSession();

        console.log("Session refreshed successfully.");
        console.log(
            "New access token available:",
            Boolean(refreshedSession.access_token)
        );

        // Step 3: Verify the refreshed access token
        const user = await verifyAccessToken(
            refreshedSession.access_token
        );

        console.log("Refreshed access token verified.");
        console.log("Authenticated user:", user.email);

        console.log("Session refresh test completed.");

    } catch (error) {
        if (error instanceof Error) {
            console.error("Session refresh test failed:", error.message);
        } else {
            console.error("An unexpected error occurred.");
        }
    } finally {
        if (loggedIn) {
            await logout();
            console.log("Logout successful.");
        }
    }
}

testRefreshSession();