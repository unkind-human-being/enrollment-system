export default function AdminSettingsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage system and admin preferences</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow space-y-6 max-w-2xl">

        <div>
          <label className="font-medium text-gray-700">School Name</label>
          <input
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Enter school name"
          />
        </div>

        <div>
          <label className="font-medium text-gray-700">School Year</label>
          <input
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="2025-2026"
          />
        </div>

        <div>
          <label className="font-medium text-gray-700">Contact Email</label>
          <input
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="admin@school.edu"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Save Settings
        </button>

      </div>

    </main>
  );
}
