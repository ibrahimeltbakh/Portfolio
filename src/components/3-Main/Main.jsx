import "./main.css";
import { useState } from "react";
import { myProjects } from "./myprojects";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [active, setactive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategoryName) => {
    const newArr = myProjects.filter((project) => {
      const innerarr = project.category.find((category) => {
        return category === buttonCategoryName;
      });
      return innerarr === buttonCategoryName;
    });
    setArr(newArr);
  };
  return (
    <div className="main flex inside-container">
      <section className="left-section flex">
        <button
          onClick={() => {
            setactive("all");
            setArr(myProjects);
          }}
          className={active === "all" ? "active" : null}>
          All Projects
        </button>
        <button
          onClick={() => {
            setactive("css");
            handleClick("css");
          }}
          className={active === "css" ? "active" : null}>
          Html&Css
        </button>
        <button
          onClick={() => {
            setactive("js");
            handleClick("js");
          }}
          className={active === "js" ? "active" : null}>
          JavaScript
        </button>
        <button
          onClick={() => {
            setactive("react");
            handleClick("react");
          }}
          className={active === "react" ? "active" : null}>
          React & MUI
        </button>
        <button
          onClick={() => {
            setactive("node");
            handleClick("node");
          }}
          className={active === "vode" ? "active" : null}>
          Node&Express
        </button>
      </section>
      <section className="right-section ">
        <AnimatePresence>
          {arr.map((project) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={project.imgPath}
                className="card">
                <div className="image">
                  <img src={project.imgPath} alt="project" />
                </div>
                <div className="data">
                  <h2>{project.projectName}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit
                  </p>
                </div>
                <div className="content flex">
                  <div className="links">
                    <a href="#">
                      <i className="fa-solid fa-link link"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-github github"></i>
                    </a>
                  </div>
                  <div className="more">
                    <a href="#">
                      more
                      <i className="fa-solid fa-arrow-right arrow"></i>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </div>
  );
}
