# Shop page — `↳ Shop 💚`

## Структура сторінки
- **29 верхніх вузлів** на сторінці (xl + 3xs сети, Old-архіви та службові фрейми)
- Весь видимий контент вкладений у `Modal`-інстанси — `page.findAll()` заходить лише в перший рівень і **не бачить** вкладені nodes усередині Modal
- Для пошуку вузлів по всій сторінці використовувати `figma.root.findAll()` або рекурсивний обхід `.children`

## Ghost variables — зафіксовано (2026-11-25)

### Radio/Card — ghost stroke
- Ghost: `VariableID:82236:356104`
- Правильна: `VariableID:83017:5346`
- Метод фіксу: `resetOverrides()` на Radio/Card інстансах, де stroke мав ghost-binding
- Кількість: ×4 nodes

### Dropdown/Item — ghost borderRadius
- Ghost: `VariableID:82484:214946` (стара копія `dropdown/item/borderRadius`, жила на мейні)
- Правильна: `VariableID:82779:254058` (`dropdown/item/borderRadius`)
- Ghost жив на **main COMPONENT**-ах на сторінці `↳ Dropdown`, НЕ на Shop-інстансах
- Метод фіксу: `setBoundVariable(field, correctVar)` на 3 main COMPONENTs:
  - `State=Default` (nodeId `46786:80284`)
  - `State=Hover` (nodeId `46786:80293`)
  - `State=Selected` (nodeId `46786:80302`)
- Полів зафіксовано: 12 (`topLeftRadius` × 3, `topRightRadius` × 3, `bottomLeftRadius` × 3, `bottomRightRadius` × 3)
- Flint до фіксу: «Found 34/6640» → після фіксу: «Found 2/6640»

## Flint false positive — TabBar effects
- Залишилось 2 вузли після фіксу всіх справжніх ghost-ів
- `effects[1]` / `effects[2]` у TabBar component: `VariableID:80959:232` та `VariableID:80959:494`
- Це реальні локальні змінні (`depth/0` тощо) — Flint помилково позначає їх ghost
- **Не чіпати** — підтверджено Андреєм

## Загальний результат
Сторінка чиста: «Found 2/6640» = лише TabBar false positive (не реальні ghost-и).
