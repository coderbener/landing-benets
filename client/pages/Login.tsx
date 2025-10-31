import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login • BenetS";
  }, []);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold tracking-tight">Login</h1>
      <p className="mt-3 text-muted-foreground max-w-prose">
        This is a placeholder for the authentication page. Connect your Supabase login here or provide your preferred auth flow. The site header and footer are shared across all pages.
      </p>
    </div>
  );
}
