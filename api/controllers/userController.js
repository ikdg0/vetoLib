const db = require('../databases/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    try {
        const resultat = await db.query("SELECT * FROM user");
        console.log(resultat);
        res.status(200).json(resultat);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs", error });
    }
};

exports.createUser = async (req, res) => {
    const { username, password, email, user_type } = req.body;

    // Hashage du mot de passe avant stockage
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await db.query("INSERT INTO User (username, password, email, user_type) VALUES (?, ?, ?, ?)", [username, hashedPassword, email, user_type]);
        res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const resultat = await db.query("SELECT * FROM User WHERE user_id = ?", [id]);
        if (resultat.length > 0) {
            res.status(200).json(resultat[0]);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur", error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, email, user_type } = req.body;

    // Optionnel : Hashage du mot de passe s'il est fourni dans la requête
    let hashedPassword;
    if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
    }

    try {
        await db.query("UPDATE User SET username = ?, password = ?, email = ?, user_type = ? WHERE user_id = ?", [username, hashedPassword || password, email, user_type, id]);
        res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur", error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM User WHERE user_id = ?", [id]);
        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur", error });
    }
};
