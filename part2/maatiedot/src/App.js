import React from 'react';
import axios from 'axios'

const CountryInfo = ({countries, goToCountry}) => {
  const len = countries.length
  
  
  if (len > 10) {
      return (
        <div>
          {"Liikaa maita, rajaa hakuehdot paremmin"}
        </div>
    )
  }
  else if (len <= 10 && len > 1) {
      return (
        <div>
          {
            countries.map(country => 
              <div key={country.name}
              onClick={goToCountry(country.name)}
              >
                {country.name}
              </div>
            )
          }
        </div>
    )
  }
  else if(len === 1) {
    return (
      <div>
        <div>
        <h1>{countries[0].name}</h1>
        </div>
        <div>
          {"capital: " + countries[0].capital + ""}
        </div>
        <div>
          {"population: " + countries[0].population + ""}
        </div>
        <div>
          <img src={countries[0].flag} alt={"Flag of " + countries[0].name + ""} 
          width="300" height="175"/>
        </div>

      </div>
      )

  } else {
    return (
    <div>
      {"Ei ehdot täyttäviä maita"}
    </div>
    )
  }

}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      search: ''
    }
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value })
  }

  goToCountry = (country) => {
    return() => {
      //console.log("HERE", country)
      this.setState({search: country})

    }

  }

  render() {
    const countriesToShow = this.state.countries.filter(
      country => country.name.toLowerCase()
      .includes(this.state.search.toLowerCase()))

    return (
      <div>
        <form>
          <div>
            Hae maita: <input 
              value={this.state.search} 
              onChange={this.handleSearchChange}/>
          </div>
        </form>
        <div>
        <CountryInfo countries={countriesToShow} goToCountry={this.goToCountry}/>
        </div>
            
      </div>
    )
  }
}

export default App
