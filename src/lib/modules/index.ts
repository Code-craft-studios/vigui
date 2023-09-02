import { createClient } from "@supabase/supabase-js"
import { SUPABASE_TOKEN, SUPABASE_URL } from "../config"
import { LocalSupabase } from "../services/supabase"

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_TOKEN)
export const supbaseLocalClient = new LocalSupabase(supabaseClient);


