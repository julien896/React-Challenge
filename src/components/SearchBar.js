import React from 'react';

const SearchBar = () => {
    return ( 
        <>
        <div className="row justify-content-end">   
            <input
                className="col-md-8 offset-md-4" 
                type="search" 
                id="myInput" 
                placeholder="Buscar.."
            />

                </div>
        </>
     );
}
 
export default SearchBar;