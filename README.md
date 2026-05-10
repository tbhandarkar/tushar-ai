# Tushar AI Figma Plugin

A starter Figma plugin scaffold for Tushar AI. The plugin includes a themed UI,
tracks the current Figma selection, and creates a sample note on the canvas.

## Requirements

- Node.js 18 or newer
- Figma desktop app or Figma in a browser

## Install

```sh
npm install
```

## Build

```sh
npm run build
```

The compiled plugin assets are written to `dist/`.

## Load in Figma

1. Run `npm run build`.
2. Open Figma and go to **Plugins > Development > Import plugin from manifest...**.
3. Select this repository's `manifest.json`.
4. Run **Tushar AI** from **Plugins > Development**.

## Development

- `src/code.ts` contains the plugin controller that runs in Figma.
- `src/ui.html` contains the plugin iframe UI.
- `manifest.json` points Figma to the built files in `dist/`.
