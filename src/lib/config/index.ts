import { throwEnvErrorIfNill } from '@/tools';

export const SUPABASE_TOKEN = throwEnvErrorIfNill(
  'NEXT_PUBLIC_SUPABASE_TOKEN',
  process.env.NEXT_PUBLIC_SUPABASE_TOKEN,
);

export const SUPABASE_URL = throwEnvErrorIfNill(
  'NEXT_PUBLIC_SUPABASE_URL',
  process.env.NEXT_PUBLIC_SUPABASE_URL,
);
