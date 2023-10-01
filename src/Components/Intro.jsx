import React from "react";
import Lottie from "react-lottie";
import coding from "../Assets/Animations/codingintro.json";
function Intro() {
  return (

    <div className="mt-12" id="introdiv">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="m-4 text-center">
          <h1 className="text-3xl text-white font-bold">Hi all, I'm Khaqan</h1>
          <p className="text-white text-lg mt-4">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web applications with JavaScript / Reactjs / Nodejs and
            some other cool libraries and frameworks.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://github.com/KhaqanAamir">
              <img
                className="w-8"
                src="https://tse2.mm.bing.net/th?id=OIP.z563E6C5FgBAnx4moTFeSgHaFj&pid=Api&P=0"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/khaqan-aamir-9a9469210/">
              <img
                className="w-8"
                src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0"
                alt="Linkedin"
              />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <img
                className="w-8"
                src="https://tse1.mm.bing.net/th?id=OIP.e1EfbQdt6aVOMKEAaBzV_wHaHZ&pid=Api&P=0"
                alt="Mail"
              />
            </a>
            <a href="https://www.facebook.com/khaqan.aamir.10/">
              <img
                className="w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png"
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com/AamirKhaqan">
              <img
                className="w-8"
                src="https://w7.pngwing.com/pngs/570/634/png-transparent-twitter-logo-icon-twitter-computer-network-logo-meme-thumbnail.png"
                alt="Facebook"
              />
            </a>
          </div>
          <div className="mt-6">
            <button className="bg-purple-700 text-white rounded-full py-2 px-6">
              <a
                href="https://drive.google.com/file/d/1M8JcTj9GebFdUsgj_HVBfiYzjBigh7K1/view?usp=drive_link"
                alt="my resume"
              >
                See My Resume
              </a>
            </button>
          </div>
        </div>

        <div className="">
          <div className="lg:w-1/2 mx-0 lg:mx-auto">
            <Lottie
              options={{
                loop: ``,
                autoplay: true,
                animationData: coding,
                isClickToPauseDisabled: false,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              eventListeners={[{}]}
              className="pb-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// className="w-48 h-48 mt-28 ml-10"
export default Intro;
