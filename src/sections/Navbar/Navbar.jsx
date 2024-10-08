import List from "./components/List";

function Navbar() {
  return (
    <div className="bg-[#1b0c4d] py-2">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-white cursor-pointer">
            <img className="w-14" src="/logo.png" alt="" />
            <h1 className="font-medium text-3xl">CodeLearn</h1>
          </div>
          <ul className="hidden lg:flex space-x-6 ">
            <List>Home</List>
            <List>Course</List>
            <List> About Us</List>
            <List> Pricing</List>
            <List>Contact</List>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-[#EAE34A] text-[#0005A] hover:bg-[#37266e] hover:text-white px-4 py-2 rounded">
              Login
            </button>

            <button className="bg-[#37266e] text-white px-4 py-2 rounded hover:bg-[#EAE34A] hover:text-black">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
