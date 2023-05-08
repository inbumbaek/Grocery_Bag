const Grocery = require('../models/groceryModels');

module.exports = {
    // findAllGroceries: (req, res) => {
    //     Grocery.find()
    //         .then((allGroceries) => {
    //             res.status(200).json(allGroceries)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },
    findAllGroceries: async (req, res) => {
        try{
            const allGroceries = await Grocery.find();
            res.status(200).json(allGroceries)
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    // createGrocery: (req, res) => {
    //     Grocery.create(req.body)
    //         .then((newGrocery) => {
    //             res.status(200).json(newGrocery)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },

    createGrocery: async (req, res) => {
        try{
            const newGrocery = await Grocery.create(req.body);
            res.status(201).json(newGrocery);
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    
    findOneGrocery: (req, res) => {
        Grocery.findOne({_id: req.params.id})
            .then((oneGrocery) => {
                res.status(200).json(oneGrocery)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateGrocery: (req, res) => {
        Grocery.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators:true})
            .then((updatedGrocery) => {
                res.json({show:updatedGrocery})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deleteGrocery: (req, res) => {
        Grocery.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        }); 
    }
}