import React from "react";

interface ClientImageProps {
  images: string[];
}

const ClientImage: React.FC<ClientImageProps> = ({ images }) => {
  return (
    <div className="client-photo">
      {images.map((image) => (
        <img key={image} src={image} alt="Client photo" />
      ))}
    </div>
  );
};

export default ClientImage;
