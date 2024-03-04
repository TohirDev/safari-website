"use client";
import { useState } from "react";
import Card from "./Card";
import Select from "./CustomSelect";

const sortOptions = [
  { label: "Most popular", value: "popular" },
  { label: "Best Selling", value: "best-selling" },
  { label: "Price: High to Low", value: "price-high-to-low" },
  { label: "Price: Low to High", value: "price-low-to-high" },
];

function Products({ data }) {
  const [sortBy, setSortBy] = useState("popular");

  const handleSelectChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = () => {
    if (data)
      switch (sortBy) {
        case "popular":
          return data.sort((a, b) => b.rating.rate - a.rating.rate);
        case "best-selling":
          return data.sort((a, b) => b.rating.count - a.rating.count);
        case "price-high-to-low":
          return data.sort((a, b) => b.price - a.price);
        case "price-low-to-high":
          return data.sort((a, b) => a.price - b.price);
        default:
          return data;
      }
  };

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="w-[195px] h-[37px]">
          <Select
            value={sortBy}
            options={sortOptions}
            onChange={handleSelectChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-[30px] border-t-[1px] border-[rgba(0,0,0,0.5)] pt-10 mt-[2.69rem] ml-[70px]">
        {sortedProducts() ? (
          sortedProducts().map((el) => <Card key={el.id} {...el} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Products;
