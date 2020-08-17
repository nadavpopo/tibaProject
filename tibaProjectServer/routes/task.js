const express = require('express');
const router = express.Router();
const {taskModel,validTask} = require("../models/task_model");

router.get('/', (req, res) =>
{
    taskModel.find({})
    .then(data =>
    {
        res.json(data)
    })
});

router.post("/add" , async(req,res) =>
{
    let dataBody = req.body;
    let task = await validTask(dataBody);
    if(task.error)
    {
        res.status(400).json(task.error.details[0])
    }
    else
    {
        try
        {
            let saveData = await taskModel.insertMany([req.body]);
            taskModel.find({})
            .then(data =>
            {
                res.json(data);
            })   
        }
        catch
        {
            res.status(400).json({ message: "error insert new task, already in data" })
        }
    }
})

router.post("/edit",async(req,res) =>
{
    let dataBody = req.body;
    let task = await validTask(dataBody);
    if(task.error)
    {
        res.status(400).json(task.error.details[0])
    }
    else
    {
        try
        {
            let updateData = await taskModel.updateOne({_id:req.body.id},req.body);
            taskModel.find({})
            .then(data =>
            {
                res.json(data);
            })       
        }
        catch
        {
            res.status(400).json({ message: "error cant find id" })
        }
    }
})

router.post("/del",(req,res) =>
{
    let delId = req.body.del
    taskModel.deleteOne({_id:delId})
    .then(data =>
    {
        if(data.deletedCount > 0 )
        {
            taskModel.find({})
            .then(data =>
            {
                res.json(data);
            })  
        }
        else
        {
            res.status(400).json({error:"error id not found"});
        }
    })
})

router.post("/delAll", (req,res) =>
{
    taskModel.deleteMany({})
    .then(data =>
    {
        if(data.deletedCount > 0 )
        {
            res.json({message:"Delete all"});
        }
        else
        {
            res.status(400).json({error:"Not found"});
        }
    })
})

router.post("/sort",(req,res) =>
{
    let sortBy = req.body.sort;

    if(sortBy=="_id")
    {
        taskModel.find().sort({_id: 1})
        .then(data =>
        {
            res.json(data);
        })
    }
    if(sortBy=="cat")
    {
        taskModel.find().sort({cat: 1})
        .then(data =>
        {
            res.json(data);
        })
    }
    if(sortBy=="date")
    {
        taskModel.find().sort({date: 1})
        .then(data =>
        {
            res.json(data);
        })
    }
})

module.exports = router;