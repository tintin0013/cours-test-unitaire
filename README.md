# Projet Validator -- Tests unitaires JavaScript

## Description

Ce projet a pour objectif de développer un module de validation en
JavaScript (Node.js), sans interface graphique.

Il s'inscrit dans un projet fil rouge incrémental visant à mettre en
pratique :

-   les tests unitaires
-   le développement en TDD
-   la validation métier
-   la gestion des cas limites
-   la couverture de code
-   la documentation avec JSDoc

Le projet utilise **Jest** pour les tests unitaires et **JSDoc** pour la
documentation du code.

L'architecture respecte le cahier des charges du module : - Utilisation
de ES Modules (`import / export`) - Transformation via **Babel** - Tests
unitaires avec couverture - Documentation générée automatiquement

------------------------------------------------------------------------

## Technologies utilisées

-   Node.js
-   JavaScript (ES6 Modules)
-   Jest (tests unitaires et couverture de code)
-   Babel (transformation ES Modules)
-   JSDoc (documentation)

------------------------------------------------------------------------

## Installation

Cloner le dépôt puis installer les dépendances :

``` bash
npm install
```

------------------------------------------------------------------------

## Lancer les tests

Exécuter les tests unitaires :

``` bash
npm run test
```

La couverture de code est automatiquement activée via le flag
`--coverage`.

Un rapport de couverture est généré dans le dossier :

    coverage/

------------------------------------------------------------------------

## Documentation

La documentation du code est générée avec **JSDoc**.

Générer la documentation :

``` bash
npm run jsdoc
```

Les fichiers HTML sont générés dans le dossier :

    docs/

Le point d'entrée de la documentation est :

    docs/index.html

------------------------------------------------------------------------

## Structure du projet

    module.js
    module.test.js
    validator.js
    validator.test.js
    package.json
    babel.config.js
    README.md
    docs/
    coverage/

------------------------------------------------------------------------

## Règles de validation implémentées

### 1. Âge

-   Calcul précis basé sur la date de naissance via la fonction
    `calculateAge`
-   Gestion dynamique de l'année courante
-   Gestion correcte des mois et jours
-   Gestion du 29 février (années bissextiles)
-   Rejet strict si l'âge est inférieur à 18 ans

### 2. Code Postal

-   Format français strict : exactement 5 chiffres
-   Utilisation d'une expression régulière
-   Rejet des codes contenant des lettres
-   Rejet si la longueur est différente de 5

### 3. Email

-   Validation via expression régulière simple
-   Vérification de la présence d'un format valide `xxx@xxx.xx`
-   Rejet des valeurs nulles
-   Rejet des formats incorrects

### 4. Identité (Nom / Prénom)

-   Lettres autorisées (avec accents)
-   Tirets autorisés
-   Rejet des chiffres
-   Rejet des caractères spéciaux
-   Protection contre les balises HTML et injections simples

------------------------------------------------------------------------

## Tests et couverture

Les tests unitaires couvrent :

-   les cas valides
-   les cas invalides
-   les cas limites (null, undefined, mauvais formats)
-   les dates dynamiques (non figées dans le temps)
-   les branches logiques principales

La couverture actuelle est de 100 % (statements, branches, functions,
lines).

------------------------------------------------------------------------

## Conformité au cahier des charges

-   ✔ Utilisation de Babel
-   ✔ Utilisation de ES Modules
-   ✔ Tests unitaires complets
-   ✔ Couverture de code
-   ✔ Validation métier stricte
-   ✔ Documentation JSDoc générée
-   ✔ Gestion des cas limites

------------------------------------------------------------------------

## Conclusion

Ce projet permet de mettre en pratique les bases des tests unitaires en
JavaScript, la validation métier, ainsi que la configuration d'un
environnement Jest + Babel.

L'objectif est de produire un code testé, documenté et cohérent, capable
de gérer des entrées valides comme invalides, tout en respectant les
contraintes du cahier des charges.
