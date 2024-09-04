import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto px-4 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build the next project together
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, I'm <span className="text-primary">Iradukunda</span>
          </h1>
          <h1 className="py-2 text-gray-700">Software Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I am dedicated to creating innovative solutions.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/irfiacre/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-primary/15 text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="mailto:irfiacre@gmail.com" target="_blank" rel="noreferrer">
              <div className="rounded-full bg-primary/15 text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineMail />
              </div>
            </a>
            <a href="https://github.com/irfiacre" target="_blank" rel="noreferrer">
              <div className="rounded-full bg-primary/15 text-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
