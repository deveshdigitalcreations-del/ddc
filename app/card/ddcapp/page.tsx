import Image from "next/image";

export default function CardPage({ params }: { params: { username: string } }) {
  const user = {
    name: "Rahul Sharma",
    role: "Real Estate Consultant",
    tagline: "Helping families find homes in Bangalore",
    phone: "+919999999999",
    whatsapp: "https://wa.me/919999999999",
  };

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-lg relative">

        {/* HERO */}
        <div className="p-6 text-center">
          <Image
            src="https://i.pravatar.cc/150"
            alt="Profile"
            width={96}
            height={96}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.role}</p>
          <p className="mt-2 text-sm text-gray-500">{user.tagline}</p>
        </div>

        {/* PRIMARY CTA */}
        <div className="px-6">
          <a
            href={user.whatsapp}
            className="block w-full bg-green-500 text-white text-center py-4 rounded-xl font-semibold text-lg"
          >
            WhatsApp Me
          </a>
        </div>

        {/* TRUST */}
        <div className="px-6 mt-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>✔ 10+ years experience</li>
            <li>✔ 200+ happy clients</li>
          </ul>
        </div>

        {/* STICKY ACTION BAR */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
          <a href={`tel:${user.phone}`} className="font-semibold">Call</a>
          <a href={user.whatsapp} className="font-semibold text-green-600">WhatsApp</a>
          <button className="font-semibold">Save</button>
        </div>

      </div>
    </main>
  );
}
