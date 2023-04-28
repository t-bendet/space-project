import { useState } from "react";
import DESTINATIONS from "../mocks/destinations.json";

// TODO color html tags

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
  id: string;
}

const Destinations = (): JSX.Element => {
  const [destination, setDestination] = useState<Destination>(DESTINATIONS[0]);
  const destinationChangeHandler = (id: string) => {
    const currentDestination = DESTINATIONS.find(
      (dest) => dest.id === id
    ) as Destination;
    setDestination(currentDestination);
  };
  const renderButtons = () => {
    return DESTINATIONS.map((dest) => {
      return (
        <button
          aria-selected={dest.id === destination.id}
          className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          key={dest.id}
          onClick={() => destinationChangeHandler(dest.id)}
        >
          {dest.name}
        </button>
      );
    });
  };
  return (
    <main id="main" className="grid-container grid-container--destination">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <img
        src={destination.images.png}
        alt={`the ${destination.name} planet`}
      />
      <div className="tab-list underline-indicators flex">
        {renderButtons()}
      </div>
      <article className="destination-info">
        <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>
        <p>{destination.description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="fs-500 ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="fs-500 ff-serif uppercase">{destination.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destinations;
