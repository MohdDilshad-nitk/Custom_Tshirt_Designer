import express  from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';
// import stablediffusion from './routes/stable_diffusion.routes.js';
// import leapAI from './routes/leap.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limig : "50mb"}));
app.use('/api/v1/dalle',dalleRoutes);
// app.use('/api/v1/stable',stablediffusion);
// app.use('/api/v1/leap',leapAI);

app.get('/',(req,res) => {
    res.status(200).json({message: "hello"});
})

app.listen(8080, () => {console.log('server running');});