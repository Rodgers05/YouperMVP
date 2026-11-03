import { supabase } from "./lib/supabase.js";

// Update the authenticated user's password
export async function updatePassword(newPassword: string) {

    // Validate the new password
    if (!newPassword || !newPassword.trim()) {
        throw new Error("New password is required.");
    }

    if (newPassword.length < 6) {
        throw new Error("Password must contain at least 6 characters.");
    }

    // Update the user's password through Supabase
    const { data, error } = await supabase.auth.updateUser({
        password: newPassword
    });

    // Handle update errors
    if (error) {
        throw error;
    }

    return data.user;
}