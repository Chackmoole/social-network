import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://spng.subpng.com/20190528/qss/kisspng-portable-network-graphics-torrent-file-bittorrent-5cecc32d459df6.5596138615590203332852.jpg"
        alt=""
      />
      <ul>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Наши предложения</a>
        </li>
        <li>
          <a href="#">Как добраться</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
