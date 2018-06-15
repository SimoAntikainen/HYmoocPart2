import React from 'react';
import Henkilotieto from './components/Henkilotieto'
import FilterLomake from './components/FilterLomake'
import SubmitLomake from './components/SubmitLomake'

import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      /** 
      persons: [
        { name: 'Arto Hellas', number :'040-123456'},
        { name: 'Pentti Linkola', number :'123-456789'},
        { name: 'Esa Saarinen', number :'353-555555'},
        { name: 'Esa Esala', number :'353-555555'},
        { name: 'Ari Esala', number :'353-555222'}
      ],**/
      persons: [],
      newName: '',
      newNumber: '',
      newMatchedName: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  addNote = (event) => {
    event.preventDefault()

    const isNameUnique = this.state.persons.find(person => person.name === this.state.newName) 
     //Undefined evaluates to false 
    if(!isNameUnique) {

    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    console.log("newPerson", newPerson)
  
    const newPersons = this.state.persons.concat(newPerson)
  
    this.setState({
      persons: newPersons,
      newName: '',
      newNumber: ''
    })
    } else {
      this.setState({
        newName: '',
        newNumber: ''
      })
    }

    console.log("persoonat", this.state.persons)
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleNameMatch = (event) => {
    console.log(event.target.value)
    this.setState({ newMatchedName: event.target.value})
  }

  render() {
    
    const showPhoneNumbers = this.state.persons.filter(
      person => person.name.toLowerCase().includes(this.state.newMatchedName.toLowerCase()))

    return (
      <div>
        <h2>Puhelinluettelo</h2>
          <div>
            <FilterLomake value={this.state.newMatchedName}
                    onChange={this.handleNameMatch}/>
            <h3>Lisää uusi</h3>
          </div>
          <SubmitLomake onSubmit={this.addNote} 
            value1={this.state.newName} onChange1={this.handleNameChange} 
            value2={this.state.newNumber} onChange2={this.handleNumberChange}/>
        <h3>Numerot</h3>
        <div>
          <table>
            <tbody>
              {showPhoneNumbers.map(person => <Henkilotieto key={person.name} name={person.name} number={person.number}/>)}
            </tbody>
          </table> 
        </div> 
      </div>
    )
  }
}

export default App
