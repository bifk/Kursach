import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {HOSPITAL_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {fetchUser, login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {createVrach, fetchVrach} from "../http/vrachAPI";
import {createPacient, fetchPacient} from "../http/pacientAPI";
import pacient from "./Pacient";
import {fetchDolznost, fetchOneDolznost, fetchOneDolznostId} from "../http/DolznostAPI";
import {fetchOneOtdelenie, fetchOneOtdelenieId, fetchOtdelenies} from "../http/OtdelenieAPI";
import DolznostList from "../components/DolznostList";
import OtdelenieList from "../components/OtdelenieList";
import OtdelenieListVrach from "../components/OtdelenieListVrach";
import RaspisanieList from "../components/RaspisanieList";
import {fetchOneRaspisanie, fetchOneRaspisanieId} from "../http/raspisanieAPI";
import CreateUlica from "../components/modals/CreateUlica";
import CreateAdress from "../components/modals/CreateAdress";
import {fetchOneGorodId, fetchOneGorodN} from "../http/gorodAPI";
import {createUlica, fetchOneUlicaId, fetchOneUlicaN} from "../http/ulicaAPI";
import {checkAdress, createAdress, fetchAdressId} from "../http/adressAPI";
import {createKart} from "../http/medKartAPI";
import JsCookie from "js-cookie";
import jsCookie from "js-cookie";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const {vrach} = useContext(Context)
    const {pacient} = useContext(Context)
    const {dolznost} = useContext(Context)
    const {otdelenie} = useContext(Context)
    const {raspisanie} = useContext(Context)
    const {gorod} = useContext(Context)
    const {ulica} = useContext(Context)
    const {adress} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [familia,setFamilia] = useState('')
    const [imya,setImya] = useState('')
    const [otchestvo,setOtchestvo] = useState('')
    const [nomer_telefona,setNomer_telefona] = useState('')
    const [nomer_polisa, setNomer_polisa] = useState('')
    const [dob, setDob] = useState('')
    const [dressVisible, setdressVisible] = useState(false)
    const [dress, setdress] = useState('')
    const [cabinet, setCabinet] = useState('')
    const [adressFocus, setAdressFocus] = useState(false)



    let data1, otd, dol

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

    const theVrach = async (data) => {

        await console.log(dol)
        await console.log(otd)
        data1 = await createVrach(familia, imya, otchestvo, nomer_telefona, cabinet, email, dol, otd, data.id)
        await setVrach(data1)
        await console.log(vrach.dolznost)

    }




    const theCheck = async (data) =>{
        let dress2
        let datau = await fetchOneUlicaN(pacient.ulica)
        if (datau === null){
            datau = await createUlica(pacient.ulica)
        }
        let dress1 = await checkAdress(pacient.dom,pacient.kvartira, data.id, datau.id)
        if (dress1 !== null){
            adress.setId(dress1.id)
        } else {

            dress2 = await createAdress(pacient.dom, pacient.kvartira, data.id, datau.id)
            adress.setId(dress2.id)
        }

        data1 = await  createPacient(familia, imya, otchestvo, nomer_polisa, dob, nomer_telefona, email, adress.id)
        let kart = await createKart(new Date(Date.now()).toISOString(), data1.id)
        await setPac(data1)
    }


    const VrachD = async (data) => {

        dol = data.id
        console.log(dol)
    }

    const VrachO = async (data) => {
        console.log(data)
        otd = data.id
    }


    const Click = async () => {
        try {
            let data
            user.setName(email)
            if (isLogin) {
                data = await login(email, password)
                    user.setRole(data.role)
                if (data.role === 'pacient'){
                    fetchPacient(email).then(data => {setPac(data)})

                } else if (data.role === 'vrach'){
                    fetchVrach(email).then(data => setVrach(data))
                }
                jsCookie.set("email", email)
            } else {

                if (isVrach) {
                    if (await fetchUser(email) === null) {
                    await console.log(dolznost.nameD.toString())
                    fetchOneDolznost(dolznost.nameD.toString()).then(data => VrachD(data))
                    fetchOneOtdelenie(otdelenie.name.toString()).then(data => {VrachO(data)})
                    fetchOneRaspisanie(raspisanie.den.toString(), raspisanie.time.toString()).then(data => {theVrach(data)})

                    user.setRole('vrach')
                    await console.log(data1)
                    }
                    else
                    {
                        alert('Пользователь с таким email уже существует')
                        return
                    }
                }
                else if (isPacient) {

                    if (await fetchUser(email) === null) {
                        fetchOneGorodN(gorod.nazvanie.toString()).then(data => theCheck(data))


                        user.setRole('pacient')
                    }
                    else
                    {
                        alert('Пользователь с таким email уже существует')
                        return
                    }
                }
                data = await registration(email, password, isVrach ? 'vrach' : 'pacient')
                jsCookie.set("email", email)
            }

            user.setUser(user)

            user.setIsAuth(true)

            history.push(HOSPITAL_ROUTE)



        } catch (e){
            console.log(e)
            alert(e.response.data.message)
        }

    }



    const [item, setItem] = useState({ kindOfStand: "Пациент", another: "another" })
    const {kindOfStand} = item

    const handleChange = e =>{


        e.persist();
        setItem(prevState => ({
            ...prevState,
            kindOfStand: e.target.value
        }));

    }

    const handleKeyPress = async (target) => {
        if (target.charCode ===13){
            await Click()
        }
    }

    const isVrach = kindOfStand === 'Врач'
    const isPacient = kindOfStand === 'Пациент'
    return (

        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        ><Card style ={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Авторизация': 'Регистрация'}</h2>
            {isLogin ? <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3"
                placeholder="Введите email"
                value={email}
                onKeyPress={handleKeyPress}
                onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите пароль"
                    value={password}
                    onKeyPress={handleKeyPress}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                     <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                    </div>

                    <Button onClick={Click} variant={"outline-success"} className="mt-3">
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Row>

            </Form>:
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"


                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"

                    />
                    {isVrach ?
                        <Form style={{width: 490}} className="">
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите фамилию"

                                value={familia}
                                onChange={e => setFamilia(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите имя"
                                value={imya}
                                onChange={e => setImya(e.target.value)}

                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите отчество"
                                value={otchestvo}
                                onChange={e => setOtchestvo(e.target.value)}

                            />

                            <Form.Control
                                className="mt-3"
                                placeholder="Введите номер телефона"

                                value={nomer_telefona}
                                onChange={e => setNomer_telefona(e.target.value)}


                            />

                            <Form.Control
                                className="mt-3"
                                placeholder="Введите кабинет"

                                value={cabinet}
                                onChange={e => setCabinet(e.target.value)}


                            />

                            <DolznostList/>
                            <OtdelenieListVrach/>
                            <RaspisanieList/>


                        </Form> :
                       isPacient?  <Form style={{width: 490}} className="">
                           <Form.Control
                               className="mt-3"
                               placeholder="Введите фамилию"
                               value={familia}

                               onChange={e => setFamilia(e.target.value)}
                           />
                           <Form.Control
                               className="mt-3"
                               placeholder="Введите имя"
                               value={imya}
                               onChange={e => setImya(e.target.value)}

                           />
                           <Form.Control
                               className="mt-3"
                               placeholder="Введите отчество"
                               value={otchestvo}
                               onChange={e => setOtchestvo(e.target.value)}

                           />
                           <Form.Control
                               className="mt-3"
                               required={true}
                               placeholder="Введите номер полиса"
                               value={nomer_polisa}
                               onChange={e => setNomer_polisa(e.target.value)}

                           />
                               <Form.Control
                                   className="mt-3"
                                   required={true}
                                   placeholder="Введите адресс (кликните по полю)"
                                   value={dress}
                                    onClick={() => {setdressVisible(true)  }}
                               />
                               <CreateAdress show={dressVisible} onHide={async () => {setdressVisible(false); await setdress(

                                   'гор. ' + gorod.nazvanie
                                        + ' ул. ' + pacient.ulica
                                        + ' д. ' + pacient.dom
                                        + ' кв. ' + pacient.kvartira)}}/>
                               <Form.Control
                                   type={"date"}

                                   className="mt-3"
                                   placeholder="Введите дату рождения"
                                   value={dob}
                                   onChange={e => setDob(e.target.value)}

                               />
                               <Form.Control
                                   className="mt-3"
                                   placeholder="Введите номер телефона"
                                   value={nomer_telefona}
                                   onChange={e => setNomer_telefona(e.target.value)}

                               />


                       </Form>
                           : <p></p>}
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                        <Form>

                                    <Form.Check

                                        inline

                                        label="Пациент"
                                        value="Пациент"
                                        name="group1"
                                        type={'radio'}
                                        onChange={handleChange}
                                        aria-label="radio 1"
                                        checked={kindOfStand === 'Пациент'}
                                    />
                                    <Form.Check
                                        inline
                                        label="Врач"
                                        value="Врач"

                                        name="group1"
                                        type={'radio'}
                                        onChange={handleChange}
                                        checked={kindOfStand === 'Врач'}
                                        aria-label="radio 2"
                                    />




                        </Form>
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>


                            <Button onClick={Click} variant={"outline-success"} className="mt-3">
                           Зарегистрироваться
                        </Button>
                    </Row>

                </Form>}

        </Card>
        </Container>
    );
});

export default Auth;


