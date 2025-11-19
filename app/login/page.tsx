import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Login Button → goes to Student Dashboard */}
          <Link
            href="/student"
            className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
          >
            Login
          </Link>

          {/* Register Link */}
          <p className="text-center text-gray-600 text-sm mt-3">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </form>

      </div>
    </main>
  );
}
