import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
      <h1>{props.course}</h1>
    )}

const Osa = ({content}) => {
  return (
    <p>{content.nimi} {content.tehtavia}</p>
  )

    
}

const Sisalto = ({contents}) => {
  return (
    <div>       
        {contents.map(content => <Osa key={content.id} content={content} />)}
    </div>
  )
}

const Yhteensa = ({contents}) => {
  const reducerSum = (acc, cur) => acc + cur.tehtavia 
  const summedExcersises = contents.reduce(reducerSum, 0) 
  return (
    <p>yhteensä {summedExcersises}</p>
  )

    
}
//<Yhteensa sum_excercise={kurssi.osat} />

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko course={kurssi.nimi}/>
      <Sisalto contents={kurssi.osat}/>
      <Yhteensa contents={kurssi.osat}/>
    </div>
  )

}


const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {kurssit.map(kurssi => <Kurssi key={kurssit.id} kurssi={kurssi} />)}
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))
