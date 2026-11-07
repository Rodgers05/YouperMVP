import { supabase } from "./lib/supabase.js";

export async function signUp(email: string, password: string) {
    // Normalize the email address
    const normalizedEmail = email.trim().toLowerCase();

    // Validate required fields
    if (!normalizedEmail || !password) {
        throw new Error("Email and password are required.");
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        throw new Error("Enter a valid email address.");
    }

    // Validate password length
    if (password.length < 6) {
        throw new Error("Password must contain at least 6 characters.");
    }

    // Register the user with Supabase
    const { data, error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
    options: {
        emailRedirectTo: "http://localhost:3000",
    },
});

    // Handle registration errors
    if (error) {
        throw error;
    }

    // Return registration information
    return data;
}