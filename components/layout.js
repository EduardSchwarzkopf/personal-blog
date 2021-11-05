import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Sidebar from "./sidebar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Sidebar>
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
      </Sidebar>
      <Footer />
    </>
  );
}
