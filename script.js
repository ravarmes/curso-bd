/*
  script.js — Capítulos com abas e conteúdo por subseções
  - Sidebar: apenas capítulos (hash #cap-id)
  - Abas por capítulo: Infográficos | Slides | Conteúdos | Exercícios | Podcasts | Práticas | Vídeos
  - Práticas, Conteúdos e Exercícios organizados por subseções
  - Botões: esconder/mostrar sidebar e tela cheia
*/

// Curso: 9 capítulos
const chapters = [
  {
    id: "cap-1",
    title: "Introdução",
    fullTitle: "Introdução a Bancos de Dados e a Necessidade de Estrutura",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap01-Introducao-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap01-Introducao-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap01-Introducao-Infografico.png" alt="Infográfico - Capítulo 1: Introdução a Bancos de Dados" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap01-Introducao-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap01-Introducao-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap01-Introducao-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap01-Introducao-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap01_intro.html",
    sections: [
      {
        id: "1.1",
        title: "Dados, Informação e Conhecimento",
        practiceUrl: "praticas/cap-1/1-1/index.html",
        practice: `
          <p>Classifique exemplos como dado, informação ou conhecimento. Discuta em dupla.</p>
          <ul>
            <li>Registro: <code>21</code></li>
            <li>Resumo: "Temperatura média do dia: 21°C"</li>
            <li>Decisão: "Leve um casaco amanhã, tendência de frio"</li>
          </ul>
        `,
        content: `
          <p><strong>Dado</strong> é um valor bruto (ex.: 21). <strong>Informação</strong> agrega contexto (21°C hoje). <strong>Conhecimento</strong> orienta ação (use casaco).</p>
          <p>Em sistemas, a transformação de dado → informação → conhecimento ocorre via organização, agregação e regras.</p>
        `,
        exerciseUrl: "exercicios/cap-1/1-1/index.html",
        exercises: [
          { type: "mc", prompt: "Qual opção representa conhecimento?", options: ["Valor: 15", "Relatório: média semanal 15°C", "Recomendação: leve casaco amanhã"], answerIndex: 2 },
          { type: "mc", prompt: "Qual alternativa melhor representa informação?", options: ["21", "Temperatura média do dia: 21°C", "Leve casaco amanhã"], answerIndex: 1 },
          { type: "mc", prompt: "Metadado é...", options: ["dados sobre dados", "visualização dos dados", "regra de interface"], answerIndex: 0 },
        ],
      },
      {
        id: "1.2",
        title: "O Problema do Armazenamento: Dataset vs SGBD",
        practiceUrl: "praticas/cap-1/1-2/index.html",
        practice: `
          <p>Observe a planilha abaixo com duplicidades e atualizações manuais.</p>
          <figure>
            <img src="https://placehold.co/800x220?text=Planilha+com+Redundancias" alt="Planilha com redundâncias" />
            <figcaption>Duplicação de cadastros e versões divergentes.</figcaption>
          </figure>
        `,
        content: `
          <p>Planilhas simples sofrem com <em>redundância</em> e <em>inconsistência</em>. Alterar um registro em uma aba e esquecer outra gera dados conflitantes.</p>
          <p>Um <strong>SGBD</strong> centraliza armazenamento, impõe regras e reduz redundâncias por meio de normalização e integridade.</p>
        `,
        exerciseUrl: "exercicios/cap-1/1-2/index.html",
        exercises: [
          { type: "mc", prompt: "Qual risco direto da redundância em planilhas?", options: ["Alta performance", "Inconsistência de dados", "Melhor segurança"], answerIndex: 1 },
          { type: "mc", prompt: "Quando migrar para um SGBD?", options: ["Um único usuário editando raramente", "Múltiplos usuários simultâneos e necessidade de auditoria", "Sem necessidade de segurança"], answerIndex: 1 },
          { type: "mc", prompt: "Qual benefício típico de um SGBD?", options: ["Forte acoplamento com arquivos", "Integridade e controle transacional", "Duplicação de esforço"], answerIndex: 1 },
        ],
      },
      {
        id: "1.3",
        title: "SGBDs: Funções e Componentes",
        practiceUrl: "praticas/cap-1/1-3/index.html",
        practice: `
          <p>Liste componentes de um SGBD: armazenamento, gerenciador de transações, otimizador de consultas, segurança.</p>
          <p>Explique em 1 frase o papel de cada um.</p>
        `,
        content: `
          <p>Um <strong>SGBD</strong> provê CRUD, controle de concorrência (transações), logging/backup e segurança (perfis e permissões).</p>
          <p>O otimizador analisa consultas e escolhe planos eficientes com base em índices e estatísticas.</p>
        `,
        exerciseUrl: "exercicios/cap-1/1-3/index.html",
        exercises: [
          { type: "mc", prompt: "O que evita conflitos entre transações?", options: ["Controle de concorrência", "Camada física", "View externa"], answerIndex: 0 },
          { type: "mc", prompt: "Em ACID, qual propriedade garante persistência após falhas?", options: ["Atomicidade", "Isolamento", "Durabilidade"], answerIndex: 2 },
          { type: "mc", prompt: "Qual componente escolhe planos de execução eficientes?", options: ["Otimização de consultas", "Buffer/Cache", "Catálogo de metadados"], answerIndex: 0 },
        ],
      },
      {
        id: "1.4",
        title: "Modelos de dados e Arquitetura de Três Esquemas",
        practiceUrl: "praticas/cap-1/1-4/index.html",
        practice: `
          <p>Desenhe um fluxo: <em>conceitual</em> → <em>lógico</em> → <em>físico</em>. Cite 1 exemplo de cada.</p>
        `,
        content: `
          <p>Esquema <strong>conceitual</strong> (MER), <strong>lógico</strong> (tabelas e chaves) e <strong>físico</strong> (arquivos, índices) separam preocupações.</p>
          <p>O <em>esquema externo</em> define visões específicas para cada grupo de usuários.</p>
        `,
        exerciseUrl: "exercicios/cap-1/1-4/index.html",
        exercises: [
          { type: "mc", prompt: "Qual esquema define visões de usuários?", options: ["Conceitual", "Lógico", "Externo"], answerIndex: 2 },
          { type: "mc", prompt: "O esquema conceitual representa...", options: ["Tabelas físicas do banco", "Modelo ER de alto nível", "Índices e arquivos"], answerIndex: 1 },
          { type: "mc", prompt: "O esquema lógico descreve...", options: ["Implementação em arquivos", "Tabelas e chaves do modelo relacional", "Visões de usuários"], answerIndex: 1 },
        ],
      },
    ],
  },
  {
    id: "cap-2",
    title: "Modelagem Conceitual",
    fullTitle: "Modelagem Conceitual de Dados: O Blueprint do Banco",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap02-ModeloConceitual-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
       <p class="note">Seu navegador não embute PDF. <a href="slides/Cap02-ModeloConceitual-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap02-ModeloConceitual-Infografico.png" alt="Infográfico - Capítulo 2: Modelagem Conceitual" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap02-ModeloConceitual-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap02-ModeloConceitual-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap02-ModeloConceitual-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap02-ModeloConceitual-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap02_modelagem_conceitual.html",
    sections: [
      {
        id: "2.1",
        title: "Entidades, Relacionamentos e Atributos",
        practiceUrl: "praticas/cap-2/2-1/index.html",
        practice: `
          <p>Liste 3 entidades e 3 atributos por entidade (ex.: Usuário{cpf,nome,turma}).</p>
        `,
        content: `
          <p><strong>Entidades</strong> representam objetos/temas; <strong>atributos</strong> suas propriedades; <strong>relacionamentos</strong> ligam entidades.</p>
          <p>Defina chaves: primárias (identificação) e estrangeiras (referência).</p>
        `,
        exerciseUrl: "exercicios/cap-2/2-1/index.html",
        exercises: [
          { type: "mc", prompt: "O elemento que conecta entidades em um MER é...", options: ["Atributo", "Relacionamento", "Chave primária"], answerIndex: 1 },
          { type: "mc", prompt: "No ER, atributos são representados por...", options: ["Losango", "Elipse", "Retângulo"], answerIndex: 1 },
          { type: "mc", prompt: "Um atributo multivalorado é indicado por...", options: ["Oval dupla", "Retângulo sublinhado", "Losango"], answerIndex: 0 },
        ],
      },
      {
        id: "2.2",
        title: "Cardinalidade, Participação e Integridade",
        practiceUrl: "praticas/cap-2/2-2/index.html",
        practice: `
          <p>Defina cardinalidades: Usuário–Empréstimo (1:N), Livro–Exemplar (1:N). Indique participação obrigatória quando aplicável.</p>
        `,
        content: `
          <p><strong>Cardinalidade</strong> expressa quantidades (1:1, 1:N, N:N). <strong>Participação</strong> indica se o relacionamento é obrigatório.</p>
          <p>Regras de integridade asseguram consistência: não permitir empréstimos sem usuário válido.</p>
        `,
        exerciseUrl: "exercicios/cap-2/2-2/index.html",
        exercises: [
          { type: "mc", prompt: "Usuário pode ter vários empréstimos. A cardinalidade Usuário–Empréstimo é...", options: ["1:N", "N:1", "1:1"], answerIndex: 0 },
          { type: "mc", prompt: "Participação total significa...", options: ["mínimo=0", "a entidade deve participar do relacionamento (mínimo=1)", "máximo=1"], answerIndex: 1 },
          { type: "mc", prompt: "No diagrama, a 'pata de galinha' indica...", options: ["lado 1", "lado N", "participação total"], answerIndex: 1 },
        ],
      },
      {
        id: "2.3",
        title: "Normalização Inicial e Boas Práticas",
        practiceUrl: "praticas/cap-2/2-3/index.html",
        practice: `
          <p>Transforme autor1, autor2... numa tabela Autores relacionada a Livro–Autor (N:N).</p>
        `,
        content: `
          <p>A <strong>normalização</strong> reduz redundâncias. 1FN remove grupos repetidos; 2FN/3FN minimizam dependências parciais/transitivas.</p>
          <p>Documente regras: formatos, chaves e integridade referencial desde cedo.</p>
        `,
        exerciseUrl: "exercicios/cap-2/2-3/index.html",
        exercises: [
          { type: "mc", prompt: "Qual prática ajuda diretamente a reduzir redundância?", options: ["Desnormalização", "Normalização", "Indexação"], answerIndex: 1 },
          { type: "mc", prompt: "Em 1FN, deve-se garantir...", options: ["atributos multivalorados", "apenas dados atômicos", "dependência transitiva"], answerIndex: 1 },
          { type: "mc", prompt: "Em 3FN, deve-se evitar...", options: ["dependência parcial", "dependência transitiva", "chaves compostas"], answerIndex: 1 },
        ],
      },
      {
        id: "2.4",
        title: "Construindo o MER no brModelo",
        practiceUrl: "praticas/cap-2/2-4/index.html",
        practice: `
          <p>Crie entidades, defina atributos e conecte relacionamentos com cardinalidades corretas.</p>
        `,
        content: `
          <p>No brModelo: retângulos (entidades), losangos (relacionamentos), elipses (atributos). Configure chaves e cardinalidades.</p>
          <p>Valide participação obrigatória quando o processo exigir (ex.: Empréstimo depende de Usuário).</p>
        `,
        exerciseUrl: "exercicios/cap-2/2-4/index.html",
        exercises: [
          { type: "mc", prompt: "No brModelo, qual forma representa relacionamentos?", options: ["Retângulo", "Losango", "Elipse"], answerIndex: 1 },
          { type: "mc", prompt: "No brModelo, entidades são representadas por...", options: ["Retângulos", "Losangos", "Elipses"], answerIndex: 0 },
          { type: "mc", prompt: "Participação obrigatória é modelada como...", options: ["mínimo=1 no relacionamento", "máximo=1", "uso de índices"], answerIndex: 0 },
        ],
      },
    ],
  },
  {
    id: "cap-3",
    title: "Modelagem Lógica",
    fullTitle: "Modelo Lógico Relacional: A Estrutura Formal do Banco",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap03-ModeloLogico-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
       <p class="note">Seu navegador não embute PDF. <a href="slides/Cap03-ModeloLogico-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap03-ModeloLogico-Infografico.png" alt="Infográfico - Capítulo 3: Modelo Lógico Relacional" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap03-ModeloLogico-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap03-ModeloLogico-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap03-ModeloLogico-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap03-ModeloLogico-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap03_modelagem_logica.html",
    sections: [
      {
        id: "3.1",
        title: "Transformação do Modelo Conceitual em Relacional",
        practiceUrl: "praticas/cap-3/3-1/index.html",
        practice: `
          <p>Converta entidades e relacionamentos em tabelas e FKs; identifique tabela associativa em N:M.</p>
        `,
        content: `
          <p>Conversão <strong>ER→Relacional</strong>: entidades/relacionamentos tornam‑se tabelas, <strong>PK/FK</strong> definem identificação e ligação; <strong>N:M</strong> vira <em>tabela associativa</em>.</p>
        `,
        exerciseUrl: "exercicios/cap-3/3-1/index.html",
        exercises: [
          { type: "mc", prompt: "Em ER→Relacional, um relacionamento N:M deve ser mapeado para...", options: ["incluir PK do lado 1 como FK no lado N", "uma tabela associativa com FKs das entidades", "apenas uma FK em qualquer entidade"], answerIndex: 1 },
          { type: "mc", prompt: "No modelo relacional, 'tupla' se refere a...", options: ["coluna", "linha", "conjunto de tabelas"], answerIndex: 1 },
          { type: "mc", prompt: "Para garantir relações entre tabelas, usa-se...", options: ["chave estrangeira", "chave primária", "índice secundário"], answerIndex: 0 },
        ],
      },
      {
        id: "3.2",
        title: "Chaves Primárias, Estrangeiras e Integridade Referencial",
        practiceUrl: "praticas/cap-3/3-2/index.html",
        practice: `
          <p>Defina PKs e FKs em um esquema simples (aluno, livro, reserva); identifique onde a FK deve estar.</p>
        `,
        content: `
          <p><strong>PK</strong>: identificação única e não nula. <strong>FK</strong>: referencia PK de outra tabela para manter <strong>integridade referencial</strong>.</p>
        `,
        exerciseUrl: "exercicios/cap-3/3-2/index.html",
        exercises: [
          { type: "mc", prompt: "Uma chave primária (PK) deve ser...", options: ["única e não nula", "apenas única", "pode conter NULL"], answerIndex: 0 },
          { type: "mc", prompt: "Uma chave estrangeira (FK)...", options: ["identifica tuplas na mesma tabela", "referencia a PK de outra tabela", "cria índice automático"], answerIndex: 1 },
          { type: "mc", prompt: "Integridade referencial garante...", options: ["existência de registros citados pelas FKs", "desempenho das consultas", "normalização total"], answerIndex: 0 },
        ],
      },
      {
        id: "3.3",
        title: "Normalização Detalhada: Primeira, Segunda e Terceira Formas Normais (1FN, 2FN, 3FN)",
        practiceUrl: "praticas/cap-3/3-3/index.html",
        practice: `
          <p>Aplique 1FN (dados atômicos), 2FN (remover dependência parcial) e 3FN (remover dependência transitiva) em exemplos curtos.</p>
        `,
        content: `
          <p><strong>1FN</strong>: apenas dados atômicos. <strong>2FN</strong>: remove dependência parcial (chave composta). <strong>3FN</strong>: remove dependência transitiva entre não‑chaves.</p>
        `,
        exerciseUrl: "exercicios/cap-3/3-3/index.html",
        exercises: [
          { type: "mc", prompt: "A 1FN requer...", options: ["dados atômicos, sem multivalorados", "remoção de dependência transitiva", "uso de chaves substitutas"], answerIndex: 0 },
          { type: "mc", prompt: "A 2FN corrige...", options: ["dependência parcial em chave composta", "atributos multivalorados", "dependência transitiva"], answerIndex: 0 },
          { type: "mc", prompt: "A 3FN remove...", options: ["dependência parcial", "dependência transitiva entre não‑chaves", "dependência funcional da chave"], answerIndex: 1 },
        ],
      },
      {
        id: "3.4",
        title: "Regras de Mapeamento e Convenções",
        practiceUrl: "praticas/cap-3/3-4/index.html",
        practice: `
          <p>Mapeie 1:1, 1:N e N:M conforme as regras; crie nomes em <em>snake_case</em>.</p>
        `,
        content: `
          <p><strong>1:N</strong>: incluir PK do lado 1 como FK no lado N. <strong>N:M</strong>: criar tabela associativa. <strong>Multivalorado</strong>: tabela própria com FK.</p>
        `,
        exerciseUrl: "exercicios/cap-3/3-4/index.html",
        exercises: [
          { type: "mc", prompt: "Em 1:N, a regra correta é...", options: ["incluir PK do lado 1 como FK na tabela do lado N", "criar tabela associativa", "duplicar atributos para reduzir FKs"], answerIndex: 0 },
          { type: "mc", prompt: "Atributo multivalorado deve...", options: ["virar tabela própria com FK para a entidade", "ser armazenado como lista em uma coluna", "ser concatenado como texto"], answerIndex: 0 },
          { type: "mc", prompt: "Relacionamento 1:1 costuma ser mapeado...", options: ["com FK no lado de participação total", "com tabela associativa", "sem FK"], answerIndex: 0 },
        ],
      },
      {
        id: "3.5",
        title: "Exportando o Código DDL SQL no brModelo",
        practiceUrl: "praticas/cap-3/3-5/index.html",
        practice: `
          <p>Siga o fluxo Conceitual → Lógico → SQL DDL no brModelo e gere um script mínimo (aluno, livro, reserva).</p>
        `,
        content: `
          <p>No brModelo, gere <strong>Modelo Lógico</strong> a partir do ER e então exporte o <strong>SQL (DDL)</strong>; revise PK/FK e tipos.</p>
        `,
        exerciseUrl: "exercicios/cap-3/3-5/index.html",
        exercises: [
          { type: "mc", prompt: "Fluxo correto para gerar SQL DDL:", options: ["Conceitual → Lógico → SQL DDL", "SQL DDL → Conceitual → Lógico", "Lógico → Conceitual → SQL DDL"], answerIndex: 0 },
          { type: "mc", prompt: "Qual comando define a PK no DDL?", options: ["FOREIGN KEY", "PRIMARY KEY", "UNIQUE"], answerIndex: 1 },
          { type: "mc", prompt: "Uma FK no DDL é definida com...", options: ["PRIMARY KEY (...) REFERENCES ...", "FOREIGN KEY (...) REFERENCES outra_tabela(...)", "UNIQUE (...) REFERENCES ..."], answerIndex: 1 },
        ],
      },
    ],
  },
  {
    id: "cap-4",
    title: "Modelagem Física",
    fullTitle: "Modelo Físico e Linguagem SQL",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap04-ModeloFisico-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap04-ModeloFisico-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap04-ModeloFisico-Infografico.png" alt="Infográfico - Capítulo 4: Modelo Físico e SQL" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap04-ModeloFisico-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap04-ModeloFisico-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap04-ModeloFisico-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap04-ModeloFisico-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap04_linguagem_sql.html",
    sections: [],
  },
  {
    id: "cap-5",
    title: "Consultas Avançadas SQL",
    fullTitle: "Consultas Avançadas em SQL",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap05-ConsultasAvancadas-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap05-ConsultasAvancadas-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap05-ConsultasAvancadas-Infografico.png" alt="Infográfico - Capítulo 5: Consultas Avançadas" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap05-ConsultasAvancadas-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap05-ConsultasAvancadas-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap05-ConsultasAvancadas-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap05-ConsultasAvancadas-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap05_consultas_avancadas.html",
    sections: [],
  },
  {
    id: "cap-6",
    title: "Otimização",
    fullTitle: "Otimização e Desempenho de Bancos de Dados",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap06-Otimizacao-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap06-Otimizacao-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap06-Otimizacao-Infografico.png" alt="Infográfico - Capítulo 6: Otimização" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap06-Otimizacao-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap06-Otimizacao-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap06-Otimizacao-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap06-Otimizacao-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap06_otimizacao.html",
    sections: [],
  },
  {
    id: "cap-7",
    title: "Visualização de Dados",
    fullTitle: "Visualização de Dados com Power BI",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap07-PowerBI-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap07-PowerBI-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap07-PowerBI-Infografico.png" alt="Infográfico - Capítulo 7: Power BI" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap07-PowerBI-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap07-PowerBI-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap07-PowerBI-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap07-PowerBI-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap07_web_powerbi.html",
    sections: [],
  },
  {
    id: "cap-8",
    title: "Trabalhando com Datasets",
    fullTitle: "Trabalhando com Datasets",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap08-Datasets-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap08-Datasets-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap08-Datasets-Infografico.png" alt="Infográfico - Capítulo 8: Datasets" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap08-Datasets-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap08-Datasets-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap08-Datasets-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap08-Datasets-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap08_dataset.html",
    sections: [],
  },
  {
    id: "cap-9",
    title: "IA e Banco de Dados",
    fullTitle: "Inteligência Artificial e Bancos de Dados",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap09-IA-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap09-IA-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap09-IA-Infografico.png" alt="Infográfico - Capítulo 9: Inteligência Artificial" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap09-IA-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap09-IA-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap09-IA-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap09-IA-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-bd/OEBPS/text/cap09_ia.html",
    sections: [],
  },
];

