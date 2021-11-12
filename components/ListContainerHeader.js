import TitleBar from "./TitleBar";
import ToggleMenuButton from "./ToggleMenuButton";

export default function ListContainerHeader({ label }) {
  return (
    <>
      <TitleBar>
        <ToggleMenuButton />
        {label ? <p className="text-sm font-bold">{label}</p> : null}
      </TitleBar>
    </>
  );
}
