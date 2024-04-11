/************************************/
 /***Import des modules nécessaires**/
 const express = require('express')
 const cors = require('cors')

/************************************/
/*******Initialisation de l'API******/
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))

/************************************/
/******Mise en place du routage******/

app.get('/', (req, res) => res.send('Welcome online'))
app.get('*', (req, res) => res.status(501).send('What the hell are jou doing!?!'))

/************************************/
/***********start server************/

app.listen(8989, () =>{
    console.log('this server is running on port 8989. have fun!')
})