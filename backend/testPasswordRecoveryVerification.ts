import {
    verifyPasswordRecovery
} from "./auth.js";

async function testPasswordRecoveryVerification() {
    try {
        console.log("Starting password recovery verification test...");

        // Test with an invalid recovery token
        await verifyPasswordRecovery("invalid-recovery-token");

        console.log("Recovery token verified successfully.");

    } catch (error) {
        if (error instanceof Error) {
            console.log("Recovery verification rejected the token:");
            console.log(error.message);
        } else {
            console.error("An unexpected error occurred.");
        }
    }
}

testPasswordRecoveryVerification();