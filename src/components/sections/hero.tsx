import React from "react";
import artibleImg from "../../images/article1.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <article>
      <div className="header__container">
        <div className="header__container-description">
          <span>main title</span>
          <span>Related Posts</span>
          <ul>
            <li>Tourism</li>
            <li>Photograpy</li>
            <li>Travel News</li>
          </ul>
        </div>
        <header className="header__container-title">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            ducimus facilis libero nisi.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            praesentium placeat magni nam reprehenderit, alias enim dolorum
            delectus reiciendis totam labore, voluptate officia accusamus
            doloribus unde iste repellat. Molestias, eos.
          </p>
        </header>
      </div>
      <div className="slider__container">
        <Image src={artibleImg} alt="arible image" />
      </div>
    </article>
  );
};

export default Hero;
