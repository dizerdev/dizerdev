// Função para carregar componentes HTML dinamicamente
function loadHTML(selector, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Erro ao carregar componente');
      return response.text();
    })
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((err) => console.error(err));
}

// Carrega header e footer ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  loadHTML('header', 'components/header.html');
  loadHTML('footer', 'components/footer.html');
});
