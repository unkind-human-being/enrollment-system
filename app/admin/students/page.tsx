export default function StudentManagementPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Student Management</h1>
          <p className="text-gray-600">Manage all registered students</p>
        </div>

        <a
          href="/admin/enrollment"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
        >
          ➕ Add New Student
        </a>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <input
          type="text"
          placeholder="Search student name, ID, or grade..."
          className="w-full px-4 py-3 border rounded-lg shadow focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-gray-700">
              <th className="py-3">Student ID</th>
              <th className="py-3">Full Name</th>
              <th className="py-3">Grade Level</th>
              <th className="py-3">Status</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3">2025-00123</td>
              <td>Juan Dela Cruz</td>
              <td>Grade 7</td>
              <td>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  Enrolled
                </span>
              </td>
              <td className="flex gap-3 py-3">
                <button className="text-blue-600 hover:underline">View</button>
                <button className="text-yellow-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="py-3">2025-00456</td>
              <td>Maria Santos</td>
              <td>Grade 10</td>
              <td>
                <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                  Pending
                </span>
              </td>
              <td className="flex gap-3 py-3">
                <button className="text-blue-600 hover:underline">View</button>
                <button className="text-yellow-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="py-3">2025-00289</td>
              <td>Ahmed Abdullah</td>
              <td>Grade 9</td>
              <td>
                <span className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                  Payment Issue
                </span>
              </td>
              <td className="flex gap-3 py-3">
                <button className="text-blue-600 hover:underline">View</button>
                <button className="text-yellow-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
