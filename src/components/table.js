import React from 'react'
import {Table, Button, Label, Glyphicon, Popover, OverlayTrigger} from 'react-bootstrap';



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
              // maps each item in props to a row/entry in the table
            	props.data.map((planet,index) => (

      	            <tr key={index} style={{fontSize:15}}>
      		            <td> {index + 1} </td>
                      <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="right"
                        overlay= 
                        <Popover id="popover-trigger-hover-focus" title={planet.name}>
                          <strong>Diameter: &nbsp;</strong>{planet.rotation_period} <br/>
                          <strong>Climate: &nbsp;</strong>{planet.climate} <br/>
                          <strong>Gravity: &nbsp;</strong>{planet.gravity} <br/>
                          <strong>Surface Water: &nbsp;</strong>{planet.surface_water} <br/>
                        </Popover>
                      >
                      <td> {planet.name} </td>
                      </OverlayTrigger>
      		            <td> {planet.population} </td>
      		            <td> {planet.terrain} </td>
      	            </tr>
            	))
            }
      	</tbody>
      </Table>
    )
}