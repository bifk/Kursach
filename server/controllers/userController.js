const ApiError = require('../error/ApiError')
const {user, gorod} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY,{expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next){
        const {email, password, role} = req.body
        if (!email || !password){
            return next(ApiError.badRequest('Некоректный email или пароль'))
        }
        const candidate = await user.findOne({where: {email}})
        if (candidate)
        {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const User = await user.create({email, role, password: hashPassword})
        const token = generateJwt(User.id, User.email, User.role)
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body
        const User = await user.findOne({where: {email}})
        if (!User)
        {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, User.password)
        if (!comparePassword){
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(User.id, User.email, User.role)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getOne(req, res) {
        const {email} = req.params
        const User = await user.findOne({
            where: {email},
        })

        return res.json(User)
    }
}

module.exports = new UserController()