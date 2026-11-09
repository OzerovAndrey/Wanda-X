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

---

# News 2.0 — концепт редизайну (2026-11-09, Claude)

Задача: переробити News Experience (ієрархія карток, категорії, статуси, контекстні CTA, підвантаження, повна стаття). Старі сети `News` / `News — Empty` / `News — Article` і `TEST` (81478:181736) **не чіпали**; ДС-компоненти не змінювались — усе нове в локальних компонентах `News/*`.

## Розкладка (y 0, праворуч від `TEST`)
| Section | ID | x | 3xs | xl | Що |
|---|---|---|---|---|---|
| `News 2.0` | 81492:8394 | 10526 | 81492:8395 | 81492:9072 | Heading · Filters (Chips + пошук) · Featured · Latest (xl сітка 2×2 Default · 3xs Top stories-карусель + список Compact) · Earlier (Compact) · «Showing 9 of 48» + Show more |
| `News 2.0 — Article` | 81494:10062 | 12782 | 81494:10063 | 81494:10718 | Back · Meta (Status + категорія + дата · час читання) · стаття · Share · xl: `Aside` 280 (`News/CTA` + Related) · 3xs: `News/CTA` інлайн після інтро · Related · More news |
| `News 2.0 — Loading` | 81497:11642 | 15038 | 81497:11643 | 81497:12320 | Filters + `News/Skeleton` |
| `News 2.0 — No results` | 81497:13498 | 17294 | 81497:13499 | 81497:14176 | Input Filled «cashback», чип Events; `Empty` (search) + Reset filters; «Popular right now» |
| `News 2.0 — Error` | 81497:15414 | 19550 | 81497:15415 | 81497:16092 | `Empty` (warning) + Try again |

## Локальні компоненти (Section над своїм сетом)
| Компонент | ID | Властивості | Токени (лише глобальні) |
|---|---|---|---|
| `News/Card` | 81489:8497 (Section 81489:8498) | `Variant` Featured · Default · Compact × `State` Default · Hover · Pressed · Focus; Boolean `Status`, `Description`, `CTA` | Featured/Default: `background.slateDark1` (Hover/Pressed `slateDark2`, Pressed — Image opacity 0.8), Focus — обведення 2 outside `text.static.secondary`; Compact: `background.slate2` (Pressed `background.1`), обведення `border.default.secondary` (Hover `border.default.default`); радіуси `global.borderRadius.lg/md/sm`; `spacing.*`; тексти `text.*` |
| `News/CTA` | 81490:8385 (Section 81490:8405) | Boolean `Timer`, `Description` | `background.slateDark1`, `global.borderRadius.lg`, `spacing.600/400/200`, іконка `clock` — `text.brand.secondary` |
| `News/Skeleton` | 81490:8429 (Section 81490:8430) | `Variant` Featured · Default · Compact | `background.slate2`, `border.default.secondary`, плашки `fill.subtle` |
- Картинки — порожній `Image/Single` (правило); прикладів над Section ще нема.
- CTA карток: Featured — `Button Primary md`; Default — `Button Text Accent sm` + `chevron-right` (Text [Invert] на `slateDark1` нечитабельний); Compact — без CTA (вся картка клікабельна).
- Статуси — `Status/Badge`: New = Info, Active = Success, Ending soon = Warning, Expired = Default. На картинці — `Strong`, у рядку — `Weak`.

## Поведінка
- Вся картка — посилання на статтю; CTA — контекстна дія (турнір / бонус / гра), окрема ціль кліку.
- Фільтр = чипи категорій (All · Promotions · Tournaments · Events · Games · Archive) + пошук; стан у URL (`?category=&q=`), пошук з 2 символів, debounce 300 мс; Badge на чипі — є непрочитані.
- Статуси: New — ≤ 72 год від публікації; Active — пов'язана акція триває; Ending soon — ≤ 72 год до кінця; Expired — завершено → в Archive, CTA приховано.
- Show more: +9 новин у кінець списку, позиція скролу й фільтри зберігаються (повернення зі статті — на те саме місце); під час довантаження кнопка в стані завантаження + 3 скелетони; перше завантаження — `News — Loading`; помилка — `Error` з Try again; порожній результат — `No results` з Reset filters і популярними.
- Брейкпоінти: 3xs–xs — 1 колонка, пошук на всю ширину над чипами (чипи переносяться), Top stories — карусель Default-карток з `Navigator`, решта — список Compact, кнопки на всю ширину; sm–md — сітка Default 2 кол., Featured = Default на всю ширину; lg–xl — Featured горизонтальний, Latest 2×2, Earlier — сітка Compact 2 кол., фільтри й пошук (240) в одному рядку. Стаття: до md — одна колонка, `News/CTA` інлайн після інтро; від lg — колонка тексту + `Aside` 280 (CTA sticky top 16).

## Вписати вручну (MrBet / конектор)
| # | Де | Що |
|---|---|---|
| 1 | `News 2.0 — Article` xl, `Title` статті | ширина лишилась 792 (MrBet не перераховується) і заходить під `Aside` → Fill; 3xs — вимкнути Truncate |
| 2 | Підзаголовки блоків (`Latest news`, `Earlier this month`, `Related news`, `More news`, `Popular right now`, `Top stories`) | зроблено TEXT `text/lgStronger`; за бажанням — замінити на `Heading Secondary` і вписати текст |
| 3 | `News/Card` | приклади картинок над Section — додати (або згенерувати) |
| 4 | MB / XON | перевірено лише MB |
