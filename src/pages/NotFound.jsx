import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p className="not-found__message">The page you're looking for doesn't exist.</p>
      <Link to="/">Return to Home</Link>
    </main>
  );
}