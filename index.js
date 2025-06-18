const express = require('express')
const cors = require('cors')
// const db = require('./db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// db.connect((err) => {
//     if(err){
//         console.error('Ошибка при подключении к базе данных:', err.message)
//     }
//     else{
//         console.log('Подключение к базе данных прошло успешно')
//     }
// })

const SECRET_KEY = 'trud_work'
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5001

// Место для запросов





app.listen(PORT, () =>{
    console.log(`Сервер работает на порту ${PORT}`)
})