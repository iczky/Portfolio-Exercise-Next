const FirstHero = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/image-people.png)",
      }}
      className="h-screen bg-slate-300 flex justify-center items-center bg-no-repeat relative overflow-hidden bg-bottom ">
      <h1 className="absolute text-white pt-[25%] text-[150px] whitespace-nowrap">
        Software Engineering - Web Developer
      </h1>
      <div className="flex justify-end right-[-310px] w-auto absolute transition">
        <div className="flex items-center gap-5 py-6 pl-[15px] pr-[80px] bg-black rounded-[60px] text-white hover:right-[-50px] hover:cursor-pointer">
          <p className="text-[50px] font-semibold m-0 p-0">👋</p>
          <p>Hi Im Ayush</p>
        </div>
      </div>
    </section>
  );
};

export default FirstHero;
