import Image from "next/image";
import React from "react";
import SafariLogo from "../assets/safari.png";
import Container from "./Container";
import { IoMdPerson } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
const liStyle =
  "mr-12 hover:text-[#ed165f] transition ease-in-out cursor-pointer";
const iconStyle = "ml-7";
const size = 30;
function Navbar() {
  return (
    <nav className="bg[rgb(245, 245, 245)] py-6">
      <Container style="flex items-center justify-between ">
        <ul className="flex items-center font-[600]">
          <li className={liStyle}>Home</li>
          <li className={liStyle}>Clothes</li>
          <li className={liStyle}>Shoes</li>
          <li className={liStyle}>Accessories</li>
        </ul>
        <Image alt="safari logo" src={SafariLogo} />
        <ul className="flex items-center">
          <li className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              style={{
                borderBottom: "1px solid silver",
                "::placeholder": {
                  color: "red",
                },
                marginLeft: "30px",
              }}
            />
            <IoIosSearch className={iconStyle} size={size} />
          </li>
          <li>
            <IoMdPerson className={iconStyle} size={size} />
          </li>
          <li>
            <RiShoppingCartFill className={iconStyle} size={size} />
          </li>
          <li>
            <FaHeart className={iconStyle} size={size} />
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
