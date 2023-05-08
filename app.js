const express = require('express');
const {PrismaClient} = require ('@prisma/client')
const app = express();
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello WorldIMHERE!')
})

// Crear un registro
// app.post('/post', async(req, res) => {
//     const {title, content} = req.body
//     const result => await prisma.post.create({
    
//         data: {
//             title, content
//         }
//     })
//     res.json(result)
// })

// Mostrar todos los Registros
app.get('/posts', async(req, res) => {
    const posts = await prisma.countrycode.findMany()
    res.json(posts)
})


app.listen(3000, () =>
    console.log('Server ready at: http://localhost:3000')
)