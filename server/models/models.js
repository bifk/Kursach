const sequelize = require('../db')
const {Data, DataTypes} = require('sequelize')




const pacient = sequelize.define('Pacient', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    familia: {type: DataTypes.STRING, allowNull: false},
    imya: {type: DataTypes.STRING, allowNull: false},
    otchestvo: {type: DataTypes.STRING},
    nomer_polisa: {type: DataTypes.STRING, unique: true, allowNull: false},
    dob: {type: DataTypes.DATEONLY, allowNull: false}, //Дата рождения
    nomer_telefona: {type: DataTypes.STRING, unique:true},
    email: {type: DataTypes.STRING, unique: true},

})

const user = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false},
    role: {type: DataTypes.STRING, defaultValue: "pacient"}
})

const mesto_jitelstva = sequelize.define('Adress', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dom: {type: DataTypes.INTEGER, allowNull: false},
    kvartira: {type: DataTypes.INTEGER, allowNull: false}
})

const gorod = sequelize.define('City', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nazvanie: {type: DataTypes.STRING, unique:true, allowNull: false}
})

const ulica = sequelize.define('Street', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nazvanie: {type: DataTypes.STRING, unique:true, allowNull: false}
})

const analizi = sequelize.define('Analyses',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
    results: {type: DataTypes.STRING}
})

const zapic = sequelize.define('Zapic',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATEONLY, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    cabinet: {type: DataTypes.INTEGER, allowNull: false}
})

const vrach = sequelize.define('Doctor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull:false, unique: true},
    familia: {type: DataTypes.STRING, allowNull: false},
    imya: {type: DataTypes.STRING, allowNull: false},
    otchestvo: {type: DataTypes.STRING},
    nomer_telefona: {type: DataTypes.STRING},
    cabinet: {type: DataTypes.INTEGER, allowNull: false}
})

const raspisanie = sequelize.define('Shedule', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    den:{type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.STRING, allowNUll: false}
})

const otdelenie = sequelize.define('Department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull:false},
    corpus: {type: DataTypes.INTEGER, allowNull:false},
    zaved: {type: DataTypes.STRING, allowNull:false}
})

const dolznost = sequelize.define('Position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    salary: {type: DataTypes.INTEGER, allowNull: false}
})

const platnaia_usluga = sequelize.define('Pay_function', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull:false}
})

const diagnoz = sequelize.define('Diagnosis', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    stepen_boli: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING}
})

const diagnoz_kartochka = sequelize.define('Diagnosis_kart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE} // Дата постановки
})

const priem = sequelize.define('Priem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATEONLY}
})

const diagnoz_priem = sequelize.define('Diagnosis_priem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const preparat = sequelize.define('Preparat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    isRecipe: {type: DataTypes.BOOLEAN, allowNull: false},
    name: {type: DataTypes.STRING, unique:true, allowNull: false}
})

const med_kartochka = sequelize.define('Med_kart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATEONLY} // Дата выдачи
})

const preparat_diagnoz = sequelize.define('Preparat_diagnoses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const plata_pacient = sequelize.define('PayFunction_pacient',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const analizi_zapic = sequelize.define('Analizi_zapic', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const analizi_priem = sequelize.define('Analizi_priem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

analizi.belongsToMany(priem, {through: analizi_priem})
priem.belongsToMany(analizi, {through: analizi_priem})

analizi.belongsToMany(zapic, {through: analizi_zapic})
zapic.belongsToMany(analizi, {through: analizi_zapic})


gorod.hasMany(mesto_jitelstva)
mesto_jitelstva.belongsTo(gorod)

ulica.hasMany(mesto_jitelstva)
mesto_jitelstva.belongsTo(ulica)

mesto_jitelstva.hasMany(pacient)
pacient.belongsTo(mesto_jitelstva)

dolznost.hasMany(vrach)
vrach.belongsTo(dolznost)

raspisanie.hasMany(vrach)
vrach.belongsTo(raspisanie)

otdelenie.hasMany(vrach)
vrach.belongsTo(otdelenie)

pacient.hasMany(med_kartochka)
med_kartochka.belongsTo(pacient)

med_kartochka.belongsToMany(diagnoz,{through: diagnoz_kartochka})
diagnoz.belongsToMany(med_kartochka,{through: diagnoz_kartochka})

diagnoz.belongsToMany(priem,{through: diagnoz_priem})
priem.belongsToMany(diagnoz,{through: diagnoz_priem})

preparat.belongsToMany(diagnoz,{through: preparat_diagnoz})
diagnoz.belongsToMany(preparat,{through: preparat_diagnoz})


pacient.hasMany(zapic)
zapic.belongsTo(pacient)

vrach.hasMany(zapic)
zapic.belongsTo(vrach)

pacient.hasMany(priem)
priem.belongsTo(pacient)

vrach.hasMany(priem)
priem.belongsTo(vrach)

pacient.belongsToMany(platnaia_usluga, {through: plata_pacient})
platnaia_usluga.belongsToMany(pacient, {through: plata_pacient})



module.exports = {
    pacient,
    mesto_jitelstva,
    gorod,
    ulica,
    analizi,
    zapic,
    vrach,
    user,
    raspisanie,
    otdelenie,
    dolznost,
    platnaia_usluga,
    diagnoz,
    diagnoz_kartochka,
    priem,
    diagnoz_priem,
    preparat,
    med_kartochka,
    preparat_diagnoz,
    plata_pacient,
    analizi_zapic,
    analizi_priem
}