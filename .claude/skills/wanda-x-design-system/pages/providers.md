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

## Таблиця відомих ghost-ів (оновлена)
| Ghost ID | Назва | Правильна змінна | Де фіксували |
|---|---|---|---|
| `VariableID:82236:356104` | radio/card/br/default (стара) | `VariableID:83017:5346` | Radio/Card stroke — `resetOverrides()` |
| `VariableID:82484:214946` | dropdown/item/borderRadius (стара) | `VariableID:82779:254058` | Dropdown/Item — 3 main COMPONENT, 12 полів |
| `VariableID:82560:218438` | empty/borderRadius (стара) | `VariableID:82779:254059` | Empty — 2 main COMPONENT, 8 полів |
