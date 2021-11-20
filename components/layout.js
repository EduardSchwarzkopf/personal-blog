import Footer from "../components/footer";
import Meta from "../components/meta";
import ListContainer from "./ListContainer";
import Sidebar from "./sidebar";
import { NavigtionProvider } from "./Providers/NavigationContext";
import ToggleMenuButton from "./ToggleMenuButton";

export default function Layout({ children, list, label }) {
  const mainContent = (
    <div className="w-full max-w-3xl px-4 py-8 pb-10 mx-auto md:px-8">
      {children}
    </div>
  );
  return (
    <>
      <Meta />
      <div className="relative flex w-full h-full min-h-screen">
        <NavigtionProvider>
          <Sidebar />
          <div className="flex w-full h-full min-h-screen">
            <div className="flex flex-1">
              <div className="flex w-full">
                {list ? (
                  <>
                    <ListContainer list={list} label={label} />
                    {mainContent}
                  </>
                ) : (
                  <>
                    <div className="relative flex flex-col w-full max-h-screen overflow-y-auto bg-white">
                      <ToggleMenuButton />
                      {mainContent}
                    </div>
                  </>
                )}
              </div>
            </div>
            <Footer />
          </div>
        </NavigtionProvider>
      </div>
    </>
  );
}
