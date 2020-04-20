const Patient = require('../app/models/Patient');
const Yup = require('yup');

class PatientController {
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Name or email invalid'})
        }

        const patientExists = await Patient.findOne({ where: {email: req.body.email} });

        if (patientExists) {
            return res.status(400).json({ error: 'Email already exists'});
        }

        const patient = await Patient.create(req.body);

        return res.json(patient);
    }

    async getAll(req, res){
        const patients = await Patient.findAll();

        return res.json(patients);
    }

    async getPatientById(req, res){
        
            const patient = await Patient.findByPk(req.params.patientsId);
        if(!patient){
            return res.status(400).json('Patient with this ID does not exists')
        }
        return res.json(patient)
    }


        async update(req,res){
            const schema = Yup.object().shape({
                name: Yup.string(),
                email: Yup.string().email(),
            });
    
            if(!(await schema.isValid(req.body))){
                return res.status(400).json({error: 'Name or email invalid'})
            }
            
            const {patientsId} = req.params;
            const patient = await Patient.findByPk(req.params.patientsId);
            const updated = await Patient.update(req.body, {
                where: { id: patientsId }
                
              });
        if(updated){
            return res.status(200).json('Patient updated')
            }

        if(!patient){
            return res.status(400).json('Patient with this ID does not exists');
            
        }
        return res.json(updated)
    }

    async delete(req, res){
        const {patientsId} = req.params;
            const patient = await Patient.findByPk(req.params.patientsId);
            const deleted = await Patient.destroy( {
                where: { id: patientsId }
                
              });
        if(deleted){
            return res.status(200).json('Patient deleted')
            }

        if(!patient){
            return res.status(400).json('Patient with this ID does not exists');
            
        }
        return res.json(deleted)
    }
            
    }


module.exports = new PatientController();