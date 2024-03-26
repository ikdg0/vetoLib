const mariadb = require('mariadb');
const $ENV = process.env;

// Créer une nouvelle connexion à la base de données
const pool = mariadb.createPool({
    host: $ENV['DB_HOST'],
    user: $ENV['DB_USER'],
    password: $ENV['DB_PWD'],
    database: $ENV['DB_NAME'],
    connectionLimit: 5
});

// Fonction pour récupérer tous les animaux
async function getAllAnimals() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM animals');
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.release();
    }
}

// Exporter les fonctions du modèle
module.exports = {
    getAllAnimals
};