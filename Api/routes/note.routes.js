const express = require("express")
const noteController = require("../controller/notes.controller")
const checkIsAuth = require("../Middleware/Auth")

const noteRouter = express.Router()


noteRouter.get("/test",noteController.test)
noteRouter.post("/create",checkIsAuth,noteController.create)
noteRouter.get("/notes/:noteId",checkIsAuth,noteController.getById)
noteRouter.get("/notes/:userId",checkIsAuth,noteController.getAllnotes)
noteRouter.patch("/update/:noteId",checkIsAuth,noteController.update)
noteRouter.delete("/delete/:noteId",checkIsAuth,noteController.delete)

module.exports=noteRouter