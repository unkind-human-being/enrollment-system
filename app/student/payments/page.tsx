export default function StudentPaymentsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-red-700 mb-4">Payments</h1>
      <p className="text-gray-600 mb-6">Your payment records</p>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="space-y-4">

          <div className="p-4 border rounded-xl bg-red-50">
            <p><strong>Total Tuition:</strong> ₱ 15,000</p>
            <p><strong>Paid:</strong> ₱ 10,000</p>
            <p><strong>Balance:</strong> ₱ 5,000</p>
          </div>

          <div className="p-4 border rounded-xl bg-gray-50">
            <strong>Recent Payments:</strong>
            <ul className="mt-2 text-gray-700">
              <li>₱ 5,000 — Jan 15, 2025</li>
              <li>₱ 5,000 — Feb 15, 2025</li>
            </ul>
          </div>

        </div>
      </div>

    </main>
  );
}
