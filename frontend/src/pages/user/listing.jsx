import React from "react";

const cars = [
  {
    model: "Honda Civic",
    image: "https://link-to-car-image.com/honda.jpg",
    description: "A sporty sedan with style and performance.",
    price: "₱1,200,000",
  },
  {
    model: "Toyota Vios",
    image: "https://link-to-car-image.com/vios.jpg",
    description: "Perfect for daily drives and comfort.",
    price: "₱950,000",
  },
];

const Listing = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Available Cars</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-2xl transition-all"
          >
            <img src={car.image} alt={car.model} className="rounded-xl mb-4" />
            <h2 className="text-2xl font-semibold">{car.model}</h2>
            <p className="text-gray-600 my-2">{car.description}</p>
            <p className="text-indigo-600 font-bold">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
