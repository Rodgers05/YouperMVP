import { supabase } from "./lib/supabase.js";

// Refresh the current authentication session
export async function refreshSession() {

    const { data, error } = await supabase.auth.refreshSession();

    // Handle refresh errors
    if (error) {
        throw error;
    }

    // Ensure a session was returned
    if (!data.session) {
        throw new Error("Session refresh failed. No active session found.");
    }

    // Return the refreshed session
    return data.session;
}