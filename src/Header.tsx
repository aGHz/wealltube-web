function Search() {
  return <div className="flex-1"></div>
}

function UserMenu() {
  return <div className="flex-none"></div>
}

function Header() {
  return (
    <nav className="flex justify-stretch content-between px-4 py-2 bg-gradient-radial from-atlantis-400 to-atlantis-500">
      <h1 className="flex-none font-poetsen-one font-bold text-3xl text-atlantis-900">WeAllTube</h1>
      <Search/>
      <UserMenu/>
    </nav>
  );
}

export default Header;
