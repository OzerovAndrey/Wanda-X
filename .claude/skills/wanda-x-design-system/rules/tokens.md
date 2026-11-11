# Tokens — створити, прив'язати, передати токени

Разом із `rules/core.md` (§ Токени). Ручна вставка JSON у Token Studio, storage, Inspect — `references/token-studio.md`; відомі проблеми токен-системи й чужі змінні — `references/tokens.md`.

## Структура
- Джерело — GitLab `ys/design/wanda-x` (`git.slygods.com`), **гілка `stage` — основна, з останніми напрацюваннями** (тека `tokens`); у нашому репо `tokens/system/` — копія експорту `stage` від Андрея (останній — 2026-11-11).
- Сети бренду (**MB, SC, BB, XON**): `<бренд>/core` (source — 24 seed-кольори: `default|inverse` × `bg`, `fg`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `danger`, `info`, `gold`, `silver`, `bronze`) → `<бренд>/map` (палітра `core.*`, рампи `<роль>.default|inverse.<крок>` — `primary.default.500`, `fg.default.1000|700|500|300`; `fontSize.*`, `lineHeight.*`, `dimension.*`) → `<бренд>/override`. Спільні: `default/alias`, `default/component`, `inverse/alias`, `inverse/component`. Теми: група `Product` — MB / SC / BB / XON (`core` source + `map` + `override`); група `Theme` — Default (`default/*`) / Inverse (`default/*` + `inverse/*`). Figma: колекції `Product` (MB / BB / SC / XON) і `Theme` (Default / Inverse).
- Брендові відмінності компонентів — через `override.*` у `<бренд>/override` (`override.card.fill` / `card.fill-invert` — спільна заливка карток lootbox / news / shop / mobileApplication / lotteryTournament; `override.header|menu|banner|slider.*`; `override.background-inverted.*` — фони для Inverse). Компонентний токен посилається на `override.*`, а не на `core` напряму.
- Компонентні токени — у `default/component` (camelCase: `btn.*`, `menu.*`, `profileMenu.*`, `modal.*`, `table.*` …), інверт — `inverse/component`. Alias — `default/alias`: `text.*`, `background.*`, `fill.*`, `border.*`, `icon.*`, `status.*`, `global.borderRadius.*`, `spacing.*`. Типографіка — стилі `heading.*`, `text.md|mdStrong|lgStronger …`; кеглі `fontSize.textXs|Sm|Md|Lg`, `fontSize.headingXs…Xl|2Xl|3Xl`, `lineHeight.heading2Xl|3Xl` (старих `fontSize.main.*` / `accent.*`, `lineHeight.headingXxl|Xxxl` нема).
- **Колір тексту — `tt.*`** (alias; у `inverse/alias` — на `*.inverse.*` рампах): `tt.primary` (= `fg.1000`), `tt.secondary` (700), `tt.tertiary` (500), `tt.accent1|2|3` (primary / secondary / tertiary 500), `tt.link`, `tt.success|warning|danger|info`. Компоненти посилаються на `tt.*`, а не на `text.default.*`. `link.*` — тепер у `default/component` (+ `inverse/component`), `layout.paddingH.*` — теж у component.
- Розміри в `default/component` і alias-шкали (`spacing.*`, `size.*`, `depth.*`, `btn.height.*` …) у `stage` — **числа**, не посилання на `dimension.*`; це стан команди, не переписувати.
- Темний фон — режим `Theme = Inverse` (сет `inverse` перевизначає alias); `text.defaultInvert.*` напряму — лише де Inverse поставити не можна. Старі `semantic.*` / `contextual.*` / `border-radius.*` більше не існують; у `stage` нема `background.brandSubtle|slateDark1|slateDark2|surface` (`fill.subtle` / `fill.subtleInvert` — є) — замість них `fill.default` / `Theme = Inverse` (повна мапа — `references/tokens.md` § Перейменування).

- **`$deprecated` у `stage` — не наша справа**: команда мерджить з GitLab-сервером, deprecated-токени розбирають інші. Не мігрувати, не переприв'язувати, не виносити в питання; лише не брати deprecated для нових прив'язок, якщо є живий відповідник.

- **Самому токени / змінні не додавати** — лише ті, що є в експорті `stage` (`tokens/system/`) і в колекціях `Product` / `Theme`. Бракує токена — сказати Андрею, нові — тільки через JSON-handoff на його прохання.

## Свіжий архів (на початку кожної сесії)
Спитати про зміни → zip розпакувати в окрему порожню папку → `python3 -I scripts/tokens-diff.py tokens/system <папка>` (сети бере з `$metadata.json`) → коротко: + / − / ~, що торкається нашого компонента, конфлікти імен → замінити `tokens/system/`, оновити дату в `references/token-studio.md`, коміт `tokens: export YYYY-MM-DD` → перевірити, чи потрапили раніше передані `tokens/<c>.*.json` (ні — нагадати вставити). Нема архіву — сказати, від якої дати експорт.

