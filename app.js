// // import 'dotenv/config.js';
// import './config/database.js'
// import createError from 'http-errors';
// import express from 'express';
// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import cors from 'cors';

// import indexRouter from './routes/indexRouter.js';

// import { __dirname } from './utils.js';

// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


// //middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors)
// app.use(logger('dev'));



// //**
// app.use(express.static(path.join(__dirname, 'public')));

// //router
// app.use('/api', indexRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// export default app;


//Armado con express generator, en desuso