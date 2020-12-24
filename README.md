# SpotiApp

Éste proyecto corresponde a la segunda app que desarollé a través del curso de `Angular: de cero a experto` de Fernando Herrera en Udemy. Es una página que interactúa con la API de `Spotify` y posee una funcionalidad de búsqueda para encontrar a tu artista favorito y sus mejores canciones.

Se encuentra hecho con **Angular CLI** (version 11.0.4.). Para su instalación:

```bash
npm install -g @angular/cli
```

## Antes de iniciar la aplicación

Es necesario tener descargado Postman (https://www.postman.com/) y tener una cuenta en Spotify.

### Spotify

Dirigirse a https://developer.spotify.com/dashboard/login y loguearse. Una vez logueado, clickear en **CREATE AN APP** y seguir los pasos que continuan. Una vez creada la app le serán otorgados un **Client Id** y un **Client Secret**.

### Postman

Hacer un _POST_ a https://accounts.spotify.com/api/token, hacer click en _Body_, luego en _x-www-form-urlencoded_ y escribir los siguientes key-value:

- grant_type : client_credentials
- client_id : suClientId
- client_secret : suClientSecret

Le será devuelto un JSON como el siguiente:

```bash
{
    "access_token": "BQBG1rMJIoe2DkitENqxUzJY6VdIORuDqdwl1h2AeUGYfuyNvzatg0LRnaEV2oVbwYW0Zlh05koerO9FMHc",
    "token_type": "Bearer",
    "expires_in": 3600,
    "scope": ""
}
```

Por último, ir al archivo que se encuentra dentro de _app/services/spotify.service.ts_ y dentro de la función _getEndpoint_, dentro de la constante _headers_, pegar el **acces_token** a continuación del _Bearer_ (con un espacio entre ambos).

## Iniciar la aplicación

Primero se deben instalar las dependencias del proyecto con:

```bash
npm install
```

Luego, escribir en la consola:

```bash
ng serve -o
```

Abrirá la página en la siguiente URL: `http://localhost:4200/`.

### Nota

> La página se actualizará automáticamente al realizar cambios y guardar.
