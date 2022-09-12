import React from "react";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function abouthome() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);

  const blog = [
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
      imgs: "/pause/PAUSE3.png",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
      imgs: "/pause/PAUSE2.png",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
      imgs: "/pause/PAUSE1.png",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
      imgs: "/pause/PAUSE1.png",
    },
  ];
  const blog1 = [
    {
      name: " YOG OFF THE MAT",
      small:
        "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
      desc: "Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
      imgs: "/pause/PAUSE1.png",
    },
    {
      name: " YOG OFF THE MAT",
      small:
        "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
      desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
      imgs: "/pause/PAUSE3.png",
    },
    {
      name: " YOG OFF THE MAT",
      small:
        "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
      desc: "Stay true to your roots👇🏼",
      imgs: "/pause/PAUSE2.png",
    },
  ];
  return (
    <>
      <section></section>
      {/* <div className="container mx-auto">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-black md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="grid gap-10  sm:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bah font-bold">Oliver Aguilerra</p>
            <p className="mb-5 text-xs font-bah text-black">Product Manager</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>


       
       
      </div>
    </div> */}

      <section
        data-aos="fade-down"
        data-aos-once="true"
        className="bg-lightgray"
      >
        <div className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={1700}
            effect=""
          >
            <SwiperSlide>
              <div>
                <p className="text-3xl font-bah text-center   title-font text-black   mb-4">
                  Meet The Team
                </p>
              </div>
              <div className="grid gap-10  sm:grid-cols-2 lg:grid-cols-4 ">
                {blog.map(({ name, imgs, desc, small }, index) => {
                  return (
                    <div key={index}>
                      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                        <img
                          className="absolute object-cover w-full h-full rounded"
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                      </div>
                      <div className="flex flex-col sm:text-center">
                        <p className="text-lg font-bah font-bold">
                          Oliver Aguilerra
                        </p>
                        <p className="mb-5 text-xs font-bah text-black">
                          Product Manager
                        </p>
                        <div className="flex items-center space-x-3 sm:justify-center">
                        <a
                      className="mx-1.5 text-black  transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-3xl font-bah text-center   title-font text-black   mb-4">
                 Our Advisors
                </p>
              </div>
              <div className="grid gap-10  sm:grid-cols-2 lg:grid-cols-4 ">
                {blog.map(({ name, imgs, desc, small }, index) => {
                  return (
                    <div key={index}>
                      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                        <img
                          className="absolute object-cover w-full h-full rounded"
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                      </div>
                      <div className="flex flex-col sm:text-center">
                        <p className="text-lg font-bah font-bold">
                          Oliver Aguilerra
                        </p>
                        <p className="mb-5 text-xs font-bah text-black">
                          Product Manager
                        </p>
                        <div className="flex items-center space-x-3 sm:justify-center">
                        <a
                      className="mx-1.5 text-black  transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center">
            <Link href="/about">
              <button className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
            </div>
        </div>
        
      </section>
    </>
  );
}
