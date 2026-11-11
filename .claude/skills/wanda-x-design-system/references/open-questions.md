# Відкриті питання до команди

Збираються під час вивчення (`rules/learn-component.md`). Коли команда відповіла — відповідь переноситься в правило (`SKILL.md` / `references/*.md`) або в «Рішення» компонента, а рядок звідси прибирається.

## Конвенції, що повторюються на оновлених (💛) сторінках — нове рішення чи відхилення?

| # | Що бачимо | Де | Суперечить | Питання |
|---|---|---|---|---|
| 1 | Section сірі **`#808080`** | Input, Controls, Empty, Status, Popup, Switcher, Banner | правило 12 (`#BBBBBB`, як Anchor і еталони) | `#808080` — новий стандарт для всіх Section? Оновити правило? |
| 2 | Позначка **💛** і суфікс автора (`- Андрей`, `- Ден`) у назвах сторінок | 9 сторінок | — | 💛 = «оновлено, перевірити»? Чи = «готово до Ready for dev»? |
| 3 | **Немає `Inverted`** | Input, Controls, Status, Empty, Section (Timer — `Invert=false\|true`) | правило 15 | Inverted обов'язковий для всіх, чи лише для компонентів, що стоять на темному фоні? |
| 4 | **`description` заповнений** | Input (362), Status/Indicator (93), Banner (466) | правило 14 | Команда тепер документує у Figma? Тоді правило 14 змінюємо або дублюємо в скіл. |
| 5 | Шкала **breakpoint `3xs … 3xl`** | Header, Footer, Layout, Navigation, TabBar | `device=mobile\|desktop` у Section, Banner | Зафіксувати шкалу як стандарт для властивості `Breakpoint`? |
| 6 | Розміри **`SM \| MD`** (uppercase), **`xs \| md`** | Status, Empty | еталони `lg \| md \| sm` | Єдина шкала розмірів? |
| 8 | Інвертна група токенів названа **`inverted`** (`contextual.chips.inverted.*`, сусід `normal`) | Chip | `naming.md` → Inverted (`<part>-invert`, як Anchor, Accordion, Tabs) | Новий стандарт `inverted` для всіх компонентів (і перейменувати `*-invert` в Anchor/Accordion/Tabs/Button), чи лише для Chip? |
| 7 | **Спільний неймспейс токенів** на кілька компонентів (`contextual.selection-controls.*`) і **semantic напряму** (`semantic.status.*`, тексти Timer) | Controls, Status, Timer | правило 6 | Дозволяємо спільні токени для сімейства компонентів? |

## Компоненти
- **Status/Badge SM** — прив'язаний до неіснуючих `status.sm.*`. Перепривʼязати на `status.*.xs` чи створити `status.sm.*`? (`components/status.md`)
- **XON** — немає `border.selection-controls.controls.radio-button` (`components/controls.md`); текст Tag прозорий (`contextual.tag.color.*` = `core.content.a0`, `components/chip-tag.md`).
- **Input** — Hover/Active без обведення при наявних токенах `border-color.hover/active` — так задумано? (`components/input.md`)
- **Empty md** — тексти не прив'язані до `Title`/`Discription` (`components/empty.md`).
- **Legacy-набори** поруч з новими (Controls: `Selection-controls`, `Toggles`; Status: 8 наборів; Popup, Switcher, Progress, Banner) — видаляємо чи `Deprecated/…`?
- **Button/Text** — перейменування з `Button/Link` (еталон) — підтвердити, оновити `reference-components.md` (оновлено 21.10 за файлом).

## Ingame (2026-11-05)
- Нова колекція змінних `Theme` (Default / Inverse, camelCase) замість `contextual/*` у `Product` — це нова схема? Правило «Token Studio-токен + однойменна змінна Product» оновити на `Theme`? (`pages/ingame.md` #1)
- ~~Режим `Theme = Inverse` на темній 3xs-панелі замість `Inverted` — ок?~~ — **так** (2026-11-11).
- MB: `Account/Balance`, `FastClickPayment` на білій xl-панелі нечитабельні — Inverted для них чи темний `contextual.content.fill`? (`pages/ingame.md` #3)

## Table (2026-11-11)
- ~~Інверсія через `Theme` замість `Inverted` — загальне правило?~~ — **так** (Андрей, 2026-11-11) → `rules/core.md`.
- `Table/Row` — `Direction` з одним значенням: прибрати? `table.row.gapV` → `$deprecated`?
- `Table/Leaderboard Filled` — токени `striped.borderRadius`, `head.height.striped` перейменувати на `filled.*`?
- `Table/Cell → Subtext` FIXED — переноси у вузьких комірках (Ingame 3xs); зробити Hug / Fill?
- Змінні `table/*` у Figma новіші за експорт 09.11 (`leaderboard.filled.*`, `fill.default` замість `fill.subtle`, без `inverted.*`) — ✅ закрито експортом 2026-11-11: у сетах тепер `table.leaderboard.filled.fill|headFill`, `fill.default`, `inverted.*` прибрано.
- Експорт 2026-11-11: у Figma прив'язані видалені токени — News/Card, News/CTA (`background.slateDark1`), Races-картки (`background.slateDark2`, `text.defaultInvert.*`), Popup (`background.surface`, `modal.banner.*`) — переприв'язати за мапою `references/tokens.md` § Перейменування після Export.
- У `stage` видалено без `$deprecated` ~30 токенів (`background.slateDark1|2|brandSubtle|surface`, `table.leaderboard.striped|row.inverted.*`, `modal.banner|slate.*`, `progress.*`, `filterSort.paddingH|V`, `tabsSort.*`, alias `link.*` → component) — порушує правило (фронт не мерджить видалення): додати назад з `$deprecated`?
- `stage`: розміри в component / alias-шкалах — сирі числа замість `{spacing.*}` / `{size.*}` / `{dimension.*}` — так задумано?
- Нові бренди BB і SC: компоненти перевіряти в 4 режимах `Product`. Наші компоненти з текстом на `text.default.*` — переводити на `tt.*`?
