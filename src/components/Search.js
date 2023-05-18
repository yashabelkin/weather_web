import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_URL, geoOptions } from '../api'

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const selectStyles = {
        width:300
    }
    
    
    const loadOptions =  (inputValue) =>  {
        
        return fetch (`${GEO_URL}/cities?minPopulation=10000&namePrefix=${inputValue}` ,geoOptions)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        console.log(city)
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode} `,
                            inf: `${city.country}, ${city.region}, ${city.population}`
                        }
                    })
                }
            })
            .catch((err) => console.log(err)) 
    }      

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
  return (
    <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={selectStyles}
        >
        

    </AsyncPaginate>
    
  )
}

export default Search