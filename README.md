# SPOTIFY-KAHOOT

Tienes yarn.lock y package-lock.json. Lo suyo sería que en el README indicases algunos pasos para arrancar el proyecto y ahí indiques si se ha usado yarn o npm.

Aquí hubieran estado bien unas instrucciones de cómo arrancar el proyecto.

Te he hecho algunas modificaciones, sobre todo son para desacoplar lógica y para organizar el código en función de lo que hace.

En general, un código muy limpio, sólo he echado en falta que separases algunas piezas, como pueden ser las llamadas a
la API de Spotify o el uso de APIs de navegador.

De cara a posibles mejoras, lo suyo hubiera sido que el componente Player sea un contenedor de la etiqueta audio (esto lo tienes)
pero que toda la lógica de reproducción la hagas usando los eventos que saltan de forma nativa desde ese elemento (me refiero a QuestionContext). De esta manera,
en vez de tener que meter setTimeout y setIntervals por todos lados, directamente manejas los eventos como mejor te convengan :-).
