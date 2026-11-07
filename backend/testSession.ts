import "dotenv/config";

import {
    login,
    logout,
    getCurrentSession,
    getCurrentUser,
    monitorAuthState
} from "./auth.js";

const testEmail = process.env.TEST_EMAIL;
const testPassword = process.env.TEST_PASSWORD;

async function testSession() {
    let stopMonitoring: (() => void) | undefined;

    try {
        if (!testEmail || !testPassword) {
            throw new Error(
                "TEST_EMAIL and TEST_PASSWORD must be configured in .env"
            );
        }

        console.log("Starting session management test...");

        // Monitor authentication events
        stopMonitoring = monitorAuthState((event, session) => {
            console.log(
                `Authentication event: ${event}; Session active: ${Boolean(session)}`
            );
        });

        // Log in to create a session
        await login(testEmail, testPassword);
        console.log("Login successful.");

        // Retrieve the current session
        const session = await getCurrentSession();

        if (!session) {
            throw new Error("No active session was found.");
        }

        console.log("Session retrieved successfully.");
        console.log("Session user:", session.user.email);
        console.log("Access token available:", Boolean(session.access_token));

        // Retrieve the authenticated user
        const user = await getCurrentUser();

        if (!user) {
            throw new Error("No authenticated user was found.");
        }

        console.log("Current user retrieved successfully.");
        console.log("User ID:", user.id);
        console.log("User email:", user.email);

        // Log out
        await logout();
        console.log("Logout successful.");

        console.log("Session management test completed.");

    } catch (error) {
        if (error instanceof Error) {
            console.error("Session test failed:", error.message);
        } else {
            console.error("An unexpected error occurred.");
        }
    } finally {
        stopMonitoring?.();
    }
}

testSession();