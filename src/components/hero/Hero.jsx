import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          {" "}
          Hi, I 'm <span className="hero__title--name">John Doe</span>
        </h1>{" "}
        <p className="hero__subtitle">
          {" "}
          I 'm a{" "}
          <span className="hero__subtitle--highlight">Frontend Developer</span>
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
