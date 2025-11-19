export default function StudentEnrollPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-blue-700 mb-4">Enrollment Form</h1>
      <p className="text-gray-600 mb-6">Fill up your information to enroll</p>

      <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">
        <form className="space-y-6">

          <div>
            <label className="font-medium text-gray-700">Grade Level</label>
            <select className="w-full mt-2 p-3 border rounded-lg">
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">Section Preference</label>
            <input className="w-full p-3 border rounded-lg mt-2" placeholder="Optional" />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Submit Enrollment
          </button>

        </form>
      </div>

    </main>
  );
}
