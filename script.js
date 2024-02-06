$(window).scroll(function(){
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $(".appear").each(function(){
        const distanceFromTop = $(this).offset().top;

        // Vérifie si l'élément est dans la zone visible de la fenêtre
        if (distanceFromTop - scrollTop < windowHeight - 100) {
            console.log("hello");
            const delaiAnim = $(this).data("delai");
            $(this).delay(delaiAnim).animate({
                top: 0,
                opacity: 1
            });
        }
    });
});

// --------TEXTE ACCUEIL------   //
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { selector: '.titre-projet h1', text: "Découvrez mon profil" },
        { selector: '.titre-projet-js h1', text: "Site web - portfolio" },
        { selector: '.titre-projet-js1 h1', text: "Site e-commerce" }
    ];
    const delay = 90; // Delay in milliseconds between each character

    function displayText(container, text) {
        let index = 0;
        function type() {
            if (index < text.length) {
                container.textContent += text[index];
                index++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    projects.forEach(project => {
        const container = document.querySelector(project.selector);
        if (container) {
            displayText(container, project.text);
        }
    });
});


// -------- formulaire contact ----- //
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Configuration du middleware pour parser le corps de la requête
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration du formulaire de contact
app.post('/envoyer-email', (req, res) => {
    const { nom, email, message } = req.body;

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: 'orange',
        auth: {
            user: 'maxime.esteves81@orange.fr',
            pass: ''
        }
    });

    // Configuration de l'e-mail
    const mailOptions = {
        from: email,
        to: 'votre-email@gmail.com',
        subject: 'Nouveau message de votre formulaire de contact',
        text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Erreur lors de l\'envoi du message');
        } else {
            console.log('E-mail envoyé: ' + info.response);
            res.send('Message envoyé avec succès');
        }
    });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
