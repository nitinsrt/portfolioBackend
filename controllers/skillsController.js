const Skills = require("../models/skills")

exports.getAllSkills = async (req, res) => {

    try{
        const mySkills = await Skills.find()
        res.json(mySkills)
    }catch(err){
        console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
    }

}