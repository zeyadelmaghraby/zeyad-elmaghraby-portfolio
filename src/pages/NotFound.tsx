import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
