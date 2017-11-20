import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';

const ResultsList = ({listOfResults}) => {
    let resultItem = listOfResults.map((item, i) => {
        return (
                <div key={(i)}>
                    <Link to={`${item.trackId}`} >
                        <Col className="item-box" sm={6} md={4}>
                            <ListGroupItem className="Results-item" >
                                {`${item.trackName || item.collectionName} : ${item.kind || item.collectionType} by ${item.artistName}`}
                            </ListGroupItem>
                        </Col>
                    </Link>
                </div>
        )
    });

    return (
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
            <ListGroup>
                {resultItem}
            </ListGroup>
        </Col>
    )
}


export default ResultsList;
