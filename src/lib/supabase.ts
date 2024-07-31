import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://skfyjgvonalhnvvtrsuf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrZnlqZ3ZvbmFsaG52dnRyc3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1ODI1MjUsImV4cCI6MjAzNzE1ODUyNX0.Fwycfa72PoZbL7boq12SAMqhyHwZUX3dlrkIsJv3tK4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
