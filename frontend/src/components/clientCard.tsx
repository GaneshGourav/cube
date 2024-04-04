import React from "react";
import { Client } from "../clientTypes";

interface ClientCardProps {
  client: Client;
  isSelected: boolean;
  onClick: () => void;
}

const ClientCard: React.FC<ClientCardProps> = ({
  client,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`client-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{client.name}</h3>
      <p>{client.designation}</p>
    </div>
  );
};

export default ClientCard;
