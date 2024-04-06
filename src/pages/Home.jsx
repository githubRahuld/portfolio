import React, { useEffect, useState } from "react";
import axios from "axios";
import { ServiceCard, SkillCard, SocialImg } from "../components";

const api =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

function Home() {
  const [userData, setUserData] = useState();
  const [services, setServices] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setLoading(false);
        // console.log(res.data.user.services);
        // console.log(res.data.user.skills);
        setUserData(res.data);
        setServices(res.data.user.services);
        setSkills(res.data.user.skills);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center backdrop-blur-sm bg-stone-100  p-6 shadow-md pb-24 pt-24">
            <div className="w-2/4 pr-6 pl-10">
              <h2 className="font-bold mb-2 text-6xl font-serif text-teal-800 rounded-sm shadow-xl">
                {userData?.user?.about?.name}
              </h2>
              <p className="font-bold text-2xl text-slate-400 font-caveat">
                {"I am a " + userData?.user?.about?.title}
              </p>
              <p className="text-base-200 text-base/7 text-justify pt-10 font-poppins">
                {"From " + userData?.user?.about?.address + ". "}
                {userData?.user?.about?.subTitle + " "}
                {userData?.user?.about?.description.substring(
                  0,
                  userData?.user?.about?.description.indexOf(", I have")
                ) + "."}
              </p>

              <div className="flex flex-row space-x-4 pt-10 ">
                <SocialImg src="/img/socialMedia/insta.webp" text="Insta" />
                <SocialImg
                  src="/img/socialMedia/linkedin.webp"
                  text="LinkedIn"
                />
                <SocialImg src="/img/socialMedia/twitter.webp" text="X" />
                <SocialImg src="/img/socialMedia/fb.webp" text="FB" />
              </div>
            </div>
            <div className="w-1/3">
              <img
                src={userData?.user?.about?.avatar?.url}
                alt="DP"
                className="object-cover rounded-full h-80 w-80 shadow-xl hover:h-96 hover:w-96  transition-all duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Hero Section*/}
          {loading ? (
            <div className="flex items-center justify-center min-h-screen bg-black">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          ) : (
            <section id="about">
              <div className="card card-side shadow-xl text-black rounded-none pt-24 pb-24 bg-[url('/img/texture1.png')]">
                <figure className="w-1/2 h-full">
                  <img
                    src={userData?.user?.about?.avatar?.url}
                    alt="Dp"
                    className="object-cover h-full w-full rounded-xl"
                    style={{ height: "30rem", width: "30rem" }}
                  />
                </figure>
                <div className="card-body flex flex-col justify-between h-full w-1/2">
                  <h2 className="card-title font-poppins text-rose-500">
                    About me
                  </h2>

                  <p className="text-justify font-semibold font-poppins">
                    {userData?.user?.about?.subTitle + "."}
                  </p>
                  <p className="text-justify font-medium font-cedarvilleCursive justify-stretch text-xl ">
                    {userData?.user?.about?.description}
                  </p>
                  <div className="card-actions justify-start pt-20">
                    <a
                      href="https://drive.google.com/file/d/1F6sySggGwx5mETDego7QHP6rD3FPg7HY/view?usp=drive_link"
                      target="_blank"
                      className="btn border-none font-poppins text-white bg-rose-500 hover:text-white"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* About Section*/}
          <section id="services" className="bg-white pb-10">
            <div className="text-black rounded-none pt-24 pb-24 ">
              <div>
                <h1 className="font-jost text-black font-bold text-5xl">
                  WHAT I DO
                </h1>
                <h2 className="font-jost font-bold text-3xl text-rose-500">
                  MY <span className="font-caveat text-black">Services</span>
                </h2>
              </div>
            </div>

            <div className="carousel rounded-box pb-10 m-4">
              {services.map((service, index) => (
                <ServiceCard key={index} userData={service} />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-3 h-3 rounded-full bg-gray-500 mx-3"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500 mx-3"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500 mx-3"></div>
            </div>
          </section>

          <section
            id="skills"
            className="bg-white pb-10 bg-[url('/img/texture2.png')]"
          >
            <div className="text-black rounded-none pt-24 pb-24 ">
              <div>
                <h1 className="font-jost text-black font-bold text-5xl">
                  PROFESSIONAL SKILLS
                </h1>
                <h2 className="font-jost font-bold text-3xl text-rose-500">
                  MY <span className="font-caveat text-black">Talent</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  image={skill?.image?.url}
                />
              ))}
            </div>
          </section>

          <section id="projects" className="bg-white pb-10 ">
            <div className="text-black rounded-none pt-24 pb-24 ">
              <div>
                <h1 className="font-jost text-black font-bold text-5xl">
                  PORTFOLIO
                </h1>
                <h2 className="font-jost font-bold text-3xl text-rose-500">
                  MY <span className="font-caveat text-black">Cases</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  image={skill?.image?.url}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Home;
