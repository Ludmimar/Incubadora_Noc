const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const courseRoutes = require('./course');
const userRoutes = require('./user');
const coursesDetailRoutes = require('./courseDetail');
const teacherRoutes = require('./teacher');
const studentRoutes = require('./student');
const cohortRoutes = require('./cohort');
const adminRoutes = require('./admin');
const authRoutes = require('./auth');

// use=
app.use('/coursesDetail', coursesDetailRoutes);
app.use('/courses', courseRoutes);
app.use('/teachers', teacherRoutes);
app.use('/user', userRoutes);
app.use('/student', studentRoutes);
app.use('/cohort', cohortRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
