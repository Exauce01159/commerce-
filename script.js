function genererEmailDemande() {
    // Récupération des données
    const nom = document.getElementById('clientName').value;
    const tel = document.getElementById('clientPhone').value;
    const operateur = document.getElementById('operator').value;

    // Validation
    if (nom === "" || tel === "") {
        alert("Attention : Veuillez remplir tous les champs !");
        return;
    }

    // Configuration de l'email
    const destinataire = "kisiabingoamange@gmail.com"; // REMPLACE PAR TON EMAIL
    const sujet = `Demande d'achat Support Web 1 - ${nom}`;
    
    // Contenu de l'email
    const corps = `Bonjour,\n\n` +
                  `Je souhaite acheter le document 'Programmation Web 1'.\n\n` +
                  `DÉTAILS DU CLIENT :\n` +
                  `- Nom : ${nom}\n` +
                  `- Numéro : ${tel}\n` +
                  `- Opérateur choisi : ${operateur}\n\n` +
                  `Veuillez me confirmer la réception du paiement de 3$ pour m'envoyer le fichier.\n` +
                  `Cordialement.`;

    // Encodage pour l'URL
    const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

    // Exécution : Ouvre l'application de messagerie
    window.location.href = mailtoLink;
}
