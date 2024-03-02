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
    xl: "15/2",
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
        <nav>
          <ul>
            {aside_nav.map((el, i) => (
              <li key={i}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Collapse>

      <Collapse title="SIZE">
        <form>
          <div className="flex gap-[5px]">
            <button
              type="button"
              className="w-[fit-content] h-[fit-content] bg-[#ddd] p-1"
            >
              35.5/5
            </button>

            <button
              type="button"
              className="w-[fit-content] h-[fit-content] bg-[#ddd] p-1"
            >
              35.5/5
            </button>

            <button
              type="button"
              className="w-[fit-content] h-[fit-content] bg-[#ddd] p-1"
            >
              35.5/5
            </button>

            <button
              type="button"
              className="w-[fit-content] h-[fit-content] bg-[#ddd] p-1"
            >
              35.5/5
            </button>
          </div>
        </form>
      </Collapse>

      <Collapse title="COLOR">
        <form>
          <div className="grid grid-cols-3 grid-rows-4 py-4">
            {aside_colors.map((el) => (
              <div key={el.id}>
                <input
                  type="color"
                  id="colorPicker"
                  name="colorPicker"
                  defaultValue={el.color}
                  className="w-[32px] h-[32px]"
                />
                <label htmlFor="colorPicker">{el.label}</label>
              </div>
            ))}
          </div>
        </form>
      </Collapse>

      <Collapse title="PRICE">
        <form>
          {aside_price.map((el) => (
            <div key={el.id}>
              <input
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
                defaultChecked={el.isChecked}
              />
              <label htmlFor="myCheckbox">{el.label}</label>
            </div>
          ))}
          <button type="button" className="bg-[#ddd]">
            Apply
          </button>
        </form>
      </Collapse>
    </div>
  );
}

export default Aside;
