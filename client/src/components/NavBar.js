import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import {useHistory} from "react-router-dom";
import {
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    HOSPITAL_ROUTE, KARTA_ROUTE, LOGIN_ROUTE,
    OTDELENIE_ROUTE, PACIENT_ROUTE, PAYED_ROUTE, PLATA_ROUTE, VRACH_ROUTE,
    ZAPIC_ROUTE,
    ZAPISI_ROUTE
} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {Button, Container, DropdownButton, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Dropdown from 'react-bootstrap/Dropdown';
import {fetchDolznost, fetchOneDolznostId} from "../http/DolznostAPI";
import {fetchOneOtdelenieId, fetchOtdelenies} from "../http/OtdelenieAPI";
import {fetchOneRaspisanieId, fetchRaspisanies} from "../http/raspisanieAPI";
import {fetchDoctors, fetchVrach} from "../http/vrachAPI";
import {fetchGorods, fetchOneGorodId} from "../http/gorodAPI";
import {fetchOneUlicaId} from "../http/ulicaAPI";
import {fetchPlata} from "../http/plataAPI";
import jsCookie from "js-cookie";
import {fetchUser} from "../http/userAPI";
import {fetchAdressId} from "../http/adressAPI";
import {fetchPacient} from "../http/pacientAPI";
import {fetchPreparat} from "../http/preparatAPI";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const {pacient} = useContext(Context)
    const {dolznost} = useContext(Context)
    const {otdelenie} = useContext(Context)
    const {raspisanie} = useContext(Context)
    const {adress} = useContext(Context)
    const {vrach} = useContext(Context)
    const {gorod} = useContext(Context)
    const {ulica} = useContext(Context)
    const {plata} = useContext(Context)
    const {preparat} = useContext(Context)
    const {diagnoz} = useContext(Context)
    const history = useHistory()
    //user.setName('')

    useEffect(() => {
        /* Переработать чтобы не имя заносилось а айди */
        let Limit = 1
        fetchDolznost({}).then(data => {dolznost.setDolznosts(data)})
        fetchDolznost({Limit}).then(data => {dolznost.setName(data[0].name)})
        fetchOtdelenies({}).then(data => {otdelenie.setOtledenies(data)})
        fetchOtdelenies({Limit}).then(data => {otdelenie.setName(data[0].name)})
        fetchPlata().then(data => {plata.setPlatas(data)})
        fetchRaspisanies({}).then(data => {raspisanie.setRaspisanies(data); raspisanie.setDen('Пн-Пт')})
        fetchRaspisanies({Limit}).then(data => {raspisanie.setDen(data[0].den); raspisanie.setTime(data[0].time)})
        fetchDoctors().then(data => vrach.setDoctors(data))
        fetchGorods({}).then(data => {gorod.setGorods(data)})
        fetchPreparat({}).then(data => {preparat.setPreparats(data)})
        fetchPreparat({Limit}).then(data => {preparat.setName(data[0].name)})

    }, [])


    const setPac = async (data) => {
        fetchAdressId(data.AdressId).then(data => {
            fetchOneGorodId(data.CityId).then(data => {
                gorod.setNazvanie(data.nazvanie)
                console.log(gorod.nazvanie)
            })
            fetchOneUlicaId(data.StreetId).then(data => {
                console.log(data)
                ulica.setNazvanie(data.nazvanie)

            })
            adress.setDom(data.dom)
            adress.setKvartira(data.kvartira)
            console.log(data.StreetId)
        })
        pacient.setId(data.id)
        pacient.setPacient(data);
        pacient.setFamiliaP(data.familia);
        pacient.setEmail(data.email)
        pacient.setImya(data.imya)
        pacient.setOtchestvo(data.otchestvo)
        pacient.setDob(data.dob)
        pacient.setNomer_polisa(data.nomer_polisa)
    }

    const setVrach = async (data) => {
        console.log(data)
        vrach.setId(data.id)
        vrach.setCabinet(data.cabinet)
        vrach.setFamilia(data.familia);
        vrach.setEmail(data.email)
        vrach.setImya(data.imya)
        vrach.setOtchestvo(data.otchestvo)
        vrach.setNomer_telefona(data.nomer_telefona)

        if (data.PositionId !== null)
            fetchOneDolznostId(data.PositionId).then(data => {

                vrach.setDolznostV(data.name)
            })
        console.log(data)

        if (data.DepartmentId !== null)
            fetchOneOtdelenieId(data.DepartmentId).then(data => {
                vrach.setOtdelenie(data.name)
            })

        if (data.SheduleId !== null)
            fetchOneRaspisanieId(data.SheduleId).then(data => {
                vrach.setRaspisanie(data.den + ' ' + data.time);
            })
    }

    const readCookie = async () => {
        const userC = jsCookie.get("email")
        let data = await fetchUser(userC)
       switch (data.role){
           case 'pacient':
               fetchPacient(userC).then(data => {
                   setPac(data)
               })
               break
           case 'vrach':
               fetchVrach(userC).then(data => {
                   setVrach(data)
               })
               break
       }
        user.setRole(data.role)
        user.setIsAuth(true)
    }

    useEffect(()=>{
        readCookie().then()
    }, [])


    const logOut = () => {
        user.setName('')
        user.setRole('')
        user.setUser({})
        pacient.setPacient({})
        user.setIsAuth(false)
        pacient.deletePacient()
        jsCookie.remove("email")

    }
    return (

        <Navbar bg="dark" variant="dark">

            <Container>
                <NavLink style={{color:'white', textDecoration: 'none'}} to={HOSPITAL_ROUTE}>Поликлиника "Афонька"</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style={{color: 'white'}}>

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={ZAPIC_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiR8f90gflamhFIlzd2sCuEyBy3_wUInPpSBDEPkAZSBHBjM9sdrcrZjPUaqAd4B5yi0&usqp=CAU"
                               className="me-1"
                    ></Image>Запись к врачу</NavLink>

                    {/*<NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={DOCTORS_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img279/4114304/bez-nazvaniia.png"
                               className="me-1"
                    ></Image>
                        Персонал</NavLink>*/}

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={OTDELENIE_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img155/4114315/pngtree-hospital-icon-vector-png-image_1768115.jpg"
                               className="me-1"
                    ></Image>Отделения</NavLink>

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={CONTACTS_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img134/4114309/bez-nazvaniia-1.png"
                               className="me-1"
                    ></Image>Контакты</NavLink>

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={PLATA_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img217/4114325/1200px-russian_rouble_sign_pt_serif_1000svg.png"
                               className="me-1"
                        ></Image>Платные услуги</NavLink>

                    <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img283/4114334/bez-nazvaniia-2.png"
                           className="mt-2 "
                    ></Image><DropdownButton variant={"dark"} id="dropdown-basic-button" title="Личный кабинет">

                    {user.therole === 'vrach' || user.therole==='pacient' ? <Dropdown.Item onClick={() => {history.push(user.therole === 'vrach' ? VRACH_ROUTE : PACIENT_ROUTE)}}>Личная информация</Dropdown.Item> : ''}
                    {user.therole === 'pacient' ? <Dropdown.Item onClick={() => history.push(KARTA_ROUTE)}>Мед. Карта</Dropdown.Item> : ''}
                        <Dropdown.Item onClick={() => history.push(ZAPISI_ROUTE)}>Записи</Dropdown.Item>
                    {user.therole === 'pacient' ? <Dropdown.Item onClick={() => history.push(PAYED_ROUTE)}>Купленные услуги</Dropdown.Item> : ''}
                    {user.therole === 'ADMIN' ? <Dropdown.Item onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Dropdown.Item> : ''}

                        <Dropdown.Item onClick={() => logOut()}>Выйти</Dropdown.Item>
                    </DropdownButton>
                </Nav>
                :
                <Nav className="ms-auto" style={{color: 'white'}}>
                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={ZAPIC_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiR8f90gflamhFIlzd2sCuEyBy3_wUInPpSBDEPkAZSBHBjM9sdrcrZjPUaqAd4B5yi0&usqp=CAU"
                               className="me-1"
                        ></Image>Запись к врачу</NavLink>

                   {/* <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={DOCTORS_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img279/4114304/bez-nazvaniia.png"
                               className="me-1"
                        ></Image>
                        Персонал</NavLink>*/}

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={OTDELENIE_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img155/4114315/pngtree-hospital-icon-vector-png-image_1768115.jpg"
                               className="me-1"
                        ></Image>Отделения</NavLink>

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={CONTACTS_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img134/4114309/bez-nazvaniia-1.png"
                               className="me-1"
                        ></Image>Контакты</NavLink>

                    <NavLink className="mt-2 me-5" style={{color:'white', textDecoration: 'none'}} to={PLATA_ROUTE}>
                        <Image style={{maxWidth: 30, maxHeight: 30}} src="https://imageup.ru/img217/4114325/1200px-russian_rouble_sign_pt_serif_1000svg.png"
                               className="me-1"
                        ></Image>Платные услуги</NavLink>
                    <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar;