# 🕵️ Conspiracy Theory Generator

<!-- 
This file serves as the main documentation for the Conspiracy Theory Generator project.
It provides installation instructions, usage guidelines, and technical documentation.
-->

[![Educational Tool](https://img.shields.io/badge/Purpose-Educational-brightgreen)]
[![Satirical Content](https://img.shields.io/badge/Content-Satirical-orange)]
[![Media Literacy](https://img.shields.io/badge/Focus-Media%20Literacy-blue)]

An educational web application that generates obviously fictional conspiracy theories by combining random Wikipedia articles. Designed to teach critical thinking and media literacy through satirical demonstration of common misinformation patterns.

## 🎯 Purpose

This tool is specifically designed for **educational purposes** to help users:
- Recognize common patterns in misinformation
- Develop critical thinking skills
- Understand how unrelated facts can be artificially connected
- Practice identifying logical fallacies
- Build resistance to conspiracy thinking

**⚠️ Important**: All generated content is **completely fictional** and created for educational demonstration only.

## ✨ Features

### 🎲 Theory Generation
- Combines 3 random Wikipedia articles using predefined templates
- Generates obviously satirical conspiracy theories
- Includes "believability scores" (intentionally kept low)
- Sources are fully transparent and verifiable

### 📚 Educational Components
- Built-in media literacy sidebar
- Pattern recognition training
- Logical fallacy identification
- Critical thinking exercises

### 🎨 User Experience
- Retro terminal aesthetic for engaging presentation
- Responsive design for all devices
- Theory saving and sharing capabilities
- Real-time generation with loading states

### 🛡️ Safety Features
- Content filtering to avoid sensitive topics
- Clear satirical intent in all output
- Educational disclaimers throughout
- Transparent generation process

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm (package manager)

### Installation

1. **Navigate to project directory**
   ```bash
   cd conspiracy-theory-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Technical Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **API**: Wikipedia REST API

### Project Structure
```
src/
├── components/           # React components
│   ├── TheoryGenerator.tsx    # Main generation interface
│   ├── EducationalSidebar.tsx # Learning materials
│   ├── Header.tsx            # App header
│   └── Footer.tsx            # Educational footer
├── utils/               # Core logic
│   ├── wikipedia.ts          # Wikipedia API service
│   └── templates.ts          # Theory templates & generator
├── types/               # TypeScript definitions
│   └── index.ts             # Shared interfaces
└── App.tsx             # Main application component
```

### Key Components

#### WikipediaService
- Fetches random Wikipedia articles
- Implements rate limiting and caching
- Extracts entities from article content
- Handles API errors gracefully

#### ConspiracyGenerator  
- Uses template-based generation system
- Filters content for safety and appropriateness
- Calculates believability scores
- Combines entities from multiple sources

#### Theory Templates
Six categories of conspiracy patterns:
- **Secret Meetings**: Hidden collaborations
- **Scientific Cover-ups**: False research narratives  
- **Cultural Manipulation**: Psychological operations
- **Geographic Mysteries**: Hidden facilities
- **Historical Connections**: Secret origins
- **Technology Control**: Surveillance narratives

## 🎓 Educational Use Cases

### Classroom Integration
- **Media Literacy Courses**: Hands-on pattern recognition
- **Critical Thinking Workshops**: Logical fallacy identification
- **Digital Citizenship**: Understanding online misinformation
- **Research Methods**: Correlation vs causation examples

### Learning Exercises
1. **Pattern Analysis**: Identify common structures across theories
2. **Source Verification**: Check Wikipedia links for accuracy
3. **Logic Evaluation**: Find flaws in generated reasoning
4. **Comparison Studies**: Contrast with real misinformation examples

### Discussion Prompts
- What makes some theories seem more "believable" than others?
- How do the templates reflect real conspiracy theory patterns?
- What role does confirmation bias play in belief formation?
- How can we verify claims in our daily information consumption?

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Adding New Templates
1. Add template to `CONSPIRACY_TEMPLATES` array in `src/utils/templates.ts`
2. Define pattern with placeholder variables
3. Specify required placeholders array
4. Choose appropriate category

Example:
```typescript
{
  id: 'new-pattern',
  name: 'New Pattern',
  pattern: 'CLASSIFIED: {entity1} secretly controls {entity2} through {entity3}.',
  category: 'control',
  placeholders: ['entity1', 'entity2', 'entity3'],
}
```

### Content Safety
The system includes multiple safety layers:
- Blacklisted terms filtering
- Template review process  
- Believability score limits
- Educational context requirements

## 🌐 API Usage

### Wikipedia REST API
- Endpoint: `https://en.wikipedia.org/api/rest_v1/page/random/summary`
- Rate limited to 100ms intervals
- Includes proper User-Agent headers
- Implements caching for performance

### Error Handling
- Graceful API failure recovery
- Fallback content for offline use
- User-friendly error messages
- Retry mechanisms for transient failures

## 🤝 Contributing

We welcome contributions that enhance the educational value of this tool!

### Guidelines
- Maintain satirical and obviously fictional tone
- Ensure all content serves educational purposes
- Follow existing code style and patterns
- Include tests for new functionality
- Update documentation for changes

### Areas for Contribution
- New conspiracy theory templates
- Enhanced educational materials
- Accessibility improvements
- Performance optimizations
- Additional safety features

## 📄 License

This project is licensed under the MIT License.

## ⚖️ Ethical Considerations

### Responsible Use
- **Educational Context Only**: Never present as factual information
- **Clear Satirical Intent**: Obvious fictional nature in all output
- **Critical Thinking Focus**: Always paired with learning objectives
- **Source Transparency**: Full attribution to Wikipedia sources

### Preventing Misuse
- Built-in disclaimers and warnings
- Deliberately absurd content combinations
- Educational materials integrated throughout
- Clear documentation of satirical purpose

## 🆘 Support

### Getting Help
- Review the educational materials in the sidebar
- Consult the IDEA.md file for background context

### Reporting Issues
Please report any bugs, security concerns, or inappropriate content generation to the development team.

## 🙏 Acknowledgments

- **Wikipedia**: For providing the factual foundation through their open API
- **Media Literacy Community**: For inspiration and educational frameworks  
- **Critical Thinking Educators**: For guidance on effective teaching methods
- **Open Source Community**: For the tools and libraries that made this possible

---

**Remember**: This tool generates completely fictional content for educational purposes. Always verify information from credible sources and think critically about the media you consume! 🧠✨
