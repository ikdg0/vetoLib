import React, { useState } from "react";
import Connexion from "./connexion";
import { Link } from "react-router-dom";

const Inscription = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("user");
    const [acceptCgu, setAcceptCgu] = useState(false);
    const [acceptDataPolicy, setAcceptDataPolicy] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!acceptCgu || !acceptDataPolicy) {
            alert("Vous devez accepter les CGU et la politique de traitement des données pour vous inscrire.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, email, user_type: userType }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'inscription.");
            }

            const data = await response.json();
            console.log("Inscription réussie:", data);
            // Rediriger vers la page de connexion ou afficher un message de succès
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            // Afficher un message d'erreur
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card shadow-sm p-4">
                        <h2 className="text-center mb-4">Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userType" className="form-label">Type d'utilisateur</label>
                                <select
                                    className="form-select"
                                    id="userType"
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value)}
                                    required
                                >
                                    <option value="user">Utilisateur</option>
                                    <option value="propriétaire">Propriétaire</option>
                                </select>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="acceptCgu"
                                    checked={acceptCgu}
                                    onChange={(e) => setAcceptCgu(e.target.checked)}
                                    required
                                />
                                <label className="form-check-label" htmlFor="acceptCgu">
                                    J'ai lu et j'accepte les <a href="/cgu">CGU</a>
                                </label>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="acceptDataPolicy"
                                    checked={acceptDataPolicy}
                                    onChange={(e) => setAcceptDataPolicy(e.target.checked)}
                                    required
                                />
                                <label className="form-check-label" htmlFor="acceptDataPolicy">
                                    J'accepte que mes données soient collectées et traitées par Santévet Group
                                </label>
                            </div>
                            <button className="btn btn-primary w-100" type="submit">S'inscrire</button>
                            <div className="text-center mt-3">
                                <Link to="/connexion">J'ai déjà un compte !</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Inscription;