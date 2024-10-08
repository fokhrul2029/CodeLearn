import { FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";

function Skills() {
  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h2 className="my-4 text-[#4B28B5] text-2xl font-normal">
          Let’s Learn together to
        </h2>
        <Title>Grow Your Skills</Title>

        <div className="grid grid-cols-2 gap-4 py-4 items-center">
          <img src="/Rectangle 7.png" alt="" />
          <div>
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="bg-[#4b43ba] text-white w-8 h-8 flex items-center justify-center rounded-full">
                  1
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Describe Your Learning Skills
                </h3>

                <Paragraph>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Paragraph>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="border border-[#4B44BB] text-[#4B44BB] w-8 h-8 flex items-center justify-center rounded-full">
                  2
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Select course</h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="border border-[#4B44BB] text-[#4B44BB] w-8 h-8 flex items-center justify-center rounded-full">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Keep track of your experts
                </h3>
              </div>
            </div>

            {/* Get Started Button */}
            <div className="mt-6">
              <button className="bg-gray-100 text-black px-4 py-2 rounded border">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 items-center">
          <div className="py-10">
            <div className="container mx-auto px-6 max-w-lg">
              {/* Heading */}

              <Title>Welcome to Code Learning Centre</Title>
              <br />
              <br />
              <Paragraph>
                Here we guide you to the best online courses, e-learning advice,
                and technology and resources for education and training.
              </Paragraph>

              {/* Features */}
              <div className="mt-10 space-y-8">
                {/* Safe & Secured */}
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#4b43ba] text-white w-10 h-10 flex items-center justify-center rounded-full">
                      <FaShieldAlt />
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Safe & Secured</h3>

                    <Paragraph>
                      Safe and secured services at every step of the process.
                    </Paragraph>
                  </div>
                </div>

                {/* Highly Expert Instructors */}
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#4b43ba] text-white w-10 h-10 flex items-center justify-center rounded-full">
                      <FaChalkboardTeacher />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Highly Expert Instructors
                    </h3>

                    <Paragraph>
                      There are coffee shops, sports, restaurants, and a
                      multitude of great study opportunities.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/Rectangle 4423.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default Skills;
