import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        const data = response.data
        setCountries(data)
      })

  }, [])
  console.log(countries)

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const filteredCountries = search
    ? countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) : countries

  const CountryList = () => {
    if (filteredCountries.length > 10) {
      return (
        <div>Too many countries</div>
      )
    } else {
      return (
        <div>
          {/* {filteredCountries.map(country => <p key={country.name}>{country.name}</p>)} */}
          {filteredCountries.map((country) => {
            const languages = country.languages
            console.log(languages)
            return (
              <div key={country.name}>
                <h2>{country.name}</h2>
                <p>capital: {country.capital}</p>
                <p>population: {numberWithCommas(country.population)}</p>
                <h3>Languages</h3>
                <ul>
                  {languages.map(language => <li>{language.name}</li>)}
                </ul>
                <img src={country.flag} alt='country flag' width="500" height="300"></img>

              </div>
            )
          })}
        </div>
      )
    }
  }



  return (
    <div>
      {/* <Search onChange={handleSearch} value={search} /> */}
      <form>
        <div>
          country to search: <input value={search} onChange={handleSearch} />
        </div>
        <CountryList />
      </form>
    </div>
  )
}

export default App;
