import {model ,Schema} from 'mongoose'

const BookSchema= new Schema (
    {
        title:{
            type:String,
            required:[true,"Please Enter A valid Tittle"],
            minlength:[2,"The tittle must be at least 3 characters"],
            maxlength:[255,"the tittle cannot be more than 255 caracters"]
        },
        author:{
            type:String,
            required:[true,"Please Enter A valid author"],
            minlength:[5,"The author must be at least 3 characters"],
            maxlength:[255,"the author cannot be more than 255 caracters"]
        },
        pages:{
            type:Number,
            required:[true,"Please Enter valid count of pages"],
            min:[1,"The pages must be at least 1"]
        },
        isAvailable:{
            type:Boolean,
            default:false
        }
    },

        { timestamps: true }
)


const Book=model("Book",BookSchema) ;
export default Book