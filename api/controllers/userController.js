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
        console.log(resultat)
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

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await db.query('SELECT * FROM user WHERE email = ?', [email]);

        if (result.length == 0) {
            return res.status(401).json({ error: "Utilisateur non existant" });
        }

        const user = result[0];
        const isSamePwd = await bcrypt.compare(password, user.password);

        if (!isSamePwd) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
        }

        const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Si tu as besoin de vérifier si l'utilisateur est admin et de renvoyer des données supplémentaires
        if (user.role === "admin") {
            // Tu peux ajouter les données supplémentaires ici
            return res.json({ token: token, role: user.role });
        }

        // Pour un utilisateur non admin, tu renvoies simplement le token
        return res.json({ token: token, role: user.role });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
