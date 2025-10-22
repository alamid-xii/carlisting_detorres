import React from "react";
import Navbar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/primarybutton";
import Card from "../../components/ui/card";

const LandingPage = () => {
  const handleExplore = () => (window.location.href = "/listing");
  const handleOrder = () => (window.location.href = "/order");

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Discover Premium Cars for Modern Drivers
        </h1>
        <p className="text-gray-600 mb-8">
          Explore high-performance, stylish, and affordable cars designed for your journey.
        </p>
        <div className="flex justify-center gap-4">
          <PrimaryButton label="Explore Cars" onClick={handleExplore} />
          <PrimaryButton label="Order Now" onClick={handleOrder} type="secondary" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 grid md:grid-cols-3 gap-8">
        <Card
          icon="⚡"
          title="Speed and Performance"
          description="Experience top-tier acceleration and smooth handling."
        />
        <Card
          icon="💎"
          title="Luxury Design"
          description="Crafted interiors and bold exterior lines for a premium look."
        />
        <Card
          icon="🌱"
          title="Eco-Friendly"
          description="Fuel-efficient and electric options available."
        />
      </section>
    </div>
  );
};

export default LandingPage;
