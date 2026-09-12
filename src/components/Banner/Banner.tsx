import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 py-13 flex flex-col md:flex-row justify-between items-center">
        {/* left side */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center md:text-left">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-4 max-w-md text-sm text-gray-500 text-center md:text-left mx auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project
          </p>
          <div className="flex gap-3 mt-7 justify-center md:justify-start">
            <button className="flex-1 md:flex-none px-4 py-2 rounded-md text-sm text-white bg-linear-to-r from-orange-500 to-pink-500">
              Explore Technologies
            </button>
            <button className="flex-1 md:flex-none px-6 py-2 rounded-md text-gray-600 border border-gray-300">
              Learn More
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-[50%] flex justify-center mt-10 md:mt-0">
          <img src={BannerImg} alt="banner-stack" className="w-100" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
