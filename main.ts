import { series } from "./data"; 
import { createSeriesTable } from "./tableSeries"; 


const tableContainer: HTMLElement | null = document.getElementById("series-container");

if (tableContainer) {

  tableContainer.innerHTML = createSeriesTable(series);
} else {
  console.error("No se encontró el contenedor para la tabla de series.");
}
