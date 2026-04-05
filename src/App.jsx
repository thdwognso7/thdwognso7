import { useState } from 'react'
import './App.css'

function App() {
  const [posts] = useState([
    {
      id: 1,
      title: "나의 첫 번째 블로그 포스트",
      excerpt: "Vite와 React를 사용하여 현대적인 블로그를 만드는 여정을 시작합니다. 프리미엄 디자인과 사용자 경험에 초점을 맞추었습니다.",
      date: "2024.04.05",
      tag: "Development"
    },
    {
      id: 2,
      title: "프리미엄 UI/UX 디자인의 핵심",
      excerpt: "글래스모피즘과 세련된 애니메이션이 어떻게 사용자에게 놀라운 첫인상을 주는지 알아봅니다.",
      date: "2024.04.04",
      tag: "Design"
    },
    {
      id: 3,
      title: "미래를 향한 발걸음, thdwogns",
      excerpt: "이 블로그는 단순한 기록을 넘어, 창의적인 생각과 기술적인 성장을 공유하는 공간이 될 것입니다.",
      date: "2024.04.03",
      tag: "Vision"
    }
  ]);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="nav-logo">thdwogns</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <h1>Welcome to <span className="hero-gradient">thdwogns</span></h1>
        <p>기술과 디자인, 그리고 창의적인 생각이 공존하는 공간입니다. 현대적인 웹 트렌드와 함께 성장하는 기록을 만나보세요.</p>
        <div className="hero-cta">
          <a href="#posts" className="glass" style={{padding: '1rem 2rem', borderRadius: '2rem', fontWeight: '600'}}>블로그 읽기</a>
        </div>
      </header>

      {/* Posts Section */}
      <main id="posts">
        <div style={{marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <h2>Latest Stories</h2>
          <span style={{color: 'hsl(var(--text-secondary))'}}>Showing {posts.length} posts</span>
        </div>
        
        <div className="posts-grid">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <span className="post-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto'}}>
                <span style={{fontSize: '0.85rem', color: 'hsl(var(--text-secondary))'}}>{post.date}</span>
                <a href={`#post-${post.id}`} style={{color: 'hsl(var(--accent-primary))', fontSize: '0.85rem', fontWeight: '600'}}>Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 thdwogns. All rights reserved.</p>
        <p style={{marginTop: '0.5rem', opacity: 0.5}}>Built with Vite + React + Premium Design</p>
      </footer>
    </div>
  )
}

export default App
