const express = require("express")
const logForReqRes = require("./middlewares")
const connectMongoDb = require("./connection")
const userRouter = require('./Routers/userRouter')
const app = express()
const PORT = process.env.PORT || 4000

// Connection
connectMongoDb('mongodb://127.0.0.1:27017/First-db-in-MONGODB').then(() => console.log("monoDB Connected")).catch(err => console.log(err))

//  Middelwares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logForReqRes('log.txt'))
// app.use((req, res, next) => {
//     console.log('hello from created middleware');
//     next();
// })

//  Routes
app.get('/', (req, res) => {
    return res.json({ MSG: " FROM HOME PAGE " })
})
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server Listing On Port ${PORT}`);













    // app.get(`/users`, (req, res) => {
    //     res.setHeader('X-MyName', 'SOUBHAGYA')
    //     console.log(req.headers);
    //     return res.send(`
    //         <ol>
    //             ${users.map(ele => `<li>${ele.first_name + ' ' + ele.last_name}</li><br>`).join('')}
    //         </ol>
    //     `);
    // });
    // .put((req, res) => { 
    //     const id = req.params.id
    //     const userIndex = users.findIndex(ele => ele.id === +id)
    //     console.log(id, '-------------________++++++++', userIndex);
    //     const updatedData = { ...req.body,  id: +id };
    //     console.log(updatedData);
    //     if (userIndex === -1) {
    //         return res.status(404).json({ status: "error", message: "User not found" });
    //     }
    //     users[userIndex] = { ...users[userIndex] = updatedData }

    //     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
    //         if (err) {
    //             console.log('err writing to file');
    //             return res.status(500).json({ status: "error", message: "Internal server error" });
    //         }
    //         return res.json({ status: "success", message: "User updated", updatedId: id });

    //     })
    // })
    // .delete((req, res) => {
    //     const id = req.params.id;
    //     console.log(id);
    //     const filterUser = users.filter((ele) => {
    //         return ele.id !== +id
    //     })
    //     fs.writeFile('./MOCK_DATA.json', JSON.stringify(filterUser), (err, data) => {
    //         return res.json({ status: "delete", "delete id": id })

    //     })
    // })
})
//  for POST REQ
// console.log(req.body);
// users.push({ ...body, id: users.length + 1 })
// fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     return res.status(201).json({ status: "success", id: users.length })
// })
// return res.json({ data: req.body })
// return res.status(201).json({ status: "success", id: users.length })