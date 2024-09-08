function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resul-restaurantes");
  
    // Obtém os valores dos campos de busca (role e deficiência) e converte para minúsculas para facilitar a comparação
    let campoRole = document.getElementById("campo-role").value.toLowerCase();
    let campoDef = document.getElementById("campo-deficiencia").value.toLowerCase();
  
    // Inicializa as variáveis para armazenar o resultado da pesquisa e informações temporárias
    let resultado = "";
    let acess = "";
    let tags = "";
  
    // Itera sobre cada local na lista de locais (assumindo que 'locais' é um array de objetos)
    for (let dado of locais) {
      // Converte os campos 'acess' e 'tags' do objeto atual para minúsculas para facilitar a comparação
      acess = dado.acess.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se pelo menos um dos campos de busca foi preenchido
      if (campoDef || campoRole) {
        // Verifica se o local possui a acessibilidade procurada
        if (acess.includes(campoDef)) {
          // Verifica se o local possui a tag correspondente ao tipo de atividade
          if (tags.includes(campoRole)) {
            // Se ambas as condições forem verdadeiras, adiciona o local aos resultados
            resultado += `
              <div class="item-resultado">
                <h2>
                  <a href=${dado.link} target="_blank">${dado.nome}</a>
                  <p class="descricao-meta"> ${dado.contato}</p>
                </h2>
                <p class="horarios-meta"> ${dado.horario}</p>
                <p class="descricao-meta"> ${dado.desc}</p>
                <p class="descricao-meta"> ${dado.endereco}</p>
              </div>`;
          }
        }
      }
    }
  
    // ****
    console.log("Easter Egg encontrado. PARABÉNS!");
  
    // Atualiza o conteúdo da seção de resultados com os locais encontrados
    section.innerHTML = resultado;
}