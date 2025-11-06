# 🚀 Zenkai - Equipe de Robótica

Um site moderno e responsivo para a equipe de robótica Zenkai, com estética inspirada em Dragon Ball, múltiplas abas navegáveis, integração de redes sociais e Shenlong animado.

## 🎨 Características

✅ **Estética Dragon Ball** - Cores vibrantes (#36025E roxo, #FFDE59 amarelo)
✅ **Múltiplas Abas** - Sistema de navegação tipo aplicativo moderno
✅ **Shenlong Animado** - Dragão atravessando a página com animação suave
✅ **Redes Sociais** - Aba dedicada com botões para Instagram, GitHub, YouTube, LinkedIn e Discord
✅ **Código Bem Estruturado** - Fácil de entender e modificar
✅ **Responsivo** - Funciona em desktop e mobile

---

## 📁 Estrutura do Projeto

```
zenkai-robotics-v2/
├── src/
│   ├── App.jsx          # Componente principal com todas as seções
│   ├── App.css          # Estilos com variáveis de cores
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── public/
│   └── vite.svg         # Logo do Vite
├── package.json         # Dependências do projeto
└── vite.config.js       # Configuração do Vite
```

---

## 🛠️ Como Modificar o Site

### 1️⃣ **Adicionar Novos Projetos**

Abra `src/App.jsx` e procure pela função `ProjetosSection()`. Encontre o array `projetos`:

```javascript
const projetos = [
  {
    id: 1,
    titulo: 'Robô Explorador',
    descricao: 'Robô autônomo para exploração de terrenos',
    imagem: '🤖',
    status: 'Em Desenvolvimento',
  },
  // ADICIONE NOVOS PROJETOS AQUI
  {
    id: 4,
    titulo: 'Seu Novo Projeto',
    descricao: 'Descrição do seu projeto',
    imagem: '🎯',
    status: 'Em Desenvolvimento',
  },
]
```

### 2️⃣ **Adicionar Novos Membros da Equipe**

Procure pela função `EquipeSection()` e modifique o array `membros`:

```javascript
const membros = [
  { id: 1, nome: 'João Silva', cargo: 'Líder Técnico', emoji: '👨‍💼' },
  // ADICIONE NOVOS MEMBROS AQUI
  { id: 5, nome: 'Seu Nome', cargo: 'Seu Cargo', emoji: '👨‍💻' },
]
```

### 3️⃣ **Modificar Redes Sociais**

Procure pela função `RedesSociaisSection()` e modifique o array `redesSociais`:

```javascript
const redesSociais = [
  {
    id: 1,
    nome: 'Instagram',
    icon: '📸',
    url: 'https://instagram.com/zenkai',
    cor: '#E1306C',
  },
]
```

### 4️⃣ **Mudar Cores do Site**

Abra `src/App.css` e procure pela seção "VARIÁVEIS DE CORES - ZENKAI":

```css
:root {
  --color-primary: #36025E;        /* Roxo Escuro */
  --color-secondary: #FFDE59;      /* Amarelo/Dourado */
  --color-accent: #FF6B35;         /* Coral/Laranja */
}
```

### 5️⃣ **Editar Textos das Seções**

Procure pelas funções das seções (ex: `SobreSection()`, `HomeSection()`) e modifique o conteúdo diretamente.

---

## 🚀 Como Executar o Projeto

### Instalação

```bash
cd zenkai-robotics-v2
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
```

---

## 📞 Suporte

O código está bem documentado e fácil de entender! Consulte os comentários no `App.jsx` e `App.css`.

---

**Desenvolvido com ⚡ e 🐉 para a Zenkai Robotics**

