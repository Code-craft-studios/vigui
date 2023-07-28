import { getEnvOrThrow } from "@/tools"

export const SUPABASE_TOKEN = getEnvOrThrow('NEXT_PUBLIC_SUPABASE_TOKEN')

export const SUPABASE_URL = getEnvOrThrow('NEXT_PUBLIC_SUPABASE_URL')
