import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import OtdelenieStore from "./store/OtdelenieStore";
import PacientStore from "./store/pacientStore";
import DolznostStore from "./store/dolznostStore";
import VrachStore from "./store/vrachStore";
import RaspisanieStore from "./store/raspisanieStore";
import UlicaStore from "./store/ulicaStore";
import GorodStore from "./store/gorodStore";
import AdressStore from "./store/adressStore";
import PlataStore from "./store/plataStore";
import ZapicStore from "./store/zapicStore";
import PreparatStore from "./store/preparatStore";
import DiagnozStore from "./store/diagnozStore";
import PriemStore from "./store/priemStore";
import AnaliziStore from "./store/analiziStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        pacient: new PacientStore(),
        dolznost: new DolznostStore(),
        otdelenie: new OtdelenieStore(),
        vrach: new VrachStore(),
        raspisanie: new RaspisanieStore(),
        gorod: new GorodStore(),
        ulica: new UlicaStore(),
        adress: new AdressStore(),
        plata: new PlataStore(),
        zapic: new ZapicStore(),
        preparat: new PreparatStore(),
        diagnoz: new DiagnozStore(),
        priem: new PriemStore(),
        analizi: new AnaliziStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
)
