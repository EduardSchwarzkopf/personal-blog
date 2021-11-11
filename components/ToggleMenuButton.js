import { BurgerMenuIcon, TimesIcon } from "./Icon";
import { useNavigation } from "./Providers/NavigationContext";

export default function ToggleMenuButton() {
  const { isOpen, toggleMenu } = useNavigation();
  return (
    <button
      onClick={toggleMenu}
      className="flex items-center justify-center p-2 rounded-md cursor-pointer lg:hidden hover:bg-gray-200"
    >
      {isOpen ? <TimesIcon /> : <BurgerMenuIcon />}
    </button>
  );
}