// Elementos
const layoutEl = document.getElementById("layout");
const sidebarEl = document.getElementById("sidebar");
const listEl = document.getElementById("chapter-list");
const contentEl = document.getElementById("content");
const titleEl = document.getElementById("chapter-title");
const menuBtn = document.getElementById("menu-btn");
const collapseBtn = document.getElementById("collapse-sidebar-btn");

// Sidebar: lista apenas capítulos
function buildSidebar() {
  const frag = document.createDocumentFragment();
  chapters.forEach((ch) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${ch.id}`;
    a.className = "chapter-link";
    a.textContent = ch.title;
    a.setAttribute("data-id", ch.id);
    li.appendChild(a);
    frag.appendChild(li);
  });
  listEl.innerHTML = "";
  listEl.appendChild(frag);
}

// Renderização por capítulo com abas
function renderChapter(chapterId) {
  const chapter = chapters.find((c) => c.id === chapterId) || chapters[0];
  titleEl.textContent = chapter.fullTitle || chapter.title;

  // Atualiza estado active na sidebar
  document.querySelectorAll('.chapter-link').forEach((a) => {
    const isActive = a.getAttribute('data-id') === chapter.id;
    a.classList.toggle('active', isActive);
  });

  // 7 abas - Infográficos é a primeira (padrão)
  const tabs = [
    { key: 'infographics', label: 'Infográficos' },
    { key: 'contents', label: 'Conteúdos' },
    { key: 'slides', label: 'Slides' },
    { key: 'podcasts', label: 'Podcasts' },
    { key: 'videos', label: 'Vídeos' },
    { key: 'exercises', label: 'Exercícios' },
    { key: 'practices', label: 'Práticas' },
  ];

  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  const fsBtn = document.createElement('button');
  fsBtn.textContent = 'Tela cheia';
  fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      contentEl.requestFullscreen?.();
      fsBtn.textContent = 'Sair da tela cheia';
    } else {
      document.exitFullscreen?.();
      fsBtn.textContent = 'Tela cheia';
    }
  });
  toolbar.appendChild(fsBtn);

  const tabbar = document.createElement('div');
  tabbar.className = 'tabbar';
  const panels = document.createElement('div');

  tabs.forEach(({ key, label }, idx) => {
    const t = document.createElement('button');
    t.className = 'tab' + (idx === 0 ? ' active' : '');
    t.setAttribute('data-key', key);
    t.textContent = label;
    tabbar.appendChild(t);

    const p = document.createElement('div');
    p.className = 'panel' + (idx === 0 ? ' active' : '');
    p.setAttribute('data-key', key);

    if (key === 'infographics') {
      p.innerHTML = chapter.infographic || '<p>Sem infográfico disponível.</p>';
    } else if (key === 'podcasts') {
      p.innerHTML = chapter.podcast || '<p>Sem podcast disponível.</p>';
    } else if (key === 'videos') {
      p.innerHTML = chapter.video || '<p>Sem vídeo disponível.</p>';
    } else if (key === 'exercises') {
      if (chapter.sections?.length) {
        p.innerHTML = renderExercisesSectioned(chapter.sections);
        wireExercisesSectioned(p, chapter.sections);
        const exIframes = p.querySelectorAll('.exercise-iframe');
        const adjustEx = () => {
          const h = Math.max(460, window.innerHeight - 260);
          exIframes.forEach((ifr) => { ifr.style.height = h + 'px'; });
        };
        adjustEx();
        window.addEventListener('resize', adjustEx);
      } else {
        p.innerHTML = '<h3>Exercícios</h3><p>Exercícios serão adicionados em breve.</p>';
      }
    } else if (key === 'practices') {
      if (chapter.sections?.length) {
        p.innerHTML = renderPracticesSectioned(chapter.sections);
        const iframes = p.querySelectorAll('.practice-iframe');
        const adjust = () => {
          const h = Math.max(460, window.innerHeight - 260);
          iframes.forEach((ifr) => { ifr.style.height = h + 'px'; });
        };
        adjust();
        window.addEventListener('resize', adjust);
      } else {
        p.innerHTML = '<h3>Práticas</h3><p>Práticas serão adicionadas em breve.</p>';
      }
    } else if (key === 'contents') {
      if (chapter.contentUrl) {
        p.innerHTML = `
          <h3>Conteúdos</h3>
          <iframe class="content-iframe" src="${chapter.contentUrl}" width="100%" style="border:0;" loading="lazy"></iframe>
        `;
        const iframe = p.querySelector('.content-iframe');
        const setHeight = () => { iframe.style.height = Math.max(700, window.innerHeight - 180) + 'px'; };
        setHeight();
        window.addEventListener('resize', setHeight);
      } else if (chapter.sections?.length) {
        p.innerHTML = renderContentsSectioned(chapter.sections);
      } else {
        p.innerHTML = `<h3>Conteúdos</h3><p>Sem conteúdos por enquanto.</p>`;
      }
    } else if (key === 'slides') {
      p.innerHTML = chapter.slides || '<p>Sem slides disponíveis.</p>';
      const iframe = p.querySelector('.slides-iframe');
      if (iframe) {
        // Botão de Apresentação dentro do conteúdo da aba Slides
        const presBtn = document.createElement('button');
        presBtn.className = 'present-btn';
        presBtn.textContent = 'Apresentação';
        // Coloca o botão logo acima do iframe de slides
        p.insertBefore(presBtn, iframe);

        let loaded = false;
        iframe.addEventListener('load', () => { loaded = true; });
        const setHeight = () => {
          iframe.style.height = Math.max(600, window.innerHeight - 180) + 'px';
        };
        setHeight();
        window.addEventListener('resize', setHeight);

        // Lógica de apresentação: abrir em nova aba para usar o modo do navegador
        presBtn.addEventListener('click', () => {
          // Garante que a aba Slides está ativa
          const slidesTab = tabbar.querySelector('.tab[data-key="slides"]');
          slidesTab?.click();

          // Base do PDF sem hash
          const baseSrc = (iframe.getAttribute('src') || '').split('#')[0];
          const url = `${baseSrc}#page=1&view=FitH`;
          const win = window.open(url, '_blank');
          if (!win) {
            alert('Permita pop-ups para abrir a apresentação em nova aba.');
          } else {
            try { win.focus(); } catch (e) { /* noop */ }
          }
        });

        // Fallback automático: se o domínio bloquear iframe, exibir aviso e apontar para o link.
        setTimeout(() => {
          if (!loaded) {
            const warning = document.createElement('div');
            warning.className = 'note';
            warning.textContent = 'Não foi possível embutir os slides (bloqueado pelo domínio). Use o link abaixo.';
            const fallback = p.querySelector('p.note');
            if (fallback) {
              p.insertBefore(warning, fallback);
            } else {
              p.appendChild(warning);
            }
          }
        }, 3000);
      }
    }
    panels.appendChild(p);
  });

  contentEl.innerHTML = '';
  contentEl.appendChild(toolbar);
  contentEl.appendChild(tabbar);
  contentEl.appendChild(panels);

  tabbar.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.tab');
    if (!btn) return;
    const key = btn.getAttribute('data-key');
    tabbar.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b === btn));
    panels.querySelectorAll('.panel').forEach((panel) => panel.classList.toggle('active', panel.getAttribute('data-key') === key));
  });

  // Mobile: fecha sidebar após navegar
  if (window.innerWidth <= 960) {
    sidebarEl.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}

