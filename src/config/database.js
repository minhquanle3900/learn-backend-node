require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({ //connection pool giúp trang web k sập khi kết nối với db nó đứng giữa db và querry
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, //giới hạn bao nhiêu lượt truy vấn qua pool
    queueLimit: 0
});
module.exports = connection