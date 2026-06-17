# Vue Course - Part 1

The first part of the Vue 3 course: core concepts of the framework, taught step by step on small, focused examples. Each topic lives in its own folder under `src/components/` (numbered `1` to `16`) with a short `README.md` and a runnable `Base.vue` example.

## Agenda

Topics covered, in order (`src/components/<n>`):

| #   | Topic                          | What it covers                                                              |
| --- | ------------------------------ | -------------------------------------------------------------------------- |
| 1   | SFC basics & `ref`             | Single File Component structure, interpolation, first reactive value.      |
| 2   | Structure & components         | Splitting UI into smaller components and composing them in a parent.       |
| 3   | Templates & expressions        | JavaScript expressions in `{{ }}` and binding dynamic values.              |
| 4   | Conditional rendering & lists  | `v-if` / `v-else` / `v-show`, `v-for`, dynamic classes, ternary & `??`.    |
| 5   | Reactivity: `ref` vs `reactive`| Reactive primitives vs objects vs a plain (non-reactive) variable.         |
| 6   | Methods & computed             | Template methods and cached, auto-updating `computed` values.              |
| 7   | `watch`                        | Reacting to state changes with side effects (new vs old value).            |
| 8   | Event handling                 | `@click` and other listeners, attribute binding, inline handlers.          |
| 9   | Lists & mutations              | Adding, removing and filtering items in a reactive array.                  |
| 10  | Component lifecycle            | Lifecycle hooks, e.g. `onMounted` / `onBeforeUnmount` for timers.          |
| 11  | Props & emits                  | Data down via `props`, events up via `emit`.                               |
| 12  | Two-way binding (`v-model`)    | From manual `props` + `emit` to `defineModel()` and named models.          |
| 13  | Slots                          | Named, default (with fallback) and scoped slots.                           |
| 14  | Template refs                  | Direct access to DOM elements / component instances after mount.           |
| 15  | Dynamic components             | `<component :is>` for tabs/wizards, plus `<KeepAlive>` state caching.       |
| 16  | Composables                    | Reusable `use...` functions encapsulating reactive state and logic.        |

A homework assignment that combines all of the above (the **VueShop** mini app) is in `homework/`.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
