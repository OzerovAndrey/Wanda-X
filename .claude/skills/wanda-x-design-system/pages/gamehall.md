# Сторінка `Gamehall - Ozerov` — зібрано 2026-11-05

Page id `31837:306322`. Ігровий зал: ряди провайдерів (плитка провайдера + ігри + «Show more») і сторінка одного провайдера (вибір провайдера + сітка ігор з фільтром).

## Джерело
Section `Design` нема. Найповніша структура — Section `Preview` (тепер `Old — Preview`, чорна): `Gamehall` і `Gamehall / Providers` на всіх брейкпоінтах; старі `.Desktop/.Mobile page (Debricate)` — те саме.

## Розкладка (y = 0, 600 між)
| Вузол | id | x | Що |
|---|---|---|---|
| `Gamehall` | 80736:25486 | 0 | 3xs 80736:25487 · xl 80736:27039 — `Heading` Primary · 3 блоки провайдера (2-й — `Progress=True`). xl: `Cards` GRID 5 кол. gap 8 — `Thumb/Provider 2xl` + 8 `Thumb/Default` + `Thumb/Button`. 3xs: `Wrapper` V gap 8 center → `Cards` H gap 8 (`Thumb/Provider 3xs` + `Thumb/Default`, Fill) + `Navigator` |
| `Gamehall — Provider` | 80736:29788 | 2256 | 3xs 80736:29789 · xl 80736:29790 — `Gamehall/Provider Select` (xl Fixed 364, 3xs Fill) · `Heading` Primary `Filter=True` · `Cards` GRID (xl 5 кол. × 4 ряди, 3xs 2 кол. × 4 ряди, gap 8) `Thumb/Default` |
| `Gamehall/Provider Select` | Section 80735:25480, компонент 80735:25481 | 4512 | новий компонент сторінки |
| `Old — Preview` · `Old — Pages` 80729:26237 · `Old — Components` 80729:26254 | 80681:194922 … | 5636 → | чорні, вміст не змінювався (Pages — спершу десктопи) |

Аудит `layout-audit.js` — 0 по обох сетах.

## Компоненти
| Компонент | ID | Анатомія / токени |
|---|---|---|
| `Gamehall/Provider Select` | 80735:25481 | H center, 364 × `gamehall.thumb-providers.height`, padding-h `…padding-h`, gap `…provider.gap`, fill / stroke `contextual.gamehall.thumb-providers.background.*`, радіус `border-radius.gamehall.thumb-providers` → `Logo` (Evoplay 24) · `Name` (`text/md-stronger`, `semantic.text.default-invert.heading`) · `Chevron` (chevron-down, height `gamehall.thumb-providers.chevron-size` **новий**, `semantic.text.default-invert.primary`). Замість старого `Gamehall / Open-thumb-provider` (Filter & Sorting) — maxWidth прибрано, обгортку `Prowider` злито |
| ДС `Thumb/Provider` (зміна) | 79546:81688 | нова Boolean **`Progress`** (false): `Info` V gap `gamehall.thumb-providers.info.gap-v` → `Wrapper` (лого + назва) + `Progress` H gap `…progress.gap` → `Games` (`Title` «Games» + `Count`: `Value` «129/» / `Total` «250», `text/md-strong`, default-invert primary / secondary) + `Circle` (height `…progress.size` = 36, `Track` / `Indicator` ellipse — `contextual.progress-bar.normal.secondary.container` / `.track`, `Label` «86%» `text/xs-strong`) |

**Нові токени** (`tokens/gamehall.thumb-providers.{mb,xon}.component.json`, змінні `Product` створено й прив'язано): `gamehall.thumb-providers.chevron-size` {size.200} · `.info.gap-v` {spacing.200} · `.progress.gap` {spacing.400} · `.progress.size` {size.450}.

Старі локальні `Gamehall / Thumb-provider/lg`, `/L/on`, `Gamehall-Games`, `Providers-Games`, `Gamehall-Content`, `Providers-Gamehall-Content` не використовуються; `Progress/Circle` (46694:445445) у файлі вже видалений — кільце зібрано в `Thumb/Provider`.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| `Gamehall`, 3xs + xl, `Heading` | Title | Gamehall |
| `Gamehall — Provider`, 3xs + xl, `Heading` | Title | Provider games |

## Відкрите
1. Кільце прогресу: у ДС `Progress` нема типу Circle — зараз зібране всередині `Thumb/Provider`. Додати `Type=Circle` у `Progress` і замінити?
2. `Indicator` на синій плитці MB малоконтрастний (токени як в оригіналі) — перевірити MB / XON.
3. 3xs `Thumb/Provider Progress=True` — 128 з 136 по висоті, впритул.
4. `Gamehall/Provider Select` — без Dropdown (як в оригіналі); обгорнути в ДС `Dropdown` (Trigger-слот), якщо потрібен список?
5. «See all» біля заголовка (є в старих `Gamehall-Content`, нема в Preview) — не перенесено.
6. `Thumb — Specs` (сторінка `↳ Thumb`) ще без прикладу `Progress=True`.
