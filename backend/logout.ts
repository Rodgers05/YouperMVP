import { supabase } from "./lib/supabase.js";

export async function logout() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		throw error;
	}
}
