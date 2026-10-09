/**
 * Abre uma busca no Google Maps usando a cidade ou o CEP informado.
 * O mapa apresenta resultados de terceiros; confirme com o local se ele recebe
 * eletrônicos, pilhas ou baterias antes de levar os materiais.
 */
const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const place = document.querySelector("#location").value.trim();
  if (!place) return;

  const query = encodeURIComponent(
    `ponto de coleta lixo eletrônico pilhas baterias ${place}`
  );

  window.open(
    `https://www.google.com/maps/search/${query}`,
    "_blank",
    "noopener,noreferrer"
  );
});
