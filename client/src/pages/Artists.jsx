// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


// THis will pull the data from all the Artists. 
import { QUERY_ARTISTS } from '../utils/queries';

const Artists = () => {
   
        const { loading, data } = useQuery(QUERY_ARTISTS);
        const artists = data?.artists || [];
  return (
    <div className="flex w-screen justify-center px-2 bg-blue-400"> 
        <h2>Name</h2>
    </div>
  );
};
export default Artists;