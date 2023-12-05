import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conne = await mongoose.connect(process.env.MONGODB_URL);
    if (conne) {
        console.log('MongoDB connected ');
    }
};

app.get('/api/v1/buses', (req, res)=>{
   res.send({
    success:true,
    data:[
        {
            id:1,
            name:'Bus 1',
            seats:20,
        },
        {
            id:2,
            name:'Bus 2',
            seats:20,
        }
    ],
    message:'buses Fetched'
   })
});

app.get('/api/v2/buses', (req, res)=>{
    res.send({
     success:true,
     data:[
         {
             id:1,
             name:'Bus 1',
             totaSeats:20,
         },
         {
             id:2,
             name:'Bus 2',
             totalSeats:20,
         }
     ],
     message:'buses Fetched'
    })
 })

app.post('/api/bookings', async (req, res) => {
    
    res.status(201).json({
        success: true,
        data: {},
        message: 'booking created'
    })
});

app.get("/api/bookings", async (req, res) => {
    res.json({
        success: true,
        data: [],
        message: 'Bookings fetched'
    })
});

app.get('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;

    if(id==20){
        return res.status(404).json({
            success:false,
            data:[],
            message:"booking not faund"
        })
    }
    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'bookings fetched'
    })
});

app.put('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'bookings updated'
    })
});

app.patch('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    //booking update
    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'bookings updated'
    })
});

app.delete('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    //booking update
    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'bookings delete'
    })
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
    connectDB()
})