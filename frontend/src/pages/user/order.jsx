import React, { useState } from "react";

const Order = () => {
  const [form, setForm] = useState({ name: "", model: "", contact: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully for ${form.model}!`);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Car Order Form
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="model"
          placeholder="Car Model"
          value={form.model}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Order;
