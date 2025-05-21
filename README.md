# Coomiix

Modern Angular application built with best practices and a comprehensive testing setup.

[![CI](https://github.com/jdanifh/coomiix/actions/workflows/ci.yml/badge.svg)](https://github.com/jdanifh/coomiix/actions/workflows/ci.yml)

## 📱 Live Demo

- **Application**: [https://jdanifh.github.io/coomiix/](https://jdanifh.github.io/coomiix/)
- **Coverage Report**: [https://jdanifh.github.io/coomiix/coverage/lcov-report/index.html](https://jdanifh.github.io/coomiix/coverage/lcov-report/index.html)

## 🚀 Features

- Built with Angular 19
- Material Design components
- Internationalization (i18n) support
- Moment.js date handling
- Unit testing with Jest
- Continuous Integration with GitHub Actions
- Code coverage reporting

## 📦 Dependencies

### Core Dependencies
- Angular 19.2.0
- Angular Material 19.2.2
- NGX-Translate 16.0.4
- RxJS 7.8.0

### Development Dependencies
- Jest 29.7.0
- Jest Preset Angular 14.5.3
- TypeScript 5.7.2

## 🏗️ Project Structure

```
coomiix/
├── src/
│   ├── app/
│   │   ├── core/             # Core functionality
│   │   │   ├── api/          # API services
│   │   │   ├── guards/       # Route guards
│   │   │   ├── interceptors/ # App interceptors
│   │   │   ├── models/       # Data models
│   │   │   ├── providers/    # App providers
│   │   │   └── services/     # Core services
│   │   │
│   │   ├── shared/           # Shared modules
│   │   │   ├── components/   # Shared components
│   │   │   ├── directives/   # Shared directives
│   │   │   └── pipes/        # Shared pipes
│   │   │
│   │   └── views/            # Application views
│   │ 
│   └── environments/         # Environment config files
│ 
├── public/                   # Public assets
│   └── i18n/                 # Translation files
│ 
└── coverage/                 # Test coverage reports
```

## 🔧 Setup & Installation

1. Clone the repository
```bash
git clone https://github.com/jdanifh/coomiix
cd coomiix
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

## 🧪 Testing

Run tests with:
```bash
npm test
```

For coverage report:
```bash
npm test -- --coverage
```

### Coverage Configuration

Coverage configuration in `jest.config.ts`:
- Reports generated in `coverage/` directory
- Formats: lcov and text summary
- Excludes:
  - Main entry file
  - Environment files
  - Module files

## 🔄 Continuous Integration

GitHub Actions workflow runs on:
- Push to main branch
- Pull requests to main branch

The CI pipeline:
1. Sets up Node.js environment
2. Installs dependencies
3. Runs tests with coverage
4. Builds the project
5. Deploys to GitHub Pages:
   - Application: `/`
   - Coverage Report: `/coverage/lcov-report/`

### Deployment

The project is automatically deployed to GitHub Pages on successful CI runs:
- Production build uses `--base-href=/coomiix/` for correct path resolution
- Both the application and coverage report are deployed
- Concurrent deployments are queued to prevent conflicts
- Only deploys from the main branch

## 🌐 Internationalization

Supports multiple languages through @ngx-translate:
- Default language: en-US
- Translation files in `public/i18n/`
- Date formats adapted per locale
