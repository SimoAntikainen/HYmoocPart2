import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
      <h1>{props.course}</h1>
    )}

const Osa = ({content}) => {
  return (
    <li>{content.nimi} {content.tehtavia}</li>
  )

    
}

const Sisalto = ({contents}) => {
  return (
    <div>
       <ul>
        {contents.map(content => <Osa key={content.id} content={content} />)}
      </ul>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.sum_excercise[0].tehtavia + props.sum_excercise[1].tehtavia + props.sum_excercise[2].tehtavia} tehtävää</p>
  )

    
}
//<Yhteensa sum_excercise={kurssi.osat} />

const Kurssi = ({kurssi}) => {
  return (
    <div>
      <Otsikko course={kurssi.nimi}/>
      <Sisalto contents={kurssi.osat}/>
    </div>
  )

}


const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat  : [{
    nimi: 'Reactin perusteet',
    tehtavia: 10,
    id:1
    
  }, {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7,
    id:2
  }, {
    nimi: 'Komponenttien tila',
    tehtavia: 14,
    id:3
  }
  ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))
