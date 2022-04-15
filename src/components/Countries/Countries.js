import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Countries = () => {


  const [countries, setCountries] = useState([]);
  const navigate= useNavigate();
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all
                    `;
    fetch(url)
//     console.log(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const ContryDetails=()=>{
            const path=`/country-details/${countries.name.common}`
            navigate(path)





  }
 

  return (
    <div className="container">
      <h1>Welcome My World...{countries.length}</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
         
          {countries.map((country) => (
            <div className="col rounded text-danger bg-info "    >
              <Link key={country.name.common
          } to={`/country/${country.name.common}`}>
               
               <img src={country.flags.png} alt="" className="p-4   " />
               <h5>CountryName:{country.name.common}</h5> 
              </Link>
              <button onClick={ContryDetails}>Details</button>

            </div>
          ))}
      
      </div>
    </div>
  );
};

export default Countries;
