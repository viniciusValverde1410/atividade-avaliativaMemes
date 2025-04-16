## Instruções de Instalação e Execução 🚀

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/atividade-avaliativaMemes.git
    cd atividade-avaliativaMemes
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Execute o projeto**:
    ```bash
    npm run dev
    ```

4. **Acesse a aplicação**:
    Abra o navegador e acesse `http://localhost:3000`.

---

## Componentes 🧩

- **Header**: Recebe `navItems`e `logo` como props para renderizar os itens de navegação.
- **Sidebar**: Recebe `upcomingEvents`e `premiumFeatured`como props para exibir eventos futuros.
- **EventCard**: Recebe `event` como props para exibir informações do evento (título, data, participantes).
- **HeroSection**: Primeira sessão de destaque do projeto.
- **FeedSection**: Recebe uma lista de memes como props para renderizar o feed.
- **MemeCard**: Recebe informações de um meme (`imagem`, `título`, `interações`) como props.
- **InteractionBar**: Recebe informações de interações (`curtidas`, `comentários`) como props.
- **CategoriesSection**: Recebe categorias como props para exibição.
- **FeaturedSection**: Recebe dados de memes ou criadores em destaque como props.
- **CreatorsSection**: Recebe informações sobre criadores de outro componente com props.
- **CreatorCard**: Recebe informações de um criador (`imagem`, `nome`, `popularidade`) como props.
- **NewsletterSection**: Pode receber callbacks ou informações para inscrição.
- **Footer**: Exibe informaçõe sobre o projeto, utilizando props para logo, links úteis e redes sociais.

---

## Decisões tomadas 🧠
- Optei em seguir a estrutura do site para a componentização. Criei primeiro os componentes maiores e depois fui quebrando os menores dentro deles.
- Utilizei o conceito de props para tornar os componentes reutilizáveis e dinâmicos, facilitando a manutenção e expansão do projeto.
- A estrutura da pasta de componente esta dentro de src, mas fora de app, por uma questão de organização.

##### Estrutura de Pastas 📂
Abaixo está a estrutura de pastas utilizada no projeto:

```
atividade-avaliativaMemes/
├── public/                # Arquivos estáticos (imagens, ícones, etc.)
├── src/                   # Código-fonte do projeto
│   ├── app/               # Páginas principais e layout do projeto
│   │   ├── favicon.ico    # Ícone do site
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.jsx     # Layout principal do projeto
│   │   ├── page.jsx       # Página inicial
│   │   ├── page.module.css # Estilos da página inicial
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header/        # Componente Header
│   │   ├── Sidebar/       # Componente Sidebar
│   │   ├── EventCard/     # Componente EventCard
│   │   ├── FeedSection/   # Componente FeedSection
│   │   ├── MemeCard/      # Componente MemeCard
│   │   ├── HeroSection/   # Componente HeroSection
│   │   ├── NewsletterSection/ # Componente NewsletterSection
│   │   ├── CategoriesSection/ # Componente CategoriesSection
│   │   ├── InteractionBar/    # Componente InteractionBar
│   │   ├── FeaturedSection/   # Componente FeaturedSection
│   │   ├── CreatorCard/       # Componente CreatorCard
│   │   └── Footer/            # Componente Footer
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package-lock.json      # Versões exatas das dependências instaladas
├── package.json           # Dependências e scripts do projeto
├── README.md              # Documentação do projeto

```

## Desafios enfrentados e soluções aplicadas 💪
- O maior desafio foi compreender e implementar a estrutura de componentes com props de forma eficiente. Para isso, utilizei a documentação do React O Copilot do Github e exemplos de projetos similares como referência.

## Tecnologias Utilizadas

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **JavaScript**: Para a lógica do projeto e manipulação de dados.
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3**: Para estilização e layout do projeto.
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white) **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- ![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) **Git**: Controle de versão para gerenciar o código-fonte.
- ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white) **GitHub**: Plataforma para hospedagem e colaboração no código.
- ![GitHub Copilot](https://img.shields.io/badge/-GitHub%20Copilot-000000?style=flat-square&logo=github&logoColor=white) **GitHub Copilot**: Assistente de programação baseado em inteligência artificial.