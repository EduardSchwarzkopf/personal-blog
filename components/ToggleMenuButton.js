import { BurgerMenuIcon, TimesIcon } from "./Icon";
import { useNavigation } from "./Providers/NavigationContext";

export default function ToggleMenuButton() {
  const { isOpen, toggleMenu } = useNavigation();
  return (
    <div className="sticky md:hidden top-0 z-10 flex flex-col px-3 py-2 bg-white bg-opacity-90 filter-blur">
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center p-2 rounded-md cursor-pointer lg:hidden hover:bg-gray-200"
        >
          {isOpen ? <TimesIcon /> : <BurgerMenuIcon />}
        </button>
      </div>
    </div>
  );
}
