function Card({ id, title, price, description, category, image, rating }) {
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center">
      <div className="w-[150px] min-h-[250px] text-center">image</div>
      <div className="w-[221px] text-center">
        <p>{title}</p>
        <p className="">₦ {price}</p>
      </div>
    </div>
  );
}

export default Card;
