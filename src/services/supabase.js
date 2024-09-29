import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://etfzebnjatfdjzmcsfvj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0ZnplYm5qYXRmZGp6bWNzZnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyOTA0MTgsImV4cCI6MjA0MTg2NjQxOH0.HY-6lAhu689U7AehJujDPx0SFDDUchtG4VEmqAPJFJw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
