# Incubadora Noc
### Dedicada a incubar emprendimientos para conseguir mejores resultados en menor tiempo, brindando a los emprendedores herramientas financieras, sesiones de coaching, mentoring, seguimiento personalizado, cursos y capacitación. 
<div align="center">
  <img src="https://github.com/Ludmimar/Incubadora_Noc/blob/main/front/src/assets/img/bannerIncubadora.png" alt="Incubadora">
</div>

## Introduccion 📋

Incubadora Noc es un proyecto realizado por el equipo The_Undefined para el Bootcamp de la empresa Santex, [Tecnology with purpose](https://technologywithpurpose.org/).
El proyecto es para la incubadora del NOC, la institución tiene la necesidad de tener una página web donde se pueda comunicar los diferentes cursos de capacitación que se brindan como así también las futuras convocatorias para los cohortes del Academy.
Además, poder administrar los cursos y los datos de los alumnos que se inscriben a los mismos, registrar asistencias y pago de matrícula.


## Tecnologías utilizadas 🛠️

Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

Front-End 🖥️

- Angular CLI
- SCSS
- PrimeNG

Backend 🔙🔚

- Node.js
- Express.js
- Sequelize

### Diseño : [Figma](https://www.figma.com/file/bv4gh3wcgx3WWsxWI9qZiX/The-Undefined?type=design&node-id=1-3&mode=design)

**Como comenzar:**🚀

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



# **Video** 🎥

> Este proyecto fue entregado mediante una [Demo](https://www.youtube.com/playlist?list=PLHYbcawDSCphxXIGliFUQmgshn3yt4Zid) al docente encargado de calificarnos.


##Equipo de desarrollo 👨‍🔧👩‍🔧

Este proyecto ha sido desarrollado por el siguiente equipo:
### Frontend 🖥️
- [Ludmila Martos](https://www.linkedin.com/in/ludmila-martos/) 
- [Exequiel Portero](https://www.linkedin.com/in/exequiel-portero/) 
- [Soledad Arguello](https://www.linkedin.com/in/soledad-arguello/)
### Backend 🔙
- [Julio Martin](https://www.linkedin.com/in/julio-martin/) 
- [Carlos Gavernet](https://www.linkedin.com/in/cgavernet/)
