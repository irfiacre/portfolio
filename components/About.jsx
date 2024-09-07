import Image from "next/image";
import Link from "next/link";
import profile from "../public/assets/img/me/profile2.png";

function About() {
  return (
    <div id="about" className="w-full lg:h-screen py-20 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-6">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-primary">About me!</p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600 font-light">
            I am a Software Developer from Rwanda with over <strong className="text-base">4</strong> year of professional experience 
            developing solutions that improve user experience. I have experience in 
            fast-paced and dynamic environments, including a German International company.
            <br /> 
            With a great eye for detail and a strong problem-solving mindset, I am dedicated to 
            delivering high-quality solutions.
          </p>
          <Link legacyBehavior href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Get to know my work.
            </p>
          </Link>
        </div>
        <div className="max-w-xs mx-auto mt-4 h-fit self-center shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-150">
          <Image src={profile} className="rounded-xl object-cover" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
