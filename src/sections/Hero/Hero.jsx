import { FaCirclePlay, FaStar } from "react-icons/fa6";
import Card from "./components/Card";

function Hero() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 justify-center lg:justify-around items-center">
            <div className="flex gap-4 mt-10 flex-col justify-center lg:justify-start">
              <div className="max-w-[220px]">
                <div className="flex gap-1 items-center text-sm bg-indigo-800 px-4 py-1 rounded-lg">
                  <img src="/Check circle - 4.png" alt="" />
                  <p>Verified by Coursera</p>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4">
                Learn Code <br /> From Top
                <span className="text-yellow-400 ms-1 underline">Coder</span>
              </h2>
              <p className="text-lg mt-4 max-w-xl mx-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              <div className="mt-6 space-x-4">
                <button className="bg-[#EAE34A] text-black font-medium hover:bg-[#37266e] hover:text-white px-4 py-2 rounded">
                  Get Started
                </button>
                <button className="bg-[#37266e] text-white px-4 py-2 rounded hover:bg-[#EAE34A] hover:text-black font-medium ">
                  <div className="flex items-center gap-1">
                    <FaCirclePlay />
                    <span>How it works</span>
                  </div>
                </button>
              </div>
              <div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <p>Based on 10,000+ reviews on</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/Group 1000006823.png" alt="" />
                <img src="Group 1000006824.png" alt="" />
                <img src="Group 1000006826.png" alt="" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/Group 17.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2a0d57] py-12">
        <div className="flex gap-24 items-center justify-center flex-wrap">
          <Card title="Teachers" count="360+">
            <img src="/Frame 32.png" alt="" />
          </Card>
          <Card title="Students" count="30K+">
            <img src="/Frame 31.png" alt="" />
          </Card>
          <Card title="Lessons" count="8K+">
            <img src="/Frame 30.png" alt="" />
          </Card>
          <Card title="Partners" count="200">
            <img src="/Frame 31 (1).png" alt="" />
          </Card>
          <Card title="Success" count="60%">
            <img src="/Frame 29.png" alt="" />
          </Card>
        </div>
      </section>
    </>
  );
}

export default Hero;
