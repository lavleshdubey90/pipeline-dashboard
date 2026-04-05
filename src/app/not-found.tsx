import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="max-w-md w-full bg-base-100 rounded-box border border-base-300 p-8 text-center shadow-lg">
        {/* Icon */}
        <div className="w-20 h-20 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="size-10 text-warning" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-semibold text-base-content/80 mb-4">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-base-content/60 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary gap-2">
            <Home className="size-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
