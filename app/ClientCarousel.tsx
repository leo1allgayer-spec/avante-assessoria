type Client = { name: string; logo?: string };

export function ClientCarousel({ clients }: { clients: Client[] }) {
  const repeatedClients = [...clients, ...clients];

  return (
    <div className="showcase-carousel" aria-label="Clientes que já confiaram na Avante">
      <div className="showcase-track">
        <div className="showcase-marquee">
          {repeatedClients.map((client, index) => (
            <div
              className={`client-slide ${client.logo ? "has-logo" : ""}`}
              key={`${client.name}-${index}`}
              aria-hidden={index >= clients.length}
            >
              {client.logo ? <img src={client.logo} alt={index < clients.length ? `Perfil do cliente ${client.name}` : ""} /> : <span>{client.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
