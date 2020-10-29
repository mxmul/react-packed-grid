# react-packed-grid

> A React component to create a grid of equally scaled boxes packed efficiently into a container, as seen in video conferencing apps.

[![NPM](https://img.shields.io/npm/v/react-packed-grid.svg)](https://www.npmjs.com/package/react-packed-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://mxmul.github.io/react-packed-grid/

## Install

```bash
npm install --save react-packed-grid
```

## Usage

```tsx
import React from 'react'

import { PackedGrid } from 'react-packed-grid'

function Example {
  return (
    <PackedGrid>
      {(updateLayout) => [
        <div>Box 1</div>,
        <div>Box 2</div>,
        <div>Box 3</div>,
      ]}
    </PackedGrid>
  );
}
```

## License

MIT © [mxmul](https://github.com/mxmul)
