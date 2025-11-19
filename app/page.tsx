import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
          Enrollment System
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Fast • Simple • Digital Enrollment for Students
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Student Login */}
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow text-center"
          >
            Student Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            className="px-6 py-3 bg-white text-blue-600 rounded-xl border border-blue-600 hover:bg-blue-50 transition shadow text-center"
          >
            Register
          </Link>

          {/* Admin Login */}
          <Link
            href="/admin"
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow text-center"
          >
            Admin Login
          </Link>

        </div>
      </div>
    </main>
  );
}