## Іменування
| Що | Шаблон | Тип |
|---|---|---|
| розміри, падінги, gap | `<component>.<part>.<property>` (`anchor.item.height`, `table.filled.padding-h`) | sizing / spacing |
| радіус | `border-radius.<component>.<part>` | borderRadius |
| кольори (fill / border) | `contextual.<component>.<part>.<role>[.<state>]` | color |
| інверт | окремих токенів нема — `Theme = Inverse` (старі `inverted.*` / `-invert` у Anchor / Chip — легасі) | — |
| типографіка | наявний alias (`text.md-strong`) | typography |
- Сегменти = значення властивостей (`filled`, `card`, `md`, `hover`, `inverted`); шар-хедер — `head`.
- **«В рядок»**: останній рівень — набір сусідніх значень (стани, розміри); рівня з одним листком не створювати.
- Компонент з однієї частини — без рівня `item` / `base`.
- Мінімум: текст + іконка одного елемента — один колір (а текст і іконки взагалі глобальні `semantic.*`); симетричні падінги — один `padding-h` / `padding-v`; структуру частин не зливати.
- Значення — тільки alias (`{spacing.200}`, `{size.300}`, `{fill.default}`, `{global.borderRadius.md}`); бракує — додати alias-токен. Сирі числа — лише де нема шкали.
- У групі спершу листки, потім підгрупи. Видалення — `"$deprecated": { "severity": "warning", "message": "Deprecated YYYY-MM-DD → use <новий.токен>" }`.

## Прив'язка (обов'язково обидва)
1. Токен на шар: `node.setSharedPluginData('tokens', '<key>', JSON.stringify('<token.name>'))`. Ключі: `fill`, `borderColor`, `height`, `width`, `paddingLeft|Right|Top|Bottom`, `itemSpacing`, `borderRadiusTopLeft|TopRight|BottomRight|BottomLeft` (кожен кут!), `typography`, `boxShadow`.
2. Однойменна змінна `Product` (`/` замість `.`) на тій самій властивості. Нема змінної (Export не зроблено) — створити: alias на ті самі змінні, обидва режими, **явні scopes** (GAP, WIDTH_HEIGHT, CORNER_RADIUS, FRAME_FILL / SHAPE_FILL, TEXT_FILL; не ALL_SCOPES).
3. Paint зі змінною — fallback = реальне значення.
4. Inspect: ⬡ = лише змінна (поставити токен); розірваний ланцюг = токена нема в сетах (дописати, не переприв'язувати).
- Текст — text style + змінні типографіки; тіні — effect style; градієнти — paint style зі стопами на змінних.

## Передача (JSON-handoff)
1. Андрей дає повні JSON зі **своєї бренчі**: `alias` + `component` MB, потім XON. Перевірити `product` в alias.
2. Редагувати саме ці файли: python load → зміни → `json.dump(indent=2, ensure_ascii=False)`; diff проти оригіналу (+ / − / ~), жодних інших змін.
3. Компонент **уже прив'язаний** у Figma; у відповіді — таблиця «токен → шар → властивість».
4. `SendUserFile` → Андрей вставляє, робить Export. Перед Export — вставити всі останні JSON (Export з бренчі без наших токенів видаляє змінні).
5. Копія фрагментів — `tokens/<c>.{mb,xon}.{alias,component}.json` у репо.
6. **Ніколи не писати в storage Token Studio** — GitHub sync перезапише.
7. Після Export — змінні мають нові ID: аудит мертвих прив'язок → переприв'язка за plugin data `tokens` (`token.replace(/\./g,'/')`).

## Структура після оновлення з GitLab (2026-11-09)
- Джерело токенів — GitLab `ys/design/wanda-x` (`git.slygods.com`, гілка `stage`, тека `tokens`), Token Studio storage `gitlab`. Наш GitHub `tokens/system/` — лише копія; оновлювати з експорту Андрея.
- Сети: `mb|sc|bb|xon` × `core` + `map` + `override`, `default/alias, `default/component`, `inverse/alias`, `inverse/component`. Figma: колекція `Product` (MB / BB / SC / XON) + `Theme` (Default / Inverse).
- Старі назви прибрано: `semantic.*`, `border-radius.global.*`, `contextual.*`. Нові: `background.slate2`, `background.1`, `global.borderRadius.lg`, `menu.color.accent`, `text.default.*`, `status.<state>.text.primary`. Типографіка — camelCase як стилі: `text.mdStrong`, `text.lgStrong`, `text.lgStronger`, `text.smStrong`, `heading.md` …
- Збережені в документі дані Token Studio (`values`) після пулу не оновлюються — свіжу структуру брати з експорту JSON, а перевіряти прив'язки за змінними `Product` / `Theme`.
- Клони MrBet-заголовків тягнуть node-level прив'язки fontSize / fontFamily / fontWeight / lineHeight до старих змінних — знімати `setBoundVariable(k, null)`, стиль `heading/*` лишається.
