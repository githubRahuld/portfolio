import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import {
  ProjectCard,
  ServiceCard,
  SkillCard,
  SocialImg,
  TestimonialCard,
  Timeline,
  AnimatedSection,
} from "../components";

const api =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

function Home() {
  const [userData, setUserData] = useState();
  const [social, setSocial] = useState([]);
  const [services, setServices] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [timelines, setTimelines] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setLoading(false);

        console.log(res.data.user.social_handles);

        setUserData(res.data);
        setSocial(res.data.user.social_handles);
        setServices(res.data.user.services);
        setSkills(res.data.user.skills);
        setProjects(res.data.user.projects);
        setTimelines(res.data.user.timeline);
        setTestimonial(res.data.user.testimonials);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  //for animation
  const [refHero, inViewHero] = useInView();
  const [refAbout, inViewAbout] = useInView();
  const [refServices, inViewServices] = useInView();
  const [refTimeline, inViewTimeline] = useInView();

  //buttom scroller
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
          <AnimatedSection refProp={refHero} inView={inViewHero}>
            <div className="flex flex-col md:flex-row justify-between items-center backdrop-blur-sm bg-stone-100 p-6 shadow-md pb-24 pt-24">
              <div className="md:w-2/4 pr-6 pl-6 md:pl-10">
                <h2 className="font-bold mb-2 text-4xl md:text-6xl font-serif text-teal-800 rounded-sm shadow-xl">
                  {userData?.user?.about?.name}
                </h2>
                <p className="font-bold text-xl md:text-2xl text-slate-400 font-caveat">
                  {"I am a " + userData?.user?.about?.title}
                </p>
                <p className=" md:text-lg text-base/7 text-justify pt-6 md:pt-10 font-poppins text-black">
                  {"From " + userData?.user?.about?.address + ". "}
                  {userData?.user?.about?.subTitle + " "}
                  {userData?.user?.about?.description.substring(
                    0,
                    userData?.user?.about?.description.indexOf(", I have")
                  ) + "."}
                </p>
                <div className="flex flex-row space-x-4 pt-6 md:pt-10">
                  {social.map((social) => (
                    <SocialImg src={social?.image?.url} text="Insta" />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                <img
                  src={userData?.user?.about?.avatar?.url}
                  alt="DP"
                  className="object-cover rounded-full h-60 md:h-80 w-60 md:w-80 shadow-xl hover:h-72 md:hover:h-96 hover:w-72 md:hover:w-96 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Hero Section*/}
          {loading ? (
            <div className="flex items-center justify-center min-h-screen bg-black">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          ) : (
            <AnimatedSection refProp={refAbout} inView={inViewAbout}>
              <section id="about">
                <div className="card card-side shadow-xl text-black rounded-none pt-24 pb-24 bg-[url('/img/texture1.png')] flex flex-col md:flex-row">
                  <figure className="w-full md:w-1/2 h-full">
                    <img
                      src={userData?.user?.about?.avatar?.url}
                      alt="Dp"
                      className="object-cover h-full w-full rounded-xl"
                      style={{ height: "30rem", width: "30rem" }}
                    />
                  </figure>
                  <div className="card-body flex flex-col justify-between h-full w-full md:w-1/2">
                    <h2 className="card-title font-poppins text-rose-500 text-center md:text-left">
                      About me
                    </h2>

                    <p className="text-justify font-semibold font-poppins  md:text-left">
                      {userData?.user?.about?.subTitle + "."}
                    </p>
                    <p className="text-justify font-medium font-cedarvilleCursive text-xl md:text-left">
                      {userData?.user?.about?.description}
                    </p>
                    <div className="card-actions justify-center md:justify-start pt-20">
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
            </AnimatedSection>
          )}

          {/* Service Section*/}
          <AnimatedSection refProp={refServices} inView={inViewServices}>
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
          </AnimatedSection>

          <section
            id="skills"
            className="bg-white pb-10 bg-[url('/img/texture2.png')]"
          >
            <div className="text-black rounded-none pt-12 md:pt-24 pb-12 md:pb-24">
              <div className="md:text-xl">
                <h1 className="font-jost text-black font-bold text-3xl md:text-5xl">
                  PROFESSIONAL SKILLS
                </h1>
                <h2 className="font-jost font-bold text-2xl md:text-3xl text-rose-500">
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
                  MY <span className="font-caveat text-black">Work</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 m-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          <AnimatedSection refProp={refTimeline} inView={inViewTimeline}>
            <section id="Experience" className="bg-slate-50 pb-10 ">
              <div className="text-black rounded-none pt-24 pb-24 ">
                <div>
                  <h1 className="font-jost text-black font-bold text-5xl">
                    TimeLine
                  </h1>
                  <h2 className="font-jost font-bold text-3xl text-rose-500">
                    MY{" "}
                    <span className="font-caveat text-black">Experience</span>
                  </h2>
                </div>
              </div>

              <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical m-4 ">
                {timelines.map((timeline) => (
                  <Timeline key={timeline._id} job={timeline} />
                ))}
              </div>
            </section>
          </AnimatedSection>

          <section id="Testimonial" className="bg-slate-50 pb-10 ">
            <div className="text-black rounded-none pt-24 pb-24 ">
              <div>
                <h1 className="font-jost text-black font-bold text-3xl md:text-5xl">
                  Testimonial
                </h1>
                <h2 className="font-jost font-bold text-3xl text-rose-500">
                  User <span className="font-caveat text-black">Rewiew</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 m-4 ">
              {testimonial.map((review) => (
                <TestimonialCard key={review._id} testimonial={review} />
              ))}
            </div>
          </section>

          {/* bottom scoll button*/}
          <a
            href="#top"
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </>
      )}
    </>
  );
}

export default Home;
