// import React, { useState } from "react";
import "./App.css";
import ClientList from "../src/components/client";
import ClientDetails from "../src/components/clientDetails";
import { clients } from "../src/clientData";
import { Client } from "../src/clientTypes";
import { useState } from "react";

function App() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleSelect = (client: Client) => {
    setSelectedClient(client);
  };

  return (
    <div className="App">
      <div className="container">
        <ClientList clients={clients} onSelect={handleSelect} />
        {selectedClient ? (
          <ClientDetails client={selectedClient} />
        ) : (
          <div className="default-text">
            <span>
              Cliend details will be display here upon select from the card
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
