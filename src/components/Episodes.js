import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { queryEpisode} from '../Graphql';
import { useQuery } from 'react-apollo';
import 'materialize-css';

const Episodes = () => {
  let [episodes, setEpisodes] = useState([]);
  
  let { data, loading, error } = useQuery(queryEpisode)

  useEffect(() => {
      if (data && !loading && !error) {
          setEpisodes([...data.episodes.results])
          console.log(data)
      }
  }, [data])

  const ListaEp = episodes.map((episode) => 
  <div id="card" className="col-md-2">
  <p className="card-name">{episode.name}</p>
  <p className="card-name">{episode.episode}</p>

</div>
);

    return ( 
        <>   
         
        </>
     );
}
 
export default Episodes;