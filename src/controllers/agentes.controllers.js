import { pool } from "../db.js";

export const getAgentes = async (req, res) => {
    try {
        //throw new Error("DB inesperaded Error");
        const [rows] = await pool.query("SELECT * FROM agente");
        res.json(rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "something goes wrong",
        });
    }
};

export const getAgente = async (req, res) => {
    try {
        //is params
        console.log("parametro: ", req.params.id);
        const [rows] = await pool.query("SELECT * FROM agente WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length <= 0)
            return res.status(404).json({
                message: "Agent not found :[", 
            });

        console.log(rows);
        //res.send('obtengo 1 agnt')

        res.json(rows[0]);
    } catch (error) { 
        console.log(e);
        return res.status(500).json({
            message: "something goes wrong",
        });
    }
};

export const createAgentes = async (req, res) => {
    try {
        console.log(req.body);
        const { name, usuario, phone, passwd } = req.body; 
        const [rows] = await pool.query(
            "INSERT INTO agente(name,usuario,phone,passwd) VALUES(?, ?, ?, ?)",
            [name, usuario, phone, passwd]
        );
        res.send({
            id: rows.insertId,
            name,
            usuario,
            phone,
            passwd,
        });
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            message: "something goes wrong",
        });
    }
};

export const updateAgentes = async (req, res) => {
    const { id } = req.params;
    const { name, usuario, phone, passwd } = req.body;
    console.log("{ ", id, name, usuario, phone, passwd, "}\n");
    
    try {
        const [result] = await pool.query("UPDATE agente SET name = IFNULL(?, name), usuario = IFNULL(?, usuario), phone = IFNULL(?, phone), passwd = IFNULL(?, passwd) WHERE id = ?",
            [name, usuario, phone, passwd, id]
        );
        console.log(result);
    
        if (result.affectedRows === 0)
            return res.status(404).json({
                message: "Agent not found",
            });
        const [rows] = await pool.query("SELECT * FROM agente WHERE id = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            message: "something goes wrong",
        });
    }
};

export const deleteAgentes = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM agente WHERE id = ?", [
            req.params.id,
        ]);
        console.log("\n Esto pasó: \n ", result);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                message: "Agent deleted :]:",
            });
    
        res.sendStatus(404);
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            message: "something goes wrong",
        }); 
    }
};
