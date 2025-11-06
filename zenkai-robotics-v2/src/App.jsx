import { useState } from 'react'
import './App.css'

// ============================================
// COMPONENTES DE ABAS
// ============================================

// Componente: Navbar com abas navegáveis
function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Início', icon: '⚡' },
    { id: 'sobre', label: 'Sobre Nós', icon: '🤖' },
    { id: 'projetos', label: 'Projetos', icon: '🔧' },
    { id: 'equipe', label: 'Equipe', icon: '👥' },
    { id: 'redes', label: 'Redes Sociais', icon: '📱' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">⚡ ZENKAI</span>
        </div>

        {/* Abas */}
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`navbar-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ============================================
// SEÇÃO: HOME / HERO
// ============================================
function HomeSection() {
  return (
    <section className="section home-section">
      <div className="hero-container">
        {/* Shenlong Animation */}
        <div className="shenlong-container">
          <div className="shenlong">🐉</div>
        </div>

        {/* Conteúdo Principal */}
        <div className="hero-content">
          <h1 className="hero-title">ZENKAI</h1>
          <h2 className="hero-subtitle">Equipe de Robótica</h2>
          <p className="hero-description">
            Transformando desafios em crescimento através da robótica e inovação
          </p>
          <button className="hero-button">Conheça Nossos Projetos</button>
        </div>

        {/* Decoração Dragon Ball */}
        <div className="dragon-ball-decoration">
          <div className="ball ball-1"></div>
          <div className="ball ball-2"></div>
          <div className="ball ball-3"></div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SEÇÃO: SOBRE NÓS
// ============================================
function SobreSection() {
  return (
    <section className="section sobre-section">
      <div className="container">
        <h2 className="section-title">Sobre Nós</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              A Zenkai é uma equipe de robótica dedicada a desenvolver soluções inovadoras
              através da tecnologia e criatividade. Nosso objetivo é atrair patrocinadores
              e demonstrar o potencial de nossos projetos.
            </p>
            <p>
              Com foco em excelência e trabalho em equipe, buscamos constantemente aprimorar
              nossas habilidades e criar robôs cada vez mais avançados.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>50+</h3>
              <p>Membros</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Projetos</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Prêmios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SEÇÃO: PROJETOS
// ============================================
function ProjetosSection() {
  // Array de projetos - FÁCIL DE ADICIONAR NOVOS
  const projetos = [
    {
      id: 1,
      titulo: 'Robô Explorador',
      descricao: 'Robô autônomo para exploração de terrenos',
      imagem: '🤖',
      status: 'Em Desenvolvimento',
    },
    {
      id: 2,
      titulo: 'Braço Robótico',
      descricao: 'Braço mecânico com precisão milimétrica',
      imagem: '🦾',
      status: 'Concluído',
    },
    {
      id: 3,
      titulo: 'Drone Inteligente',
      descricao: 'Drone com visão computacional',
      imagem: '🚁',
      status: 'Em Testes',
    },
  ]

  return (
    <section className="section projetos-section">
      <div className="container">
        <h2 className="section-title">Nossos Projetos</h2>

        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="projeto-card">
              <div className="projeto-icon">{projeto.imagem}</div>
              <h3 className="projeto-titulo">{projeto.titulo}</h3>
              <p className="projeto-descricao">{projeto.descricao}</p>
              <span className={`projeto-status status-${projeto.status.toLowerCase().replace(' ', '-')}`}>
                {projeto.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SEÇÃO: EQUIPE
// ============================================
function EquipeSection() {
  // Array de membros - FÁCIL DE ADICIONAR NOVOS
  const membros = [
    { id: 1, nome: 'João Silva', cargo: 'Líder Técnico', emoji: '👨‍💼' },
    { id: 2, nome: 'Maria Santos', cargo: 'Engenheira', emoji: '👩‍🔬' },
    { id: 3, nome: 'Pedro Costa', cargo: 'Programador', emoji: '👨‍💻' },
    { id: 4, nome: 'Ana Oliveira', cargo: 'Designer', emoji: '👩‍🎨' },
  ]

  return (
    <section className="section equipe-section">
      <div className="container">
        <h2 className="section-title">Nossa Equipe</h2>

        <div className="equipe-grid">
          {membros.map((membro) => (
            <div key={membro.id} className="membro-card">
              <div className="membro-emoji">{membro.emoji}</div>
              <h3 className="membro-nome">{membro.nome}</h3>
              <p className="membro-cargo">{membro.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SEÇÃO: REDES SOCIAIS
// ============================================
function RedesSociaisSection() {
  // Array de redes sociais - FÁCIL DE ADICIONAR/MODIFICAR
  const redesSociais = [
    {
      id: 1,
      nome: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/zenkai',
      cor: '#E1306C',
    },
    {
      id: 2,
      nome: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/zenkai',
      cor: '#333333',
    },
    {
      id: 3,
      nome: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/zenkai',
      cor: '#FF0000',
    },
    {
      id: 4,
      nome: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/zenkai',
      cor: '#0077B5',
    },
    {
      id: 5,
      nome: 'Discord',
      icon: '💬',
      url: 'https://discord.gg/zenkai',
      cor: '#5865F2',
    },
  ]

  return (
    <section className="section redes-section">
      <div className="container">
        <h2 className="section-title">Conecte-se Conosco</h2>
        <p className="section-subtitle">
          Siga nossas redes sociais para acompanhar nossos projetos e novidades
        </p>

        <div className="redes-grid">
          {redesSociais.map((rede) => (
            <a
              key={rede.id}
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rede-button"
              style={{ '--rede-cor': rede.cor }}
            >
              <span className="rede-icon">{rede.icon}</span>
              <span className="rede-nome">{rede.nome}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// COMPONENTE PRINCIPAL: APP
// ============================================
function App() {
  const [activeTab, setActiveTab] = useState('home')

  // Renderizar seção ativa
  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />
      case 'sobre':
        return <SobreSection />
      case 'projetos':
        return <ProjetosSection />
      case 'equipe':
        return <EquipeSection />
      case 'redes':
        return <RedesSociaisSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderSection()}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Zenkai - Equipe de Robótica. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App

