const Education = require('../models/education');

exports.getEducation = async (req, res) => {
    try{
     const EduData = await Education.find();
     res.json(EduData);
    }catch(err){
        console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
    };
};

