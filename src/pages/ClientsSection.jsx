import React from "react";

// --- ORIGINAL CLIENT LIST ---
const clients = [
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
];

// Duplicate list 3 times for seamless infinite scroll
const visibleClients = [
  ...clients.map(c => ({ ...c, key: `a-${c.id}` })),
  ...clients.map(c => ({ ...c, key: `b-${c.id}` })),
  ...clients.map(c => ({ ...c, key: `c-${c.id}` })),
];

// Client Box Component (Logo Box)
const ClientBox = ({ name }) => {
  return (
    <div
      className="
        flex-shrink-0
        w-[250px] lg:w-[300px] xl:w-[350px]
        flex items-center justify-center 
        bg-white 
        p-8 
        h-32 
        rounded-xl 
        shadow-md 
        transition duration-300 ease-in-out 
        hover:shadow-xl
        hover:scale-[1.03]
        cursor-pointer
        mr-6
      "
    >
      <p className="text-gray-500 font-semibold italic">{name}</p>
    </div>
  );
};

// MAIN CLIENTS SECTION
const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-slate-100 overflow-hidden">
      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="
            flex items-center
            animate-[scroll_20s_linear_infinite]
          "
        >
          {visibleClients.map(client => (
            <ClientBox key={client.key} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
