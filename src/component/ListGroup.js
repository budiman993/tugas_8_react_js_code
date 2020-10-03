import React from 'react';
import {ListGroup} from 'react-bootstrap';

function Plistgroup(){
    return(
        <ListGroup defaultActiveKey="#liga1indonesia">
    <ListGroup.Item action href="#liga1indonesia">
      Liga 1 Indonesia
    </ListGroup.Item>
    <ListGroup.Item action href="#ligaprimeringgris">
      Liga Primer Inggris
    </ListGroup.Item>
    <ListGroup.Item action href="#divisiprimera">
      Divisi Primera
    </ListGroup.Item>
    <ListGroup.Item action href="#seriea">
      Serie A
    </ListGroup.Item>
    <ListGroup.Item action href="#ligue1">
      Ligue 1
    </ListGroup.Item>
    <ListGroup.Item action href="#bundesliga">
      Bundes Liga
    </ListGroup.Item>
  </ListGroup>
    )
}
export default Plistgroup;