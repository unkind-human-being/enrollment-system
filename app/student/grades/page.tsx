export default function StudentGradesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-yellow-700 mb-4">My Grades</h1>
      <p className="text-gray-600 mb-6">View your academic performance</p>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3 font-semibold">Subject</th>
              <th className="py-3 font-semibold">1st Grading</th>
              <th className="py-3 font-semibold">2nd Grading</th>
              <th className="py-3 font-semibold">Final Grade</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3">Math</td>
              <td>89</td>
              <td>91</td>
              <td className="font-bold text-green-700">90</td>
            </tr>

            <tr>
              <td className="py-3">Science</td>
              <td>85</td>
              <td>88</td>
              <td className="font-bold text-green-700">87</td>
            </tr>

            <tr>
              <td className="py-3">English</td>
              <td>92</td>
              <td>93</td>
              <td className="font-bold text-green-700">93</td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
  );
}
