import Link from 'next/link'

export default function Home() {
  const skills = [
    {
      name: 'web-scraper',
      description: 'Expert at extracting data from websites using Playwright and Cheerio',
      downloads: 1234,
      rating: 4.8,
      keywords: ['web', 'scraping', 'data-extraction']
    },
    {
      name: 'api-tester',
      description: 'Expert at testing REST APIs with support for authentication and validation',
      downloads: 892,
      rating: 4.6,
      keywords: ['api', 'testing', 'rest']
    },
    {
      name: 'database-operations',
      description: 'Database design, migrations, and query optimization skills',
      downloads: 756,
      rating: 4.5,
      keywords: ['database', 'sql', 'postgres']
    },
    {
      name: 'image-generator',
      description: 'AI-powered image generation using Seedream and DALL-E',
      downloads: 2103,
      rating: 4.9,
      keywords: ['image', 'ai', 'generation']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <h1 className="text-xl font-bold text-white">AI Agent Skills Registry</h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Browse</Link>
            <Link href="/publish" className="text-slate-300 hover:text-white transition-colors">Publish</Link>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              CLI Download
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Discover & Share <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Agent Skills</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            A centralized registry for AI agent skills. Find, install, and share skills that enhance your AI agents with new capabilities.
          </p>
          <div className="flex items-center justify-center gap-4">
            <input 
              type="text" 
              placeholder="Search skills..." 
              className="w-96 px-5 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Popular Skills</h3>
            <div className="flex gap-2">
              {['All', 'Web', 'Database', 'API', 'Image'].map((tag) => (
                <button key={tag} className="px-4 py-1.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">{skill.description}</p>
                  </div>
                  <span className="text-yellow-400">★ {skill.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.keywords.map((keyword) => (
                    <span key={keyword} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{skill.downloads} downloads</span>
                  <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                    Install →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-slate-500 text-sm">
          <p>© 2026 AI Agent Skills Registry</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">GitHub</a>
            <a href="#" className="hover:text-slate-300">Documentation</a>
            <a href="#" className="hover:text-slate-300">CLI</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
