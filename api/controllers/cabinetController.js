const db = require('../databases/database');

exports.getAllCabinets = async (req, res) => {
    try {
        const resultats = await db.query("SELECT * FROM cabinet");
        res.status(200).json(resultats);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des cabinets", error });
    }
};

exports.addCabinet = async (req, res) => {
    const { cabinet_name, owner_id, address, city, phone_number,description,image, is_available } = req.body;
    try {
        await db.query("INSERT INTO cabinet (cabinet_name, owner_id, address, city, phone_number,description,image, is_available ) VALUES (?,?,?,?,?,?,?,?)", [cabinet_name, owner_id, address, city, phone_number,description,image, is_available]);
        res.status(201).json({ message: 'Cabinet ajouté avec succès' });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout du cabinet", error });
    }
};

exports.getCabinet = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.query("SELECT * FROM cabinet WHERE cabinet_id = ?", [id]);
        if (result.length > 0) {
            res.status(200).json(result[0]);
          
        } else {
            res.status(404).json({ message: 'Cabinet non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération du cabinet", error });
    }
};

exports.editCabinet = async (req, res) => {
    const cabinet_id = req.params.id;
    const {  cabinet_name, owner_id, address, city, phone_number,description,image, is_available } = req.body;
    try {
        await db.query("UPDATE cabinet SET cabinet_name = ?, owner_id = ?, address = ?, city = ?, phone_number = ?,description = ?,image = ?, is_available = ? WHERE cabinet_id = ?", [cabinet_name, owner_id, address, city, phone_number,description, image,  is_available, cabinet_id]);
        res.status(200).json({ message: 'Cabinet mis à jour avec succès'});
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour du cabinet", error });
    }
};

exports.deleteCabinet = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query("DELETE FROM cabinet WHERE cabinet_id = ?", [id]);
        res.status(200).json({ message: 'Cabinet supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression du cabinet", error });
    }
};