const fs = require("fs")

const logForReqRes = (fileName) => {
    return (req, res, next) => {
        fs.appendFile(fileName,
            `${Date.now()} ${req.method} ${req.path}\n`,
            (err, data) => {
                next();
            }
        )
    }
}
module.exports=logForReqRes;
