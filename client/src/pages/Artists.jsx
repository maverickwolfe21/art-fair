
import { useQuery } from '@apollo/client';


// THis will pull the data from all the Artists. 
import { QUERY_ARTISTS } from '../utils/queries';

const Artists = () => {
   
        const { loading, data } = useQuery(QUERY_ARTISTS);
        const artists = data?.artists || [];


  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-screen justify-center px-2 bg-blue-400"> 
    {/* I dont think this works but it is a place holder */}
        <h2>{artists.name} </h2>
    </div>
  );
};
export default Artists;