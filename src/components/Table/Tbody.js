import React from "react";

const Tbody = (props) => {
  return ( 
      <tbody>
          <tr>
              <td><img alt={props.name} src={props.picture}></img></td>
              <td>{props.name}</td>
              <td>{props.phone}</td>
              <td>{props.email}</td>
              <td>{props.age}</td>
          </tr>
      </tbody>
  )
}

export default Tbody;