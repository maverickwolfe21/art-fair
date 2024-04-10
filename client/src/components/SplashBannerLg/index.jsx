const SplashBannerLg = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="relative lg:w-4/5 h-64 overflow-hidden">
        <img
          src="https://cdn.discordapp.com/attachments/1184992990868033647/1227030564465283154/jayblesdrums_High_quality_product_photography._Bright_lighting__a408213a-6c48-4e1c-819a-ce19fc15fc81.png?ex=6626ec43&is=66147743&hm=2eb9e75bde94c49ced8f879056c9460445925265bfd33e1edf0e9e4714fb859e&" // Replace with your image URL
          alt="Splash Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 pr-16 py-4">
          <h2 className="text-white text-4xl font-bold">Artist of the Month</h2>
        </div>
      </div>
    </div>
  );
};

export default SplashBannerLg;
