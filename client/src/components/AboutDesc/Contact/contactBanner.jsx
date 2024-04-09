const ContactBannerOne = () => {
    return (
      <div className="flex w-screen justify-center p-5 items-center">
        <div className="relative w-4/5 h-64 overflow-hidden">
          <img
            src="https://cdn.discordapp.com/attachments/1184992990868033647/1227085860839751770/jayblesdrums_High_quality_product_photography._Bright_lighting__02f0d710-0379-44d2-988b-733ff91e8f84.png?ex=66271fc3&is=6614aac3&hm=c765e0f0bb5767f21090bf0525e71bb79376a55f53a3e3ad2a694513374061ee&" // Replace with your image URL
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 pr-16 py-4">
          <h2 className="text-white text-2xl font-bold">About The Artists</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactBannerOne