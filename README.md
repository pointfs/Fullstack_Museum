# React Museum Full Stack

Este repositorio es la unión de dos proyectos:

* [React Museum](https://github.com/Elianarve/Museum-project)

* [Animal API](https://github.com/EstefanyBatPel/Animal_api)

Se trata de un museo virtual en el que puedes ver la información de los animales que tienes en tu base de datos. Es completamente funcional y se pueden hacer todas las operaciones CRUD.

## Requisitos Previos

- Git instalado en tu sistema. Puedes descargarlo desde https://git-scm.com/.
- Node.js instalado en tu sistema. Puedes descargarlo desde https://nodejs.org/.
- MySQL Workbench instalado y en funcionamiento en tu sistema. Puedes descargarlo desde https://www.mysql.com/.

## Instalación

1. Clona este repositorio en tu ordenador:

```sh

git clone https://github.com/pointfs/Fullstack_Museum.git

```

2. Navega hasta el directorio del proyecto.

```sh

cd Fullstack_Museum

```

4. Dentro de la carpeta client, ejecuta el siguiente comando para instalar las dependencias:

```sh

npm i

```

4. Repetir el comando dentro de la carpeta server:

```sh

npm i

```

## Configuración de la API

1. Haz una copia del archivo `.env_example` y renombrarlo a `.env` en la raíz del proyecto.
2. Agrega los valores de las variables de entorno en el archivo `.env` según tu configuración.
3. Crea una base de datos en MySQL Workbench con el nombre que le asignaste a la variable DB_DEV_NAME.

## Iniciar los servidores

1. Dentro de la carpeta server, ejecuta el siguiente comando en la terminal para iniciar la API:

```sh

node app.js

```
2. Dentro de la carpeta client, ejecuta el siguiente comando en la terminal para iniciar la APP:

```sh

npm run dev

```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama con el nombre de tu función o mejora.
3. Realiza los cambios necesarios y realiza un commit.
4. Envía un pull request a la rama principal.
