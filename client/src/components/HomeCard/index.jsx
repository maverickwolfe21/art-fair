const HomeCard = ({ feature }) => {
    return (
        <div className=" rounded-md shadow-lg w-60 mx-4 justify-center">
            <img
                src={feature.imageUrl}
                alt={feature.title}
                className="object-cover w-full h-40 rounded-t-md"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

                <p className="text-lg font-semibold">{feature.splash}</p>
            </div>
        </div>
    );
};

export default HomeCard;