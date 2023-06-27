import RootLayout from "../layout.jsx";

const page = () => {
  return (
    <RootLayout>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop flex justify-center items-center">
          <div
            className="wave waveTop"
            style={{
              backgroundImage: `url(
                "http://front-end-noobs.com/jecko/img/wave-top.png"
              )`,
            }}
          ></div>
          <div>
            <h1 className="text-5xl pb-[15%]">
              ⚠️ Page Currently Under Construction ⚠️
            </h1>
          </div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage: `url(
                "http://front-end-noobs.com/jecko/img/wave-mid.png"
              )`,
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage: `url(
                "http://front-end-noobs.com/jecko/img/wave-bot.png"
              )`,
            }}
          ></div>
        </div>
      </div>
    </RootLayout>
  );
};

export default page;
