import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zuhldievjgimwwdcmgri.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1aGxkaWV2amdpbXd3ZGNtZ3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MzY4NzgsImV4cCI6MjAyOTAxMjg3OH0.mnAPZOAQaVuBRVW4tGZj8fh-7AfYfeL9PRJfTJstDpo";
export const supabase = createClient(supabaseUrl, supabaseKey);
