import React from 'react'
import {Table, Button, Label, Glyphicon} from 'react-bootstrap';

export default function PlanetTable(props) {
	return(
      <Table responsive striped hover bordered>
        <thead>
          <tr>
          <th> <h4><Label>#</Label></h4> </th>
          <th> 
          <Button onClick={() => props.sortBy('name')}>
          Planet Name &nbsp;
          <Glyphicon glyph="sort">
          </Glyphicon>
          </Button>
          </th>
          <th> 
          <Button onClick={() => props.sortBy('population')}>
          Population &nbsp;
          <Glyphicon glyph="sort">
          </Glyphicon>
          </Button>
          </th>
          <th><h4><Label> Terrain Details </Label></h4></th>
          </tr>
        </thead>
        <tbody>
          {
          	props.data.map((planet,index) => (
	            <tr key={index} style={{fontSize:15}}>
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