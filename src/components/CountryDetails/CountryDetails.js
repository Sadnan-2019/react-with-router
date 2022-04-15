import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
          const {countryName} =useParams()
          return (
                    <div>
                               <h3>my country</h3> 
                        <h4>Country Name:{countryName}</h4>
                            
                    </div>
          );
};

export default CountryDetails;