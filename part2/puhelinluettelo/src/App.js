import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number :'040-123456'}
      ],
      newName: '',
      newNumber: ''
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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
          <div>
            nimi: <input 
                    value={this.state.newName}
                    onChange={this.handleNameChange}
                     />
          </div>
          <div>
            nimi: <input 
                    value={this.state.newNumber}
                    onChange={this.handleNumberChange}
                     />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          <ul>
              {this.state.persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
          </ul> 
        </div> 
      </div>
    )
  }
}

export default App
