import React from 'react'

const Henkilotieto = ({name, number}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr> 
  )
}

export default Henkilotieto