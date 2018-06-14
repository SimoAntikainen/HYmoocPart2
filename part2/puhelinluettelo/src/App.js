import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number :'040-123456'},
        { name: 'Pentti Linkola', number :'123-456789'},
        { name: 'Esa Saarinen', number :'353-555555'},
        { name: 'Esa Esala', number :'353-555555'},
        { name: 'Ari Esala', number :'353-555222'}
      ],
      newName: '',
      newNumber: '',
      newMatchedName: ''
    }
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
          <div>
            rajaa näytettävä: <input 
                    value={this.state.newMatchedName}
                    onChange={this.handleNameMatch}
                     />
          </div>
          <h3>Lisää uusi</h3>
          </div>
        <form onSubmit={this.addNote}>
          <div>
            nimi: <input 
                    value={this.state.newName}
                    onChange={this.handleNameChange}
                     />
          </div>
          <div>
            numero: <input 
                    value={this.state.newNumber}
                    onChange={this.handleNumberChange}
                     />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h3>Numerot</h3>
        <div>
          <ul>
              {showPhoneNumbers.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
          </ul> 
        </div> 
      </div>
    )
  }
}

export default App
