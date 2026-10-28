import menu from "./nav";
import "./head.css";
function Header() {
  return (
    <>
      <header className="header">
        <span>Recueil</span>

        <nav>
          <ul className="list-item">
            {menu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="btn-header">Subscribe</button>
      </header>
    </>
  );
}
export default Header;
