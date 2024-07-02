import express from "express";

const router = express.Router();

router.post("/register",(req,res) => {
    console.log("router Works")
})

router.post("/login",(req,res) => {
    console.log("router Works")
})


router.post("/logout",(req,res) => {
    console.log("router Works")
})


export default router