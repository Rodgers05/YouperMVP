import { supabase } from "./lib/supabase.js";

// Verify an access token and retrieve its authenticated user
export async function verifyAccessToken(accessToken: string) {

    // Check whether a token was provided
    if (!accessToken || !accessToken.trim()) {
        throw new Error("Access token is required.");
    }

    // Ask Supabase to verify the token
    const { data, error } = await supabase.auth.getUser(accessToken);

    // Handle invalid or expired tokens
    if (error) {
        throw new Error("Invalid or expired access token.");
    }

    // Return the authenticated user's information
    return data.user;
}