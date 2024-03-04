import Image from "next/image";

function Card({ id, title, price, description, category, image, rating }) {
  console.log(id, description, category, rating);
  return (
    <div className="text-black flex flex-col justify-center items-center bg-white transition duration-300 ease-in-out transform hover:shadow-lg">
      <div className="w-[150px] min-h-[250px] grid place-items-center relative">
        <Image
          src={image}
          alt="Description of the image"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="absolute top-[50px] left-[50px] flex-col z-10 gap-[13px] hidden">
        <button>heart</button>
        <button className="w-[129px] h-[37px] bg-[#fff] rounded-sm text-[10px] font-muli font-bold tracking-[0.2px] grid place-items-center">
          ADD TO CART
        </button>
      </div>
      <div className="w-[221px] text-center py-[35px] font-muli text-[20px] font-normal">
        <p>{`${title.substring(0, 30)} ${title.length >= 30 ? "..." : ""}`}</p>
        <p>₦ {price}</p>
      </div>
    </div>
  );
}

export default Card;
