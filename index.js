const express = require('express')
const path = require("path")

const app = express()



//publicにあるhtmlファイルを簡単に読めるようにする記述
app.use(express.static(path.join(__dirname,"public")))

// app.get('/', function (req, res) {
//   res.send('トップページ')
// });

app.use(express.urlencoded({extended:false}));

//ブラウザから何かしら値が送信された場合はpost
app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  if(answer === "2"){
    // res.send("<h1>正解</h1>")
    res.redirect("/correct.html")
  }else{
    // res.send("<h1>不正解</h1>")
    res.redirect("/wrong.html")
  }
});

app.listen(3000 , function () {
    console.log("I am runnning!");
});

console.log("再修業")