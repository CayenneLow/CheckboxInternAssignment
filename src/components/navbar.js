import React from 'react'
import {Navbar, FormGroup, FormControl} from 'react-bootstrap'

export class Nav extends React.Component {
	render() {
		return(
			<Navbar>
  				<Navbar.Header>
	    			<Navbar.Brand>
	      				<a href="#home">Star Wars' Planets</a>
	    			</Navbar.Brand>
	    			<Navbar.Toggle />
  				</Navbar.Header>
  				<Navbar.Collapse>
	    			<Navbar.Form pullLeft>
				      <FormGroup>
				        <FormControl type="text" placeholder="Filter" onChange={this.props.filterList} />
				      </FormGroup>{' '}
				    </Navbar.Form>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}