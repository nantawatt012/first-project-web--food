import Brand from "./Brand";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <nav className="h-[8vh] basis bg-orange-600 flex justify-between items-center">
      {/* / */}
      <div className="ml-6">
        <Brand />
      </div>

      <div className="mr-6">
        <HeaderMenu />
      </div>
      {/* / */}
    </nav>
  );
}

export default Header;
