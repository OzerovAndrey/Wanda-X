# Popup — інвентаризація і оптимізована збірка

Сторінка `↳ Popup - Андрей` (`27928:150291`) · нова Section `Popup` (сіра, x 6666) · набір `Popup` (`79607:19185`) + `Popup/Banner` (`79597:7291`) · статус: **етап 1 зібрано (2026-10-28), токени — наступний етап**

## 1. Інвентаризація (2026-10-28, весь файл, read-only скан)
Скан 90+ сторінок за назвами `popup|pop-up|modal|dialog|overlay` і за мейнами інстансів.

**Оболонки, що реально використовуються:**
| Набір | Node | Інстансів | Де |
|---|---|---|---|
| `Popup` (старий, `device × type`: Normal / normal-with-bottom / dialog / with banner) | `47105:166398` | 130 | Log in, Profile, Ingame, Achievements, Shop, Cashbox, Calendar … — **мейн був сиротою (без сторінки)**, тепер у Section Originals 1 |
| `Popup mob` (збірка команди, `Banner=false\|true`) | `77814:6477` | 60 | Log in, Ingame, Cashbox, Messages, Wheel … |
| `Popup web` (збірка команди, `Banner=XS…XL` = ширини 420/560/640/800/1200) | `77818:294521` | 1 | Data refinement |
| `Popup` remote (чужа бібліотека, та сама структура) | `66674:60777` | 4 | Ingame |
| `overlay` ×2, `mobile popup + overlay` ×2 (Pregame, Cashbox) | | | окремі оверлеї |

**Що вкладається в оболонку** — діалоги (`dialog modal content` 21 інст., VIP, bet history, AFK, congrats, cashback, bonus wagered, play for real), банер (`Banner`, `Registration popup`), продуктовий контент (Achievements, Calendar, Deals, Lottery, Lootboxes, Messages, Mobile app, Providers, Strip, Wheel) і великі попапи-сторінки (Profile, Payment, макети 1096).

