import React from 'react';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    console.log('did mount')
    
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('all countries retrieved')
        this.setState({ countries: response.data })
      })
  }

  render() {
    const countriesToShow = this.state.countries

    return (
      <div>
        <form>
          <div>
            Hae maita: <input />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <ul>
          {
            countriesToShow.map(country => 
            <li key={country.name}>{country.name}</li>)

          }
        </ul>  
      </div>
    )
  }
}

export default App
