import ApolloClient, { gql } from 'apollo-boost';


let initialData = {
    fetching: false,
    error: true,
    locations: []
}

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_LOCATIONS = "GET_LOCATIONS"
let GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
let GET_LOCATIONS_ERROR = "GET_LOCATIONS_ERROR"

// reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
            case GET_LOCATIONS:
                return { ...state, fetching: true }
            case GET_LOCATIONS_ERROR:
                return { ...state, fetching: false, error: action.payload }
            case GET_LOCATIONS_SUCCESS:
                return { ...state, locations: action.payload, fetching: false }
                default:
                    return state    
        
        }
}

export let getLocationsAction = () => (dispatch, getState) => {
    let query = gql`
       {   
           locations{
              results{
                   name
                   dimension
                   type
                   residents{
                     name
                     
                   } 
               }
           }
       }
       `
       dispatch({
           type: GET_LOCATIONS
       })
       return client.query({
           query
       })
   
           .then(({ data, error}) => {
           if(error) {
               dispatch({
                   type: GET_LOCATIONS_ERROR,
                   payload: error
               })
               return
           }
           dispatch({
               type: GET_LOCATIONS_SUCCESS,
               payload: data.locations.results
           })
       })
   } 