import TitleBar from "./TitleBar";
import ToggleMenuButton from "./ToggleMenuButton";

export default function ListContainerHeader({ label = "" }) {
  return (
    <>
      <TitleBar>
        <ToggleMenuButton />
        {label ? (
          <p className="text-sm ml-3 text-hl-color font-bold">{label}</p>
        ) : null}
      </TitleBar>
    </>
  );
}
