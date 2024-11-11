Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

    Facts Random: https://catfact.ninja/fact

    Imagen random: https://cataas.com/cat/says/hello

    Recupera un hecho aleatorio de gatos de la primera API

    Recuperar la primera palabra del hecho

    Muestra una imagen de un gato con la primera palabra.


----------------------------------------------------------------------------------------
Pasos para crear el proyecto sin react y agregar dependencias:

npm create vite@latest - elegir vanilla - javascript

para instalar plugin react

npm install @vitejs/plugin-react -E

ir a package.json a instalar dependencias

react y reactdom

npm install react react-dom -E

crear archivo vite.coonfig.js

importar defineconfig from vite y react from vitejs/plugin-react y exportar defineConfig

entrar a main.js editarlo a main.jsx porque se va a renderizar mal la pagina porque vite no lee js como jsx

si el archivo esta solo instalar standard y agregar las dependencias con eslint

npm install standard -E

ir a package.json y agregar eslintConfig - extendes el path de node_modules/standard

crear carpeta src y archivo App.jsx

y readme.md