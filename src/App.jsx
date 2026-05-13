import { projects, strengths, tools } from './data/projects'

const contact = {
  name: '陈萍',
  role: 'UI/UX 设计师',
  phone: '18900585079',
  email: '1693592878@qq.com',
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="回到首页">
        <span className="brand-mark">CP</span>
        <span>陈萍作品集</span>
      </a>
      <nav className="nav-links" aria-label="主导航">
        <a href="#home">首页</a>
        <a href="#projects">案例作品</a>
        <a href="#about">关于我</a>
        <a href="#contact">联系</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="intro">你好，我是</p>
        <h1 className="name-art" aria-label={contact.name}>
          <span>{contact.name}</span>
        </h1>
        <p className="role">{contact.role}</p>
        <p className="hero-text">
          10年+设计经验，聚焦可视化大屏、B端系统、移动端、网站门户与硬件界面。
          擅长复杂业务信息架构、设计系统搭建、组件库沉淀与高保真落地，也持续融合
          AI 生图、动效和多媒体表达，帮助项目更快被看懂、被认可、被上线。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            查看项目案例
          </a>
          <a className="button ghost" href={`mailto:${contact.email}`}>
            联系我
          </a>
        </div>
        <div className="stats" aria-label="核心数据">
          <Stat value="10+" label="设计经验/年" />
          <Stat value="30+" label="项目经验" />
          <Stat value="6" label="多端场景" />
        </div>
      </div>
      <div className="hero-visual" aria-label="个人作品集视觉图">
        <div className="portrait-card photo-card">
          <div className="portrait-grid" />
          <div className="photo-frame">
            <img src="./assets/profile-photo.png" alt="陈萍个人照片" />
          </div>
          <div className="portrait-panel panel-main">
            <span>UI/UX Designer</span>
            <strong>全链路 · 可视化 · AI</strong>
          </div>
          <div className="portrait-panel panel-side">
            <span>Design Ops</span>
            <strong>组件库 / 规范 / 走查</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="stat-item">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="section-wrap projects-section" id="projects">
      <div className="section-heading">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 5.5h16M4 12h16M4 18.5h16" />
            <path d="M7 3.5v4M14 10v4M10 16.5v4" />
          </svg>
        </span>
        <div>
          <h2>项目案例</h2>
          <p>从复杂业务到多端体验，优先展示能体现结构能力、视觉落地和客户协同的代表项目。</p>
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" style={{ '--accent': project.accent }}>
      <div className="project-image">
        <img src={project.image} alt={`${project.title}项目封面`} loading="lazy" />
      </div>
      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="section-heading">
        <span className="section-icon warm" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 4v16M5 8h14M7 14h10" />
            <path d="M8 4.5c0 4.5 1.4 7.2 4 9.3 2.6-2.1 4-4.8 4-9.3" />
          </svg>
        </span>
        <div>
          <h2>关于我</h2>
          <p>从平面到 UI/UX，从单点页面到多端产品体系，我更关注设计如何帮助复杂项目稳定落地。</p>
        </div>
      </div>
      <div className="about-layout">
        <div className="timeline-panel">
          <h3>经历概览</h3>
          <div className="timeline">
            <TimelineItem year="2023 - 2025" title="上海米度测控科技有限公司" text="水利、林业、数字孪生、大屏、B端、移动端与硬件界面设计。" />
            <TimelineItem year="2021 - 2023" title="浙江数擎科技有限公司" text="智慧乡村、政务官网、司法、教育与数字化大屏项目。" />
            <TimelineItem year="2015 - 2021" title="UI 与平面设计积累" text="小程序、官网、宣传物料、客户沟通与项目落地执行。" />
          </div>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="tool-panel">
        <h3>擅长工具与方法</h3>
        <div className="tool-list visual-tools">
          {tools.map((tool) => (
            <span key={tool.name}>
              <i style={{ '--tool': tool.color }}>{tool.short}</i>
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, title, text }) {
  return (
    <div className="timeline-item">
      <span>{year}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-wrap">
        <div>
          <h2>招聘沟通 / 设计合作</h2>
          <p>
            适合 UI/UX、可视化大屏、B端产品、多端设计规范、项目提案视觉与 AI 辅助设计相关机会。
          </p>
        </div>
        <div className="contact-card">
          <a className="contact-line" href={`tel:${contact.phone}`}>
            <span>电话</span>
            {contact.phone}
          </a>
          <a className="contact-line" href={`mailto:${contact.email}`}>
            <span>邮箱</span>
            {contact.email}
          </a>
          <div className="file-actions">
            <a href="./files/uiux-resume.pdf" target="_blank" rel="noreferrer">
              查看简历 PDF
            </a>
            <a href="./files/portfolio.pdf" target="_blank" rel="noreferrer">
              查看作品集 PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
