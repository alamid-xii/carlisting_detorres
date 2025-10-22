const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const base =
    "px-4 py-2 rounded-xl font-semibold transition-all duration-300";
  const styles = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg",
    secondary:
      "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
    outline:
      "text-indigo-600 border border-indigo-400 hover:bg-indigo-100",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[type]}`}>
      {label}
    </button>
  );
};

export default PrimaryButton;
