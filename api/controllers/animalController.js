const Animal = require('../models/modelAnimal');
const Owner = require('../models/modelOwner');

// Créer un nouvel animal avec un propriétaire
exports.createAnimal = async (req, res) => {
    try {
        const { name, species, ownerId, age, breed } = req.body;

        // Vérifier si le propriétaire existe
        const owner = await Owner.findById(ownerId);
        if (!owner) {
            return res.status(404).json({ message: 'Propriétaire non trouvé' });
        }

        // Créer un nouvel animal
        const animal = new Animal({
            name,
            species,
            age,
            breed,
            owner: ownerId
        });

        // Enregistrer l'animal dans la base de données
        await animal.save();

        res.status(201).json({ message: 'Animal créé avec succès', animal });
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'animal', error });
    }
};

// Mettre à jour un animal par son ID
exports.updateAnimalById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, species, ownerId, age, breed } = req.body;

        // Vérifier si le propriétaire existe
        const owner = await Owner.findById(ownerId);
        if (!owner) {
            return res.status(404).json({ message: 'Propriétaire non trouvé' });
        }

        const animal = await Animal.findByIdAndUpdate(id, { name, species, age, breed, owner: ownerId }, { new: true });
        if (!animal) {
            return res.status(404).json({ message: 'Animal non trouvé' });
        }

        res.status(200).json({ message: 'Animal mis à jour avec succès', animal });
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'animal', error });
    }
};

// Supprimer un animal par son ID
exports.deleteAnimalById = async (req, res) => {
    try {
        const { id } = req.params;

        const animal = await Animal.findByIdAndDelete(id);
        if (!animal) {
            return res.status(404).json({ message: 'Animal non trouvé' });
        }

        res.status(200).json({ message: 'Animal supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'animal', error });
    }
};
