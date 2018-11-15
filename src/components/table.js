import React from 'react'
import {Table} from 'react-bootstrap';

export default function PlanetTable(props) {
	return(
      <Table>
        <thead>
          <tr>
          <th> # </th>
          <th> <button onClick={() => props.sortBy('name')}>Planet Name </button></th>
          <th> <button onClick={() => props.sortBy('population')}>Population </button></th>
          <th> Terrain Details </th>
          </tr>
        </thead>
        <tbody>
          {
          	props.data.map((planet,index) => (
	            <tr>
		            <td> {index + 1} </td>
		            <td> {planet.name} </td>
		            <td> {planet.population} </td>
		            <td> {planet.terrain} </td>
	            </tr>
          	))
          }
      	</tbody>
      </Table>
    )
}