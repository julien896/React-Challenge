import React from 'react';
import { gql } from 'apollo-boost';

   export let queryChar = gql`
    {
        characters{
            results{
                name
                image
                type
                gender
                species
            }
        }
    }       
    `
    export let queryLocation = gql`
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
   export let queryEpisode = gql`
    {
        episodes{
           results{
               name
               episode
               air_date
               characters {
                name
              }
          }
        }
    } 
    `
    

 