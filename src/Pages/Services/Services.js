import React from "react";
import Service from "./Service";
import ServiceBase from "./ServiceBase";

const Services = () => {
  return (
    <div>
      <div className="bg-sky-500 py-5 lg:py-20">
        <h1 className="text-6xl font-bold text-white">Simple Pricing</h1>
        <p className="font-bold mt-5">No Hidden Fees.</p>
      </div>
      <ServiceBase />
      <Service />
    </div>
  );
};

export default Services;
