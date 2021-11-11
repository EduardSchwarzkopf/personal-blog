import ToggleMenuButton from "./ToggleMenuButton";

export default function ListContainerHeader({ label }) {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center flex-none px-3 py-2 bg-white h-14 bg-opacity-90 filter-blur">
        <ToggleMenuButton />
        {label ? <p className="text-sm font-bold">{label}</p> : null}
      </div>
    </>
  );
}
