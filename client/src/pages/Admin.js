import React, {useState} from 'react';
import {Button, Container, Modal} from "react-bootstrap";
import CreatePlata from "../components/modals/CreatePlata";
import CreateDolznost from "../components/modals/CreateDolznost";
import CreateOtdelenie from "../components/modals/CreateOtdelenie";
import CreatePreparat from "../components/modals/CreatePreparat";
import CreateRaspisanie from "../components/modals/CreateRaspisanie";
import CreateGorod from "../components/modals/CreateGorod";
import CreateUlica from "../components/modals/CreateUlica";

const Admin = () => {
    const [raspisanieVisible, setRaspisanieVisible] = useState(false)
    const [dolznostVisible, setdolznostVisible] = useState(false)
    const [otdelenieVisible, setotdelenieVisible] = useState(false)
    const [plataVisible, setplataVisible] = useState(false)
    const [preparatVisible, setpreparatVisible] = useState(false)
    const [gorodVisible, setgorodVilible] = useState(false)
    const [ulicaVisible, setulicaVisible] = useState(false)



    return (
        <Container className="d-flex flex-column">
            <Button onClick={() => setpreparatVisible(true)} className="mt-4" variant="outline-dark">Добавить препарат</Button>
            <Button onClick={() => setRaspisanieVisible(true)} className="mt-4" variant="outline-dark">Добавить расписание</Button>
            <Button onClick={() => setotdelenieVisible(true)} className="mt-4" variant="outline-dark">Добавить отделение</Button>
            <Button onClick={() => setdolznostVisible(true)} className="mt-4" variant="outline-dark">Добавить должность</Button>
            <Button onClick={() => setplataVisible(true)} className="mt-4" variant="outline-dark">Добавить платную услугу</Button>
            <Button onClick={() => setgorodVilible(true)} className="mt-4" variant="outline-dark">Добавить город</Button>

            <CreateDolznost show={dolznostVisible} onHide={() => setdolznostVisible(false)}/>
            <CreatePlata show={plataVisible} onHide={() => setplataVisible(false)}/>
            <CreateOtdelenie show={otdelenieVisible} onHide={() => setotdelenieVisible(false)}/>
            <CreatePreparat show={preparatVisible} onHide={() => setpreparatVisible(false)}/>
            <CreateRaspisanie show={raspisanieVisible} onHide={() => setRaspisanieVisible(false)}/>
            <CreateGorod show={gorodVisible} onHide={() => setgorodVilible(false)}/>



        </Container>
    );
};

export default Admin;