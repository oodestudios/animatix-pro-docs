# Animatix Pro Documentation

<<<<<<< HEAD
Professional documentation for Animatix Pro - Unity's most powerful animation system.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📚 What's Included

- **Complete API Reference** - Every method and property documented
- **Interactive Examples** - Live code demos and tutorials
- **Visual Guides** - Step-by-step screenshots and diagrams
- **Best Practices** - Performance tips and optimization techniques
- **Troubleshooting** - Common issues and solutions

## 🛠️ Development

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm serve` - Serve production build locally
- `npm deploy` - Deploy to GitHub Pages

### Project Structure

```
animatix-pro-docs/
├── docs/                    # Documentation content
│   ├── getting-started/     # Installation and setup guides
│   ├── core-concepts/       # System architecture and concepts
│   ├── api/                 # API reference
│   └── tutorials/           # Step-by-step tutorials
├── src/                     # Source code
│   ├── css/                 # Custom styles
│   └── components/          # React components
├── static/                  # Static assets
│   ├── img/                 # Images and screenshots
│   └── downloads/           # Downloadable files
└── docusaurus.config.js     # Docusaurus configuration
```

## 🎨 Customization

### Adding New Content

1. Create new `.md` or `.mdx` files in the `docs/` directory
2. Update `sidebars.js` to include new pages
3. Add navigation links in `docusaurus.config.js`

### Styling

- Custom CSS: `src/css/custom.css`
- Component overrides: `src/theme/`
- Color scheme: Update CSS variables

### Components

- Create React components in `src/components/`
- Use MDX for interactive documentation
- Embed live code examples with CodeSandbox

## 📖 Content Guidelines

### Writing Style

- **Clear and Concise** - Get to the point quickly
- **Code Examples** - Include working code for every concept
- **Visual Aids** - Use screenshots and diagrams
- **Progressive** - Start simple, build complexity

### Code Examples

- Use syntax highlighting for C# code
- Include complete, runnable examples
- Test all code examples before publishing
- Provide both basic and advanced examples

### Images and Media

- Use high-quality screenshots
- Optimize images for web (WebP format preferred)
- Include alt text for accessibility
- Use consistent styling and branding

## 🚀 Deployment

### GitHub Pages

1. Set up GitHub Pages in repository settings
2. Configure `docusaurus.config.js` with correct URL
3. Run `npm run deploy`

### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build/`
4. Deploy automatically on push

### Vercel

1. Import project to Vercel
2. Set framework preset to Docusaurus
3. Deploy automatically on push

## 🤝 Contributing

### Adding Documentation

1. Fork the repository
2. Create a feature branch
3. Add your content
4. Test locally with `npm start`
5. Submit a pull request

### Content Review

- All content must be reviewed before merging
- Code examples must be tested
- Images must be optimized
- Links must be verified

## 📝 License

This documentation is licensed under the MIT License. See LICENSE file for details.

## 🆘 Support

- **Documentation Issues** - Open an issue on GitHub
- **Content Questions** - Ask in Discord
- **Feature Requests** - Use GitHub Discussions

---

<div className="info-box">
  <h3>💡 Pro Tip</h3>
  <p>Use the search functionality to quickly find specific topics. The search is powered by Algolia and indexes all content automatically.</p>
=======
<div align="center">

# 🎨 Animatix Pro
## Professional Animation System for Unity

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://oodestudios.github.io/animatix-pro-docs/)
[![Unity](https://img.shields.io/badge/Unity-2021.3%2B-blue)](https://unity.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)]()

</div>

---

## 🚀 Quick Start

Create stunning UI and camera animations with ease using our powerful visual graph-based system. No coding required, but full programmatic control when you need it.

### ✨ Key Features

- **🎨 Visual Graph Editor** - Create complex animations using our intuitive node-based editor
- **⚡ High Performance** - Optimized for mobile and desktop with efficient animation execution  
- **🔧 Programmatic Control** - Full API access for advanced users who need script control
- **🎯 Production Ready** - Used by professional game developers worldwide

### 📚 Documentation

- **[Getting Started](docs/getting-started/installation.md)** - Installation and setup guide
- **[Quick Start](docs/getting-started/quick-start.md)** - Create your first animation in 5 minutes
- **[API Reference](docs/api/graph-executor-util.md)** - Complete API documentation
- **[Examples](docs/examples.md)** - Real-world code examples and patterns

### 🎮 Usage Example

```csharp
using AnimatixPro.GraphFlow;

public class MyGameController : MonoBehaviour
{
    void Start()
    {
        // Play animation by name
        GraphExecutorUtil.RunGraph("IntroAnimation");
    }
    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // Trigger animation on key press
            GraphExecutorUtil.RunGraph("JumpAnimation");
        }
    }
}
```

### 🛠️ Installation

1. Download from Unity Asset Store
2. Import into your Unity project
3. Create a GraphFlow Asset
4. Add GraphExecutor component
5. Start creating amazing animations!

### 📖 Learn More

- **Documentation**: Complete guides and tutorials
- **API Reference**: Detailed method documentation  
- **Examples**: Real-world implementation examples
- **Community**: Join our Discord for support

---

<div align="center">

**Ready to create amazing animations?** 🚀

[Get Started Now](docs/getting-started/installation.md) | [View Examples](docs/examples.md) | [API Reference](docs/api/graph-executor-util.md)

---

*Built with ❤️ by OODE Studios*

>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
</div>
