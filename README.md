# ProDev Mobile Setup

This repository contains multiple Expo-based React Native projects, each scaffolded for mobile development experimentation, learning, and prototyping. The structure supports parallel development of different app versions or features, with shared conventions for setup and usage.

## Project Structure

```bash
prodev-mobile-setup/
├── prodev-mobile-app-0x00/
├── prodev-mobile-app-0x01/
├── prodev-mobile-app-0x02/
├── prodev-mobile-app-0x03/
└── mobile-development-setup/
```

Each `prodev-mobile-app-0x0X` directory is a standalone Expo project, initialized with `create-expo-app` and following similar conventions for development, assets, and configuration.

## Getting Started

### 1. Choose a Project

Navigate to the desired app directory, e.g.:

```powershell
cd prodev-mobile-app-0x03
```

### 2. Install Dependencies

```powershell
npm install
```

### 3. Start the App

```powershell
npx expo start
```

You can then open the app in:

- A development build
- Android emulator
- iOS simulator
- Expo Go (for quick device testing)

### 4. File-Based Routing

Each project uses Expo Router for file-based navigation. Edit files in the `app/` directory to add or modify screens.

## Assets

All image and font assets are stored in the `assets/` directory of each project. Common assets include:

- `logo.png` (branding)
- `google.png`, `facebook.png` (social login)
- `Splash.png` (used as the splash screen in app config)
- Font files (e.g., `SpaceMono-Regular.ttf`)

## Splash Screen

The splash screen is configured in each project's `app.json`. For example, in `prodev-mobile-app-0x03`, the splash image is set to `assets/images/Splash.png`.

## Example Directory

Each project includes an `app-example/` directory with starter code. You can reset the project to this state using:

```powershell
npm run reset-project
```

This will move the starter code to `app-example/` and create a blank `app/` directory for fresh development.

## Development Conventions

- Centralized styles in `styles/index.tsx` (where present)
- Use of SafeAreaProvider/SafeAreaView for UI safety
- All assets referenced via relative paths in code and config
- Consistent use of `.gitignore` and `.vscode/settings.json` for environment management

## Version Control

All changes should be committed and pushed to the main branch. Use standard git commands:

```powershell
git add .
git commit -m "Your message"
git push
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
