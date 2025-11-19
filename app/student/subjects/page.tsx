export default function StudentSubjectsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-green-700 mb-4">My Subjects</h1>
      <p className="text-gray-600 mb-6">Here are your enrolled subjects</p>

      <div className="bg-white p-6 rounded-xl shadow">
        <ul className="space-y-4 text-gray-700">
          <li className="p-4 rounded-xl border bg-green-50 flex justify-between">
            <span className="font-semibold">Math 101</span>
            <span>Room 204</span>
          </li>

          <li className="p-4 rounded-xl border bg-green-50 flex justify-between">
            <span className="font-semibold">Science 102</span>
            <span>Room 108</span>
          </li>

          <li className="p-4 rounded-xl border bg-green-50 flex justify-between">
            <span className="font-semibold">English 103</span>
            <span>Room 301</span>
          </li>
        </ul>
      </div>

    </main>
  );
}
