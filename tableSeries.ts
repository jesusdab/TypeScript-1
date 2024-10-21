import { Serie } from './Serie';

export function createSeriesTable(serie: Serie[]): string {
  const cards = serie
    .map(
      (serie) => `
        <div class="col-md-4 series-card">
          <div class="card">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
            <div class="card-body">
              <h5 class="card-title">${serie.name}</h5>
              <p class="card-text">${serie.description}</p>
            </div>
            <div class="card-footer series-footer">
              <span class="seasons-info">Seasons: ${serie.seasons}</span>
              <a href="${serie.webpage}" target="_blank" class="webpage-link">More info</a>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  const averageSeasons = (serie.reduce((sum, serie) => sum + serie.seasons, 0) / serie.length).toFixed(1);

  const averageInfo = `
    <div class="col-12 text-center">
      <p><strong>Seasons average:</strong> ${averageSeasons}</p>
    </div>
  `;

  return `${cards}${averageInfo}`;
}

