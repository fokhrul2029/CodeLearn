/* eslint-disable react/prop-types */
function Card({ children }) {
  return (
    <div className="flex flex-col gap-2 items-center text-white text-center">
      {children}
      <h1 className="text-3xl mt-2 font-medium">300+</h1>
      <h2 className="text-lg text-[#B7AACC]">Teacher </h2>
    </div>
  );
}

export default Card;
