import React, { useState } from "react";
import ClientCard from "./clientCard";
import { Client } from "../clientTypes";

interface ClientListProps {
  clients: Client[];
  onSelect: (client: Client) => void;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onSelect }) => {
  const [selectedClientId, setSelectedClientId] = useState(0);

  const isSelected = (client: Client): boolean => {
    return selectedClientId === client.id;
  };

  const handleSelect = (client: Client): void => {
    setSelectedClientId(client.id);
    onSelect(client);
  };

  return (
    <div className="client-list">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
          isSelected={isSelected(client)}
          onClick={() => handleSelect(client)}
        />
      ))}
    </div>
  );
};

export default ClientList;
