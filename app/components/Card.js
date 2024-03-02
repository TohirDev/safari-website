import Image from "next/image";

function Card({ id, title, price, description, category, image, rating }) {
  console.log(id, description, category, rating);
  return (
    <div className="text-black flex flex-col justify-center items-center bg-white transition duration-300 ease-in-out transform hover:shadow-lg">
      <div className="w-[150px] min-h-[250px] text-center">
        <Image
          src={image}
          alt="Description of the image"
          width={500}
          height={300}
        />
      </div>
      <div className="w-[221px] text-center py-[35px]">
        <p>{title}</p>
        <p className="">₦ {price}</p>
      </div>
    </div>
  );
}

export default Card;
