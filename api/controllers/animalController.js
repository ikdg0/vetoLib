// const pool = require('../databases/database');
const pool = require('../databases/database');

exports.getAllAnimals = async (req, res) => {
    try {
        const connexion = await pool.getConnection();
        const resultat = await connexion.query("SELECT * FROM animal");
        res.status(200).json(resultat);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des animaux", error });
    }
};

exports.addAnimal = async (req, res) => {

    const { owner_id, animal_name, animal_type, race, age, image } = req.body;
    try {
        const connexion = await pool.getConnection();
         await connexion.query("INSERT INTO animal (owner_id, animal_name, animal_type, race, age, image) VALUES (?, ?, ?, ?, ?, ?)", [owner_id, animal_name, animal_type, race, age, image]);
        res.status(201).json({ message: 'Animal ajouté avec succès' });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de l'animal", error });
    }
};

exports.getAnimalById = async (req, res) => {
    const animal_id = req.body.animal_id; 
    try {
        const connexion = await pool.getConnection();
        const result = await connexion.query("SELECT * FROM animal WHERE animal_id = ?", [animal_id]);
        if (result.length > 0) {
            // Uncomment to render the editAnimal page
            // res.render('editAnimal', { animal: result[0] }); 
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: 'Animal non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'animal", error });
    }
};

exports.editAnimal = async (req, res) => {
    const animal_id = req.params.id;
    const {owner_id, animal_name, animal_type, race, age, image } = req.body;
    try {
        const connexion = await pool.getConnection();
        await connexion.query("UPDATE animal SET owner_id = ?, animal_name = ?, animal_type = ?, race = ?, age = ?, image = ? WHERE animal_id = ?", [owner_id, animal_name, animal_type, race, age, image, animal_id]);
        res.status(200).json({ message: 'Animal mis à jour avec succès' });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'animal", error });
    }
};

exports.deleteAnimal = async (req, res) => {
    const animal_id = req.body.animal_id; 
    try {
        const connexion = await pool.getConnection();
        await connexion.query("DELETE FROM animal WHERE animal_id = ?", [animal_id]);
        res.status(200).json({ message: 'Animal supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de l'animal", error });
    }
};
