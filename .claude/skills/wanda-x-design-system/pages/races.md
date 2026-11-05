# Сторінка `Races - Ozerov` — зібрано 2026-11-05

Page id `67652:141336`. Сторінка однієї гонки (не список): банер-hero, ігри турніру, вкладки **Rules / Prizes / Stage / Finished**.

## Джерело
Section `Web` (тепер `Old — Web`, 80681:92644) — найсвіжіші старі макети: 6 desktop (Rules, Prizes, Stage, Stage з розкритим Top players, Stage з порожнім Active, Finished) + 4 mobile. Старі `.Desktop/.Mobile page (Debricate)` — та сама структура. Окремої Section `Design` нема.

## Розкладка (y = 0, 600 між)
| Вузол | id | x | Що |
|---|---|---|---|
| `Race — Rules` | 80686:41490 | 0 | 3xs 80686:41491 · xl 80686:41492 — hero з «Take part», Tournament games, вкладка Rules + Race rules + Show more |
| `Race — Prizes` | 80686:78303 | 2256 | 3xs 80686:78304 · xl 80686:78305 — Prize places: `Table/Leaderboard Striped`, 10 рядків, 1–3 кубки, 5-й (я) Selected, Load more |
| `Race — Stage` | 80686:80041 | 4512 | 3xs 80686:80042 · xl 80686:80043 — hero з `Results Type=Result`; Active (1 картка) + Starting soon (3) |
| `Race — Stage Empty` | 80686:81779 | 6768 | 3xs 80686:81780 · xl 80686:81781 — Active → `Empty Card=True` |
| `Race — Finished` | 80686:83517 | 9024 | 3xs 80686:83518 · xl 80686:83519 — 2 картки Finished, без заголовка (як в оригіналі) |
| `Race/Stage` (компонент) | Section 80686:37772, set 80686:41014 | 11280 | приклади картинок над Section (3 шт.) |
| `Old — Web` · `Old — Pages` 80685:56677 · `Old — Components` 80685:56688 | | 13836 → | чорні, вміст не змінювався |

База сетів — копія `Tournaments` (80078:100446) з group/ungroup. Container: `Heading Primary` → hero → `Wrapper` (Heading + GRID ігор xl 5×2 / 3xs 2×2 + Load more) → вкладки → блок вкладки.
- Вкладки xl: `Tabs Navigation` ×4. 3xs: 4 не влазять у 288 → активна + `Dropdown` «More» (патерн Calendar).
- Розкритий Top players (старий desktop №4) — не окремий сет, а `Race/Stage Open=True`.

## `Race/Stage`
`Type = Active | Soon | Finished` × `Open = False | True` (Soon лише False) — точна копія старих `Races / Stage` + `Races / Stage / Soon`.
Анатомія: `Image` (Image/Single Slot=False, 204, верхні радіуси) · `Label` (absolute 16/16, Transparent light md: Now / Finished) · `Content` → `Info` (Title Row з декором + `Prize` + `Time` Ends in / Start in) · `Me` (Table/Leaderboard Striped, 1 рядок) · `Players` (5 рядків, видно при Open) · `Button` Text [Invert] md + chevron-up / chevron-down (Top players / Hide).
Токени — готові `contextual.lottery-tournament.*` (card.fill / border / color, padding-t/h/b, gap, content.gap), `border-radius.lottery-tournament.general`, `border.lottery-tournament.default`; очки — `semantic.text.brand.secondary`. Нових токенів нема.
Картка без накладання тексту на фото (в оригіналі -40 + фейдер) — правило «чисте фото без фейдерів».

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| усі сети, `Heading Primary` | Tournament | Race |
| усі сети, приз у hero | $ 5 000 | $ 7 500 500 |
| усі сети, 1-й `Heading Secondary` | Active | Tournament games |
| Rules / Prizes, останній блок | Coming soon | Race rules / Prize places |
| Stage, Stage Empty | Coming soon / Coming soon | Active / Starting soon |
| Stage Empty, `Empty` | Choose your welcome bonus | No active stages |

## Відкрите
1. MB: `contextual/button/text*/text/default` = темно-синій і на темній картці (`Text [Invert]` не інвертується) — «Top players» нечитабельний; в XON білий. Так само було у старому компоненті.
2. Декор біля назви (2 × `Union`) — у hero і в `Race/Stage`, як на Tournaments (#1 там).
3. `List/Bullet` без `Inverted` — номери на темних рядках через оверрайд `semantic/fill/subtle-invert` (як на Tournaments).
4. Сітка ігор — за стандартом (xl 5 кол., 3xs 2), в оригіналі 9 / 3 кол.; картки етапів — xl 2 кол. (в оригіналі 3 в ряд, Starting soon — карусель).
5. XON-перевірка через API неможлива (шрифт `Xon_028` не вантажиться) — глянути вручну.
