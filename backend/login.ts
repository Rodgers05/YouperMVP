import { supabase } from "./lib/supabase.js";

export async function login(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();

    // Check that both fields have been provided
    if (!normalizedEmail || !password) {
        throw new Error("Email and password are required.");
    }

    // Validate the email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        throw new Error("Enter a valid email address.");
    }

    // Authenticate the user with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
    });

    // Handle authentication errors
    if (error) {
        throw error;
    }

    // Return the authentication result
    return data;
}