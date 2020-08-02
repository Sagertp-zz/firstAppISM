import express, { json } from 'express'
import Indexroutes from './routes/index.routes'
import TaskRoutes from "./routes/tasks.routes";

const 
  app = express()

app
  .use(express.urlencoded({ extended: true }))
  .use( json() );

// Setimgd 
app.set('port', process.env.PORT || 3000);


//M
//Routes
app.use('/api/act', Indexroutes);
app.use('/api/tasks', TaskRoutes);

export default app;