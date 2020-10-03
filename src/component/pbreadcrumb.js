import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';

function Pbreadcrumb(){
	return(
		<Container fluid>
		<Row>
		<Col md={{span : 4, offset:8}}>
		<Breadcrumb>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">
		Berita
		</Breadcrumb.Item>
		<Breadcrumb.Item active>Bola</Breadcrumb.Item>
		</Breadcrumb>
		</Col>
		</Row>
		</Container>
		)
	}

	export default Pbreadcrumb;