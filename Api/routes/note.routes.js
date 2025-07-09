const express = require("express")
const noteController = require("../Controllers/note.controller")
const chechIsAuth = require("../Middleware/Auth")

const noteRouter = express.Router()


noteRouter.get("/test",noteController.test)
noteRouter.post("/create",chechIsAuth,noteController.create)
noteRouter.get("/notes/:noteId",chechIsAuth,noteController.getById)
noteRouter.get("/notes/:userId",chechIsAuth,noteController.getAllnotes)
noteRouter.patch("/update/:noteId",chechIsAuth,noteController.update)
noteRouter.delete("/delete/:noteId",chechIsAuth,noteController.delete)

module.exports=noteRouter