import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';
import Filter from './Filter';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Card from './Card';
import Pagination from './Pagination';


const Home = () => {

    
    return ( 
    <>
        
            <SearchBar/>

            <Filter/>
            <Card/>  
            <Footer/>  
            <Pagination/>
     
     


    </>
     );
}
 
export default Home;
