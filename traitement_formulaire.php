<?php
// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère et nettoie les données du formulaire
    $nom = clean_input($_POST["nom"]);
    $email = clean_input($_POST["email"]);
    $message = clean_input($_POST["message"]);

    // Vérifie que les champs obligatoires ne sont pas vides
    if (!empty($nom) && !empty($email) && !empty($message)) {
        // Vérifie si l'adresse email est valide
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Vous pouvez traiter les données comme vous le souhaitez, par exemple, les envoyer par email
            $to = "maxime.esteves81@orange.fr";
            $subject = "Nouveau message depuis votre site web";
            $body = "Nom: $nom\nEmail: $email\nMessage:\n$message";

            // Envoyer l'email
            if (mail($to, $subject, $body)) {
                echo "Votre message a été envoyé avec succès. Merci !";
            } else {
                echo "Désolé, une erreur s'est produite lors de l'envoi du message.";
            }
        } else {
            echo "L'adresse email n'est pas valide.";
        }
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
}

// Fonction pour nettoyer les données
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
