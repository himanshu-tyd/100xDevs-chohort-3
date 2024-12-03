const http=require('http')

const app=http.createServer((req,res)=>{
    res.write('hellow word');
    res.end()
})

app.listen(3000)