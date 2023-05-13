import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body flex-row justify-between items-end">
        <div>
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-rose-500 pt-1">Price: ${price}</p>
        </div>
        <div className="card-actions text-rose-500 text-xl">
          <button>
            {" "}
            <HiOutlineArrowRight></HiOutlineArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
