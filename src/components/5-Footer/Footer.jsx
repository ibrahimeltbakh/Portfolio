import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer inside-container">
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
      <div className="rights">
        &copy; 2024 Spencer Sharp. All rights reserved.
      </div>
    </footer>
  );
}
