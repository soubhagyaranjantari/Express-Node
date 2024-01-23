const express = require("express")
const app = express()
const fs = require("fs")
const PORT = process.env.PORT || 4000
const users = require('./MOCK_DATA.json')


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
app.get(`/users`, (req, res) => {
    res.setHeader('X-MyName','SOUBHAGYA')
    console.log(req.headers);
    return res.send(`
        <ol>
            ${users.map(ele => `<li>${ele.first_name + ' ' + ele.last_name}</li><br>`).join('')}
        </ol>
    `);
});
app.post('/users', (req, res) => {
    const body = req.body;
    // console.log(req.body);
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "success", id: users.length })
    })
    // return res.json({ data: req.body })

})

app.route('/api/users/:id')
    .get((req, res) => {
        const id = req.params.id;
        const oneUser = users.find(ele => {
            return ele.id === +id
        })
        res.json(oneUser)
    })
    .patch((req, res) => {
        res.json({ status: "patch" })
    })
    .put((req, res) => {
        const id = req.params.id
        const userIndex = users.findIndex(ele => ele.id === +id)
        console.log(id, '-------------________++++++++', userIndex);
        const updatedData = { ...req.body, id: +id };
        console.log(updatedData);
        if (userIndex === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        users[userIndex] = { ...users[userIndex] = updatedData }

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                console.log('err writing to file');
                return res.status(500).json({ status: "error", message: "Internal server error" });
            }
            return res.json({ status: "success", message: "User updated", updatedId: id });

        })
    })
    .delete((req, res) => {
        const id = req.params.id;
        console.log(id);
        const filterUser = users.filter((ele) => {
            return ele.id !== +id
        })
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(filterUser), (err, data) => {
            return res.json({ status: "delete", "delete id": id })

        })
    })

app.listen(PORT, () => {
    console.log(`Server Listing On Port ${PORT}`);
})