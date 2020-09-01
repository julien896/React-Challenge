import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';
import Filter from './Filter';


const Home = () => {
    return ( 
    <>
        <div className="row justify-content-end">   
            <input
                className="col-md-8 offset-md-4" 
                type="text" 
                id="myInput" 
                placeholder="Buscar.."
            />
        </div>

            <Filter/>

    </>
     );
}
 
export default Home;
