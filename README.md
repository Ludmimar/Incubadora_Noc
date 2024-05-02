# Incubadora Noc
<div align="center">
  <img src="https://github.com/Ludmimar/Incubadora_Noc/blob/main/front/src/assets/img/bannerIncubadora.png" alt="Docusaurus">
</div>

## Introduccion

Incubadora Noc es un proyecto realizado en equipo para el Bootcamp de la empresa Santex, [Tecnology with purpose](https://technologywithpurpose.org/)


**Como comenzar:**

Una vez clonado el repositorio en tu equipo, seguir los siguientes pasos:
- #### 1 - Deben tener una instancia de MySQL iniciada.
- #### 2 - Dentro de la carpeta back:
    Crear un archivo de nombre .env y cargar los siguientes datos: [Link](https://github.com/Ludmimar/Incubadora_Noc/blob/main/Archivo%20a%20crear.txt)
- #### 3 - Instalar los modulos
  ```bash
  npm run install
   ``` 
- #### 4 - Migraciones
- En Linux      
  Crea la Base de datos:
    ```bash
    npm run db:create
    ```     
  Crea la tablas y sus atributos:
   ```bash
    npm run db:migrate
    ```
     
  Siembra la BD con datos de prueba:
  ```bash
    npm run db:seed:all
  ```
  
- En Windows
   ```bash
    ./node_modules/.bin/sequelize db:create  
   ```
   ```bash
   ./node_modules/.bin/sequelize db:migrate
   ```
   ```bash
   ./node_modules/.bin/sequelize db:seed:all
   ```


- #### 5 - Iniciar el servidor
  ```bash
    npm run start
  ```

- #### 6 - Dentro de la carpeta front: Instalar los modulos
  ```bash
    npm run install
  ```

- #### 7 - Iniciar angular
  ```bash
    ng serve
  ```

- #### 8 - Abrir en el navegador [Localhost](http://localhost:4200/)


# **Imagenes**

- <div align="center">
  <img src="https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/home.png" alt="Home" Style="width: 20%">
  <img src="https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/all-courses.png" alt="Todos los cursos" Style="width: 20%">
  <img src="https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/courses.png" alt="Detalle de un Curso" Style="width: 20%">
  <img src="https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/adminPlatform.png" alt="Plataforma Administrador" Style="width: 20%">
  <img src="https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/crud-students.png" alt="Crud Estudiantes" Style="width: 20%">
</div>

> [Home](https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/home.png) /
> [Todos los Cursos](https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/all-courses.png) /
> [Detalle de un Curso](https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/courses.png) /
> [Plataforma Administrador](https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/adminPlatform.png) /
> [Crud Estudiantes](https://raw.githubusercontent.com/Ludmimar/Incubadora_Noc/main/img_proyect/crud-students.png)


# **Video**

> Este proyecto fue entregado mediante una [Demo](https://www.youtube.com/playlist?list=PLHYbcawDSCphxXIGliFUQmgshn3yt4Zid) al docente encargado de calificarnos.
