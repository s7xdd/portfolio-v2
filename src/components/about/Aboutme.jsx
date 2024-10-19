import React from "react";
import css3big from "../../images/tools/css3-big.svg";
import expressjsbig from "../../images/tools/express-big.svg";
import figmabig from "../../images/tools/figma-big.svg";
import mongodbbig from "../../images/tools/mongodbbig.svg";
import nodejsbig from "../../images/tools/nodejs-big.svg";
import reactbig from "../../images/tools/reactbig.png";
import tailwindcss from "../../images/tools/tailwindcss.svg";
import typescriptbig from "../../images/tools/typescript-big.svg";
import javascriptbig from "../../images/tools/javascript-big.svg";

const Aboutme = () => {
  return (
    <div className="text-ternary-dark dark:text-primary-light">
      <div className="flex flex-col justify-center font-general-regular font-semibold mt-14 text-center">
        <h1 className="text-4xl">Hello World! 👋</h1>
        <p className="mt-10 container">
          I'm Shamil, a Computer Science grad with a passion for transforming
          lines of code into seamless user experiences. When I'm not busy
          debugging, you can find me dreaming up the next big thing in web
          development. I specialize in making the web a more beautiful place
          with my React wizardry. From sleek front-end designs to smooth user
          interactions, I'm all about creating websites that not only look good
          but feel good to use.
        </p>
      </div>

      <div className="flex flex-col justify-center mt-20 text-3xl">
        <div className="text-center">
          <h1>My Skills</h1>
          <div className="">
            <div className="flex justify-center gap-10">
              <div className="skills">
                <img src={javascriptbig} alt="" />
              </div>
              <div className="skills">
                <img src={typescriptbig} alt="" />
              </div>
              <div className="skills">
                <img src={nodejsbig} alt="" />
              </div>
              <div className="skills">
                <img src={expressjsbig} alt="" />
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div className="skills">
                <img src={mongodbbig} alt="" />
              </div>
              <div className="skills">
                <img src={figmabig} alt="" />
              </div>
              <div className="skills">
                <img src={css3big} alt="" />
              </div>
              <div className="skills">
                <img src={javascriptbig} alt="" />
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div className="skills">
                <img src={reactbig} alt="" />
              </div>
              <div className="skills">
                <img src={typescriptbig} alt="" />
              </div>
              <div className="skills">
                <img src={nodejsbig} alt="" />
              </div>
              <div className="skills">
                <img src={expressjsbig} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
