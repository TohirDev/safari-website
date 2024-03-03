import Card from "./Card";

function Products({ data }) {
  return (
    <div className="flex flex-wrap gap-[30px] border-t-[1px] border-[rgba(0,0,0,0.5)] pt-10 mt-[2.69rem] ml-[70px]">
      {data && data.map((el) => <Card key={el.id} {...el} />)}
    </div>
  );
}

export default Products;
