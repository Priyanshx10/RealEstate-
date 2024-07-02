import express from "express";

const router = express.Router();

router.get("/test",(req,res) => {
    console.log("router Works")
})

router.post("/test",(req,res) => {
    console.log("router Works")
})


router.put("/test",(req,res) => {
    console.log("router Works")
})

router.delete("/test",(req,res) => {
    console.log("router Works")
})


export default router