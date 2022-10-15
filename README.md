# channels-creator

## Sommaire

- [Présentation](#presentation)
- [Liste de permissions](#permissions-list)
- [Configuration](#configuration)
  - [Configuration du bot](#bot-configuration)
  - [Configuration des canaux](#channels-configuration)
- [Démarrer le bot](#start-the-bot)

## <a name="presentation"></a>Présentation

<span style="text-decoration: underline">Bot développé par</span> : **Loïc MAES**  
<span style="text-decoration: underline">Date</span> : **15 / 10 / 2022**  
<span style="text-decoration: underline">Version</span> : **1.0**  
<span style="text-decoration: underline">Langage</span> : **TypeScript** | **JavaScript**

Ce Bot a été réalisé à la demande d'un utilisateur de Discord. Il permet de générer des catégories et des canaux textuels et vocaux à partir d'un fichier de configuration ([models.json](./models.json)).

## <a name="permissions-list"></a>Liste de permissions

La liste des permissions acceptées dans la configuration des catégories et des canaux est accessible en cliquant [ici](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags). 

## <a name="configuration"></a>Configuration

### <a name="bot-configuration"></a>Configuration du bot

Avant tout lancement, le Bot devra être configuré.  
Devra être fournit le token de votre application (à créer [ici](https://discord.com/developers/applications/))

Modifiez le fichier [model.env](./model.env) et renommez-le en `.env`.

### <a name="channels-configuration"></a>Configuration des canaux

Configurez vos canaux dans le [fichier de configuration](./models.json) du Bot.

Voici quelques informations pour vous aider dans la configuration du Bot :
> Une catégorie et un canal doit obligatoirement avoir un nom.  
> Un salon doit également avoir un type (`voice` ou `text`).  
> Les permissions renseignée dans les catégories doivent être valides ([voir la liste](#permissions-list)).

## <a name="start-the-bot"></a>Démarrer le bot

Pour démarrer le Bot, il vous suffit de lancer un terminal dans le [dossier courrant](./) et exécuter la commande suivante :
```shell
npm run start
```
