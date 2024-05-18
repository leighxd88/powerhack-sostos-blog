import { createClient } from "@supabase/supabase-js";
const anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaHJyaWpkZ3h3anJnYmdtZXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMzA5MDUsImV4cCI6MjAzMTYwNjkwNX0.pNMXXC8wSoMynRQuSokYvHR64tyZC5oPm2_DQkGZ7EQ'
export const supabase = createClient('https://chhrrijdgxwjrgbgmetu.supabase.co', `${anon_key}`);
