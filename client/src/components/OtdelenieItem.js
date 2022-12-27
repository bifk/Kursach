import React from 'react';
import {Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"


const OtdelenieItem = ({otdelenie}) => {
    return (
        <Container className="mt-1">
            <Card style={{ width: 1150,}} border={"dark"}>
                <div className="mt-1 d-flex justify-content-between align-items-center">

                    <div className="align-items-center">
                        Номер корпуса: {otdelenie.corpus}<br/>
                        Заведующий отделения: {otdelenie.zaved}
                    </div>
                </div>
                <div>Название отделения: {otdelenie.name}</div>
                <br/>
            </Card><br/>
        </Container>
    );
};

export default OtdelenieItem;