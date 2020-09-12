import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';
import { connect } from 'react-redux';
import { getCharactersAction } from '../redux/charsDuck';

function Characters ({getCharactersAction, chars}) {

    //let [chars, setChars] = useState([]);


const Lista =  chars.map((char) => 
  <div id="card" className="col-md-2">
  <p className="card-name">{char.name}</p>
  <img className="card-image" alt={char.name} src={char.image}/>
  </div>
);

    return ( 
        <>
        </>
     );
}

function mapChars(state) {
    return {
        chars: state.dataChar.characters
    }
  }
  export default connect( mapChars,{getCharactersAction}) (Characters)

