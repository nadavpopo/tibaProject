const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

    let taskSchema = mongoose.Schema(
    {
        info:
        {
            type:String,
            required:true,
            minLength:2,
            maxLength:999
        },
        cat:
        {
            type:String,
            required:true,
            minLength:2,
            maxLength:99
        },
        date:{type:Date,default:Date.now()}
    })
  
    exports.taskModel = mongoose.model("tasks",taskSchema);
    
    const validTask = (_task) =>
    {
        let JoiSchema = Joi.object(
        {
            id:Joi.string(),
            info:Joi.string().min(2).max(999).required(),
            cat:Joi.string().min(2).max(99).required()
        })
    
        return JoiSchema.validate(_task);
    }
    
    exports.validTask = validTask;