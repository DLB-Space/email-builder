const Button = ({ to, text }) => {
  return (
    <a
      href={to}
      className="text-sm py-4 px-12 font-bold rounded-2xl self-start mb-6"
      style={{ backgroundColor: "#ffe000" }}
    >
      {text}
    </a>
  );
};

export default Button;
