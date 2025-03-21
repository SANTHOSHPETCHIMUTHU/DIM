const SUPABASE_URL = "https://eppxrgnnkrrlzoihgvhq.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true },
});

document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async function () {
      await supabase.auth.signOut();
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  }
});
