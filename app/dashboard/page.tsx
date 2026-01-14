export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Leads this week</p>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">CTA Clicks</p>
          <p className="text-2xl font-bold">38</p>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-2">🔥 Hot Leads</h2>
        <ul className="text-sm space-y-2">
          <li>Lead #1 – Score 72</li>
          <li>Lead #2 – Score 55</li>
        </ul>

        <button className="mt-4 w-full bg-black text-white py-3 rounded-xl">
          Generate Follow-up
        </button>
      </div>
    </main>
  );
}
