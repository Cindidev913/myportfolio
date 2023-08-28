import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("01/21/2003");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Cindi Widiawati,</span> a Web Development
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            Hello! I'm Cindi Widiawati, a passionate and driven 5th-semester student pursuing a degree in Informatics Management at LP3I Bandung Polytechnic. I have a strong fascination for the dynamic world of technology and its transformative potential within the realm of business.
           </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            Beyond the classroom, I actively engage in enriching technology experiences on campus. I am an enthusiastic member of HIMAMI (Informatics Management Student Association) and ICON (Incredible Computer Nation). These platforms have allowed me to collaborate with like-minded individuals, learn from experts, and contribute to the ever-evolving tech landscape.

         </p>

          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            My aspiration is to translate my passion and skills into real-world impact. I envision myself as an integral part of innovative IT companies, where I can contribute to their success by leveraging technology to enhance efficiency, streamline processes, and foster growth. With dedication and a continuous thirst for knowledge, I'm excited to embark on a journey that merges my love for technology and my eagerness to make a meaningful difference.
           </p>
        </div>
        

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "400px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/CV Cindi.pdf")}
              download={"cindi-resume.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
