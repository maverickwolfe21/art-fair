const ArtistCard = ({ artist }) => {
  return (
    <div className="rounded-md shadow-lg w-80 lg:w-60 mx-4 justify-center hover:scale-105 transition-all duration-150">
      <img src={artist.imageUrl} alt={artist.name} className="object-cover w-full h-40 rounded-t-md" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{artist.name}</h3>
        <p className="text-gray-500 text-sm font-medium">{artist.location}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
