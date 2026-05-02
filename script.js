function genererEmailDemande() {
    const nom = document.getElementById('clientName').value;
    const tel = document.getElementById('clientPhone').value;
    const operateur = document.getElementById('operator').value;
    const parrain = document.getElementById('parrainName').value;

    if (nom === "" || tel === "") {
        alert("Attention : Veuillez entrer votre nom et votre numéro !");
        return;
    }

    const monEmail = "kisiabongoamange@gmail.com"; // REMPLACE PAR TON ADRESSE EMAIL
    const sujet = `Achat Support Web 1 - ${nom}`;
    
    let corps = `Bonjour,\n\n` +
                `Je souhaite acheter le document 'Support Web 1' au prix de 3$.\n\n` +
                `COORDONNÉES :\n` +
                `- Nom : ${nom}\n` +
                `- Téléphone : ${tel}\n` +
                `- Opérateur : ${operateur}\n`;

    // Si un parrain est mentionné, on l'ajoute au texte
    if (parrain.trim() !== "") {
        corps += `- Recruté par : ${parrain}\n`;
    }

    corps += `\nVeuillez me confirmer la réception du paiement pour m'envoyer le fichier.`;

    const mailtoLink = `mailto:${monEmail}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    
    window.location.href = mailtoLink;
}
