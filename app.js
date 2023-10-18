const express= require('express');
const app = express();


//definir motor de plantilla ejs
app.set('view engine','ejs');

//definicion de como voy a capturar los datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', require('./router'));

app.listen(3000,()=>{
    console.log('SERVER UP IN http://localhost:3000')
});  