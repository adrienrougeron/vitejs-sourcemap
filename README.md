Install and build the package :
```
cd testpackage && npm install && npm run build
```

Install the project and link the package :
```
cd testproject
npm install && npm link ../testpackage
```

Launch the project :
```
npm run dev
```

Error encountered :
`[vite] Failed to load source map for /node_modules/.vite/vite.js?v=8997d2d3`
