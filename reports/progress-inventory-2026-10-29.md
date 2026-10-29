# Progress — інвентаризація по всьому файлу (2026-10-29)

Файл `3MbdWPLOGBjBj92Y3EnPYN` · сторінка `↳ Progress 🔴 Андрей` (46674:465714) · обхід усіх 95 сторінок, read-only.
Токени — останній експорт у репо (`tokens/system/`, коміт 2026-10-29 07:24 UTC).
Метод: інстанси, чия назва містить `progres`/`progress`, + резолв мастер-компонента. Перейменовані шари з іншою назвою не потрапили (напр. `x2`).

## 1. Що лежить на сторінці Progress

| Набір | ID | Осі / властивості | Варіантів | Де |
|---|---|---|---|---|
| `Progress/Linear` | 46674:465769 | `Variant` Primary\|Secondary · `Inverted` False\|True · `Size` md\|sm · `Type` Line\|Step · `Value` (bool) | 10 | поза Section |
| `Progres/Step` (опечатка) | 46674:465870 | `Type` Primary\|Secondary · `Active` Yes\|No | 4 (24×10, без AL) | поза Section |
| `Progress/Circle` | 46694:445445 | `Variant` Primary\|Secondary | 2 (36×36, без AL) | Section `Progress` 78251:86652 |
| `Progress/Steps` | 48524:961159 | `— Status ——` (bool) | компонент | поза Section |
| `Progress line` | 66864:290913 | — | компонент | поза Section |
| `Registration progress` | 48081:461071 | `step` 2\|1 | 2 | поза Section |
| фрейми `ProgressBar/Timer`, `proress+points`, `Progress bar` | 78089:520067, 78094:538658, 78094:544824 | — | — | не компоненти |
| вільний інстанс `Progress/Linear` | 79791:281636 | — | — | на канвасі |

`Progress/Linear` — матриця неповна: `Type=Step` є лише для `md` + `Inverted=False` (Primary, Secondary); 6 комбінацій Step відсутні.

### Анатомія `Progress/Linear` (Type=Line)
```
Variant=…, Size=md|sm, Type=Line  (H, gap=contextual.progress-bar.gap 8, FIXED 200 / HUG)
├─ Track   FRAME  FILL · height=contextual.progress-bar.height.{md 10|sm 4} · radius=border-radius.progress · fill=…normal.primary.container
│   └─ Thumb RECT FILL · fill=…normal.{primary|secondary}.track · radius=border-radius.progress
└─ Value   TEXT   text.xs-strong · semantic.text.default.heading (Inverted: default-invert.heading) · "2/5"
```
Type=Step: 10 інстансів `Progres/Step` (FILL), gap 4 **без токена**.
`Progres/Step`: fill …{primary|secondary}.{track|container}, радіус токеном, розмір 24×10 без токена висоти.
`Progress/Circle`: 2 еліпси (Track/Thumb) зі stroke …{primary|secondary}.{container|track}, Label `text.xs-strong` + `contextual.progress-bar.color`; розмір/товщина обведення без токенів.

### Inverted
Міняється **лише колір Value** (heading → default-invert.heading). Track/Thumb однакові.

## 2. Токени (поточний експорт)

| Токен | MB | XON | Де застосовано |
|---|---|---|---|
| `contextual.progress-bar.normal.primary.track` | gradient success→vibrant | gradient success→vibrant | Thumb Primary, Step Active Primary, Circle Thumb |
| `contextual.progress-bar.normal.primary.container` | `{semantic.fill.default}` | `{core.content.a10}` | Track **Primary і Secondary**, Step inactive, Circle Track |
| `contextual.progress-bar.normal.secondary.track` | `{core.brand-60.500}` | `{core.content.a100}` | Thumb Secondary, Step Secondary Active |
| `contextual.progress-bar.normal.secondary.container` | `{semantic.fill.default}` | `{core.content.a15}` | Step Secondary inactive, Circle Secondary, `Progress line` — **не в Linear Secondary** |
| `contextual.progress-bar.height.md` / `.sm` | 10 / 4 | 10 / 4 | Track |
| `contextual.progress-bar.gap` | 8 | 8 | root Line |
| `border-radius.progress` | `{border-radius.core.full}` | те саме | усі радіуси |
| `contextual.progress-bar.color` | **немає в експорті** | **немає** | Circle → Label fill |
| `contextual.progress-bar.normal.static.container` | **немає в експорті** | **немає** | `Progress/Steps` |

## 3. Де використовується (інстанси по файлу)

### Актуальні набори зі сторінки Progress

| Набір | Всього | Сторінки (к-сть) | Головні хости |
|---|---|---|---|
| `Progres/Step` | **845** | Calendar 150, Achievements 135, Home 125, Gamehall 120, Lottery 65, Mobile App 55, Lootboxes 40, News 40, Shop 40, Strip 40, Slider/Banner 10, Modal/Drawer 10, Betting 10, Onboarding 5 | майже все — `Navigator` (крапки каруселі); 1 прямий інстанс на Home |
| `Progress/Linear` | **591** | Deals 273, Calendar 78, Profile 68, Loyalty 62, Home 39, Modal/Drawer 18, Login 15, Onboarding 15, All Cards 14, Ingame 5, Account 2, Banner 1, Notification 1 | `Card/Bonus/Conten-block/timer` (~408), `[M] Vip-club card` 58, `Card / Bonuses (Profile)` 25, `Registration progress` 15, `CTA` 16, `Onboarding / Popover` 5 |
| `Progress/Circle` | 22 | Gamehall 15 (Secondary), Ingame 7 (Primary) | `Gamehall / Thumb-provider`, `Ingame bonuses block` |
| `Registration progress` | 15 | Login 12, Modal/Drawer 3 | `Registration steps content` |
| `Progress/Steps` | **0** | — | не використовується |
| `Progress line` | **0** | — | не використовується |

