import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    HOSPITAL_ROUTE,
    PACIENT_ROUTE,
    KARTA_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    DOCTORS_ROUTE,
    ZAPISI_ROUTE,
    CONTACTS_ROUTE,
    ZAPIC_ROUTE,
    VRACH_ROUTE,
    OTDELENIE_ROUTE, PLATA_ROUTE, PAYED_ROUTE,
    DOCTOR_MANAGE_ROUTE, ANALIZI_ROUTE
} from "./utils/consts";
import Hospital from "./pages/Hospital";
import Auth from "./pages/Auth";
import Pacient from "./pages/Pacient";
import Zapisi from "./pages/Zapisi";
import MedKart from "./pages/MedKart";
import Doctors from "./pages/Doctors";
import Contacts from "./pages/Contacts";
import Zapic from "./pages/Zapic";
import Vrach from "./pages/Vrach";
import Otdelenie from "./pages/Otdelenie";
import Plata from "./pages/Plata";
import Payed from "./pages/Payed";
import Manage from "./pages/Manage"
import Analizi from "./pages/Analizi";

export  const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ANALIZI_ROUTE,
        Component: Analizi
    },
    {
        path: DOCTOR_MANAGE_ROUTE,
        Component: Manage
    },
    {
        path: PACIENT_ROUTE,
        Component: Pacient
    },

    {
        path: KARTA_ROUTE,
        Component: MedKart
    },
    {
        path: ZAPISI_ROUTE,
        Component: Zapisi
    },
    {
        path: VRACH_ROUTE,
        Component: Vrach
    },
    {
        path: PAYED_ROUTE,
        Component: Payed
    },

]

export const publicRoutes = [
    {
        path: HOSPITAL_ROUTE,
        Component: Hospital
    },
    {
        path: PLATA_ROUTE,
        Component: Plata
    },
    {
        path: OTDELENIE_ROUTE,
        Component: Otdelenie
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DOCTORS_ROUTE,
        Component: Doctors
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: ZAPIC_ROUTE,
        Component: Zapic
    },
]