# Progress

Сторінка `↳ Progress 🔴 Андрей` (`46674:465714`) · нова Section `Progress` (`79803:56`, праворуч від оригіналів, x 640) · набори `Progress` (`79804:4510`), `Progress/Circle` (`79803:70`), `Progress/Step` (`79803:61`) · статус: **Rebuilt — review (2026-10-29)**

Інвентаризація використань по всьому файлу — `reports/progress-inventory-2026-10-29.md`.

## Призначення і характер
Індикатор прогресу: лінійна смуга з лічильником (`2/5`), покрокова смуга з сегментів і кільце з відсотком.
- **Роль і місце:** картки бонусів (`Card/Bonus/Conten-block/timer` — ~400 інстансів, sm), VIP-картки, реєстрація (Step), онбординг, профіль; кільце — плитки провайдерів у Gamehall, бонуси Ingame.
- **Поведінка:** станів немає (неінтерактивний). Значення задається в інстансі: ширина `Indicator` (Line), кількість і `Active` сегментів у слоті `Items` (Step), дуга `Indicator` + текст (Circle). **Частковий сегмент** (як колишні `Progress line` / `Progress bar`): у сегменті `Active=True` і ширина його `Indicator` = значення (Fill → Fixed в інстансі).
- **Inverted:** міняється лише колір `Value` (`semantic.text.default.heading` → `default-invert.heading`); Track/Indicator мають власні `inverted` токени з тими ж значеннями.
- **MB vs XON:** Primary — градієнт success→vibrant в обох; Secondary — MB `core.brand-60.500` (синій), XON `core.content.a100` (білий). Track: MB `semantic.fill.default`, XON `core.content.a10/a15`.
- **Масштаб:** ширина фіксована 200 у мейні, в макетах тягнеться (Track — Fill). Висота Track: md 10 / sm 4.
- **Межі:** Type=Step — md і sm, лише Inverted=False; Circle без Size і Inverted (як в оригіналі).

## Анатомія
```
Progress (COMPONENT_SET 79804:4510)   Variant × Size × Inverted × Type (12v) · Value (bool) · Items (slot)
├─ Variant=…, Size=md|sm, Inverted=…, Type=Line   H · gap progress.gap · 200 FIXED / HUG · align CENTER
│   ├─ Track  FRAME  H · FILL · height progress.height.{md|sm} · radius border-radius.progress · fill contextual.progress[.inverted].{primary|secondary}.track · clip
│   │   └─ Indicator  RECT  FIXED ширина (= значення; 134 Primary / 54 Secondary за замовч.) · FILL висота · fill …{primary|secondary}.indicator · radius
│   └─ Value  TEXT  text.xs-strong · semantic.text.default[-invert].heading · "2/5" · visible ← Value
└─ Variant=…, Size=md|sm, Inverted=False, Type=Step   H · 200 FIXED / HUG
    └─ Items  SLOT (спільна властивість)  H · gap progress.step.gap · FILL · 10 × Progress/Step того ж Size (FILL), 3 Active
Progress/Circle (COMPONENT_SET 79803:70)  Variant (2v) · 36×36 · height progress.circle.size, lock ratio
├─ Track  ELLIPSE  stroke contextual.progress.{v}.track · borderWidth progress.circle.track-width (1)
├─ Indicator  ELLIPSE  arc · stroke contextual.progress.{v}.indicator · borderWidth progress.circle.indicator-width (2) · round cap
└─ Label  TEXT  text.xs-strong · semantic.text.default.heading · "86%"
Progress/Step (COMPONENT_SET 79803:61)  Variant × Size × Active (8v)
└─ Variant=…, Size=md|sm, Active=…  (корінь = трек) H · 24 FIXED · height progress.height.{md|sm} · radius · fill …{v}.track · clip
    └─ Indicator  RECT  FILL × FILL · fill …{v}.indicator · radius · visible лише в Active=True
```
Круги кільця накладені (не auto layout) — це оверлеї.

## Властивості
| Властивість | Тип | Значення / default | Що робить |
|---|---|---|---|
| `Variant` | Variant | Primary \| Secondary | градієнт / суцільний колір |
| `Size` | Variant | md \| sm | висота Track 10 / 4 |
| `Inverted` | Variant | False \| True | колір Value для темного фону |
| `Type` | Variant | Line \| Step | суцільна смуга / сегменти |
| `Value` | Boolean | true | показ лічильника (лише Line) |
| `Items` | Slot | 10 × `Progress/Step` | сегменти Step; preferred — `Progress/Step` |
| `Progress/Step` → `Size` | Variant | md \| sm | висота сегмента 10 / 4 |
| `Progress/Step` → `Active` | Variant | False \| True | показ `Indicator`; ширина `Indicator` в інстансі = часткове заповнення |

## Токени (`progress.*`, `contextual.progress.*`) — 8 шт.
Файли: `tokens/progress.{mb,xon}.component.json`. Оптимізовано 2026-10-29 (було 15).

