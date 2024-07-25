const express=require('express');
const cors=require('cors');
const app=express();
require('dotenv').config();
require('./db');

//app.use(bodyParser());
app.use(express.json());
app.use(cors());

const userRouter=require('./routers/users.router');
const authRouter=require('./routers/auth.router');
const notesRouter=require('./routers/notes.router');

app.get('/',(req,res)=>{
    res.send('Hello CipherSchools');
    res.end();
});

app.use('/api/notes',notesRouter);
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

