import {pool} from '../db.js' //export modulos va con .js
export const ping = async(req, res) => {

    const [result] = await pool.query('SELECT "PONG" AS result')
    res.json(result[0])
}