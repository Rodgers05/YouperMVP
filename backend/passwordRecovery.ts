import { supabase } from "./lib/supabase.js";

// Request a password recovery email
export async function requestPasswordRecovery(email: string) {

    // Normalize the email address
    const normalizedEmail = email.trim().toLowerCase();

    // Validate the email
    if (!normalizedEmail) {
        throw new Error("Email address is required.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        throw new Error("Enter a valid email address.");
    }

    // Send password recovery email
    const { data, error } = await supabase.auth.resetPasswordForEmail(
        normalizedEmail,
        {
            redirectTo: "http://localhost:3000/reset-password",
        }
    );

    // Handle errors
    if (error) {
        throw error;
    }

    return data;
}