// Renderizadores por subseção
function renderPracticesSectioned(sections = []) {
  return `
    <h3>Práticas</h3>
    ${sections.map((s) => `
      <div class="subsection">
        <h4>${s.id} — ${s.title}</h4>
        ${s.practiceUrl
      ? `<iframe class="practice-iframe" src="${s.practiceUrl}" width="100%" style="border:0;" loading="lazy"></iframe>`
      : `<div>${s.practice || '<p>Sem prática definida.</p>'}</div>`}
      </div>
    `).join('')}
  `;
}
function renderContentsSectioned(sections = []) {
  return `
    <h3>Conteúdos</h3>
    ${sections.map((s) => `
      <div class="subsection">
        <h4>${s.id} — ${s.title}</h4>
        <div>${s.content || '<p>Sem conteúdo definido.</p>'}</div>
      </div>
    `).join('')}
  `;
}
function renderExercisesSectioned(sections = []) {
  if (!sections.length) return '<p>Sem exercícios por enquanto.</p>';
  return `
    <h3>Exercícios</h3>
    ${sections.map((s, secIdx) => `
      <div class="subsection" data-sec-index="${secIdx}">
        <h4>${s.id} — ${s.title}</h4>
        ${s.exerciseUrl
      ? `<iframe class="exercise-iframe" src="${s.exerciseUrl}" width="100%" style="border:0;" loading="lazy"></iframe>`
      : `${(s.exercises || []).map((ex, exIdx) => {
        if (ex.type === 'mc') {
          const order = Array.from({ length: ex.options.length }, (_, i) => i).sort(() => Math.random() - 0.5);
          return `
                  <div class="exercise" data-type="mc" data-sec-index="${secIdx}" data-ex-index="${exIdx}">
                    <h4>${ex.prompt}</h4>
                    <div class="options">
                      ${order.map((origI) => `<button class="option-btn" data-i="${origI}">${ex.options[origI]}</button>`).join('')}
                    </div>
                    <div class="exercise-actions"><button class="redo-btn" type="button">Refazer</button></div>
                    <div class="feedback" aria-live="polite"></div>
                  </div>
                `;
        }
        return '';
      }).join('')}`}
      </div>
    `).join('')}
  `;
}

