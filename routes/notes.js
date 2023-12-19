const router = require("express").Router();
const Notes = require("../models/Notes");
// const verify = require("../middleware/verify");

router.get("/", (req, res) => {
    res.send("Note route is working");
});

router.get("/all", async (req, res) => {
    try {
        const data = await Notes.find();
        res.json({ notes: data });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

router.post("/addnote", async (req, res) => {
    try {
        const note = await Notes.create(req.body);
        res.json({ msg: "Notes Adding" });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const data = await Notes.findByIdAndDelete(req.params.id);
        res.json({ msg: "Note Delete Successful" });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

router.put("/update/:id", async (req,res)=>{
    try {
        const data =await Notes.findByIdAndUpdate(req.params.id,req.body);
    res.json({msg:"Note Update successful",data})
    } catch (error) {
        res.json({msg:error.message})
    }
})

module.exports = router;