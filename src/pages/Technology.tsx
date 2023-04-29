import { useState } from "react";
import TECH from "../mocks/technology.json";

export interface Technology {
  name: string;
  id: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const Technology = (): JSX.Element => {
  const [tech, setTech] = useState<Technology>(TECH[0]);
  return (
    <main id="main" className="grid-container grid-container--technology">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> space launch 101
      </h1>
      <img src={tech.images.landscape} alt={tech.name} />
      <div className="numbered-indicators flex">
        <button aria-selected="true">
          <span className="sr-only">{tech.name}</span>1
        </button>
        <button aria-selected="false">
          <span className="sr-only">{tech.name}</span>2
        </button>
        <button aria-selected="false">
          <span className="sr-only">{tech.name}</span>3
        </button>
      </div>
      <article className="tech-details">
        <header>
          <h2 className="fs-600 ff-serif uppercase text-accent">
            the terminology…
          </h2>
          <p className="fs-700 uppercase ff-serif">{tech.name}</p>
        </header>
        <p className="text-accent">{tech.description}</p>
      </article>
    </main>
  );
};

export default Technology;
