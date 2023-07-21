export default function Header() {
  return (
    <header>
      <div className="header">
        <img id="logo" src="logocar.png" />
        <a id="homeButton" class="link" href="/">
          Home
        </a>
        <a id="homeButton" class="link" href="/bikes">
          Motorcycles
        </a>
        <input id="search" type="search" placeholder="Search..."></input>
      </div>
    </header>
  );
}
