# Tokens — створити, прив'язати, передати токени

Разом із `rules/core.md` (§ Токени). Ручна вставка JSON у Token Studio, storage, Inspect — `references/token-studio.md`; відомі проблеми токен-системи й чужі змінні — `references/tokens.md`.

## Структура
- Token Studio: сети `mb/core|alias|component`, `xon/core|alias|component`; тема `Product` → режими MB / XON колекції `Product`. Компонентні токени — **тільки** в `*/component`.
- Джерело правди — `tokens/system/` у репо (дата останнього експорту — `references/token-studio.md`).
- MB світлий, XON темний: кольори лише через `semantic.*` (різницю дає alias бренду). `Inverted=False` → `semantic.text.default.*`, `Inverted=True` → `semantic.text.default-invert.*`; не підміняти на `text.static.*`. Нема контрасту — питання, не core.

## Свіжий архів (на початку кожної сесії)
Спитати про зміни → zip розпакувати в окрему порожню папку → `python3 -I scripts/tokens-diff.py tokens/system <папка>` → коротко: + / − / ~, що торкається нашого компонента, конфлікти імен → замінити `tokens/system/`, оновити дату в `references/token-studio.md`, коміт `tokens: export YYYY-MM-DD` → перевірити, чи потрапили раніше передані `tokens/<c>.*.json` (ні — нагадати вставити). Нема архіву — сказати, від якої дати експорт.

## Іменування
| Що | Шаблон | Тип |
|---|---|---|
| розміри, падінги, gap | `<component>.<part>.<property>` (`anchor.item.height`, `table.filled.padding-h`) | sizing / spacing |
| радіус | `border-radius.<component>.<part>` | borderRadius |
| кольори (fill / border) | `contextual.<component>.<part>.<role>[.<state>]` | color |
| інверт | `contextual.<component>[.<part>].inverted.<role>[.<state>]` (у старих Anchor / Chip — `-invert`, не переробляти без запиту) | color |
| типографіка | наявний alias (`text.md-strong`) | typography |
- Сегменти = значення властивостей (`filled`, `card`, `md`, `hover`, `inverted`); шар-хедер — `head`.
- **«В рядок»**: останній рівень — набір сусідніх значень (стани, розміри); рівня з одним листком не створювати.
- Компонент з однієї частини — без рівня `item` / `base`.
- Мінімум: текст + іконка одного елемента — один колір (а текст і іконки взагалі глобальні `semantic.*`); симетричні падінги — один `padding-h` / `padding-v`; структуру частин не зливати.
- Значення — тільки alias (`{spacing.200}`, `{size.300}`, `{semantic.fill.subtle}`, `{border-radius.global.md}`); бракує — додати alias-токен. Сирі числа — лише де нема шкали.
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
