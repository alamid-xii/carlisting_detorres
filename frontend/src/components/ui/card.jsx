const Card = ({ icon, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
export default Card;
