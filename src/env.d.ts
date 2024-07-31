/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Now you can use the types defined in ImportMetaEnv and ImportMeta
const { SUPABASE_URL, SUPABASE_ANON_KEY } = import.meta.env;

// Use the variables in your code
console.log(SUPABASE_URL);
console.log(SUPABASE_ANON_KEY);
