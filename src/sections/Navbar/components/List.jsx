/* eslint-disable react/prop-types */
function List({ children }) {
  return (
    <>
      <li>
        <a href="#" className="hover:text-yellow-300 text-white text-lg">
          {children}
        </a>
      </li>
    </>
  );
}

export default List;
