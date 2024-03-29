import { useState } from "react";
import CREW from "../mocks/crew.json";
interface CrewMember {
  name: string;
  id: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const Crew = (): JSX.Element => {
  const [member, setMember] = useState<CrewMember>(CREW[0]);
  const memberChangeHandler = (id: string) => {
    const currentMember = CREW.find((mem) => mem.id === id) as CrewMember;
    setMember(currentMember);
  };
  const renderButtons = () => {
    return CREW.map((mem) => {
      return (
        <button
          aria-selected={mem.id === member.id}
          key={mem.id}
          onClick={() => memberChangeHandler(mem.id)}
        >
          <span className="sr-only">{`The ${mem.role}`}</span>
        </button>
      );
    });
  };
  return (
    <main id="main" className="grid-container grid-container--crew">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <div className="dot-indicators flex">{renderButtons()}</div>
      <article className="crew-details">
        <header>
          <h2 className="fs-600 ff-serif uppercase">{member.role}</h2>
          <p className="fs-700 uppercase ff-serif">{member.name}</p>
        </header>
        <p>{member.bio}</p>
      </article>
      <picture>
        <source srcSet={member.images.webp} type="image/webp" />
        <img src={member.images.png} alt={member.name} />
      </picture>
    </main>
  );
};

export default Crew;
