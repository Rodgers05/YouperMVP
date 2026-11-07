import "dotenv/config";

import {
    login,
    logout,
    verifyAccessToken
} from "./auth.js";

const testEmail = process.env.TEST_EMAIL;
const testPassword = process.env.TEST_PASSWORD;

async function testVerifyToken() {
    let loggedIn = false;

    try {
        if (!testEmail || !testPassword) {
            throw new Error(
                "TEST_EMAIL and TEST_PASSWORD must be configured in .env"
            );
        }

        console.log("Starting access token verification test...");

        // Step 1: Log in to obtain a valid access token
        const loginResult = await login(testEmail, testPassword);
        loggedIn = true;

        console.log("Login successful.");

        const accessToken = loginResult.session?.access_token;

        if (!accessToken) {
            throw new Error("No access token was returned.");
        }

        // Step 2: Verify the valid access token
        const user = await verifyAccessToken(accessToken);

        console.log("Valid token accepted.");
        console.log("Authenticated user:", user.email);
        console.log("User ID:", user.id);

        // Step 3: Test an invalid access token
        let invalidTokenRejected = false;

        try {
            await verifyAccessToken("invalid.access.token");
        } catch {
            invalidTokenRejected = true;
        }

        if (!invalidTokenRejected) {
            throw new Error("An invalid token was incorrectly accepted.");
        }

        console.log("Invalid token rejected successfully.");

        console.log("Access token verification test completed.");

    } catch (error) {
        if (error instanceof Error) {
            console.error("Token verification test failed:", error.message);
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

testVerifyToken();