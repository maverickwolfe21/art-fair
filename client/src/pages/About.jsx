import { useQuery } from '@apollo/client';
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { QUERY_ARTISTS } from '../utils/queries';

const About = () => {
    const { loading, data } = useQuery(QUERY_ARTISTS);
    const artists = data?.artists || [];

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

    // Function to add an artist
    function AddArtist() {
        // Add your logic here to add an artist
    }

    return (
        <div>
            <div className='flex w-screen justify-content px-3'>
                {/* Render artists here */}
                {artists.map(artist => (
                    <div style={{ textAlign: 'center' }}>{artist.name}</div>
                ))}
            </div>
            <div>{letterClass} Working two jobs!</div>
            {/* Render AddArtist function */}
            <AddArtist />
        </div>
    );
};

export default About;