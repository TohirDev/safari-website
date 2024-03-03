"use client";
import Aside from "./Aside";
import Products from "./Products";
import useFetch from "../../app/hooks/useFetch";
import { usePathname } from "next/navigation";

function PageContent() {
  const pathName = usePathname();
  const sliced = pathName.slice(6 + 0);
  const { data } = useFetch(
    `https://fakestoreapi.com/products/category/${
      sliced === "/shoes"
        ? "women's clothing"
        : sliced === "/clothes"
        ? "men's clothing"
        : sliced === "/accessories"
        ? "jewelery"
        : "products"
    }`
  );

  return (
    <main className="grid grid-areas-slim md:grid-areas-wide md:grid-cols-layout md:grid-rows-layout h-[100%]">
      <div className="grid-in-header flex justify-start">
        <h1 className="font-muli text-[30px] text-black font-extrabold leading-[18px] tracking-[3px] mt-5">
          SHOES
        </h1>
      </div>
      <aside className="grid-in-aside">
        <Aside />
      </aside>
      <section className="grid-in-main">
        <Products data={data || undefined} />
      </section>
    </main>
  );
}

export default PageContent;

// const data = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 3,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
// ];
