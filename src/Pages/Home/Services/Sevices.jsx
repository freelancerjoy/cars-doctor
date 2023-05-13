import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Sevices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div>
      <div className="text-center my-8 space-y-4">
        <h4 className="text-2xl font-bold text-rose-500">Services</h4>
        <h4 className="text-5xl font-bold ">Our Service Area</h4>
        <p className="lg:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Sevices;
