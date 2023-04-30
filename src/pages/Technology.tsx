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
  const [technology, setTechnology] = useState<Technology>(TECH[0]);
  const technologyChangeHandler = (id: string) => {
    const currentTech = TECH.find((t) => t.id === id) as Technology;
    setTechnology(currentTech);
  };
  const renderButtons = () => {
    return TECH.map((tech, i) => {
      return (
        <button
          aria-selected={tech.id === technology.id}
          key={tech.id}
          onClick={() => technologyChangeHandler(tech.id)}
          className="ff-serif"
        >
          <span className="sr-only">{`The ${tech.name}`}</span>
          {i + 1}
        </button>
      );
    });
  };
  return (
    <main id="main" className="grid-container grid-container--technology">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> space launch 101
      </h1>
      {/* TODO images type change on large screen */}
      <img src={technology.images.portrait} alt={technology.name} />
      <div className="numbered-indicators flex">{renderButtons()}</div>
      <article className="tech-details">
        <header>
          <h2 className="fs-600 ff-serif uppercase text-accent">
            the terminology…
          </h2>
          <p className="fs-700 uppercase ff-serif">{technology.name}</p>
        </header>
        <p className="text-accent">{technology.description}</p>
      </article>
    </main>
  );
};

export default Technology;
