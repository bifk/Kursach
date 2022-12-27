const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function (req, res, next){
    if (req.method === "OPTIONS"){
        next()
    }
    try{
        let isDeny = true
        const token = req.headers.authorization.split(' ')[1]

        if (!token){

            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        for (let i = 0; i < role.length; i++) {
            if (decoded.role === role[i]) {
                isDeny = false
            }
        }
        if (isDeny)
            return res.status(401).json({message: "Нет доступа"})

        req.user = decoded;
        next()
    } catch (e){
        res.status(401).json({message: "Не авторизован"})
        }
    }
}