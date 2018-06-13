import React from 'react'

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


export default Kurssi