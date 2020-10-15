# TypeScriptToLua Plugin Template

A template for [TypeScriptToLua plugins](https://typescripttolua.github.io/docs/api/plugins).

1) Use `link` to make the plugin available locally

```sh
yarn link                         # or `npm link`
```

2) Head to your project (should have a `package.json`)

```sh
cd /path/to/project
```

3) Ensure you have `ts-node` available

```sh
yarn add -D ts-node               # or npm install -D ts-node
```

4) Link your plugin to the project

```sh
yarn link tstl-plugin-template    # or npm link tstl-plugin-template
```

5) Append your plugin to your `tsconfig.json`

```json
{
  "tstl": {
    "luaPlugins": [
      { "name": "tstl-plugin-template" }
    ]
  }
}
```

4) Done, run TSTL on your project and the plugin should now run

```sh
npx tstl -p tsconfig.json
```

Once this setup is complete you can continue to adjust `plugin.ts` and source files in your project to adjust what your plugin does.
