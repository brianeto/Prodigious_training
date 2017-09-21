# Prodigious training
---
Estas son las indicaciones necesarias para la ejecución del proyecto:
- Nos dirigimos a la carpeta donde queremos clonar el proyecto por medio de la terminal o la consola.
  > Podemos navegar en las carpetas con el comando `cd` para cambiar de directorio o el comando `cd ..` para irnos al directorio raíz desde el directorio actual, podemos utilizar el comando `ls` para verificar en que directorio estamos .

- Despues de que estemos posicionados en la carpeta, insertamos en la consola el siguiente comando para clonar el proyecto:

        git clone https://github.com/brianeto/Prodigious_training.git
- Despues de que hayan cargado correctamente los archivos del repositorio, a continuación escribimos en la consola o la terminal el comando

        nodemon
    Para iniciar nuestro servidor local. Debe aparecer `now listening for request` cuando ya este preparado el servidor.
- Luego abrimos el navegador, nos dirigimos a la parte superior y en la barra de navegacion ponemos la Url en donde se encuentra alojado nuestro servidor, en este caso es: `localhost:4000`
!(https://raw.githubusercontent.com/brianeto/Prodigious_training/master/public/images/firstr.png)

- Podemos ingresar a distintas Urls para obtener diferentes contenidos, entre estos estan:
Archivo XML: `localhost:4000/api/xmltest`
Archivo HTML: `localhost:4000/api/htmltest`
Archivo JSON: `localhost:4000/api/jsontest`
Imagen: `localhost:4000/api/imgtest`

    > Recuerda poner adecuadamente la url con la carpeta **/api/** : `localhost:4000/api/`
