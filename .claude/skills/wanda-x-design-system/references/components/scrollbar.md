# Scrollbar

Сторінка `↳ Scrollbar` · Section `Scrollbar` (79771:10) · набір `Scrollbar` (28787:64507) · статус: Rebuilt — review (2026-10-29)

## Призначення і характер
Повзунок (thumb) прокрутки для попапів, дропдаунів, каруселей. Трек не малюється — тільки thumb.
- **Роль і місце:** вкладається в контейнер зі скролом (`Modal`/`Drawer` — Boolean `Scrollbar`, дропдауни, текстові блоки, `Thumbs scroll`, `scroll wrap` у Profile).
- **Поведінка між станами:** Hover — товщина 4 → 8, колір той самий.
- **Variant:** `Default` — брендовий колір, `Transparent` — приглушений (для світлого контенту).
- **Довжина** — задається в інстансі (у макетах 57 / 64 / 88 / 96), токена немає. Товщина — токеном.
- **Inverted:** немає (окремий `Variant=Transparent` закриває світлий контекст; темного використання не знайдено).

## Анатомія
```
Scrollbar (COMPONENT_SET 28787:64507)   Variant × State × Horizontal (8v)
└─ Variant=…, State=…, Horizontal=False (COMPONENT)  auto layout VERTICAL · fixed · padding 0 · без заливки
│   width ← scroll.size | scroll.hover.size, height 88 (довжина — в інстансі)
│   └─ Thumb (RECTANGLE)  FILL × FILL · radius ← border-radius.scroll (4 кути) · fill ← contextual.scroll.fill.*
└─ Variant=…, State=…, Horizontal=True (COMPONENT)   auto layout HORIZONTAL · width 88 · height ← токен товщини
    └─ Thumb — те саме
```
**Без rotation.** Горизонтальні варіанти мають реальні розміри 88×4 / 88×8. Поворот компонента не переноситься при свопі варіанту в інстансі — через це раніше `Horizontal=True` в інстансах лишався вертикальним.

Шар `Thumb` (колишній `scrollbar`) свідомо лишається окремо від кореня: у ~30 інстансах макетів на ньому перевизначена заливка — сплющення структури їх би скинуло.

## Властивості
| Властивість | Тип | Значення / default | Що робить |
|---|---|---|---|
| `Variant` | Variant | **Default** \| Transparent | колір thumb |
| `State` | Variant | **Default** \| Hover | товщина 4 / 8 |
| `Horizontal` | Variant | **False** \| True | вертикальний / горизонтальний |

## Матриця
| | Default | Hover |
|---|---|---|
| **Vertical** | 4×88 | 8×88 |
| **Horizontal** | 88×4 | 88×8 |
| fill Default | `contextual.scroll.fill.default` | те саме |
| fill Transparent | `contextual.scroll.fill.transparent` | те саме |

## Токени (`mb/component`, `xon/component`)
| Токен | Шар → властивість | MB | XON |
|---|---|---|---|
| `scroll.size` | root → width (V) / height (H) | `{spacing.100}` = 4 | `{spacing.100}` |
| `scroll.hover.size` | root → width / height | `{spacing.200}` = 8 | `{spacing.200}` |
| `border-radius.scroll` | Thumb → 4 кути | `{border-radius.global.full}` | те саме |
| `contextual.scroll.fill.default` | Thumb → fill | `{core.grey.400}` ⚠️ | те саме |
| `contextual.scroll.fill.transparent` | Thumb → fill | `{core.content.a20}` ⚠️ | те саме |

Новий alias (обидва бренди): `border-radius.global.full` = `{border-radius.core.full}`.
JSON-фрагменти: `tokens/scrollbar.{mb,xon}.{alias,component}.json`. Змінні з тими ж назвами створено в `Product` вручну — **вставити JSON у Token Studio до наступного Export**, інакше Export видалить змінні (`working-agreements.md` §2.6).

## Рішення
1. 2026-10-29 — перезбірка на місці (інстанси збережено): прибрано rotation з `Horizontal=True`, реальні розміри; додано відсутні `State=Hover, Horizontal=True` (×2) — повна матриця 8v; `Transperrent` → `Transparent`; шар `scrollbar` → `Thumb`; auto layout на корені, Thumb FILL; токени товщини й радіуса (раніше хардкод 4/8 і радіус 2/4 — візуально той самий пігулковий кінець); сітка 16 px, сіра Section.
2. 2026-10-29 — два живі інстанси `Horizontal=True` (`Game not found +` → `Thumbs scroll`, прихований; `Profile +` → `scroll wrap`) були повернуті на 90° і візуально вертикальні 4×88 — переведено в 88×4 без повороту.

## Відхилення від правил
- Кольорові токени `contextual.scroll.fill.*` посилаються на **core** (`core.grey.400`, `core.content.a20`), а не на alias `semantic.*` (правило 17). Точного semantic-відповідника немає — не підміняли.
- Префікс токенів `scroll.*` не збігається з назвою компонента `Scrollbar` (правило «токени ↔ компонент»). Лишено `scroll`, бо так названі наявні кольорові токени.

## Відкриті питання
- Додати alias `semantic.fill.scroll` / `semantic.fill.scroll-subtle` (або інші назви) під ці два кольори?
- Перейменувати групу `scroll` → `scrollbar` (5 токенів + змінні) — так чи лишаємо?
