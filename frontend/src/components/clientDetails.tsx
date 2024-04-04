import React, { useState, useEffect } from "react";
import { Client } from "../clientTypes";

import ClientImage from "./clientImage";
import axios from "axios";

interface ClientDetailsProps {
  client: Client;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }) => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    const response = await axios(
      `https://api.unsplash.com/photos/random/?count=9&client_id=-I9pHn59y0Ys-mE9mrIc2NFoyJdrBfq1l5ItQdbrcbg`
    );
    setImages(response.data.map((item: any) => item.urls.small));
  };

  useEffect(() => {
    fetchImages();

    const interval = setInterval(() => {
      fetchImages();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="client-details-container">
      <div className="client-details">
        <h2 className="client-name">{client.name} </h2>
        <p className="client-title"> {client.designation}</p>
        <p className="client-title"> {client.description_about_designation}</p>
        <p className="client-address">{client.address}</p>
      </div>
      <ClientImage images={images} />
    </div>
  );
};

export default ClientDetails;
