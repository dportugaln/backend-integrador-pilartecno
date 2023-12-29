# Backend Integrador Pilartecno

Este repositorio contiene el código fuente del servidor Express que proporciona la API para la aplicación web "UNLaR Navigator", diseñada para gestionar puntos de interés para la comunidad universitaria de la UNLaR.

## Prerrequisitos

Para ejecutar este proyecto en tu entorno local, necesitarás tener instaladas las siguientes herramientas:

- Node.js, versión 20.9.0 o superior
- npm, versión 10.1.0 o superior
- Git (opcional)

## Configuración

Para configurar el servidor, necesitarás crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```bash
DB_HOST=<URI_MongoDB> 
DB_NAME=<Nombre_DB>
```
Recuerda reemplazar <URI_MongoDB> y <Nombre_DB> con la URI y el nombre correspondientes a tu DB.


## Uso

El servidor escucha en el puerto 4000.

Aquí están los métodos y rutas disponibles:

- `GET /places`: Obtiene todos los puntos de interés
- `GET /places/:id`: Filtra los puntos de interés por ID
- `POST /places`: Agrega un nuevo punto de interés
- `PATCH /places/:id`: Modifica un punto de interés existente
- `DELETE /places/:id`: Elimina un punto de interés

# Frontend

El frontend de esta aplicación se ha desarrollado utilizando React.
El código fuente del frontend se encuentra en un repositorio separado. Puedes acceder a este repositorio en el siguiente enlace: [Frontend Integrador Pilartecno.](https://github.com/dportugaln/frontend-integrador-pilartecno)
