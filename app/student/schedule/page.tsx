export default function StudentSchedulePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-purple-700 mb-4">Class Schedule</h1>
      <p className="text-gray-600 mb-6">Your full weekly class schedule</p>

      <div className="bg-white p-6 rounded-xl shadow">
        <ul className="space-y-4 text-gray-700">
          <li className="p-4 border rounded-xl bg-purple-50">
            <strong>Monday:</strong> Math, Science, PE
          </li>

          <li className="p-4 border rounded-xl bg-purple-50">
            <strong>Tuesday:</strong> English, Math, Filipino
          </li>

          <li className="p-4 border rounded-xl bg-purple-50">
            <strong>Wednesday:</strong> Science, MAPEH
          </li>

          <li className="p-4 border rounded-xl bg-purple-50">
            <strong>Thursday:</strong> Math, TLE
          </li>

          <li className="p-4 border rounded-xl bg-purple-50">
            <strong>Friday:</strong> Social Studies, Values
          </li>
        </ul>
      </div>

    </main>
  );
}
