// ==========================================
// JavaScript del Planetario Estrella Polar
// ==========================================

// ---------- 1. Otro dato curioso (index.html) ----------

// Lista de datos curiosos
const datos = [
  "La luz de muchas estrellas que ves esta noche salió de ellas hace cientos de años. ¡Estás mirando el pasado!",
  "La luz del Sol tarda unos 8 minutos en llegar a la Tierra.",
  "Un día en Venus dura más que un año en Venus.",
  "En el espacio no hay aire, así que no se oye ningún sonido.",
  "La Luna se aleja de la Tierra unos 4 centímetros cada año.",
  "Las huellas de los astronautas en la Luna siguen allí, porque no hay viento que las borre.",
  "Hay más estrellas en el universo que granos de arena en todas las playas de la Tierra.",
  "La Estrella Polar no es la más brillante del cielo: ocupa más o menos el puesto 48."
];

const botonDato = document.getElementById("boton-dato");
const textoDato = document.getElementById("dato");

// Solo se ejecuta si el botón existe (está en index.html)
if (botonDato) {
  botonDato.addEventListener("click", function () {
    // Número al azar entre 0 y el último dato de la lista
    const numero = Math.floor(Math.random() * datos.length);
    textoDato.textContent = datos[numero];
  });
}

// ---------- 2. Apagar las luces (index.html) ----------

const botonLuces = document.getElementById("boton-luces");

if (botonLuces) {
  botonLuces.addEventListener("click", function () {
    // Pone la clase "apagada" en el body si no la tiene, o la quita si la tiene
    document.body.classList.toggle("apagada");

    // Cambia el texto del botón
    if (document.body.classList.contains("apagada")) {
      botonLuces.textContent = "Encender las luces";
    } else {
      botonLuces.textContent = "Apagar las luces";
    }
  });
}

// ---------- 3. Filtrar constelaciones por estación (constelaciones.html) ----------

const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll("[data-estacion]");

botonesFiltro.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // La estación del botón pulsado (data-filtro)
    const estacion = boton.dataset.filtro;

    // Recorremos todas las tarjetas
    tarjetas.forEach(function (tarjeta) {
      if (estacion === "todas" || tarjeta.dataset.estacion === estacion) {
        tarjeta.classList.remove("oculta");
      } else {
        tarjeta.classList.add("oculta");
      }
    });
  });
});
