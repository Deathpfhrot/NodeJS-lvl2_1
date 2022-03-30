// const http = require("http")
// const fs = require("fs")

// const errorPage = fs.readFileSync("./public/html/error.html")
// const PORT = 9002


// const server = http.createServer((req, res) => {
//     const pageName = req.url === "/" ? "/index.html" : req.url
//     const fileEnding = pageName.endsWith(".html" ? "" : ".html")
//     const filePath = "./public/html" + pageName + fileEnding

//     fs.readFile(filePath, (err, indexHtmlData) => {
//         if (err) {
//             res.write(errorPage)
//             res.end()
//         } else {
//             res.write(indexHtmlData)
//             res.end()
//         }
//     })
//     fs.readFile("./public/html/style", (err, doing) => {
//         if (err) {
//             res.write('nope')
//             res.end()
//         } else {
//             res.write(doing)
//             res.end()
//         }
//     })
// })

// server.listen(PORT)
// console.log("server read at port", PORT);

const http = require("http")
const fs = require("fs")

const PORT = 9000

const server = http.createServer((req, res) => {

    const pageName = (req.url === "/") ? "/public/html/index.html" : req.url

    console.log(req.url);
    console.log(pageName);


    fs.readFile("." + pageName, (err, indexHtmlData) => {
        if (err) {
            res.write('error not found')
            res.end()
        } else {
            res.write(indexHtmlData)
            res.end()
        }
    })
})

server.listen(PORT)
console.log("server ready at port", PORT)