import Link from "next/link";
import NavLinks from "../components/nav-links";
import { IoLogOut } from "react-icons/io5";

export default function SideNav() {
  return (
    <div
      className="flex  flex-col px-3 py-4 md:px-2 "
      style={{
        height: "90%",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        minWidth: "313px",
        width: "313px",
        marginLeft: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 800,
          marginBottom: "30px",
        }}
      >
        ACCOUNT DASHBOARD
      </h1>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            color: "rgb(237, 22, 95)",
          }}
        >
          <IoLogOut size={30} />
          SIGN OUT
        </h2>
      </div>
    </div>
  );
}
