export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Subjects</h1>
          <p className="text-gray-600">Manage school subjects</p>
        </div>

        <button className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition">
          ➕ Add Subject
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 font-semibold">Subject</th>
              <th className="py-3 font-semibold">Description</th>
              <th className="py-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3">Mathematics</td>
              <td>Algebra • Geometry • Trigonometry</td>
              <td className="flex gap-3 py-3">
                <button className="text-yellow-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="py-3">Science</td>
              <td>Biology • Chemistry • Physics</td>
              <td className="flex gap-3 py-3">
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
