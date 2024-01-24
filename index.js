const express = require("express")
const app = express()
const fs = require("fs")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 4000
// const users = require('./MOCK_DATA.json')

mongoose.connect('mongodb://127.0.0.1:27017/First-db-in-MONGODB')
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log('Error Connection on mongoDB', err))

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: String
    },
    jobTitle: {
        type: String
    },

}, { timestamps: true })

const User = mongoose.model('user', userSchema)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
    console.log('hello from created middleware');
    // res.end('pk you are done')
    next()
})

app.use((req, res, next) => {
    fs.appendFile('log.txt',
        `${Date.now()} ${req.method} ${req.path}\n`,
        (err, data) => {
            next()
        }
    )
})

app.get('/', (req, res) => {
    res.send('From Home Page')
})
app.get(`/users`, async (req, res) => {
    res.setHeader('X-MyName', 'SOUBHAGYA')
    const allDbUser = await User.find({})
    console.log(allDbUser);
    console.log(req.headers);
    return res.send(`
        <ol>
            ${allDbUser.map(ele => `<li>${ele.firstName + ' ' + ele.lastName + " " + ele.email}</li><br>`).join('')}
        </ol>
    `);
});
app.get("/api/users", async (req, res) => {
    const allDbUser = await User.find({})
    res.json(allDbUser)
})
app.post('/users', async (req, res) => {
    const body = req.body;
    // console.log(req.body);
    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({ status: "success", id: users.length })
    // })
    // return res.json({ data: req.body })
    // return res.status(201).json({ status: "success", id: users.length })

    const createdUser = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_description
    })
    console.log(createdUser);
    res.status(201).json({ msg: "sucess" })
})

app.route('/api/users/:id')
.get(async (req, res) => {
    // const id = req.params.id;
        // const oneUser = users.find(ele => {
            //     return ele.id === +id
        // })
        // res.json(oneUser)
        const singleUser = await User.findById(req.params.id)
        if (!singleUser) return res.status(404).json({ msg: "User Not Found" })
        console.log(singleUser);
        return res.json(singleUser)
    })
    .patch((req, res) => {
        res.json({ status: "patch" })
    })
    .put(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { email: req.body.email })
        res.json({ msg: "success  " })
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        res.json({msg:"Deleted"})
    })
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

app.listen(PORT, () => {
    console.log(`Server Listing On Port ${PORT}`);
})