// Exercícios simples sem subseções (fallback)
function renderExercises(items = []) {
  if (!items || !items.length) return '<p>Sem exercícios por enquanto.</p>';
  return items.map((ex, idx) => {
    if (ex.type === 'mc') {
      const order = Array.from({ length: ex.options.length }, (_, i) => i).sort(() => Math.random() - 0.5);
      return `
        <div class="exercise" data-type="mc" data-index="${idx}">
          <h4>${ex.prompt}</h4>
          <div class="options">
            ${order.map((origI) => `<button class="option-btn" data-i="${origI}">${ex.options[origI]}</button>`).join('')}
          </div>
          <div class="exercise-actions"><button class="redo-btn" type="button">Refazer</button></div>
          <div class="feedback" aria-live="polite"></div>
        </div>
      `;
    }
    return '';
  }).join('');
}

function wireExercisesSectioned(containerEl, sections) {
  // Múltipla escolha por subseção com feedback pedagógico, embaralhamento e refazer
  containerEl.querySelectorAll('.exercise[data-type="mc"]').forEach((exEl) => {
    const secIdx = Number(exEl.getAttribute('data-sec-index'));
    const exIdx = Number(exEl.getAttribute('data-ex-index'));
    const data = sections?.[secIdx]?.exercises?.[exIdx];
    const fb = exEl.querySelector('.feedback');
    const optsEl = exEl.querySelector('.options');

    const getFallbackExplanation = () => {
      const s = sections?.[secIdx];
      if (!s) return `<div class="explanation">Releia os conceitos desta subseção.</div>`;
      if (s.content) return `<div class="explanation">${s.content}</div>`;
      return `<div class="explanation">Releia a seção ${s.id} — ${s.title}.</div>`;
    };

    const explanationHTMLIncorrect = data?.explanation ? `<div class="explanation">${data.explanation}</div>` : getFallbackExplanation();
    const explanationHTMLCorrect = data?.explanation ? `<div class="explanation">${data.explanation}</div>` : '';

    const bindOptionHandlers = () => {
      exEl.querySelectorAll('.option-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const chosen = Number(btn.getAttribute('data-i'));
          const correct = chosen === data?.answerIndex;
          exEl.querySelectorAll('.option-btn').forEach((b) => b.classList.remove('correct', 'incorrect'));
          btn.classList.add(correct ? 'correct' : 'incorrect');
          fb.innerHTML = correct
            ? `Correto! ✅${explanationHTMLCorrect}`
            : `Incorreto. <details class="why"><summary>Por quê?</summary>${explanationHTMLIncorrect}</details>`;
        });
      });
    };

    bindOptionHandlers();

    // Botão Refazer: limpa estado e re-embaralha as alternativas
    const redoBtn = exEl.querySelector('.redo-btn');
    redoBtn?.addEventListener('click', () => {
      const order = Array.from({ length: data.options.length }, (_, i) => i).sort(() => Math.random() - 0.5);
      optsEl.innerHTML = order.map((origI) => `<button class="option-btn" data-i="${origI}">${data.options[origI]}</button>`).join('');
      fb.textContent = '';
      bindOptionHandlers();
    });
  });
}

