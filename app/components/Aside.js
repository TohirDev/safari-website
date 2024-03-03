"use client";

import Collapse from "./Collapse.js";

const aside_nav = [
  "All",
  "Booties",
  "Flats",
  "Boots",
  "Sandals",
  "Sneakers",
  "Slides & Slippers",
  "Heels",
  "Wedges",
  "Mules",
  "Party shoes",
  "Vegan shoes",
  "Oxfords",
];

export const aside_size = [
  {
    id: 1,
    size: "15/2",
  },
  {
    id: 2,
    size: "15/2",
  },
  {
    id: 3,
    size: "15/2",
  },
  {
    id: 4,
    size: "15/2",
  },
  {
    id: 5,
    size: "15/2",
  },
  {
    id: 6,
    size: "15/2",
  },
  {
    id: 7,
    size: "15/2",
  },
  {
    id: 8,
    size: "15/2",
  },
  {
    id: 9,
    size: "15/2",
  },
  {
    id: 10,
    size: "15/2",
  },
  {
    id: 11,
    size: "15/2",
  },
  {
    id: 12,
    size: "15/2",
  },
];

const aside_colors = [
  {
    id: 1,
    label: "Beige",
    color: "#F3ECDB",
  },
  {
    id: 2,
    label: "Blue",
    color: "#465BA3",
  },
  {
    id: 3,
    label: "Black",
    color: "#000000",
  },
  {
    id: 4,
    label: "Orange",
    color: "#F07B4E",
  },
  {
    id: 5,
    label: "Green",
    color: "#41854D",
  },
  {
    id: 6,
    label: "Beige",
    color: "#F3ECDB",
  },
  {
    id: 7,
    label: "Blue",
    color: "#465BA3",
  },
  {
    id: 8,
    label: "Black",
    color: "#000000",
  },
  {
    id: 9,
    label: "Orange",
    color: "#F07B4E",
  },
  {
    id: 10,
    label: "Green",
    color: "#41854D",
  },
  {
    id: 11,
    label: "Green",
    color: "#41854D",
  },
  {
    id: 12,
    label: "Green",
    color: "#41854D",
  },
];

const aside_price = [
  {
    id: 1,
    isChecked: false,
    label: "₦0 - ₦10,000",
  },
  {
    id: 2,
    isChecked: false,
    label: "₦10,000 - ₦20,000",
  },
  {
    id: 3,
    isChecked: false,
    label: "₦20,000 - ₦50,000",
  },
  {
    id: 4,
    isChecked: false,
    label: "₦50,000 - ₦100,000",
  },
  {
    id: 5,
    isChecked: false,
    label: "₦100,000 - ₦200,000",
  },
];

function Aside({}) {
  return (
    <div className="h-[1300px]">
      <Collapse title="CATEGORY">
        <nav className="py-4">
          <ul>
            {aside_nav.map((el, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="font-muli text-[16px] font-semibold text-[#ED165F]"
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Collapse>

      <Collapse title="SIZE">
        <form>
          <div className="py-4  grid grid-cols-3 grid-rows-4 gap-y-3 gap-x-1">
            {aside_size.map((el) => (
              <button
                key={el.id}
                type="button"
                className="w-[75px] h-[35px] border border-color-[rgba(0,0,0,0.5)] transition duration-300 ease-in-out transform hover:bg-[#ED165F]"
              >
                {el.size}
              </button>
            ))}
          </div>
        </form>
      </Collapse>

      <Collapse title="COLOR">
        <form>
          <div className="grid grid-cols-3 grid-rows-4 py-4 gap-2">
            {aside_colors.map((el) => (
              <div
                key={el.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="color"
                  id="colorPicker"
                  name="colorPicker"
                  disabled
                  defaultValue={el.color}
                  className="w-[32px] h-[32px] outline-none"
                />
                <label
                  htmlFor="colorPicker"
                  className="cursor-pointer font-muli text-[14px] font-normal text-[#000]"
                >
                  {el.label}
                </label>

                {/* <div
                  className={`w-[32px] h-[32px] outline-none bg-[${el.color}]`}
                ></div>
                <p>{el.label}</p>
                */}
              </div>
            ))}
          </div>
        </form>
      </Collapse>

      <Collapse title="PRICE">
        <form className="py-4">
          {aside_price.map((el) => (
            <div key={el.id} className="flex items-center gap-2 my-4">
              <input
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
                defaultChecked={el.isChecked}
                className="w-[27px] h-[27px] cursor-pointer"
              />
              <label htmlFor="myCheckbox" className="text-[14px] font-semibold">
                {el.label}
              </label>
            </div>
          ))}
          <button type="button" className="bg-[#ddd] my-4">
            Apply
          </button>
        </form>
      </Collapse>
    </div>
  );
}

export default Aside;
