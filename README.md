# 🧮 Numerator

Numerator is a modern desktop application built using [Wails](https://wails.io/). It leverages the performance of Go for the backend and the flexibility of web technologies for the frontend, providing a seamless and native-feeling user experience.

## ✨ Features

- **Blazing Fast Backend**: Powered by Go, ensuring optimal performance and low resource footprint.
- **Modern Web Frontend**: Built with vanilla web technologies.
- **Cross-Platform**: Compile into native binaries for Windows, macOS, and Linux from a single codebase.

## 🚀 Getting Started

### Prerequisites

- [Go](https://golang.org/dl/) 1.18 or higher
- [Node.js](https://nodejs.org/en/download/) (for frontend dependencies)
- [Wails CLI](https://wails.io/docs/gettingstarted/installation)

### Live Development

To run the application in live development mode, which provides fast hot-reloading for frontend changes:

```bash
wails dev
```

If you prefer developing in your browser with access to Go methods, a dev server is also available at `http://localhost:34115`. Connect to it, and you can call your Go code directly from the browser devtools.

## 🛠️ Building for Production

To build a standalone, redistributable production package:

```bash
wails build
```

This will compile the application and output the native binary into the `build/bin/` directory.

## 📁 Project Structure

- `main.go` & `app.go`: Backend Go application logic.
- `frontend/`: The web frontend code (HTML, CSS, JS).
- `build/`: Project configuration, icons, and final build outputs.
- `wails.json`: Main project configuration file.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