// Hash
function parseHash() {
  const hash = window.location.hash.replace('#', '');
  const chapterId = hash || (chapters[0] && chapters[0].id);
  return { chapterId };
}
function renderFromHash() {
  const { chapterId } = parseHash();
  renderChapter(chapterId);
}

// Eventos
window.addEventListener('hashchange', renderFromHash);
menuBtn.addEventListener('click', () => {
  const isOpen = sidebarEl.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
collapseBtn.addEventListener('click', () => {
  const collapsed = layoutEl.classList.toggle('collapsed');
  collapseBtn.textContent = collapsed ? 'Mostrar barra' : 'Esconder barra';
  collapseBtn.setAttribute('aria-expanded', String(!collapsed));
});

document.addEventListener('fullscreenchange', () => {
  const isTarget = document.fullscreenElement === contentEl;
  contentEl.style.height = isTarget ? '100vh' : '';
  contentEl.style.overflow = isTarget ? 'auto' : '';
});

// Lightbox para infográficos
function createLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar">&times;</button>
    <img class="lightbox-img" src="" alt="" />
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lightbox-img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) close();
  });

  return { open, close };
}

const lightbox = createLightbox();

// Delegação de eventos para imagens de infográfico
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('infographic-img')) {
    lightbox.open(e.target.src, e.target.alt);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  renderFromHash();
});

/*
  PPT nos Slides:
  - Use o Office Web Viewer em um iframe:
    <iframe src="https://view.officeapps.live.com/op/embed.aspx?src={URL%20PUBLICA%20DO%20PPTX}" width="100%" height="420"></iframe>
  - A URL do PPTX precisa ser pública; animações comuns são suportadas.
*/