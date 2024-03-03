import SideNav from "../components/SideBar";
import Container from "../components/Container";
export default function Layout({ children }) {
  return (
    <Container>
      <div
        className="flex  flex-col md:flex-row md:overflow-hidden mt-12"
        style={{
          height: "80vh",
        }}
      >
        <div className="w-full md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow md:overflow-y-auto pl-[90px]">
          {children}
        </div>
      </div>
    </Container>
  );
}
