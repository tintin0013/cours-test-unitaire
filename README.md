# Projet Validator – Tests unitaires JavaScript

## Description

Ce projet a pour objectif de développer un module de validation en JavaScript (Node.js), sans interface graphique.
Il s’inscrit dans un projet fil rouge incrémental visant à mettre en pratique les tests unitaires, la validation métier
et l’analyse de cas limites.

Le projet utilise Jest pour les tests unitaires et JSDoc pour la documentation du code.

## Technologies utilisées

- Node.js
- JavaScript
- Jest (tests unitaires et couverture de code)
- JSDoc (documentation)

## Installation

Installer les dépendances du projet :

npm install

## Lancer les tests

Lancer les tests unitaires :

npm run test

Lancer les tests avec la couverture de code :

npm run test -- --coverage

Un rapport de couverture est généré dans le dossier coverage/.

## Documentation

La documentation du code est générée avec JSDoc.

Commande pour générer la documentation :

npm run jsdoc

Les fichiers HTML sont générés dans le dossier docs/.
Le point d’entrée de la documentation est le fichier docs/index.html.

## Structure du projet

- module.js
- module.test.js
- validator.js
- validator.test.js
- package.json
- README.md
- docs/
- coverage/

## Règles de validation implémentées

### Âge

- Calcul basé sur la date de naissance via la fonction calculateAge
- Rejet strict si l’âge est inférieur à 18 ans
- Gestion des cas particuliers comme les années bissextiles (29 février)

### Code postal

- Format français strict : exactement 5 chiffres
- Rejet des codes contenant des lettres
- Rejet si la longueur est différente de 5

### Email

- Vérification simple du format (présence de @ et .)
- Rejet des formats invalides
- Rejet des valeurs nulles ou incorrectes

### Identité (nom / prénom)

- Rejet des chiffres
- Rejet des balises HTML
- Protection basique contre les injections XSS simples
- Accents et tirets autorisés

## Tests et couverture

Les tests unitaires couvrent :
- les cas valides
- les cas invalides
- les cas limites (valeurs nulles, formats incorrects, dates particulières)

La couverture de code permet d’identifier les parties non couvertes,
notamment certaines branches logiques, ce qui est assumé afin de conserver
des tests simples et lisibles.

## Conclusion

Ce projet permet de mettre en pratique les bases des tests unitaires en JavaScript,
ainsi que la validation métier. L’objectif n’est pas d’obtenir une solution parfaite,
mais de comprendre et analyser le comportement du code face à des entrées variées
et parfois incorrectes.
