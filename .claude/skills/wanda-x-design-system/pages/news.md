# News — сторінка `31597:416750` («News - Ozerov»)

Статус: **3 сети зібрано 2026-11-04** (Claude). Джерело контенту — референси Андрея: чорні Section `Breakpoints` 80636:91216 (News + Single news page, 7 брейкпоінтів) і `Components` 80636:91261 (картка + відео) — працюють як `Design`.

## Розкладка
| Section | ID | x | `Layout/3xs` | `Layout/xl` | Що |
|---|---|---|---|---|---|
| `News` | 80641:21959 | 0 | 80641:21960 | 80641:22527 | Heading Primary + сітка `Card / News` ×4 (xl 2 кол. gap 16 · 3xs 1 кол. gap 8) + «See more» |
| `News — Empty` | 80641:23428 | 2256 | 80641:23429 | 80641:23996 | Heading Primary + `Empty Card=True` («There are no news», `bell-on` з Static — Icons у слоті) |
| `News — Article` | 80641:24897 | 4512 | 80641:24898 | 80641:25465 | назад «Back to News» → `Article` → блок Latest News |
| `Old — News` / `Old — Article` / `Old — Components` | 80638:12938 / 12946 / 12954 | 9024 … | | | старі макети й локальні компоненти (чорні) |
| `Components`, `Breakpoints` (референси Андрея) | 80636:91261 / 80636:91216 | 9024 / 12385, y 5073 | | | не чіпати |

## Дерево `Container` (`News — Article`)
```
Container
├─ Wrapper H gap 8 center — Button Text md (chevron-left) + TEXT Link «Back to News» (text/md-strong, semantic.link.default.default)
├─ Article V gap 16 — Title (heading/md) · Date · Image/Single FILL×300 · Text ×3 · List (List/Item Ordered=False ×3) · Text · List (Ordered=True ×5) · News Video FILL (16:10)
└─ Wrapper V gap 16 center — Heading Secondary · Cards H gap 16 (Card / News: xl 2, 3xs 1) · Navigator
```
Використано ДС: `Layout/3xs|xl`, `Heading`, `Button`, `Empty`, `Image/Single`, `List/Item — Default`, `Navigator`; продуктові `Card / News` 30866:391415 і `News Video` 31692:764382 (`↳ Cards`). Нових компонентів сторінки не створено — ДС уже має обидва.

Аудит 2026-11-04: вектори 0, тексти без стилю 0, hardcode 0, без AL 0, clip 0, min 0; remote — лише `bell-on` (Static — Icons).

## Відкрите (Андрей вписує вручну — MrBet не редагується конектором)
| # | Де | Що |
|---|---|---|
| 1 | `News — Article`, обидва `Title` | вимкнути Truncate (успадковано 2 рядки з картки) і розтягнути — текст статті обрізаний |
| 2 | `News — Article`, `Heading` Secondary обидва | «News» → «Latest News» |
| 3 | Latest News xl | 2 картки, не 3: `Card / News` має `minWidth 288`, 3 шт. не влазять у 792 |
| 4 | `News Video` (ДС) | всередині remote `youtube play button` + вектор — не наш компонент, лише прапорець |
| 5 | Картка в референсі (`News card`, remote) має дату/перегляди на картинці й `Read More` — `Card / News` у ДС збігається за структурою; кнопку перейменовано override-ом |
| 6 | MB / XON | перевірено лише MB |
