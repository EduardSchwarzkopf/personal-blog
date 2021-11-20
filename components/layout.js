import Footer from "../components/footer";
import Meta from "../components/meta";
import ListContainer from "./ListContainer";
import Sidebar from "./sidebar";
import { NavigtionProvider } from "./Providers/NavigationContext";
import ToggleMenuButton from "./ToggleMenuButton";

export default function Layout({ children, list, label }) {
  return (
    <>
      <Meta />
      <div className="relative flex w-full h-full min-h-screen">
        <NavigtionProvider>
          <Sidebar />
          <div className="flex w-full h-full min-h-screen">
            <div className="flex flex-1">
              <div className="flex w-full">
                <div className="relative flex flex-col w-full max-h-screen overflow-y-auto bg-white">
                  {list ? (
                    <ListContainer list={list} label={label} />
                  ) : (
                    <div className="sticky top-0 z-10 flex items-center justify-between flex-none px-3 py-2 bg-white h-14 bg-opacity-90 filter-blur">
                      <ToggleMenuButton />
                    </div>
                  )}
                  <main className="w-full max-w-3xl px-4 py-8 pb-10 mx-auto md:px-8">
                    {children}
                  </main>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </NavigtionProvider>
      </div>
    </>
  );
}
