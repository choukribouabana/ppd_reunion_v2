# ppd_reunion_v2

Equipe :
- Bouabana Choukri
- Ettayeb Ibtissem
- Kaci Mohamed Younes
- Nait Said Rachid


Encadrant :
- M.MILOUDI Fouad


Fait avec les technologies MERN : MongoDB, Express, React.js et Node.js


## Description du projet

Nous avions pour objectif de faciliter aux entreprises la gestion de leurs salles et plus spécifiquement la gestion des réservations de la part de leurs employés.    
Nous avons donc implémenter 2 interfaces :
- une pour les administrateurs : 
  - où ils ont la possibilité de consulter la liste de tous les utilisateurs de la plateforme et donc de les modifier ou les supprimer et d’en ajouter.
  - La possibilité de consulter la liste de toutes les salles de l’entreprise, de les modifier, de les supprimer ou bien d’ajouter des salles. 
  - De consulter toutes les réservations de tous les utilisateurs, de les modifier, les supprimer
  - Possibilités de voir les équipements disponibles pour les salles.
- une pour les utilisateurs:
  - Les fonctionnalités en commun avec les admins c’est qu’ils peuvent ajouter, modifier, supprimer leurs propres réservations. 
  - Une page d’accueil d’où ils auront une vision sur leur agenda pendant 3 mois.

## HowTo

### Récupération du projet
Cloner le git repository
```sh
git clone https://github.com/choukribouabana/ppd_reunion_v2.git
```
Se placer dans le dossier
```sh
cd ppd_reunion_v2
```

### Installation des dépendances
Pour installer les dépendances

Placez vous dans le dossier backend 
```sh
cd backend
```
```sh
npm install
```
Puis placez vous dans le dossier frontend avec :
```sh
cd frontend
```
```sh
npm install
```
### Lancer la plateforme
Pour lancer la plateforme

Ouvrez deux terminaux et placez vous dans les deux dossiers backend et frontend avec les commandes respectives:
 
```sh
cd backend 
```
```sh
cd frontend 
```
Puis lancer la commande suivante dans les deux terminaux
```sh
npm start
```
Vous serez renvoyé automatiquement vers l'adresse :
```sh
http://localhost:8081
```
