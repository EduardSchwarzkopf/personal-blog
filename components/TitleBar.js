export default function TitleBar({ children }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between flex-none px-3 py-2 bg-white h-14 bg-opacity-90 filter-blur">
      {children}
    </div>
  );
}
