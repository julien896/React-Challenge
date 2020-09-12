import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import 'materialize-css';
import Characters from './Characters'



export default function Filter() {
  
  let [isCheckedCh, setIsCheckedCh] = useState(false); 
  let [isCheckedLoc, setIsCheckedLoc] = useState(false); 
  let [isCheckedEp, setIsCheckedEp] = useState(false); 

  function handleClick() {
    if (isCheckedCh === true) {
      setIsCheckedCh(
        isCheckedCh = false
      );
    } else {
      setIsCheckedCh(
        isCheckedCh=true
      );
    } }
  
  function handleClick1() {
    if (isCheckedLoc === true) {
      setIsCheckedLoc(
        isCheckedLoc = false
      );
    } else {
      setIsCheckedLoc(
        isCheckedLoc=true
      );
    }}
   function handleClick2() {
    if (isCheckedEp === true) {
      setIsCheckedEp(
        isCheckedEp = false
      );
    } else {
      setIsCheckedEp(
        isCheckedEp=true
      );
    }
  }
  
  const [search, setSearch] = useState();

  return ( 
    <>
    <div className="row justify-content-end">   
            <input
                className="col-md-8 offset-md-4" 
                type="search" 
                id="myInput" 
                value={search}
                placeholder="Search.."
            />
    </div>
        
      <div className="row">  
        <div id="check" className="col-md-3" >  
          <form className="col-md-4" action="#">
              <h5 id ="filter">Filters</h5>
            <p>
            <label>
              <input id="ch1" name="check" type="radio" value={isCheckedCh} onClick={handleClick} />
              <span >Characters</span>
            </label>
            </p>
            <p>
            <label>
              <input id="ch2" name="check" type="radio" value={isCheckedLoc} onClick={handleClick1}/>
              <span >Locations</span>
            </label>
            </p>
            <p>
            <label>
              <input id="ch3" name="check" type="radio" value={isCheckedEp} onClick={handleClick2}/>
              <span>Episodes</span>
              </label>
            </p>
          </form>
            </div>

          <div id="container" className="row">
          {(isCheckedCh === true) ? <Redirect to='/characters'/> : null }
          {(isCheckedLoc === true) ? <Redirect to='/locations'/> : null}
          {(isCheckedEp === true) ? <Redirect to='/episodes'/> : null}
          <Characters/>

      </div>

    </div> 

    </>
  
     );
}
 


