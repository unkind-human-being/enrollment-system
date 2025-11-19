export default function AdminEnrollmentForm() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Enrollment Form</h1>
        <p className="text-gray-600">
          Fill out the form to enroll a new student
        </p>
      </div>

      {/* FORM WRAPPER */}
      <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">

        <form className="space-y-8">

          {/* STUDENT INFO */}
          <section>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Student Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="text-sm font-medium">First Name</label>
                <input className="w-full mt-1 p-3 border rounded-lg" placeholder="Juan" />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input className="w-full mt-1 p-3 border rounded-lg" placeholder="Dela Cruz" />
              </div>

              <div>
                <label className="text-sm font-medium">Birthdate</label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border rounded-lg"
                  placeholder="student@email.com"
                />
              </div>

            </div>
          </section>

          {/* GUARDIAN INFO */}
          <section>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Parent / Guardian Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Guardian Name</label>
                <input className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="text-sm font-medium">Contact Number</label>
                <input className="w-full mt-1 p-3 border rounded-lg" />
              </div>
            </div>
          </section>

          {/* ACADEMIC INFO */}
          <section>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Academic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Grade Level</label>
                <select className="w-full mt-1 p-3 border rounded-lg">
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Section</label>
                <input className="w-full mt-1 p-3 border rounded-lg" placeholder="Section A" />
              </div>
            </div>
          </section>

          {/* ADDRESS */}
          <section>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Address</h2>
            <textarea
              rows={3}
              className="w-full p-3 border rounded-lg"
              placeholder="Complete home address..."
            />
          </section>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Enrollment
          </button>

        </form>
      </div>
    </main>
  );
}
