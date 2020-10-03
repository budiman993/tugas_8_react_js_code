import React from 'react';
import {Figure, DropdownButton, Dropdown, Container, Row, Col} from 'react-bootstrap';

function Pnavbar(){
	return(
		<div class="bg-dark">
		<Container fluid>
		<Row>
		<Col md="10">
		<DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
		<Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
		<Dropdown.Item href="#/action-2">English</Dropdown.Item>
		</DropdownButton>
		</Col>
		
		<Col md="2">
		<Figure>
		<Figure.Image
		width={54}
		height={54}
		alt="foto profil"
		src="https://png.pngtree.com/svg/20161113/ef1b24279e.png
		"
		/>
		<Figure.Caption class="text-light">
		Alan Saputra
		</Figure.Caption>
		</Figure>
		</Col>
		</Row>
		</Container>
		</div>
		)
	}

	export default Pnavbar;