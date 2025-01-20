# Amigo Secreto

Este proyecto es una aplicación web simple para organizar un juego de "Amigo Secreto". Permite a los usuarios ingresar nombres de amigos, mostrarlos en una lista y seleccionar aleatoriamente un amigo secreto.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
app.js
assets/
index.html
style.css
```

### 

index.html



Este archivo contiene la estructura HTML de la aplicación. Incluye:

- Un encabezado con el título "Amigo Secreto" y una imagen representativa.
- Una sección de entrada donde los usuarios pueden ingresar nombres de amigos y añadirlos a una lista.
- Un botón para sortear un amigo secreto de la lista de nombres ingresados.

### 

style.css



Este archivo contiene los estilos CSS para la aplicación. Define colores, fuentes y estilos para diferentes elementos de la página, incluyendo:

- Variables CSS para colores.
- Estilos generales para el cuerpo y los contenedores principales.
- Estilos específicos para el encabezado, la sección de entrada, los botones y las listas.

### 

app.js



Este archivo contiene la lógica de la aplicación en JavaScript. Incluye las siguientes funciones:

- 

agregarAmigo()

: Añade un nombre ingresado a la lista de amigos y actualiza la lista mostrada en la página.
- 

vaciarCampo()

: Limpia el campo de entrada de texto.
- 

mostrarAmigos()

: Muestra la lista de amigos ingresados en la página.
- 

sortearAmigo()

: Selecciona aleatoriamente un amigo de la lista y muestra el resultado en la página.
- 

colocarCursor()

: Coloca el cursor en el campo de entrada de texto.
- 

mensajeListaVacia()

: Muestra un mensaje cuando la lista de amigos está vacía.

¡Disfruta organizando tu juego de Amigo Secreto con esta aplicación web!
