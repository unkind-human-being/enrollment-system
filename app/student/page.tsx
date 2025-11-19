import Link from "next/link";

export default function StudentDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* TOP HEADER */}
      <header className="bg-white p-6 rounded-xl shadow mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Student Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back, <span className="font-semibold">Student Name</span> 👋
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* QUICK ACTIONS */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <Link href="/student/enroll" className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center hover:bg-blue-100 cursor-pointer transition">
                <p className="font-semibold text-blue-700">Enroll Now</p>
              </Link>

              <Link href="/student/subjects" className="p-4 bg-green-50 border border-green-200 rounded-xl text-center hover:bg-green-100 cursor-pointer transition">
                <p className="font-semibold text-green-700">My Subjects</p>
              </Link>

              <Link href="/student/grades" className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-center hover:bg-yellow-100 cursor-pointer transition">
                <p className="font-semibold text-yellow-700">My Grades</p>
              </Link>

              <Link href="/student/schedule" className="p-4 bg-purple-50 border border-purple-200 rounded-xl text-center hover:bg-purple-100 cursor-pointer transition">
                <p className="font-semibold text-purple-700">Schedule</p>
              </Link>

              <Link href="/student/payments" className="p-4 bg-red-50 border border-red-200 rounded-xl text-center hover:bg-red-100 cursor-pointer transition">
                <p className="font-semibold text-red-700">Payments</p>
              </Link>

              <Link href="/student/profile" className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center hover:bg-gray-100 cursor-pointer transition">
                <p className="font-semibold text-gray-700">Profile</p>
              </Link>

            </div>
          </section>

          {/* SCHEDULE */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Today’s Class Schedule
            </h2>

            <ul className="space-y-4">
              <li className="p-4 border rounded-xl bg-gray-50 flex justify-between">
                <span className="font-semibold">Math 101</span>
                <span className="text-gray-600">8:00 AM - 9:30 AM</span>
              </li>

              <li className="p-4 border rounded-xl bg-gray-50 flex justify-between">
                <span className="font-semibold">Science 102</span>
                <span className="text-gray-600">10:00 AM - 11:30 AM</span>
              </li>

              <li className="p-4 border rounded-xl bg-gray-50 flex justify-between">
                <span className="font-semibold">PE</span>
                <span className="text-gray-600">1:00 PM - 2:00 PM</span>
              </li>
            </ul>
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* PROFILE CARD */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Profile Summary
            </h2>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />

              <h3 className="font-bold text-lg">Student Name</h3>
              <p className="text-gray-600">Grade 10 - Section A</p>

              <div className="mt-4 text-left text-sm text-gray-700 space-y-1">
                <p><strong>ID:</strong> 2025-00123</p>
                <p><strong>Email:</strong> student@email.com</p>
                <p><strong>Status:</strong> Enrolled</p>
              </div>
            </div>
          </section>

          {/* ANNOUNCEMENTS */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Announcements
            </h2>

            <ul className="space-y-3">
              <li className="p-3 border-l-4 border-blue-600 bg-blue-50 rounded">
                Enrollment for 2nd Semester is now open.
              </li>

              <li className="p-3 border-l-4 border-green-600 bg-green-50 rounded">
                Parent-Teacher Meeting this Friday.
              </li>

              <li className="p-3 border-l-4 border-yellow-600 bg-yellow-50 rounded">
                School will be closed on November 30 (Holiday).
              </li>
            </ul>
          </section>

        </div>

      </div>
    </main>
  );
}
