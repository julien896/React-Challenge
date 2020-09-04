import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';


const Filter = () => {
    return ( 
    <>
      <div className="row">  
        <div id="check" className="col-md-3" >  
          <form className="col-md-4" action="#">
              <h5 id ="filter">Filters</h5>
            <p>
            <label>
              <input id="ch1" type="checkbox" />
              <span >Characters</span>
            </label>
            </p>
            <p>
            <label>
              <input id="ch2" type="checkbox"/>
              <span >Locations</span>
            </label>
            </p>
            <p>
            <label>
              <input id="ch3" type="checkbox"/>
              <span >Episodes</span>
            </label>
            </p>
          </form>
        </div>  

      </div>   
    </>

     );
}
 
export default Filter;
