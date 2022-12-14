    import {config} from 'dotenv'

    config()

    // console.log(process.env.PORT)
    // console.log(process.env.DB_HOST)
    // console.log(process.env.DB_USER)
    // console.log(process.env.DB_PASSWORD)
    // console.log(process.env.DB_DATABASE)

    export const PORT = process.env.PORT || 8000
    export const DB_USER = process.env.DB_USER || 'root'
    export const DB_PASSWORD = process.env.DB_PASSWORD || 'secret'
    export const DB_HOST = process.env.DB_HOST || 'localhost'
    export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
    export const DB_PORT = process.env.DB_PORT || '33060'
    export const JWT_SECRETO = process.env.JWT_SECRETO 
    export const JWT_TIMPO_EXPIRA =process.env.JWT_TIMPO_EXPIRA
    export const JWT_COOKIE_EXPIRA = process.env.JWT_COOKIE_EXPIRA
