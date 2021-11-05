import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Sidebar>
        <div className="min-h-screen">
        <Header />
          <main>{children}</main>
        </div>
      </Sidebar>
      <Footer />
    </>
  );
}
