import React from 'react';
import {Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {OTDELENIE_ROUTE} from "../utils/consts";
import Combobox from "react-widgets/Combobox";

const DolznostItem = ({dolznost}) => {

    return (
        <Container className="mt-1">
            {dolznost.nameD}
        </Container>
    );
};

export default DolznostItem;