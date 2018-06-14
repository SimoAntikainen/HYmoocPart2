import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addNote = (event) => {
    event.preventDefault()
    const newPerson = {
      name: this.state.newName
    }
    console.log("newPerson", newPerson)
  
    const newPersons = this.state.persons.concat(newPerson)
  
    this.setState({
      persons: newPersons,
      newName: ''
    })

    console.log("persoonat", this.state.persons)
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
          <div>
            nimi: <input 
                    value={this.state.newName}
                    onChange={this.handleNoteChange}
                     />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
        {this.state.persons.map(person => <li key={person.name}> {person.name} </li>)}

        </div> 
      </div>
    )
  }
}

export default App
