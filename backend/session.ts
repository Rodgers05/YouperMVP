import { supabase } from "./lib/supabase.js";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

// Retrieve the current authentication session
export async function getCurrentSession(): Promise<Session | null> {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        throw error;
    }

    return data.session;
}

// Retrieve the currently authenticated user
export async function getCurrentUser() {
    const session = await getCurrentSession();

    if (!session) {
        return null;
    }

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        throw error;
    }

    return data.user;
}

// Monitor authentication state changes
export function monitorAuthState(
    callback: (event: AuthChangeEvent, session: Session | null) => void
) {
    const { data } = supabase.auth.onAuthStateChange(callback);

    return () => {
        data.subscription.unsubscribe();
    };
}