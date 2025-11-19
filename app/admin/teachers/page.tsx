import Link from "next/link";

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
          <p className="text-gray-600">Manage and view all teachers</p>
        </div>

        <button className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition">
          ➕ Add Teacher
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 font-semibold">Name</th>
              <th className="py-3 font-semibold">Subject</th>
              <th className="py-3 font-semibold">Contact</th>
              <th className="py-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3">Mr. Mark Reyes</td>
              <td>Mathematics</td>
              <td>09123456789</td>
              <td className="flex gap-3 py-3">
                <button className="text-blue-600 hover:underline">View</button>
                <button className="text-yellow-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="py-3">Ms. Angela Cruz</td>
              <td>English</td>
              <td>09991234567</td>
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
