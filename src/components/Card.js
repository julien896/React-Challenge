import React, { useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { queryChar, queryLocation, queryEpisode} from '../Graphql';
import { useQuery } from 'react-apollo';


const Card = () => {
    
    let [chars, setChars] = useState([]);
    
    let { data, loading, error } = useQuery(queryChar)

    useEffect(() => {
        if (data && !loading && !error) {
            setChars([...data.characters.results])
        }
    }, [data])
    
   const Lista = chars.map((char) =>
    <div id="card" className="col-md-2">
    <p className="card-name">{char.name}</p>
    <img className="card-image" alt={char.name} src={char.image}/>
    </div> 
    
  );


    return ( 
        <>
    <div id="container" className="row">
    {Lista}

    </div>


        </>
     );
}
 
export default Card;
