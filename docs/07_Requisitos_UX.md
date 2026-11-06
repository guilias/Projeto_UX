# Requisitos de UX e Metas de Usabilidade

## 1. Características da Plataforma

| Característica | Descrição |
|---|---|
| **Descrição do software** | Plataforma web para descoberta, avaliação e organização de jogos digitais. Permite consultar informações sobre jogos, ler avaliações, registrar notas e resenhas, criar listas personalizadas e acompanhar usuários com interesses semelhantes. |
| **Descrição do hardware** | A plataforma poderá ser acessada por computadores, notebooks, tablets e smartphones, utilizando um navegador e conexão com a internet. |
| **Capacidades da plataforma** | Busca por jogos; filtros por gênero, plataforma e características; visualização de informações e avaliações; cadastro de notas e resenhas; indicação de status do jogo — jogando, concluído ou abandonado; criação de listas personalizadas; histórico de avaliações; perfis de usuários; possibilidade de seguir usuários e interagir com avaliações; interface responsiva para diferentes tamanhos de tela. |
| **Restrições da plataforma** | Dependência de conexão com a internet; necessidade de cadastro para publicar avaliações; informações possivelmente dependentes de bases de dados externas; avaliações sujeitas à opinião individual dos usuários; limitações nas notificações realizadas pelo navegador; necessidade de moderação de conteúdos publicados pela comunidade. |

## 2. Princípios Gerais do Projeto

| Nome | Descrição | Link |
|---|---|---|
| **Descrição do contexto** | Os usuários são pessoas que jogam videogames e utilizam comunidades, redes sociais e plataformas digitais para descobrir novos jogos, consultar opiniões e compartilhar experiências. Muitos possuem tempo limitado e desejam encontrar recomendações relevantes sem precisar pesquisar em diversas fontes. A plataforma deve facilitar a descoberta de jogos, a consulta de avaliações e o registro das experiências dos usuários. | |
| **Lei Geral de Proteção de Dados — LGPD — Lei nº 13.709/2018** | A LGPD estabelece regras para a coleta, o armazenamento, o processamento e a proteção de dados pessoais. No projeto, deve ser considerada para proteger informações de cadastro, perfis, histórico de jogos, preferências e avaliações dos usuários, coletando apenas os dados necessários para o funcionamento da plataforma. | [Lei nº 13.709/2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) |
| **Lei nº 10.098/2000 — Lei da Acessibilidade** | A lei estabelece normas para promover a acessibilidade de pessoas com deficiência ou mobilidade reduzida. No projeto, devem ser considerados contraste adequado, textos legíveis, navegação por teclado, foco visível, descrição de imagens e uso de elementos que não dependam apenas de cores ou ícones. | [Lei nº 10.098/2000](https://www.planalto.gov.br/ccivil_03/leis/l10098.htm) |
| **ABNT NBR ISO 9241 — Ergonomia da interação humano-sistema** | A norma apresenta diretrizes para o desenvolvimento de sistemas centrados no usuário. Ela orienta a criação de uma interface eficiente, fácil de aprender, adequada às tarefas dos usuários e compatível com suas necessidades e expectativas. | [ABNT NBR ISO 9241-11](https://www.inf.ufsc.br/~edla.ramos/ine5624/_Walter/Normas/Parte%2011/iso9241-11F2.pdf) |
| **Confiabilidade das avaliações** | A plataforma deve apresentar informações complementares, como status do jogo, plataforma utilizada, tempo de jogo e data da avaliação. Esses dados ajudam o usuário a interpretar melhor as opiniões e identificar avaliações mais relevantes para sua decisão. | |
| **Consistência e simplicidade** | A interface deve manter padrões visuais e de interação entre as telas. Os fluxos devem possuir poucos passos, evitando excesso de menus, cliques, pop-ups e campos obrigatórios. | |
| **Privacidade e segurança** | O usuário deve ter controle sobre as informações exibidas em seu perfil. A plataforma deve evitar a exposição desnecessária de dados pessoais e informar de maneira clara como os dados serão utilizados. | |
| **Moderação e convivência** | A plataforma deve possuir regras de uso e mecanismos para denunciar conteúdos ofensivos, inadequados ou que violem as diretrizes da comunidade. | |
| **Facilidade de navegação** | As funcionalidades principais, como busca, avaliações, listas e perfil, devem ser facilmente localizadas, reduzindo o esforço necessário para realizar as tarefas. | |

## 3. Metas de Usabilidade

### 3.1 Metas qualitativas

- **Facilidade de aprendizado:** um novo usuário deve compreender rapidamente como pesquisar um jogo e publicar uma avaliação.

- **Eficiência:** o usuário deve conseguir avaliar um jogo atribuindo apenas uma nota, sem ser obrigado a escrever uma resenha extensa.

- **Encontrabilidade:** informações importantes, como busca, avaliações, listas e perfis, devem ser localizadas sem navegação excessiva.

- **Confiabilidade:** o sistema deve apresentar dados que ajudem o usuário a interpretar e comparar diferentes avaliações.

- **Flexibilidade:** usuários iniciantes devem conseguir utilizar fluxos simplificados, enquanto usuários avançados devem ter a possibilidade de adicionar detalhes, criar listas e organizar seu histórico.

- **Satisfação:** a plataforma deve transmitir uma sensação de organização, relevância e pertencimento à comunidade de jogadores.

- **Prevenção de erros:** o sistema deve permitir que o usuário revise e edite uma avaliação antes da publicação, além de apresentar mensagens claras quando houver algum erro de preenchimento.

- **Acessibilidade:** os principais fluxos devem ser utilizáveis por pessoas com diferentes habilidades, considerando contraste, legibilidade, navegação por teclado e clareza das informações.

### 3.2 Metas quantitativas

| Meta | Porcentagem | Critério de avaliação |
|---|---:|---|
| Avaliar um jogo rapidamente | 30% | Pelo menos 80% dos usuários devem conseguir concluir uma avaliação simples em até dois minutos. |
| Encontrar jogos e informações | 20% | Pelo menos 85% dos usuários devem localizar um jogo utilizando a busca ou os filtros em até 30 segundos. |
| Compreender e confiar nas avaliações | 20% | Pelo menos 80% dos usuários devem identificar a nota, o status, a plataforma e a data de uma avaliação. |
| Organizar jogos em listas | 15% | Pelo menos 80% dos usuários devem conseguir criar uma lista e adicionar um jogo sem auxílio. |
| Interagir com a comunidade | 10% | Pelo menos 75% dos usuários devem conseguir acessar um perfil e seguir outro usuário. |
| Acessibilidade e prevenção de erros | 5% | Os fluxos principais não devem depender exclusivamente de cores, e os erros de preenchimento devem ser indicados de forma clara. |
| **Total** | **100%** | |

As metas foram definidas com base nos resultados da pesquisa realizada pela equipe. Entre os participantes, 45 de 82 apontaram que o processo de avaliação pode ser demorado, 68 consideraram a história um aspecto importante dos jogos, 67 valorizaram o gameplay e 64,6% afirmaram utilizar listas de desejos.

Dessa forma, o projeto deve priorizar avaliações rápidas, busca eficiente, informações completas, organização dos jogos e interação com usuários que possuam interesses semelhantes.

<img width="611" height="444" alt="ciclo_de_vida" src="https://github.com/user-attachments/assets/8fdea9b4-3dc2-4525-8868-064605166903" />
