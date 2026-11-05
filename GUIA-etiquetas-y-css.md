---
tags: [lenguaje-de-marcas, html, css, proyecto-final]
tema: Planetario Estrella Polar
---

# Guía del modelo: Planetario Estrella Polar

> [!warning] Lee esto primero
> El enunciado dice (regla 2 de cero) que **no se admite código generado con IA**. Este modelo es para **estudiar y ver hasta dónde se puede llegar**, no para entregarlo tal cual. Úsalo como referencia, escribe tu propia versión con tus textos y tus decisiones, y súbela a GitHub con commits repartidos en varios días. En la defensa (30 % de la nota) te preguntarán línea a línea.

## Estructura de archivos

```
planetario/
├── index.html            → Inicio (portada)
├── constelaciones.html   → Contenido principal (catálogo de tarjetas)
├── sesiones.html         → Información (tabla de horarios y preguntas frecuentes)
├── contacto.html         → Formulario de reserva
├── noticias.xml          → Canal RSS con 3 noticias
├── css/estilos.css       → La única hoja de estilos
├── img/                  → logo.svg, favicon.svg y las imágenes .webp
└── media/                → aquí va el vídeo cielo-nocturno.mp4 (falta añadirlo)
```

## Qué cumple cada punto del enunciado

| Requisito | Dónde está |
|---|---|
| header, nav, main, footer | En las 4 páginas |
| section, article, aside | Todas las páginas (article en tarjetas y preguntas) |
| head completo + description distinta | Cada página tiene su propia description |
| Un solo h1 sin saltar niveles | h1 → h2 → h3 |
| ul y ol | ul en index, ol en constelaciones |
| Tabla completa | sesiones.html |
| Formulario completo | contacto.html |
| WebP y SVG | img/*.webp y img/logo.svg |
| Vídeo con controls y poster | index.html |
| iframe de YouTube | constelaciones.html (**pon el ID real del vídeo**) |
| Enlace externo con target y rel | Wikipedia y el repositorio |
| RSS | noticias.xml, enlazado en el head y en el pie |
| :root y variables | Inicio del CSS |
| Flexbox / Grid | nav ul / .tarjetas |
| sticky / absolute | nav / .etiqueta "Nuevo" |
| transition + 2 @keyframes | .tarjeta y nav a / brillar y flotar |
| :hover y :focus | nav a, .tarjeta / enlaces y campos |
| @media | 800 px y 500 px |

---

# Parte 1: Etiquetas HTML

## Estructura del documento

### `<!DOCTYPE html>`
Le dice al navegador que el documento es HTML5. Siempre la primera línea.

### `<html lang="es">`
La etiqueta raíz: todo va dentro. `lang="es"` indica que el idioma es español (ayuda a lectores de pantalla y buscadores).

### `<head>`
La "cabeza" del documento: información que **no se ve** en la página (metadatos, título, enlaces al CSS...).

### `<body>`
El "cuerpo": todo lo que **sí se ve** en la página.

## Dentro del `<head>`

### `<meta charset="UTF-8">`
Codificación de caracteres. Sin ella, las tildes y la ñ pueden salir mal.

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
Hace que en el móvil la página use el ancho real de la pantalla. Sin ella, el responsive no funciona.

### `<meta name="description" content="...">`
Resumen de la página que muestra Google en los resultados. **Debe ser distinto en cada página.**

### `<title>`
El texto que aparece en la pestaña del navegador.

### `<link>`
Enlaza archivos externos. Usamos varios:
- `rel="icon"` → el **favicon** (icono de la pestaña).
- `rel="alternate" type="application/rss+xml"` → avisa de que hay un canal RSS.
- `rel="stylesheet"` → enlaza una hoja de estilos (Google Fonts y nuestro `estilos.css`).

> [!tip] En la URL de Google Fonts se escribe `&amp;` en vez de `&` porque el validador de HTML lo exige.

## Etiquetas semánticas (HTML5)

Sirven para dar **significado** a cada zona de la página.

| Etiqueta | Para qué |
|---|---|
| `<header>` | Cabecera de la página (logo y nombre). |
| `<nav>` | Barra de navegación con los enlaces principales. |
| `<main>` | El contenido principal. Solo uno por página. |
| `<section>` | Una sección temática, normalmente con su título (h2). |
| `<article>` | Contenido independiente que tiene sentido solo: cada tarjeta de constelación, cada pregunta frecuente. |
| `<aside>` | Contenido secundario, "al lado" del principal: el dato curioso. |
| `<footer>` | Pie de página: créditos, enlaces al RSS y al repositorio, licencias. |

### `<div>`
Caja **sin significado**, solo para agrupar y dar estilo. La usamos para el contenedor `.tarjetas` (la rejilla Grid).

### `<span>`
Como el div pero **en línea** (no rompe la línea). Lo usamos para la estrella ★ (escrita tal cual) que brilla y para la etiqueta "Nuevo".

## Texto

| Etiqueta | Para qué |
|---|---|
| `<h1>` … `<h3>` | Títulos por niveles. Un solo h1 por página y sin saltar (h1 → h2 → h3). |
| `<p>` | Párrafo. |
| `<strong>` | Texto importante (se ve en negrita). |
| `&copy;` | Entidad HTML que muestra el símbolo ©. |

## Listas

### `<ul>` + `<li>`
Lista **sin orden** (con puntos). En index: lo que puedes hacer en el planetario. También se usa dentro del nav para los enlaces.

### `<ol>` + `<li>`
Lista **ordenada** (con números) porque el orden importa: los pasos para encontrar la Estrella Polar.

## Enlaces

### `<a href="...">`
Enlace.
- **Relativo**: `href="contacto.html"` → otra página de mi web.
- **Externo**: `href="https://..."` con `target="_blank"` (abre en pestaña nueva) y `rel="noopener"` (por seguridad, la página nueva no puede controlar la mía).
- `href="mailto:..."` → abre el programa de correo.
- `class="activo"` → marca en el menú la página en la que estás (se le pone un borde de rayas).

## Imágenes y multimedia

### `<img>`
Imagen. Atributos:
- `src` → ruta del archivo.
- `alt` → descripción para quien no puede verla. Tiene que describir (nunca "imagen").
- `width` y `height` → tamaño original; evita saltos mientras carga.
- **WebP**: formato moderno que pesa poco. **SVG**: imagen hecha con código, se ve nítida a cualquier tamaño (el logo).

### `<video>` + `<source>`
- `controls` → muestra los botones de play, volumen...
- `poster` → imagen que se ve antes de darle a play.
- `<source src="..." type="video/mp4">` → el archivo de vídeo y su tipo.
- El texto de dentro solo aparece si el navegador no puede reproducirlo.

### `<iframe>`
Mete otra página dentro de la tuya. Para YouTube: URL con `/embed/`, `title` descriptivo y `allowfullscreen` para poder ponerlo a pantalla completa.

## Tabla

| Etiqueta | Para qué |
|---|---|
| `<table>` | La tabla entera. |
| `<caption>` | Título de la tabla. |
| `<thead>` | Zona de la cabecera. |
| `<tbody>` | Zona de los datos. |
| `<tr>` | Una fila. |
| `<th>` | Celda de cabecera (título de columna). |
| `<td>` | Celda de datos. |

## Formulario

| Etiqueta / atributo | Para qué |
|---|---|
| `<form action="#" method="post">` | El formulario. `action` = a dónde se envía; `method="post"` = envía los datos de forma oculta. |
| `<fieldset>` + `<legend>` | Agrupa campos relacionados con un título. |
| `<label for="id">` | Texto del campo. El `for` tiene que ser igual al `id` del input: así, al hacer clic en el texto, se activa el campo. |
| `<input type="text">` | Texto corto (nombre). |
| `<input type="email">` | Correo: el navegador comprueba que tenga @. |
| `<input type="number" min max>` | Solo números, entre el mínimo y el máximo. |
| `<input type="radio">` | Opciones donde **solo puedes elegir una**. Para eso todas llevan el **mismo `name`**. |
| `<input type="checkbox">` | Casilla que se marca o no. |
| `<select>` + `<option>` | Desplegable. La primera opción con `value=""` obliga a elegir otra (por el required). |
| `<textarea rows>` | Texto largo; `rows` = número de líneas visibles. |
| `required` | Campo obligatorio: no deja enviar si está vacío. |
| `<button type="submit">` | Botón que envía el formulario. |

---

# Parte 2: CSS

## Selectores usados

| Selector | Qué selecciona |
|---|---|
| `*` | Todos los elementos. |
| `body`, `nav`, `table`... | Por nombre de etiqueta. |
| `.tarjeta` | Elementos con `class="tarjeta"`. |
| `.campo` | Las cajas de texto, el select y el textarea del formulario (llevan `class="campo"` para que ocupen todo el ancho, y así los radio y el checkbox no se estiran). |
| `nav ul` | Los `ul` que están dentro de un `nav` (descendiente). |
| `nav a.activo` | Los enlaces del nav que además tienen la clase `activo`. |
| `h1, h2, h3` | Varios a la vez (con comas). |
| `:root` | La raíz del documento (`html`); ahí se guardan las variables. |
| `:hover` | Cuando el ratón está encima. |
| `:focus` | Cuando el elemento tiene el foco (al navegar con Tab). |

## Variables

### `--nombre: valor;` y `var(--nombre)`
Se declaran en `:root` y se usan con `var()`. Si quiero cambiar el color principal, lo cambio en un solo sitio.

## Modelo de caja

| Propiedad | Qué hace |
|---|---|
| `box-sizing: border-box` | El `width` incluye el padding y el borde. Así las cajas no crecen sin querer. |
| `margin` | Espacio **fuera** del borde. `margin: 0 auto` centra la caja. |
| `padding` | Espacio **dentro**, entre el borde y el contenido. |
| `border` | Borde: grosor, estilo y color (`2px dashed #fff`). Estilos usados: `solid`, `dashed` (rayas), `dotted` (puntos). |
| `border-bottom` | Solo el borde de abajo. |
| `border-radius` | Esquinas redondeadas. |
| `border-collapse: collapse` | En tablas, une los bordes de las celdas en uno solo. |
| `width` / `height` | Ancho y alto. |
| `max-width` | Ancho máximo. `img { max-width: 100% }` evita que las imágenes se salgan. |
| `display: block / inline / inline-block` | Cómo se coloca: en su propia línea, en línea con el texto, o en línea pero aceptando ancho y padding. |
| `outline` | Contorno que no ocupa espacio. Lo usamos para que se vea el foco. |

## Tipografía y texto

| Propiedad | Qué hace |
|---|---|
| `font-family: 'Poppins', system-ui, Arial, sans-serif` | Fuente de Google Fonts y alternativas por si no carga. |
| `font-family: inherit` | Los campos del formulario usan la misma fuente que la página (por defecto no lo hacen). |
| `font-size` | Tamaño. `rem` = relativo al tamaño base (0.8rem = 80 %). |
| `font-weight: bold` | Negrita. |
| `line-height` | Altura de línea (separación entre líneas). |
| `text-align` | Alineación: `center`, `left`. |
| `text-decoration: none` | Quita el subrayado de los enlaces. |
| `list-style: none` | Quita los puntos de la lista. |

## Colores y fondos

| Propiedad | Qué hace |
|---|---|
| `color` | Color del texto. |
| `background-color` | Color de fondo. |
| `rgba(r, g, b, a)` | Color con transparencia; `a` va de 0 (invisible) a 1. |
| `background: linear-gradient(to right, A, B)` | Degradado de un color a otro. |
| `background-image: url(...)` | Imagen de fondo. La ruta `../img/` sube una carpeta porque el CSS está dentro de `css/`. |
| `background-size: cover` | La imagen de fondo cubre toda la caja. |
| `box-shadow: x y desenfoque color` | Sombra. |
| `opacity` | Transparencia de todo el elemento (en la animación de la estrella). |
| `cursor: pointer` | Muestra la manita al pasar por el botón. |

## Flexbox (la barra de navegación)

| Propiedad | Qué hace |
|---|---|
| `display: flex` | Coloca los hijos en fila. |
| `justify-content: center` | Los centra en horizontal. |
| `flex-wrap: wrap` | Si no caben, pasan a la línea de abajo. |
| `gap` | Espacio entre elementos. |
| `flex-direction: column` | En móvil, los pone en columna. |
| `align-items: center` | Centra en el otro eje. |

## Grid (las tarjetas)

| Propiedad | Qué hace |
|---|---|
| `display: grid` | Convierte la caja en una rejilla. |
| `grid-template-columns: repeat(3, 1fr)` | 3 columnas iguales (`1fr` = una parte del espacio libre). |
| `gap` | Espacio entre celdas. |

## Posicionamiento

| Propiedad | Qué hace |
|---|---|
| `position: sticky; top: 0` | La barra se queda pegada arriba al hacer scroll. |
| `z-index: 10` | La pone por encima de lo demás. |
| `position: relative` | En la tarjeta: sirve de **referencia** para la etiqueta. |
| `position: absolute; top; right` | La etiqueta "Nuevo" se coloca respecto a la tarjeta (su padre con `relative`) y no se sale de ella. |

## Movimiento

| Propiedad | Qué hace |
|---|---|
| `transition: transform 0.3s, box-shadow 0.3s` | Cambio suave al hacer hover. Se listan las propiedades (nunca `all`). |
| `transform: translateY(-6px)` | Mueve el elemento hacia arriba sin afectar a los demás. |
| `@keyframes nombre { 0% {} 50% {} 100% {} }` | Define los pasos de una animación. |
| `animation: brillar 2s ease-in-out infinite` | Aplica la animación: nombre, duración, ritmo y que se repita siempre. |

> [!question] ¿Por qué @keyframes y no transition?
> La `transition` solo ocurre cuando algo cambia (como el hover). El `@keyframes` se reproduce solo, sin que el usuario haga nada: por eso la estrella brilla y el logo flota todo el rato.

## Responsive

### `@media (max-width: 800px) { ... }`
Las reglas de dentro solo se aplican si la pantalla mide 800 px o menos.
- **800 px** (tablet): las tarjetas pasan a 2 columnas.
- **500 px** (móvil): 1 columna, menú en columna, iframe más bajo y tabla más compacta para que no haya scroll horizontal a 360 px.

---

# Pendiente antes de entregar

- [ ] Cambiar `ID_DEL_VIDEO` por el ID real de un vídeo de YouTube sobre constelaciones.
- [ ] Añadir `media/cielo-nocturno.mp4` (un vídeo corto con licencia libre, citando la fuente) o cambiarlo por un `<audio>`.
- [ ] Cambiar `tuusuario` por tu usuario de GitHub en el pie y en `noticias.xml`.
- [ ] Pasar los validadores del W3C y hacer las capturas.
- [ ] Hacer al menos 6 commits en 3 días distintos.
