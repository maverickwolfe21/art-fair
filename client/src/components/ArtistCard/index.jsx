
const ArtistCard = ({ artist }) => {
    return (
        <div className=" rounded-md shadow-lg w-60 mx-4 justify-center">
            <img
                src={artist.imageUrl}
                alt={artist.name}
                className="object-cover w-full h-40 rounded-t-md"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>

                <p className="text-lg font-semibold">{artist.location}</p>
            </div>
        </div>
    );
};

export default ArtistCard;