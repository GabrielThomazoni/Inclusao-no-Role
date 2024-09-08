## Inclusão no Rolê: Encontre o seu lugar acessível!

### Sobre o Projeto
Este projeto tem como objetivo facilitar a vida de pessoas com deficiência (PcD), ajudando-as a encontrar locais em Porto Alegre/RS acessíveis para diversas atividades. Ao inserir o tipo de atividade desejada e a deficiência, o usuário recebe uma lista de locais que atendem às suas necessidades. Caso queira colocar apenas sua deficiência, ele mostrará todos os rolês acessíveis pra ti. :D

### Como Funciona?
1. **Dados dos Locais:** Todas as informações sobre os locais (nome, endereço, acessibilidade, etc.) estão armazenadas em um arquivo JavaScript chamado `locais.js`. Cada local é representado por um objeto com diversas propriedades.
2. **Interface do Usuário:** O arquivo HTML cria uma interface simples e intuitiva, com dois campos de pesquisa: um para o tipo de atividade (almoçar, jantar, sair para dançar, etc.) e outro para o tipo de deficiência.
3. **Mágica do JavaScript:** O arquivo `functions.js` contém a função `pesquisar()`. Quando você clica no botão "Bora", essa função:
   * **Pega as informações da pesquisa:** Captura o que você digitou nos campos de "role" e "deficiência" e converte para letras minúsculas.
   * **Procura nos dados:** Percorre a lista de locais e verifica se o local possui a acessibilidade procurada e se oferece a atividade desejada.
   * **Mostra os resultados:** Se encontrar algum local que atenda aos critérios, exibe as informações do local na página.

### Estrutura dos Arquivos:
* **index.html:** A página principal do seu projeto.
* **style.css:** Arquivo responsável pelo visual da página.
* **locais.js:** Arquivo onde estão armazenadas as informações sobre os locais.
* **functions.js:** Arquivo com o código JavaScript que realiza a pesquisa e atualiza a página.

### Como Personalizar:
* **Adicionar novos locais:** Basta adicionar um novo objeto ao array `locais` em `locais.js`.
* **Adicionar novas tags:** Você pode adicionar novas tags para os locais, como "pet friendly", "wi-fi grátis", etc.
* **Melhorar a pesquisa:** Explore novas formas de filtrar os resultados, como por localização ou faixa de preço.
* **Adicionar mais informações:** Inclua mais informações sobre os locais, como fotos, avaliações de usuários, etc.

### Dicas para Desenvolvedores:
* **Use comentários:** Explique o que cada parte do código faz, facilitando a compreensão e futuras modificações.
* **Organize seu código:** Mantenha o código bem organizado e indentado.
* **Utilize nomes de variáveis claros:** Escolha nomes que descrevam o propósito da variável.
* **Valide os dados:** Implemente validações para garantir que os dados inseridos pelo usuário sejam válidos.

### Próximos Passos:
* **Mapa:** Integre um mapa para mostrar a localização dos locais.
* **Filtros:** Permita filtrar os resultados por bairro, faixa de preço, etc.
* **Avaliações:** Permita que os usuários avaliem os locais.
* **Acessibilidade:** Certifique-se de que o próprio site seja acessível para pessoas com deficiência.

### Considerações Finais:
Esse projeto é um ótimo ponto de partida para criar ferramentas que promovam a inclusão e a acessibilidade. Com um pouco de criatividade e dedicação, você pode expandir esse projeto e ajudar ainda mais pessoas a encontrarem lugares onde se sintam bem-vindas.

**Lembre-se:** A acessibilidade é um direito de todos e construir um mundo mais inclusivo é uma responsabilidade de todos nós.
