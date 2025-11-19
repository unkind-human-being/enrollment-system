export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
        <p className="text-gray-600">Track student payments and balances</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 font-semibold">Student</th>
              <th className="py-3 font-semibold">Grade</th>
              <th className="py-3 font-semibold">Amount Paid</th>
              <th className="py-3 font-semibold">Balance</th>
              <th className="py-3 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3">Juan Dela Cruz</td>
              <td>Grade 7</td>
              <td>₱ 5,000</td>
              <td>₱ 2,000</td>
              <td className="text-yellow-600 font-medium">Partial</td>
            </tr>

            <tr>
              <td className="py-3">Maria Santos</td>
              <td>Grade 10</td>
              <td>₱ 7,000</td>
              <td>₱ 0</td>
              <td className="text-green-600 font-medium">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
  );
}
