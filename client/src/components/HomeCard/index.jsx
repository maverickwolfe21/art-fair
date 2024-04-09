const HomeCard = ({ feature }) => {
  return (
    <div className="relative lg:w-72 md:w-60 w-72 overflow-hidden rounded-md hover:scale-105 transition-all duration-150">
      <img src={feature.imageUrl} alt={feature.title} className="w-full h-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-semibold">{feature.title}</h3>
        <p className="text-sm">{feature.splash}</p>
      </div>
    </div>
  );
};

export default HomeCard;
