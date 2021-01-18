# Palindrome Detector
Pequeña aplicación web construida con Node.js y React que invierte la cadena de texto proporcionada y determina si es un palíndromo.  Está compuesta por dos nodos, el front y el backend.

## Despliegue con [docker-compose](https://docs.docker.com/compose/)
1. Para llevar a cabo el despliegue con docker, primero debe verificar que los puertos asignados para la aplicación están disponibles en la computadora o servidor donde se implementarán los contenedores.  Los puertos que utilizarán los servicios son: _Contenedor Frontend -> Puerto 7000,_ _Contenedor Backend -> Puerto 8000._  Un eventual cambio en el puerto de ejecución del servicio Frontend se tendrá que tener en cuenta al momento de acceder a la URL de la aplicación web.  El formato de URL corresponde a http://ip-server:port-number, por ejemplo:
```http://localhost:7000```.  Sin embargo, si el cambio de puerto se realiza en el servicio del backend que por defecto escucha por el 8000, antes del despliegue con docker-compose se debe editar el archivo del proyecto {DIR_PROJECT}/front/src/reducers/palíndromeSlice.jsx y reemplazar el número de puerto en la URL ubicada en la línea 19 del archivo.

2. Luego de la verificación de los puertos disponibles requeridos por el sistema software web, cree la network de docker para el proyecto mediante el siguiente comando: 
```docker network create palindrome_network```

3. Para arrancar los contenedores, ejecute el siguiente comando ubicado en la raíz de la carpeta de clonación del repositorio:
```docker-compose up -d```
El comando buscará el archivo docker-compose.yml que describe la configuración de construcción de cada servicio.

4. Visitar, mediante un navegador web, la URL: http://ip-server:port-number.  Por defecto la URL se configuraría así:
- **Frontend: http://localhost:7000**
- **Backend: http://localhost:8000**
