import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-5xl font-bold text-cyan-600">404</h1>
      <p className="text-xl text-gray-700 mt-2">Page Not Found</p>
      <p className="text-gray-500 mb-6">The page you are looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
