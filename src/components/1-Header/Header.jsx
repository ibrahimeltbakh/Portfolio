import { useState, useEffect } from "react";
import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex ">
      <button
        className="menu"
        onClick={() => {
          setShowModal(true);
        }}>
        <i className="fa-solid fa-bars bars"></i>
      </button>
      <div />

      <nav>
        <ul className="flex ">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Uses</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}>
        {theme === "dark" ? (
          <i className="fa-regular fa-moon moon"></i>
        ) : (
          <i className="fa-regular fa-sun sun"></i>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setShowModal(false);
                }}>
                <i className="fa-solid fa-xmark close"></i>
              </button>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
