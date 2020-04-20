const {Router} = require('express');

const PatientController = require('./controllers/PatientController');

const routes = new Router();

routes.post('/patients', PatientController.store);
routes.put('/patients/:patientsId', PatientController.update);
routes.get('/patients', PatientController.getAll);
routes.get('/patients/:patientsId', PatientController.getPatientById);
routes.delete('/patients/:patientsId', PatientController.delete);

module.exports = routes;