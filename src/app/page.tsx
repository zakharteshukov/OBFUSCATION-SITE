import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>
          Code <span className={styles.highlight}>Obfuscation</span> Tools
        </h1>
        
        <p className={styles.description}>
          Transform, obfuscate, and secure your code
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>🔒 JavaScript Obfuscator</h2>
            <p>Protect your JavaScript code from reverse engineering.</p>
          </div>

          <div className={styles.card}>
            <h2>🔐 Code Transformers</h2>
            <p>Transform code between different formats and styles.</p>
          </div>

          <div className={styles.card}>
            <h2>🛡️ Security Tools</h2>
            <p>Analyze and secure your codebase.</p>
          </div>

          <div className={styles.card}>
            <h2>📦 Minifiers</h2>
            <p>Compress and optimize your code for production.</p>
          </div>
        </div>

        <div className={styles.features}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <ul className={styles.featureList}>
            <li>✓ Multi-language support</li>
            <li>✓ Configurable obfuscation levels</li>
            <li>✓ Batch processing</li>
            <li>✓ API integration</li>
            <li>✓ Real-time preview</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

