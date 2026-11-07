import { supabase } from "./lib/supabase.js";

// Verify a password recovery token
export async function verifyPasswordRecovery(tokenHash: string) {

    // Validate the recovery token
    if (!tokenHash || !tokenHash.trim()) {
        throw new Error("Recovery token is required.");
    }

    // Verify the recovery token with Supabase
    const { data, error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "recovery"
    });

    // Handle verification errors
    if (error) {
        throw new Error("Invalid or expired recovery token.");
    }

    // Return the authenticated recovery session
    return data;
}