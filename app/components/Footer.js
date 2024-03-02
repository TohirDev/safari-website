import React from "react";
import SafariLogo from "../assets/safari.png";
import Image from "next/image";
import Container from "./Container";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const liStyle = "flex items-center";
const iconColor = "rgb(237, 22, 95)";
function Footer() {
  return (
    <footer style={{ background: "rgb(245, 245, 245)" }}>
      <Container>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="flex flex-col lg:flex-row py-12"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="lg:w-2/3"
          >
            <Image alt="Safar logo" src={SafariLogo} />
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
            <ul>
              <li className={liStyle}>
                <FaFacebookF color={iconColor} /> Facebook
              </li>
              <li className={liStyle}>
                <FaTwitter color={iconColor} /> Twitter
              </li>
              <li className={liStyle}>
                <FaInstagram color={iconColor} /> Instagram
              </li>
            </ul>
            <ul>
              <li>Subscribe to our newsletter</li>
              <li>
                <input />
                <button>OK</button>
              </li>
            </ul>
          </div>
          <div
            className="lg:w-1/3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <ul>
              <li>497 Evergreen Rd. Roseville, CA 95673</li>
              <li>+44 345 678 903</li>
              <li>adobexd@mail.com</li>
            </ul>
          </div>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
