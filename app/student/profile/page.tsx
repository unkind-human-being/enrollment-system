export default function StudentProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Profile</h1>
      <p className="text-gray-600 mb-6">View and update your student information</p>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />

          <h2 className="text-xl font-bold">Student Name</h2>
          <p className="text-gray-600 mb-4">Grade 10 - Section A</p>
        </div>

        <div className="space-y-4">
          <p><strong>Email:</strong> student@email.com</p>
          <p><strong>Student ID:</strong> 2025-00123</p>
          <p><strong>Status:</strong> Enrolled</p>
        </div>
      </div>

    </main>
  );
}
