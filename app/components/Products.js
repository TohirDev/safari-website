import Card from "./Card";

function Products({ data }) {
  return (
    <div className="flex flex-wrap gap-[30px]">
      {data.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
}

export default Products;
