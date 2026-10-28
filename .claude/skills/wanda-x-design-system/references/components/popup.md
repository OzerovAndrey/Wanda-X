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
