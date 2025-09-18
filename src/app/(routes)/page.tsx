import { buildMetadata } from '../../app/lib/Metadata'
import { siteContent as importedSiteContent } from '../../app/lib/Content'

export const metadata = buildMetadata({
  alternates: {
    canonical: `${importedSiteContent.site.baseUrl}/amp`,
  },
})
export default function AMPPage() {
  const { home, site } = importedSiteContent

  return (
    <html lang={site.locale} amp="true">
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>{home.headline}</title>
        <link rel="canonical" href={site.baseUrl} />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="description" content={home.subheadline} />
        <meta name="keywords" content="homepage,website,next.js,amp,seo" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#000000" />
        
        {/* Open Graph */}
        <meta property="og:title" content={home.headline} />
        <meta property="og:description" content={home.subheadline} />
        <meta property="og:url" content={`${site.baseUrl}/amp`} />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:image" content={`${site.baseUrl}/images/og-home.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={site.locale} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={home.headline} />
        <meta name="twitter:description" content={home.subheadline} />
        <meta name="twitter:image" content={`${site.baseUrl}/images/og-home.svg`} />
        
        {/* Icons */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        
        {/* AMP Boilerplate */}
        <style amp-boilerplate="">{`
          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
        `}</style>
        <noscript>
          <style amp-boilerplate="">{`
            body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
          `}</style>
        </noscript>
        
        <style amp-custom="">{`
          /* AMP CSS Reset & Global Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          :root {
            --color-primary: #0070f3;
            --color-text: #333333;
            --color-text-light: #666666;
            --color-background: #ffffff;
            --color-border: #e5e5e5;
            --font-size-base: 1rem;
            --font-size-lg: 1.125rem;
            --font-size-xl: 1.25rem;
            --font-size-2xl: 1.5rem;
            --font-size-3xl: 1.875rem;
            --font-size-4xl: 2.25rem;
            --spacing-md: 1rem;
            --spacing-lg: 1.5rem;
            --spacing-xl: 2rem;
            --spacing-2xl: 3rem;
            --spacing-3xl: 4rem;
            --max-width: 1200px;
            --border-radius: 8px;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            background-color: var(--color-background);
            color: var(--color-text);
          }
          
          .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 0 var(--spacing-md);
          }
          
          /* Hero Section */
          .hero {
            padding: var(--spacing-3xl) 0;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            text-align: center;
          }
          
          .hero h1 {
            font-size: var(--font-size-2xl);
            font-weight: 700;
            margin-bottom: var(--spacing-lg);
            color: var(--color-text);
          }
          
          .hero p {
            font-size: var(--font-size-lg);
            color: var(--color-text-light);
            margin-bottom: var(--spacing-xl);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cta-button {
            display: inline-block;
            background-color: var(--color-primary);
            color: white;
            padding: var(--spacing-lg) var(--spacing-xl);
            text-decoration: none;
            border-radius: var(--border-radius);
            font-weight: 600;
            font-size: var(--font-size-base);
            transition: background-color 0.2s ease;
          }
          
          .cta-button:hover {
            background-color: #0051cc;
          }
          
          .hero-image {
            margin-top: var(--spacing-2xl);
            max-width: 100%;
          }
          
          /* Features Section */
          .features {
            padding: var(--spacing-3xl) 0;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
            margin-top: var(--spacing-2xl);
          }
          
          .feature-card {
            padding: var(--spacing-xl);
            border: 1px solid var(--color-border);
            border-radius: var(--border-radius);
            background-color: var(--color-background);
            box-shadow: var(--shadow);
          }
          
          .feature-card h3 {
            font-size: var(--font-size-lg);
            font-weight: 600;
            margin-bottom: var(--spacing-md);
            color: var(--color-text);
          }
          
          .feature-card p {
            color: var(--color-text-light);
            line-height: 1.6;
          }
          
          /* Footer */
          .footer {
            padding: var(--spacing-2xl) 0;
            background-color: #f8fafc;
            border-top: 1px solid var(--color-border);
            text-align: center;
          }
          
          .footer-nav {
            margin-bottom: var(--spacing-lg);
          }
          
          .footer-nav a {
            color: var(--color-text-light);
            text-decoration: none;
            margin: 0 var(--spacing-lg);
          }
          
          .footer-nav a:hover {
            color: var(--color-primary);
          }
          
          .footer-copyright {
            font-size: var(--font-size-sm);
            color: var(--color-text-light);
          }
          
          /* Responsive */
          @media (min-width: 768px) {
            .hero h1 {
              font-size: var(--font-size-4xl);
            }
            
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .footer {
              text-align: left;
            }
            
            .footer .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .footer-nav {
              margin-bottom: 0;
            }
          }
          
          @media (min-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          /* Accessibility */
          :focus {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
          }
          
          .skip-to-content {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
          }
          
          .skip-to-content:focus {
            top: 6px;
          }
        `}</style>
      </head>
      <body>
        <a href="#main" className="skip-to-content">
          Skip to main content
        </a>
        
        <header className="hero">
          <div className="container">
            <h1>{home.headline}</h1>
            <p>{home.subheadline}</p>
            <a href="#features" className="cta-button">
              {home.ctaLabel}
            </a>
            <div className="hero-image">
              <img src="/images/home-hero.svg" width="600" height="400" alt="..." />
            </div>
          </div>
        </header>
        
        <main id="main">
          <section id="features" className="features">
            <div className="container">
              <div className="features-grid">
                {home.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <footer className="footer">
          <div className="container">
            <nav className="footer-nav">
              {home.footer.links.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="footer-copyright">{home.footer.copyright}</p>
          </div>
        </footer>
      </body>
    </html>
  )
}