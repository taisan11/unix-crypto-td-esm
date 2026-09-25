# @taisan11/unix-crypto-td-esm

DES-based Unix `crypt(3)` password hashing, written in TypeScript.

## Install

```sh
npm install @taisan11/unix-crypto-td-esm
```

## Usage

```ts
import { crypt } from '@taisan11/unix-crypto-td-esm'

const hash = crypt('password', 'ab')
console.log(hash)
```

`crypt` accepts the password and two-character salt as strings or byte arrays. Pass `true` as the third argument to return the result as a byte array.

## Build and publish

```sh
bun install
bun run build
npm publish
```

The package build is also run automatically by `npm publish` and only the generated `dist` directory is included in the published package.
