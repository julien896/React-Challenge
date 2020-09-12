import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { queryLocation} from '../Graphql';
import { useQuery } from 'react-apollo';
import 'materialize-css';

const Locations = () => {

    let [locations, setLocations] = useState([]);

    let { data, loading, error } = useQuery(queryLocation)

    useEffect(() => {
          if (data && !loading && !error) {
              setLocations([...data.locations.results])
              console.log(data)
          }
      }, [data])

      const ListaLoc = locations.map((location) => 
  <div id="card" className="col-md-2">
  <p className="card-name">{location.name}</p>
 <p className="card-name">{location.dimension}</p>

</div>
);
    return ( 
        <>
        </>
     );
}
 
export default Locations;