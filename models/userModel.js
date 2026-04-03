const pool = require("../db/db");

// get user by username
const login = async (email) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
    );
    return result.rows[0];
};

// create user
const register = async (password,email) => {
    const result = await pool.query(
        "INSERT INTO users(email,password) VALUES($1,$2) RETURNING *",
        [email,password]
    );
    return result.rows[0];
};




module.exports = { login, register};