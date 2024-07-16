# Segundo Parcial Certificación React Native: Galeria de fotos
Realizado por Alexia Marin

Se presenta una aplicación de una galeria de fotos en React Native con Expo CLI. 

A continuación instrucciones y requisitos para la correcta instalación.
  
## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

- Node.js (https://nodejs.org/)
- npm o yarn (npm viene incluido con Node.js)
- Expo CLI (se puede instalar con `npm install -g expo-cli` o `yarn global add expo-cli`)
## Instalación
Sigue estos pasos para instalar y ejecutar la aplicación:
1. Clona el repositorio:

    ```sh
    git clone https://github.com/dis0400/React-Native_SegundoParcial.git
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```
    
### Para *Backend*:
Para comenzar realiza los siguientes comandos dentro de *gbackend*
    ```
    cd gbackend
    npm install firebase-admin --save    
    npm install express
    npm install nodemon   
    npm install body-parser    
    ```
Y para levantar el Backend realizamos el siguiente comenado
  ```
    npm run dev
   ```

### Postman 
Documentacion de pruebas realizadas en Postman: https://docs.google.com/document/d/1u0upREyn846Xpo4qNAwAwvEMNWATcCTsbR3jFJb6l8g/edit?usp=sharing

Body para Json sugerido:
```
{
	"url": "http://example.com/image.jpg",
	"category":"nature",
	"year":"2022",
	"month": "April"
}
```

### Para *Frontend*:
Asegurate de estar en *galeria* para levantar el frontend e instala las dependencias
    ```
    cd galeria
    npm install
    npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
    npm install react-native-screens react-native-safe-area-context

    ```
Con esto podemos proceder a levantar el proyecto con
```
    npm run start
```
Finalmete se puede escanear el codigo qr desde Expo Go en tu celular.

## Estructura del proyecto
``` sh
.
├── galeria
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── PhotoCard.jsx
│   │   │   ├── AlbumCard.jsx
│   │   │   ├── PeopleCard.jsx
│   │   │   ├── SearchResultCard.jsx
│   │   ├── data
│   │   │   ├── sampleData.js
│   │   ├── layouts
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   ├── screens
│   │   │   ├── AlbumsScreen.jsx
│   │   │   ├── ForYouScreen.jsx
│   │   │   ├── LibraryScreen.jsx
│   │   │   ├── SearchScreen.jsx
│   │   │   ├── ProfileScreen.jsx
│   │   │   ├── SettingsScreen.jsx
│   │   ├── services
│   │   │   ├── ImageInstance.js
│   │   │   ├── ImageService.js
│   ├── App.js
│   ├── app.json
│   ├── babel.config.js
│   ├── package.json
│   ├── package-lock.json
├── gbackend
│   ├── config
│   │   ├── firebaseConfig.js
│   │   ├── firebase_setup.json
│   ├── controllers
│   │   ├── imageController.js
│   ├── routes
│   │   ├── imageRoutes.js
│   ├── services
│   │   ├── ImageService.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
├── .gitignore
└── README.md
```
