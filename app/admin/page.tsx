import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-xl hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-700">Admin Panel</h2>
        </div>

        <nav className="p-4 space-y-2 text-gray-700">
          
          <Link 
            href="/admin" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer font-medium"
          >
            Dashboard
          </Link>

          <Link 
            href="/admin/students" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Students
          </Link>

          <Link 
            href="/admin/teachers" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Teachers
          </Link>

          <Link 
            href="/admin/subjects" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Subjects
          </Link>

          <Link 
            href="/admin/enrollment" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Enrollment
          </Link>

          <Link 
            href="/admin/payments" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Payments
          </Link>

          <Link 
            href="/admin/settings" 
            className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 p-6">

        {/* HEADER */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome, Admin 👋</p>
        </header>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

          <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
            <h3 className="text-gray-600 text-sm">Total Students</h3>
            <p className="text-3xl font-bold mt-2">1,240</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
            <h3 className="text-gray-600 text-sm">Enrolled Today</h3>
            <p className="text-3xl font-bold mt-2">34</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500">
            <h3 className="text-gray-600 text-sm">Pending Approval</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border-l-4 border-red-500">
            <h3 className="text-gray-600 text-sm">Payment Issues</h3>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>

        </div>

        {/* RECENT ENROLLMENTS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Enrollments</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 font-semibold">Student Name</th>
                  <th className="py-3 font-semibold">Grade Level</th>
                  <th className="py-3 font-semibold">Status</th>
                  <th className="py-3 font-semibold">Date</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="py-3">Juan Dela Cruz</td>
                  <td>Grade 7</td>
                  <td><span className="text-green-600 font-semibold">Approved</span></td>
                  <td>Nov 20, 2025</td>
                </tr>

                <tr>
                  <td className="py-3">Maria Santos</td>
                  <td>Grade 10</td>
                  <td><span className="text-yellow-600 font-semibold">Pending</span></td>
                  <td>Nov 20, 2025</td>
                </tr>

                <tr>
                  <td className="py-3">Ahmed Abdullah</td>
                  <td>Grade 9</td>
                  <td><span className="text-red-600 font-semibold">Payment Issue</span></td>
                  <td>Nov 19, 2025</td>
                </tr>

                <tr>
                  <td className="py-3">Sarah Lee</td>
                  <td>Grade 8</td>
                  <td><span className="text-green-600 font-semibold">Approved</span></td>
                  <td>Nov 19, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

    </main>
  );
}
