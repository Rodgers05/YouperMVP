import "dotenv/config";

console.log("Starting test...");
console.log("Supabase URL loaded:", !!process.env.SUPABASE_URL);
console.log("Supabase key loaded:", !!process.env.SUPABASE_ANON_KEY);

import { supabase } from "./lib/supabase.js";

async function testConnection() {
    try {
        console.log("Testing Supabase client...");

        const { data, error } = await supabase.auth.getSession();

        if (error) {
            console.error("Test failed:", error.message);
            return;
        }

        console.log("Supabase client initialized successfully.");
        console.log(
            "Current session:",
            data.session ? "Active" : "No active session"
        );
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

testConnection();