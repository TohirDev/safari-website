"use client";
import { usePathname } from "next/navigation";
import useFetch from "../../app/hooks/useFetch";
import Aside from "./Aside";
import Products from "./Products";

function PageContent() {
  const pathName = usePathname();
  const sliced = pathName.slice(6 + 0);
  const { data, loading } = useFetch(
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
        {loading ? <h1>Loading...</h1> : <Products data={data || undefined} />}
      </section>
    </main>
  );
}

export default PageContent;
