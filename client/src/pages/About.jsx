import { useQuery } from '@apollo/client';
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { QUERY_ARTISTS } from '../utils/queries';

const About = () => {
    const { loading, data } = useQuery(QUERY_ARTISTS);
    const artists = data?.artists || [];
    const description = data?.description || [];

    // State to hold the letter class
    const [letterClass, setLetterClass] = useState('');
    
    useEffect(() => {
        // Set a timeout to change the letter class after 7 seconds
        const timeoutId = setTimeout(() => {
            setLetterClass('Hello');
        }, 7000);
        
        // Clean-up function to clear the timeout when component unmounts or when the effect is re-executed
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount
    
    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
          <div className='flex w-screen justify-center px-3'>
            {/* Render artists here */}
            {artists.map(artist => (
              <div key={artist.id} style={{ textAlign: 'center' }}>{artist.name}</div>
            ))}
          </div>
          <div className="grid place-items-center">{letterClass} Working two jobs!</div>
          {/* Render AddArtist function */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem placeat! Pariatur veniam obcaecati quis, harum, perferendis earum asperiores qui dolor, expedita error ducimus dicta! Sint at dolor magnam illum.</p>
         {/* {Render Description} */}
         <div className="descriptions-container">
         {description.map(desc => (
        <h2 key={desc.id} style={{ textAlign: 'center' }}>Hello{description.description}</h2>
            ))}
            {/* need to fix the child prop */}
      </div>
      <section className="bg-white ">  
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">  
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-center">
            At Arts Studios, we are dedicated to highlight top of class artists and showcase great arts and features on all kinds of styles. Please be sure to contribute and support the site by donating 
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">                
            </div>
        </div>
    </div>
</section>
        </div>
      );
    }
export default About;