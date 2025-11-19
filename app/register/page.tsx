import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in the form to register
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full mt-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Register Button → Go back to Login */}
          <Link
            href="/login"
            className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
          >
            Register
          </Link>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-3">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </form>

      </div>
    </main>
  );
}
