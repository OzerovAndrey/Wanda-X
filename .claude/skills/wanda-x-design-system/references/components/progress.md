# Progress

Сторінка `↳ Progress 🔴 Андрей` (`46674:465714`) · нова Section `Progress` (`79803:56`, праворуч від оригіналів, x 640) · набори `Progress` (`79804:4510`), `Progress/Circle` (`79803:70`), `Progress/Step` (`79803:61`) · статус: **Rebuilt — review (2026-10-29)**

Інвентаризація використань по всьому файлу — `reports/progress-inventory-2026-10-29.md`.

## Призначення і характер
Індикатор прогресу: лінійна смуга з лічильником (`2/5`), покрокова смуга з сегментів і кільце з відсотком.
- **Роль і місце:** картки бонусів (`Card/Bonus/Conten-block/timer` — ~400 інстансів, sm), VIP-картки, реєстрація (Step), онбординг, профіль; кільце — плитки провайдерів у Gamehall, бонуси Ingame.
- **Поведінка:** станів немає (неінтерактивний). Значення задається в інстансі: ширина `Thumb` (Line), кількість і `Active` сегментів у слоті `Items` (Step), дуга `Thumb` + текст (Circle).
- **Inverted:** міняється лише колір `Value` (`semantic.text.default.heading` → `default-invert.heading`); Track/Thumb мають власні `inverted` токени з тими ж значеннями.
- **MB vs XON:** Primary — градієнт success→vibrant в обох; Secondary — MB `core.brand-60.500` (синій), XON `core.content.a100` (білий). Track: MB `semantic.fill.default`, XON `core.content.a10/a15`.
- **Масштаб:** ширина фіксована 200 у мейні, в макетах тягнеться (Track — Fill). Висота Track: md 10 / sm 4.
- **Межі:** Type=Step лише md і Inverted=False; Circle без Size і Inverted (як в оригіналі).

## Анатомія
```
Progress (COMPONENT_SET 79804:4510)   Variant × Size × Inverted × Type (10v) · Value (bool) · Items (slot)
├─ Variant=…, Size=md|sm, Inverted=…, Type=Line   H · gap progress.gap · 200 FIXED / HUG · align CENTER
│   ├─ Track  FRAME  H · FILL · height progress.height.{md|sm} · radius border-radius.progress · fill contextual.progress[.inverted].{primary|secondary}.track · clip
│   │   └─ Thumb  RECT  FIXED ширина (= значення; 134 Primary / 54 Secondary за замовч.) · FILL висота · fill …{primary|secondary}.thumb · radius
│   └─ Value  TEXT  text.xs-strong · semantic.text.default[-invert].heading · "2/5" · visible ← Value
└─ Variant=…, Size=md, Inverted=False, Type=Step   H · 200 FIXED / HUG
    └─ Items  SLOT  H · gap progress.step.gap · FILL · 10 × Progress/Step (FILL), 3 Active
Progress/Circle (COMPONENT_SET 79803:70)  Variant (2v) · 36×36 · height progress.circle.size, lock ratio
├─ Track  ELLIPSE  stroke contextual.progress.{v}.track · borderWidth progress.circle.track-width (1)
├─ Thumb  ELLIPSE  arc · stroke contextual.progress.{v}.thumb · borderWidth progress.circle.thumb-width (2) · round cap
└─ Label  TEXT  text.xs-strong · semantic.text.default.heading · "86%"
Progress/Step (COMPONENT_SET 79803:61)  Variant × Active (4v) · 24×10 · height progress.height.md · radius · fill …{v}.{thumb|track}
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
| `Progress/Step` → `Active` | Variant | False \| True | заповнений сегмент |

## Токени (`progress.*`, `contextual.progress.*`)
Значення скопійовано з `contextual.progress-bar.*` (експорт 2026-10-29). Файли: `tokens/progress.{mb,xon}.component.json`.

| Токен | Шар → властивість | MB | XON |
|---|---|---|---|
| `progress.gap` | Line root → itemSpacing | `{spacing.200}` (8) | = |
| `progress.height.md` / `.sm` | Track, Step → height | 10 / 4 | = |
| `progress.step.gap` | slot Items → itemSpacing | `{spacing.100}` (4) | = |
| `progress.circle.size` | Circle root → height | `{size.450}` (36) | = |
| `progress.circle.track-width` / `.thumb-width` | Circle Track/Thumb → strokeWeight | 1 / 2 | = |
| `border-radius.progress` (наявний) | Track, Thumb, Step → 4 кути | `{border-radius.core.full}` | = |
| `contextual.progress.primary.track` | Track, Step off, Circle Track | `{semantic.fill.default}` | `{core.content.a10}` |
| `contextual.progress.primary.thumb` | Thumb, Step on, Circle Thumb | gradient success→vibrant (без змінної) | = |
| `contextual.progress.secondary.track` | Track, Step off, Circle Track | `{semantic.fill.default}` | `{core.content.a15}` |
| `contextual.progress.secondary.thumb` | Thumb, Step on, Circle Thumb | `{core.brand-60.500}` | `{core.content.a100}` |
| `contextual.progress.inverted.*` (4) | Track/Thumb у Inverted=True | = звичайним | = |
| `semantic.text.default[-invert].heading` | Value, Label → fill | — | — |

Градієнтні токени — лише plugin data (Figma-змінна не вміє градієнт); стопи прив'язані до `core/brand-preset/*`, як в оригіналі. Змінні в `Product` створено з тими самими назвами і scopes (GAP / WIDTH_HEIGHT / STROKE_FLOAT / FRAME_FILL+SHAPE_FILL+STROKE_COLOR).

## Рішення (історія)
1. 2026-10-29 — перескладено поруч з оригіналами. Один набір `Progress` замість `Progress/Linear`; `Progres/Step` → `Progress/Step` (`Type` → `Variant`, `Active=Yes|No` → `False|True`); `Progress/Circle` — власні токени.
2. Thumb тепер має власну ширину (значення прогресу) замість padding-right у Track, як було.
3. Сегменти Step — у слоті `Items` (DoD: список однакових пунктів), кількість задається в інстансі.
4. Track у Secondary Line бере `secondary.track` (в оригіналі помилково `primary.container`; на XON a15 замість a10).
5. Circle Label — `semantic.text.default.heading` замість неіснуючого `contextual.progress-bar.color` (правило: текст — semantic; колір той самий).
6. Не перенесено (0 використань / дублі): `Progress/Steps`, `Progress line`, фрейми `ProgressBar/Timer`, `proress+points`, `Progress bar`. `Registration progress` — продуктова композиція, лишилась як є.

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
| Варіантів | 10 + 2 + 4 |
