import { useQuery } from '@apollo/client';


// This will pull the data from all the Artists. 
import { QUERY_ARTISTS } from '../utils/queries';





const Artists = () => {
   
        const { loading, data } = useQuery(QUERY_ARTISTS);
        const artists = data?.artists || [];
        const description = data?.description || [];
// test push

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-screen justify-center px-2 bg-blue-400"> 
    {/* I don't think this works but it is a place holder */}
        <h2>{artists.name} </h2>
        <h3>{description}</h3>
        <div className='overlay'>
          <div id='cardTitleContainer' className='items card-title-container'></div>

        </div>

    </div>
  );
};
export default Artists;