| Токен | Шар → властивість | MB | XON |
|---|---|---|---|
| `progress.gap` | корінь Line → gap | `{spacing.200}` (8) | = |
| `progress.height.md` / `.sm` | Track, `Progress/Step` → height | 10 / 4 | = |
| `progress.step.gap` | слот `Items` → gap | `{spacing.100}` (4) | = |
| `progress.circle.size` | корінь Circle → height | `{size.450}` (36) | = |
| `contextual.progress.track` | Track, Step-корінь, Circle Track (усі варіанти, і Inverted) | `{semantic.fill.default}` | `{core.content.a10}` |
| `contextual.progress.primary.indicator` | Indicator Primary (Line, Step, Circle) | gradient success→vibrant (без змінної) | = |
| `contextual.progress.secondary.indicator` | Indicator Secondary | `{core.brand-60.500}` | `{core.content.a100}` |
| `border-radius.progress` (наявний) | 4 кути | `{border-radius.core.full}` | = |
| `semantic.text.default[-invert].heading` + `text.xs-strong` | Value, Label | — | — |

Inverted міняє лише колір тексту — окремих inverted-токенів немає. Товщини кільця (1 / 2) — без токена.

## Рішення (історія)
1. 2026-10-29 — перескладено поруч з оригіналами. Один набір `Progress` замість `Progress/Linear`; `Progres/Step` → `Progress/Step` (`Type` → `Variant`, `Active=Yes|No` → `False|True`); `Progress/Circle` — власні токени.
2. Thumb тепер має власну ширину (значення прогресу) замість padding-right у Track, як було.
3. Сегменти Step — у слоті `Items` (DoD: список однакових пунктів), кількість задається в інстансі.
4. Track у Secondary Line бере `secondary.track` (в оригіналі помилково `primary.container`; на XON a15 замість a10).
5. Circle Label — `semantic.text.default.heading` замість неіснуючого `contextual.progress-bar.color` (правило: текст — semantic; колір той самий).
6. Не перенесено як окремі компоненти (0 використань / дублі): `Progress/Steps`, `Progress line`, фрейми `ProgressBar/Timer`, `proress+points`, `Progress bar`. `Registration progress` — продуктова композиція, лишилась як є.

7. 2026-10-29 (на запит Андрея) — покрито вигляд `Progress line` / `Progress bar` і `Progress/Steps`: `Progress/Step` перебудовано як міні-смугу (корінь-трек + `Indicator`) → частково заповнений сегмент; додано `Size=sm` у `Progress/Step` (4v → 8v) і `Type=Step, Size=sm` у `Progress` (10v → 12v). Нових токенів не потрібно (`progress.height.sm`).
8. 2026-10-29 — Export з Token Studio видалив 13 змінних `progress/*` (токенів ще немає в сетах) → 46 мертвих прив'язок; змінні створено знову й переприв'язано за plugin data (136 властивостей). Повториться після кожного Export, доки `tokens/progress.*.component.json` не вставлено.
9. Колір **Static** (`Progress/Steps`, lib-`Progress` `Style=Static`) — не додано, чекає рішення команди.

10. 2026-10-29 — шар `Thumb` → **`Indicator`** у всіх варіантах `Progress`, `Progress/Step`, `Progress/Circle` (рішення Андрея). Токени поки `….indicator`.

11. 2026-10-29 — ще один Export видалив змінні `progress/*` (61 мертва прив'язка) → створено знову (з назвами `indicator`) і переприв'язано. Андрей дав JSON MB зі своєї бренчі → додано 15 токенів (+15 −0 ~0).

12. 2026-10-29 — **оптимізація токенів (рішення Андрея): 15 → 8.** Прибрано `inverted.*` (однакові значення; Inverted міняє лише текст), `primary.track` + `secondary.track` → один `contextual.progress.track` (в XON Secondary Step/Circle трек a10 замість a15 — як було в Line), прибрано `circle.track-width/indicator-width`. Правило: **не дублювати токен під Inverted, якщо значення не відрізняється**.

## Відхилення від правил
- Кольори XON (`core.content.a10/a15/a100`) і MB `core.brand-60.500` — посилання на core, бо в alias немає відповідників (скопійовано як є).
- `border-radius.progress` → `{border-radius.core.full}` (core). Alias `border-radius.global.full` передано разом зі Scrollbar (29.10), у експорті його ще немає — після вставки перевести `border-radius.progress` на нього.
- Track/Circle Track мають paint opacity 16% поверх токена (скопійовано з оригіналу) — фактична непрозорість = токен × 0.16.
- Висоти 10 / 4 і товщини 1 / 2 — сирі числа (немає кроку в `size.*`).

## Відкриті питання
- Paint opacity 16% на Track: прибрати і задати прозорість токеном/alias?
- Alias для XON/MB core-кольорів Progress (назви?).
- Чи потрібен стан Static (є в lib-`Progress` і в `Progress/Steps`)?
- Type=Step для sm та Inverted — додавати, якщо в макетах 0 використань?
- Міграція: ~590 інстансів `Progress/Linear`, ~845 `Progres/Step` (через `Navigator`), legacy `Progress/Secondary/Line/md` (151) і `progress` on|off (64) — коли і в якому порядку.

## Мета
| | |
|---|---|
| Зібрано | 2026-10-29 |
| Експорт токенів | 2026-10-29 07:24 UTC (репо) |
| Варіантів | 12 + 2 + 8 |
