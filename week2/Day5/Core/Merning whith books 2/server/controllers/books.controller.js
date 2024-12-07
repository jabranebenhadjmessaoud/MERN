import Book from "../models/books.model.js"


const BookController={

    create: async (req, res) => {
        try {
            const newBook = await Book.create(req.body)
            res.json(newBook)
            console.log(newBook);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveAll: async (req, res) => {
        try {
            const AllBooks = await Book.find()
            res.json(AllBooks)
            console.log(AllBooks);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveOne: async (req, res) => {
        try {
            const OneBook = await Book.findById(req.params.id)
            res.json(OneBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updateBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const OneBook = await Book.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }

}



export default BookController