## 2. Оригінали зібрано на сторінці (2026-10-28)
5 білих Section з підписами `назва · звідки · що це · node · статус`:
`79593:809` 1. Оболонка · `79593:970` 2. Діалоги · `79593:1660` 3. З банером · `79593:1878` 4. Контент продуктових попапів · `79593:5094` 5. Великі попапи.
- Мейни перенесено (інстанси в макетах лишились прив'язаними); фрейми з макетів — копії.
- Врятовано 8 мейнів-сиріт без сторінки: `Popup` (130 інст.), `overlay` ×2, `play for real pop-up`, `AFK modal content`, `AFK modal/opientation4|6`.
- **Шрифт MrBet Black недоступний конектору** → мейни з ним не переносяться (ні в Section, ні на сторінку). Замість них — **інстанси для порівняння** (для наборів — кожен варіант), мейни лишились на своїх сторінках. Пастка: інстанс з цим шрифтом теж не вкладається в Section — 43 інстанси стоять на рівні сторінки поверх своїх Section (2 вдалося вкласти); при переміщенні Section їх треба тягнути разом. Оригінали, що вже лежали на сторінці (`Registration popup`, `AFK modal` ×2, два інстанси-приклади), поставлено на їхні місця так само.

## 3. Оптимізована збірка — `Popup`
Один набір замість старого `Popup` (8v), `Popup mob` (2v) і `Popup web` (5v). Section `Popup` праворуч від оригіналів; основний — `Popup`, під ним `Popup/Banner`.

```
Popup (COMPONENT_SET 79607:19185)  Breakpoint × Size × Banner (12v)
└─ Breakpoint=Desktop, Size=xs, Banner=False  VERTICAL 1280×800, center/center, padding popup.layout.padding (24), fill contextual.overlay
    └─ Window  VERTICAL, width 420 (XS) | 560 | 640 | 800 | 1200, hug, clip, radius border-radius.popup.desktop.*, fill contextual.popup.fill
        ├─ Body  padding popup.padding.top / horizontal / bottom (40/16/32)
        │   └─ Content (SLOT)  дефолт: текст Label (text/md, semantic.text.default.primary)
        ├─ Footer  padding popup.padding.footer.* (16/16/32), верхня лінія 1px contextual.popup.border   ← Boolean Footer
        │   └─ Footer content (SLOT)  дефолт: Button Primary lg, Fill
        ├─ Close (ABS 8/8 від правого-верхнього, Button/Link/Default + іконка close)   ← Boolean Close
        └─ Scrollbar (ABS, 8 від правого краю, top 56)   ← Boolean Scrollbar
Banner=True: Window обгорнутий у Wrapper (VERTICAL, gap −20) з Popup/Banner зверху; Close — Button/Link/Inverted у Wrapper (над банером).
Breakpoint=Mobile, Size=full: корінь 360×640, вікно притиснуте донизу (MAX), Fill по ширині, радіус border-radius.popup.mobile.* (низ 0), + Handle 64×4 (semantic.background.2)   ← Boolean Handle
```

| Властивість | Тип | Значення / default |
|---|---|---|
| `Breakpoint` | Variant | Desktop \| Mobile (структурна різниця: bottom sheet) |
| `Size` | Variant | XS \| SM \| MD \| LG \| XL (Desktop) · Full (Mobile) |
| `Banner` | Variant | False \| True |
| `Close` | Boolean | true |
| `Footer` | Boolean | true |
| `Scrollbar` | Boolean | false |
| `Handle` | Boolean | false (лише Mobile) |
| `Content`, `Footer content` | Slot | Label / Button |

`Popup/Banner` (`79597:7291`): HORIZONTAL 420 (Fill в інстансі), hug, gap spacing.400, padding-right 40, радіус 24/24/0/0, fill contextual.popup.banner.fill (градієнт), обведення contextual.popup.border; `Image` (Image/Single 100, lock ratio) + `Label` (text/md-stronger, semantic.text.default-invert.heading, Fill).

Прив'язки: змінні `Product` + plugin data `tokens` на шарах; іконки close перефарбовано після swap (`semantic.link.default.default` / `semantic.text.default-invert.heading`). Перевірено превʼю в MB і XON.

### Що змінено проти оригіналів (на перевірку)
- `Popup web` `Banner=XS…XL` → `Size`; `device=mob|desktop` → `Breakpoint`; `type=dialog` прибрано (діалог — це вміст слота); `normal-with-bottom` → Boolean `Footer`; `with banner` → `Banner`.
- Оверлей усередині компонента, як у збірці команди (у старому `Popup` оверлея не було).
- Заливка на `Window` один раз (а не на `Popup` і `Bottom-content` окремо); `Line` → `Handle`; `Close Header` → той самий `Close` (у Banner=True кнопка стоїть над банером).
- Колір тексту банера — `semantic.text.default-invert.heading` напряму (правило 6), замість `contextual.popup.banner.color`.

## 4. Бракує токенів (наступний етап, JSON-handoff)
- `popup.width.xs|sm|md|lg|xl` (420/560/640/800/1200) — ширини стоять значеннями.
- `popup.banner.padding-right` (40), `border-radius.popup.banner` (24), `popup.banner.gap-v` (−20, нахлест вікна на банер), `popup.banner.image-size` (100).
- `popup.handle.*` (64×4, радіус 4); `border-radius.popup.*` за правилом alias-only — ок; `contextual.popup.fill` у XON посилається на `core.brand-60.900` (core, не alias) і градієнт банера — на `core.*`.
- `contextual.popup.slate.1|2` — на core (`core.brand-60.a15|a10`).

## 5. Відкриті питання
1. `Popup/Dialog` (вміст-діалог: Status icon + заголовок + текст + кнопки, 21+ інстанс) — зібрати як під-компонент? Заголовок на MrBet Black — конектор не може створити такий текст; потрібно, щоб Андрей переніс `dialog modal content` або дав доступ до шрифту.
2. Скрол-бар: у `Popup web` був увімкнений за замовчуванням, у старому — вимкнений. Зараз default false.
3. Міграція 190+ інстансів (старий `Popup` 130 + `Popup mob` 60) на новий набір — окремою задачею після погодження.
4. Продуктові вмісти (Achievements, Lootboxes, Wheel, Profile …) — лишаються продуктовими (правило 11), у ДС лише оболонка.

## 6. 2026-10-28 — значення Size малими, порядок xl → xs
Набір перезібрано (`79607:19185`, інстансів у старого не було): `Size = xl | lg | md | sm | xs | full`, варіанти в наборі рядами від `xl` зверху до `xs`, мобільний `full` унизу. Правило — `naming.md`.

## 7. 2026-10-28 — Drawer окремим компонентом (рішення Андрея)
Мобільний варіант — це не розмір, а інший тип вікна (виїжджає знизу), тому `Size=full` і `Breakpoint` прибрано.
- **`Popup`** (`79615:19151`) — модалка: `Size = xl | lg | md | sm | xs` × `Banner = False | True` (10v); Boolean `Close`, `Footer`, `Scrollbar`; слоти `Content`, `Footer content`. Вікно по центру оверлея 1280×800.
- **`Drawer`** (`79615:19236`) — `Banner = False | True` (2v); ті самі Boolean і слоти + `Handle`. Корінь 360×640, вікно притиснуте донизу, Fill по ширині, радіус `border-radius.popup.mobile.*` (низ 0).
- Section `Popup`: `Popup` → `Drawer` → `Popup/Banner` (спільний під-компонент).
Попередні описи `Breakpoint` / `full` у розділах 3 і 6 застаріли.

- 2026-10-28: службовий шар `Container` (банер + вікно) перейменовано на `Wrapper` у `Popup` і `Drawer` (правило `naming.md`).
- 2026-10-28: шар вікна `Window` → `Wrapper` у `Popup` і `Drawer` (12 варіантів). У варіантах з банером: `Wrapper` (банер + вікно) > `Popup/Banner`, `Wrapper` (вікно) > `Body`, `Footer`.

## 8. 2026-10-28 — структура після правок Андрея (знімок, read-only)
- Section **`Modal`** (`79597:7290`, x 0) → набір `Popup` (`79615:19151`, Size × Banner, 10v) — назва набору ще `Popup`.
- Section **`Drawer`** (`79637:24996`, x 3368) → набір `Drawer` (`79637:25109`, Banner, 2v; попередній `79615:19236` — сирота без сторінки, 0 інстансів).
- **`Modal/Banner`** (`79597:7291`, перейменовано з `Popup/Banner`) — на рівні сторінки (x 4896), поза Section; 24 інстанси (обидва набори).
- Section команди `Popup` (`77819:294697`) видалено → `Popup mob` (`77814:6477`, **60 інстансів**) і `Popup web` (`77818:294521`, 1) стали мейнами-сиротами без сторінки.
- Originals (5 Section) — праворуч, x 8951.
- 2026-10-28: Section команди `Popup` відновлено (`79642:18972`, x −2720, сіра `#808080`) — `Popup mob` (60 інст.) і `Popup web` (1) повернуто з сиріт. Живі інстанси на нові `Popup`/`Drawer` ще не переведено — окрема задача.

## 9. 2026-10-28 — спроба міграції і відкат
- Набір у Section `Modal` перейменовано на **`Modal`**, `Modal/Banner` — у тій самій Section під ним.
- Мігровано 18 інстансів на сторінці `↳ Popup`; у вкладених у мейни (`Registration popup`, `Cashbox mobile popup + overlay`) вміст перестав відображатись → **усе повернуто** swap-ом на старі варіанти `Popup` (вміст відновився), розміри/футери звірено з оригіналами. `Cashbox mobile popup` перезібрано: старий `Popup` mob/dialog + `Cashbox bonus content` (Mobile), закриття вимкнено — **кнопку Activate звірити** (стан міг бути змінений в оригіналі).
- Boolean `Overlay` (додавався для міграції) прибрано. Старий `Popup`: 138 інстансів; `Modal`: 1 (інстанс Андрея на сторінці), `Drawer`: 0.
- Пастки — `working-agreements.md` §8.

## 10. 2026-10-28 — `Popup mob` / `Popup web` переведено на `Drawer` / `Modal`, Section видалено
- 61 інстанс (усі на верхньому рівні сторінок): ширина ≤ 420 → `Drawer` (44), ширше → `Modal` з розміром за шириною (16: 640 → md, 768 → lg з шириною 800), `Popup web` LG → `Modal` lg (1).
- Swap з тимчасовим перейменуванням слотів (`content` / `Bottom-content`) — вміст збережено (Data refinement звірено «до/після» — ідентично). Boolean: `Bottom-content2` → `Footer`, `Line` → `Handle`, `Scrollbar`. Розмір і sizing кореня — як у старого інстансу; `Modal` з `Popup mob` — padding 0, вікно знизу (MAX), як було.
- 59 з 61 — **порожні заготовки** (слоти пусті): дефолтний `Label`/кнопку прибрано. Вікно в них нижче, ніж було (старий слот мав фіксовані 175 px; min-height в інстансі Figma не перевизначає) — з вмістом висота стане правильною.
- `Popup mob` і `Popup web` — 0 інстансів → Section `Popup` (`79642:18972`) видалено. Старий `Popup` (Originals, 138 інстансів) — не чіпали.
- 2026-10-28: **кнопки `Close` → `Button/Text`** (`46536:453369`) за еталоном Андрея (`79615:19013`): без банера `State=Default`, з банером `State=Inverted`; `Label` off, `Icon ➡️` off, `⬅️ Icon` on, `↳ 💠 Component` = `close`. Старі `Button/Link/Default|Inverted/true` (variant missing) прибрано з усіх 12 варіантів `Modal` / `Drawer`. Колір іконки після swap перепривʼязано: Default — `semantic.link.default.default`, Inverted — `semantic.text.default-invert.heading`.
- 2026-10-28: **два екшени у футері** (запит Андрея). `Footer` > `Actions` (HORIZONTAL, gap `spacing.400`) > `Secondary` (Button Tertiary lg, Fill) + `Primary` (Button Primary lg, Fill), далі слот `Footer content` (порожній за замовчуванням — для нестандартних футерів). Boolean: `Actions` (on) — показати рядок кнопок, `Secondary` (off) — друга кнопка. У 61 мігрованого інстансу `Actions` вимкнено, щоб макети не змінились. У `Modal` властивість закриття Андрей перейменував на `Closable`; у `Drawer` — ще `Close`.
- 2026-10-28: `Actions` перенесено **всередину слота `Footer content`** — це його вміст за замовчуванням (Boolean `Actions` / `Secondary` прив'язані й працюють). Структура: `Footer` > `Footer content` (SLOT) > `Actions` > `Secondary` + `Primary`. Мігровані інстанси не змінились (59 з порожнім футером, 2 з власним вмістом Data refinement).
- 2026-10-28: **`Body` і `Footer` об'єднано** (запит Андрея): `Wrapper` > `Body` (VERTICAL, padding `popup.padding.top / horizontal / bottom`, gap `spacing.600` = 24) > `Content` (SLOT) → `Divider` (інстанс `Divider` Variant=Secondary, Fill) → `Footer content` (SLOT). Boolean `Divider` (on) — лінія; `Footer` тепер керує видимістю слота `Footer content`. Відстань контент → кнопки та сама, що й була (24 + 1 + 24 ≈ 32 + 16), але лінія тепер з відступами 16 по боках, а не на всю ширину. Окремий фрейм `Footer` і його токени `popup.padding.footer.*` більше не використовуються. Мігровані інстанси перевірено: 59 заготовок порожні, Data refinement зі своїм вмістом.
- 2026-10-28: **слот `Footer content` прибрано** (рішення Андрея): `Body` > `Content` (SLOT) → `Divider` → `Actions` (звичайний шар: `Secondary` + `Primary`). Властивості `Footer` і `Footer content` видалено, їхню роль виконує Boolean `Actions`. Поточні властивості — `Modal`: Closable, Scrollbar, Content, Actions, Secondary, Divider, Size, Banner; `Drawer`: Close, Scrollbar, Handle, Content, Actions, Secondary, Divider, Banner. Data refinement (власний футер = одна Primary) → `Actions` on; 59 заготовок — `Actions` off.

## 11. Синхронізація 2026-10-28 (перед етапом токенів) — знімок структури
Сторінка перейменована: `↳ Modal/Drawer - Андрей`. Section `Modal` (`Modal` 10v), Section `Drawer` (`Drawer` 2v); `Modal/Banner` (`79597:7291`) — на рівні сторінки, поза Section.

**Властивості**
- `Modal`: `Closable` (on), `Scrollbar` (off), `Content` (slot), `Actions` (on), `↳ Secondary` (off), `Divider` (on), `Size = xl|lg|md|sm|xs`, `Banner = False|True`.
- `Drawer`: `Closable` (on), `Scrollbar` (off), `Handle` (off), `Content` (slot), `Actions` (on), ` ↳ Secondary` (off — **з пробілом на початку**), `Divider` (on), `Banner = False|True`.

**Анатомія** (однакова для обох; Drawer — корінь без падінгів, вікно знизу, Fill)
```
<variant> (overlay)  fill contextual.overlay · Modal: padding popup.layout.padding
└─ Wrapper (вікно)  radius border-radius.popup.{desktop|mobile}.* · fill contextual.popup.fill · width 1200/800/640/560/420 (без токена)
    ├─ Body  padding popup.padding.top / horizontal / bottom · gap spacing.600
    │   ├─ Content (SLOT) — дефолт Label (text/md, semantic.text.default.primary)
    │   ├─ Divider (інстанс Divider/Variant=Secondary)        ← Divider
    │   └─ Actions  gap spacing.400                           ← Actions
    │       ├─ Secondary (Button Tertiary lg)                 ← ↳ Secondary
    │       └─ Primary (Button Primary lg, Fill)
    ├─ Scrollbar (abs 8 / 56)                                  ← Scrollbar
    ├─ Handle 64×4 r4 semantic.background.2 (лише Drawer)      ← Handle
    └─ Close (Button/Text Default, abs 8 / 8)                  ← Closable
Banner=True: Wrapper (gap −20) > Modal/Banner + Wrapper(вікно); Close (Button/Text Inverted) — над банером.
Modal/Banner: gap spacing.400 · padding-right 40 · radius 24/24/0/0 · fill градієнт core/grey/700 → core/brand-60/600 · stroke contextual.popup.border · Image 100 · Label text/md-stronger semantic.text.default-invert.heading
```

### План токенів (на погодження)
Простір імен за назвами компонентів: `modal.*`, `drawer.*` (правило «токени ↔ властивості»), замість `popup.*`.
| Що | Зараз | Пропозиція |
|---|---|---|
| оверлей | `contextual.overlay` | `contextual.modal.overlay`, `contextual.drawer.overlay` → `{semantic…}` (alias для `core.grey.a50` — бракує) |
| відступ оверлея | `popup.layout.padding` | `modal.padding` |
| ширини | — | `modal.width.xl|lg|md|sm|xs` = 1200/800/640/560/420 |
| заливка вікна | `contextual.popup.fill` (XON → `core.brand-60.900`, не alias) | `contextual.modal.fill`, `contextual.drawer.fill` → alias |
| радіус вікна | `border-radius.popup.desktop|mobile.*` | `border-radius.modal` (одне значення), `border-radius.drawer.top` (низ 0 — без токена) |
| падінги Body | `popup.padding.top|horizontal|bottom` (40/16/32) | `modal.body.padding-top`, `modal.body.padding-h`, `modal.body.padding-bottom` (асиметричні) — те саме для `drawer` |
| gap Body | `spacing.600` напряму | `modal.body.gap-v` |
| gap Actions | `spacing.400` напряму | `modal.actions.gap` |
| банер | core-градієнт, 40, 24, 100, −20 | `contextual.modal.banner.fill` (alias), `modal.banner.padding-right`, `border-radius.modal.banner`, `modal.banner.image-size`, `modal.banner.overlap` |
| handle | `semantic.background.2`, 64×4 r4 | `contextual.drawer.handle.fill`, `drawer.handle.width|height`, `border-radius.drawer.handle` |
| close | abs 8/8 | `modal.close.offset` (питання — чи токенізувати позицію) |
Видалити після переходу: `popup.padding.footer.*`, `contextual.popup.banner.color`, `contextual.popup.border` (якщо ніде не використовується), `popup.*`, `border-radius.popup.*` — лише після перевірки використань у файлі.

## 12. 2026-10-28 — `Layout = Default | Sidebar` — спробували й відкотили
Пробували в `Modal` варіант `Layout=Sidebar` (каса: сайдбар 270 + контент, за `Payment popup` `48364:83398`). Андрей вирішив, що поки не потрібно — варіанти, слот `Sidebar` і властивість `Layout` прибрано, `Modal` знову 10v (`Size` × `Banner`), 17 інстансів на місці. Тип «модалка з сайдбаром» (каса, профіль) лишається в Originals 5 як продуктовий.

## 13. 2026-10-28 — назад до Footer + Divider на всю ширину (рішення Андрея)
`Wrapper` > `Body` (padding `popup.padding.top / horizontal / bottom` = 40/16/32, gap 0) > `Content` (SLOT) → `Divider` (інстанс Divider/Variant=Secondary, **на всю ширину вікна**, ← `Divider`) → `Footer` (padding `popup.padding.footer.top / horizontal / bottom` = 16/16/32, ← `Actions`) > `Actions` (HORIZONTAL, gap `spacing.400`, кнопки по центру) > `Secondary` (← `↳ Secondary`) + `Primary`.
Boolean `Actions` тепер ховає весь `Footer`. Інстанси: 59 заготовок — `Actions` off; Data refinement ×2 — `Actions` on, одна Primary по центру.
- 2026-10-28: **обгортку `Footer` прибрано** — у ній був лише `Actions`. Тепер `Wrapper` > `Body` → `Divider` → `Actions` (падінги `popup.padding.footer.top / horizontal / bottom` = 16/16/32, gap `spacing.400`, кнопки по центру, ← `Actions`). Помаранчева «підкладка» під Primary — тінь кнопки, обрізана фреймом (`clipsContent` за замовчуванням у створених фреймах) → `Actions`, `Body` без обрізання. **Пастка:** `figma.createFrame()` вмикає `clipsContent` — для фреймів з кнопками/тінями вимикати.

## 14. Токени — MB (2026-10-29)
Вхід: свіжі MB alias + component від Андрея (diff проти експорту 27.10: alias +9/~3, component +301/−66/~38 — зміни колег; `popup.*` / `contextual.popup.*` без змін). Фрагменти — `tokens/modal-drawer.mb.{alias,component}.json`.
- **alias +3:** `semantic.background.overlay` = `{core.grey.a50}`, `semantic.gradients.12` = linear-gradient(90deg, grey.700 → brand-60.600) (банер), `border-radius.global.xl` = `{border-radius.core.600}` (24).
- **component +38:** `modal.padding`, `modal.width.xl…xs`, `modal.body.padding-t|h|b` (40 / spacing.400 / spacing.800), `modal.actions.gap|padding-t|h|b`, `modal.banner.gap|gap-v(−20)|padding-r(40)|image-size(100)`; `drawer.body.*`, `drawer.actions.*`, `drawer.banner.gap-v`, `drawer.handle.width|height` (64 / 4); `border-radius.modal.wrapper|banner`, `border-radius.drawer.wrapper|handle`; `contextual.modal.overlay|fill|banner.fill|banner.border`, `contextual.drawer.overlay|fill|handle-fill`.
- Неймінг падінгів — `padding-t` / `padding-b` / `padding-h` / `padding-r`, як у свіжих токенах команди (lootbox, achievements, lottery). Старі `popup.*`, `border-radius.popup.*`, `contextual.popup.*`, `contextual.overlay` не чіпали — ними користується старий `Popup` (138 інст.) і продуктові попапи.
- Помічено в diff (не наше): з component зникли `anchor.*`, `border-radius.anchor.item`, `contextual.anchor.*` — Section `Anchor` прив'язаний до них.

## 15. Токени — XON (2026-10-29)
Ті самі ключі, що в MB (alias +3, component +38), фрагменти — `tokens/modal-drawer.xon.*.json`. Відмінності від MB:
- `contextual.modal.fill` / `contextual.drawer.fill` = `{semantic.background.2}` — у XON alias це `core.brand-60.600` = brand-preset.tertiary, той самий колір, що був у `contextual.popup.fill` (`core.brand-60.900` → теж brand-preset.tertiary), але тепер через alias.
- `border-radius.global.xl` = `{border-radius.core.300}` (12) — у XON усі global-радіуси 12; **візуальна зміна:** верхні кути банера в XON 24 → 12.
- **Відкрите:** `contextual.drawer.handle-fill` = `semantic.background.2` в XON збігається з заливкою вікна → смужка невидима (як було й раніше). Потрібне рішення команди (напр. `semantic.border.default.default`).
