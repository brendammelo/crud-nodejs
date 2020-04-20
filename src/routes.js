const {Router} = require('express');

const PatientController = require('./controllers/PatientController');

const routes = new Router();

routes.post('/api/patients', PatientController.store);
routes.put('/api/patients/:patientsId', PatientController.update);
routes.get('/api/patients', PatientController.getAll);
routes.get('/api/patients/:patientsId', PatientController.getPatientById);
routes.delete('/api/patients/:patientsId', PatientController.delete);

module.exports = routes;