const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticator = (req, res, next) => {
    // Initialisation d'une variable pour le token
    let token;

    // Vérifier si le token est dans les paramètres ou dans l'en-tête d'autorisation
    if (req.params.token) {
        token = req.params.token;
    } else if (req.headers.authorization) {
        // Extraire le token de l'en-tête d'autorisation
        const bearerHeader = req.headers.authorization;
        if (bearerHeader.startsWith('Bearer ')) {
            // Le token est après le mot "Bearer "
            token = bearerHeader.slice(7, bearerHeader.length);
        }
    }

    console.log(token);
    console.log(process.env.SECRET_KEY);

    // Procéder avec la vérification du token JWT s'il existe
    if (token && process.env.SECRET_KEY) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log(err); // Afficher l'erreur pour le débogage
                res.status(401).json({ erreur: "Accès refusé" });
            } else {
                // Token valide, continuer avec la requête
                next();
            }
        });
    } else {
        res.status(401).json({ erreur: "Accès refusé" });
    }
};
