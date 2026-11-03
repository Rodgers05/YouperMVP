import "dotenv/config";
import { requestPasswordRecovery } from "./auth.js";

const testEmail = process.env.TEST_EMAIL;

async function testPasswordRecovery() {
    try {
        if (!testEmail) {
            throw new Error("TEST_EMAIL must be configured in .env");
        }

        console.log("Starting password recovery test...");

        await requestPasswordRecovery(testEmail);

        console.log("Password recovery request submitted successfully.");
        console.log("Check the registered email for a recovery message.");

    } catch (error) {
        if (error instanceof Error) {
            console.error("Password recovery failed:", error.message);
        } else {
            console.error("An unexpected error occurred.");
        }
    }
}

testPasswordRecovery();