Розклад `Progress/Linear` по варіантах:
| Варіант | Інстансів |
|---|---|
| Primary · sm · Line · Inverted=False | 410 |
| Primary · md · Line · Inverted=False | 103 |
| Primary · md · Step | 49 |
| Secondary · md · Line · Inverted=False | 28 |
| Primary · sm · Line · Inverted=True | 1 |
| Inverted=True md (Primary, Secondary), Secondary sm (обидва Inverted), Secondary Step | **0** |

### Legacy / мастер видалено або в чужій бібліотеці

| Мастер | Статус | Інстансів | Де |
|---|---|---|---|
| `Progress/Secondary/Line/md` (46674:465772) | локальний, **мастер видалено** | 151 + `Progress line` + `ProgressBar/Timer` | Achievements 57, Profile 36, Ingame 34, Strip 16, Modal/Drawer 8 — у `Achivments card`, `Active/Available Bonus Card`, `Strip_Progress` |
| `progress` (set 60349:308938, `Type` on\|off) | локальний, **мастер видалено** | 64 | Profile 35, Ingame 21, Modal/Drawer 8 — `Active/Available Bonus Card` |
| `Progres Step/Static/No` \| `Yes` | локальний, мастер не знайдено на сторінках | 50 | Home — віджет `stores`; також всередині `Progress/Steps` |
| `Progress` (lib, set 66674:58059: `Style` Primary\|Secondary\|Static · `Type` Line\|Step) | remote | 75 | Achievements 45, Profile 29 (`file` — верифікація), All Cards 1 |
| `Progress bar` (lib, Circular\|Linear\|Block · Color · Percent) | remote | 17 | Profile 12, Modal/Drawer 4, Ingame 1 — `points header` |
| `Progres Step` (lib) | remote | 40 | Calendar — `Carousel slider` |
| `Progress circle` (lib) | remote | 1 | Gamehall |
| `[M] Progress-button` | мастер не знайдено | 5 | Onboarding — `Onboarding / Popover` |
| `Progressbar` | — | 2 | Ingame `[M] bonuses-Bet Hero` |

Продуктові композиції з «progress» у назві (не атоми Progress): `Strip_Progress` (Strip 34554:47095, всередині legacy `Progress/Secondary/Line/md`), `Tournament/ My progress` (71991:105673), варіанти `Achievement cards / Type=Progress`, `Card / Achievement / State=Progress`.

## 4. Відхилення від правил (не правимо — фіксуємо)

**Назви**
- `Progres/Step` — опечатка; `Progress line`, `Registration progress`, `proress+points`, `Progress bar` — різні схеми імен.
- Primary/Secondary — це вісь `Variant` у Linear/Circle, але `Type` у `Progres/Step`; у Linear `Type` = Line|Step.
- `Active` Yes|No замість стану/Boolean-конвенції.

**Токени**
- Компонентні токени мають бути `progress.*` (назва = компонент), зараз `contextual.progress-bar.*` + `border-radius.progress` поза групою.
- Два токени, яких немає в експорті: `contextual.progress-bar.color`, `contextual.progress-bar.normal.static.container`.
- Circle Label фарбується компонентним токеном — правило: текст = глобальні semantic.
- Linear Secondary Track бере `primary.container`, хоча є `secondary.container` (на MB однакові, на XON a10 vs a15).
- Без токенів: gap 4 у `Type=Step`, висота/ширина `Progres/Step`, розмір і stroke `Progress/Circle`.
- `Navigator` позичає токени Progress (з аудиту 19.10).

**Структура**
- У Section лише `Progress/Circle`; решта — на канвасі, порушує section-layout (головний компонент першим, 80/80).
- `Progres/Step`, `Progress/Circle` — без auto layout.
- Неповна матриця Step (лише md, Inverted=False).
- Дублі: `Progress line` (= Linear Secondary, зібраний на видаленому мастері), `Progress/Steps` (= Type=Step, Static-стан на видаленому мастері) — обидва з 0 використань.
- Value "2/5" — статичний текст, не відповідає довжині Thumb (77%) — косметика демо.

## 5. Питання до команди
1. `Progress/Steps` і `Progress line` (0 використань, на видалених мастерах) — переносимо в `Originals`?
2. Чи потрібен стан **Static** (є в lib-`Progress` `Style=Static` і в `Progress/Steps`)? Якщо так — додаємо як `Variant=Static` у Linear і токен `progress.static.container`.
3. Lib-`Progress bar` (Circular/Block, Percent, Color Success/Warning/Error) — це покриває `Progress/Circle`, чи статуси кольорів теж потрібні?
4. `Registration progress` — лишається в Progress чи переїжджає до Modal/реєстрації як композиція?
5. `Progres/Step` — окремий атом чи лише внутрішній sub-component Linear/Navigator (≈845 інстансів через Navigator)?
6. Чи потрібна Type=Step для sm та Inverted, якщо в макетах 0 використань?
7. Legacy `progress` (on|off) у Bonus Card та `Progress/Secondary/Line/md` — після ребілду переводимо картки на новий Linear?
