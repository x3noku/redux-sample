# IMPORTANT
### [Naming convention](NAMING_CONVENTION.md)

## Contents
- [Logging](#logging)
- [Path alias](#path-alias)

## Logging

There are 5 levels:
```
debug,
warn,
info,
success,
error
```
Default extensions that can be written before level:
```
ui,
hooks,
redux,
api,
middlewares,
utils
```
You can add more extensions if you need, go to `utils/logs`
### Usage
`logs.info('PROCESS STARTED');`

`logs.redux.debug('ACTION PAYLOAD DATA: ' + data.toString());`

## Path Alias

There are some short replacements that you can use in imports:
```
@atoms/         ~    ./src/components/atoms/
@utils/         ~    ./src/utils/
@styles/        ~    ./src/styles/
@assets/        ~    ./src/assets/
@screens/       ~    ./src/screens/
@components/    ~    ./src/components/
@navigation/    ~    ./src/navigation/
```
> :grey_exclamation: **Note:** If you add a new folder to `src/` please go to `tsconfig.json` and add alias for it
### Usage
```ts
import { Colors } from '@styles/colors';
```
