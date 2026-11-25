# Providers page — `↳ Providers 💚`

Node: `48538:42542`

## Ghost variables — зафіксовано (2026-11-25)

### Empty — ghost borderRadius
- **Ghost ID**: `VariableID:82560:218438` (стара копія `empty/borderRadius`)
- **Правильна змінна**: `VariableID:82779:254059` (`empty/borderRadius`, FLOAT)
- **Token Studio key**: `empty.borderRadius`
- **Де знайдено**: Main COMPONENT `Card=True, Breakpoint=3xs` (`78293:446280`) і `Card=True, Breakpoint=xl` (`78315:449010`) — COMPONENT_SET `Empty`
- **Flint показував**: 8 ghost-ів (Field + Icon чергуються у списку) — це інстанси Empty-компонента на сторінці
- **Метод фіксу**: `comp.setBoundVariable(field, correctVar)` на polях `topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius` × 2 компоненти = 8 полів
- **Результат**: 0 залишків по всьому файлу; сторінка чиста

### Input Field — ghost paddingV
- **Ghost ID**: `VariableID:82340:207868` (стара копія `input/paddingV`)
- **Правильна змінна**: `VariableID:82474:214135` (`input/paddingV`, FLOAT)
- **Token Studio key**: `input.paddingV`
- **Де знайдено**: FRAME `Field` всередині COMPONENT `State=Default/Hover/Active/Filled/Disabled` у COMPONENT_SET `Input` (сторінка `↳ Input`) + деякі інстанси з override
- **Метод фіксу**: `setBoundVariable(field, correctVar)` на `paddingTop`, `paddingBottom` по всьому файлу (`findAll(() => true)`)
- **Результат**: 32 поля зафіксовано, 0 залишків

### Icon — ghost iconSize/sm
- **Ghost ID**: `VariableID:80959:907` (`input/iconSize/sm`, remote/stale — `is907local: false`)
- **Правильна дія**: `setBoundVariable('width', null)` + `setBoundVariable('height', null)` — знімає override, інстанс успадковує від remote main component `plus` (`77639:517100`)
- **Де знайдено**: INSTANCE `Icon` (ID `81578:46932`) вкладений у Providers page через кілька рівнів
- **Метод фіксу**: знайти за ID через `getNodeByIdAsync`, `setBoundVariable(field, null)` — `setBoundVariable(field, var)` **мовчки ігнорується** на мультисегментних інстансах (`I..;..;..`)
- **Результат**: 4 Icon інстанси очищені, 0 залишків на Providers page

## Таблиця відомих ghost-ів (оновлена)
| Ghost ID | Назва | Правильна змінна | Де фіксували |
|---|---|---|---|
| `VariableID:82236:356104` | radio/card/br/default (стара) | `VariableID:83017:5346` | Radio/Card stroke — `resetOverrides()` |
| `VariableID:82484:214946` | dropdown/item/borderRadius (стара) | `VariableID:82779:254058` | Dropdown/Item — 3 main COMPONENT, 12 полів |
| `VariableID:82560:218438` | empty/borderRadius (стара) | `VariableID:82779:254059` | Empty — 2 main COMPONENT, 8 полів |
| `VariableID:82340:207868` | input/paddingV (стара) | `VariableID:82474:214135` | Input Field — 32 поля в FRAME Field |
| `VariableID:80959:907` | input/iconSize/sm (remote) | `setBoundVariable(null)` | Icon INSTANCE на Providers — знятий override |
