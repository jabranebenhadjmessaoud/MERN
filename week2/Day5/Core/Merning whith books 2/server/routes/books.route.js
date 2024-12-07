import BookController from "../controllers/books.controller.js";
import { Router } from "express";

const router=Router()

router.route("/createbook")
    .post(BookController.create)

router.route("/books")
    .get(BookController.retrieveAll)

router.route("/book/:id")
    .get(BookController.retrieveOne)
    .put(BookController.update)
    .delete(BookController.DeleteOne)

    

    


export default router
