import { Request } from 'express'
import multer from 'multer';


const storage = multer.diskStorage({
    destination(req: Request, file: any, cb: any) {
        cb(null, 'public/books')
    },
    filename(req: Request, file: any, cb: any) {
        cb(null, file.originalname)
    }
})

export default multer({ storage });