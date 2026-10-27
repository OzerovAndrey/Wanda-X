# Table — інвентаризація та план універсального компонента

Статус: **інвентаризація (2026-10-23), збірку не розпочато** — чекає рішень Андрея (розділ «Питання»).

**2026-10-23 — оригінали зібрано на сторінці `↳ Table -`** (на запит Андрея) у 4 Section з підписами (назва · звідки · що це · node): `79045:532` 1. Лідерборди, `79045:546` 2. Транзакції та платежі, `79045:557` 3. Історія з розкриттям рядка, `79045:574` 4. Таблиці з колонками. Мейни перенесено (інстанси в макетах лишились прив'язаними); фрейми `Tables` з FAQ — копії. 6 наборів зі шрифтом **MrBet Black** конектор перенести не може (шрифт недоступний) — на їхньому місці червона пунктирна рамка, переносить Андрей: `Leaders`, `Hall-of-fame / Table` (лежить поверх рамки, поза Section), `Bets history content`, `Bets history content mob`, `Time limit history`, `content limit mob`. Не перенесено: `Leaders/Multipliers` (картки), `time limit history` 56×56 (ілюстрація), сироти `cell igame additional` / `thead cell igame additional` (мейн без сторінки).
Сторінка: `↳ Table -` (`78083:324361`).

## 1. Що лежить на сторінці `↳ Table -`
Лише продуктові набори (правило 11 — не ДС), жодного базового Table:

| Набір | Node | Варіанти | Що це |
|---|---|---|---|
| `Hall-of-fame / Table` | `48681:1133800` | `Type=Mobile(320-767) \| Desktop&Tablet(768-1920)` | хедер колонок + 9 рядків-карток (місце, гравець, статус-медаль, гра з thumb, сума), рядок поточного гравця підсвічений |
| `[M] Hall-of-fame / Player-number` | `48912:27815` | `Device × Type`, Boolean talisman | рядок лідерборду |
| `Hall-of-fame / Player-number-states` | `48912:28700` | `State=Default \| Current user` × `Device` | стани рядка |
| `transactions table item` | `48364:61133` | `state=hover \| default` | рядок-картка транзакції: шеврон, іконка, 2-рядковий текст, статус, сума + метод, kebab |
| `transactions table group` | `48539:44574` | `Property 1=Variant2` | розкрита група: ID, статус, сума, kebab + підрядок |
| `Welcome_bonus_row` | `33250:316385` | `Type=default \| bottom` | 2 колонки, розділювач між рядками |
| `Welcome_bonus_column` | `33250:316359` | — | заголовок + хедер колонок `Deposit / Bonus` + 3 рядки |

## 2. Таблиці поза сторінкою Table (не зібрані)
| Де | Набір / фрейм | Node | Тип |
|---|---|---|---|
| Tournaments + / Lottery + / Races + | `tourmanents / lottery leader table` | `68537:202555` | лідерборд на темній плашці, смугасті рядки, місце-медаль, поточний гравець — акцент |
| Tournaments + | `Table Header Lottery` (`Device=mobile\|desktop`) | `67722:62201` | хедер колонок `№ / Player / Sum` |
| Tournaments + | ` Tournaments / players, places` (`place=gold\|silver\|bronze`, `device`) | `67718:61873` | рядки топ-3 |
| Profile + | `Time limit history` / `table row` | `32979:1001414`, `32979:1001665` | 3 колонки без розділювачів, комірки 2-рядкові; empty state |
| Profile + | `Loyalty points history item` / `table item points exchange history` | `32979:1004457`, `32979:1004591` | рядок з розділювачем, шеврон, **розкривається** панеллю деталей |
| Profile + | `Betting history item`, `bet history mob item`, `Bets history content` | `32979:1004232`, `32979:1004742`, `34118:949048` | рядок з розкриттям (express), кнопка Cashout, статус Win/Loss |
| Cashbox (s2p) | `Payment history item` (8v), `transactions table group item mobile` | `48642:130910`, `48655:56422` | те саме, що `transactions table *` (дубль) |
| FAQ, Rules, Statistics + | фрейм `Tables`, `Accordion-content / Table-head` | `49705:48928`, `49622:53929` | класична сітка з хедером і розділювачами (4 колонки; та 2 колонки з медаллю) |
| Ingame + | `table row` (2v), `cell igame additional`, `thead cell igame additional` | `63335:462804`, `30827:106137`, `30827:106138` | рядок лідерборду в грі; комірки й хедер — сироти (головний компонент без сторінки) |
| Wheel of Fortune + | `spin history` | `61849:5540` | рядок історії на темній плашці |
| Achievements + | `Achivments table` | `68586:48661` | **не таблиця** (картка) — виключити |

## 3. Спільна анатомія (кандидат на універсальний компонент)
- **`Table`** — контейнер: необов'язковий `Table/Header` + SLOT `Rows` (preferred — `Table/Row`).
- **`Table/Header`** — рядок назв колонок (текст secondary, sm).
- **`Table/Row`** — горизонтальний рядок комірок. Варіанти, що реально зустрічаються:
  - `Style = Card | Divider | Plain` (картка з заливкою і радіусом та gap між рядками / лінія між рядками / без меж);
  - `State = Default | Hover | Current` (Current — рядок поточного гравця) + `Open` для рядків з деталями (панель під рядком — слот).
- **`Table/Cell`** — комірка; типи контенту: `Text`, `Text + Subtext` (2 рядки, мобільне згортання колонок), `Place` (номер / медаль), `Icon + Text`, `Thumb + Text`, `Status`, `Amount` (праворуч), `Action` (kebab / кнопка), `Chevron`.
- Мобільна версія = ті самі комірки в режимі `Text + Subtext`, без окремих Device-варіантів (`naming.md` → пристрій ≠ варіант).

## 4. Питання до Андрея (блокують збірку)
1. Сторінка Table містить не всі варіанти — переносимо на неї знайдені в п. 2 (у Section `Originals`) чи збираємо універсальний компонент одразу з усіх джерел?
2. Обсяг: які з типів п. 2 входять у Table, а які лишаються окремими (Betting history з Cashout, Transactions з групами — скоріше `List`/Accordion-патерн)?
3. Inverted: лідерборд турнірів і spin history стоять на темній плашці — робимо `Inverted` у `Table/Row` / `Table/Header`?
4. Розкриття рядка (`State=Open` + панель деталей) — частина `Table/Row` чи окремий компонент?
</content>
</invoke>

## 5. План збірки (рішення 2026-10-23)
Три різні таблиці за логікою, бо поводяться по-різному:
1. **Сітка** (`Table`) — хедер + рядки з текстовими комірками. Джерела: Time limit history, Welcome bonus, FAQ/Rules Tables.
2. **Лідерборд** — місце-медаль, поточний гравець, картки / смуги на темному. Джерела: Hall of fame, Tournaments/Lottery, Leaders, Ingame, spin history.
3. **Історія з розкриттям** — шеврон, іконка, статус, сума, дії, `State=Open`. Джерела: transactions/Payment history, Betting history, Loyalty/points.
`Table/Cell` — спільна комірка для всіх трьох.

## 6. Етап 1 — Сітка (зібрано 2026-10-23)
Section `Table` (`79056:3415`, сіра) праворуч від білих оригіналів, на рівні групи 4.

| Компонент | Node | Властивості | Анатомія |
|---|---|---|---|
| `Table` | `79056:291816` | SLOT `Head` (preferred `Table/Head/Cell`), SLOT `Rows` (preferred `Table/Row`), Boolean `Show head` | VERTICAL 676 FIXED; `Head`: HORIZONTAL, height `size/500` (40), gap `spacing/400`, 3 комірки FILL; `Rows`: VERTICAL gap 0, 3 рядки STRETCH |
| `Table/Row` | `79056:291751` | `Size = md \| sm` × `Divider = True \| False`; SLOT `Cells` (preferred `Table/Cell`) | HORIZONTAL 676; padding-v md `spacing/400` (16) / sm `spacing/200` (8), padding-h 0; Divider — нижнє обведення 1 px `semantic/divider/default/primary`; `Cells` gap `spacing/400`, 3 комірки FILL |
| `Table/Cell` | `79056:3444` | `Size = md \| sm` × `Align = Left \| Right`; Boolean `⬅️ Icon` (off), swap `↳ 💠 Icon` (plus, Static — Icons), Boolean `Subtext` (off) | HORIZONTAL FILL, gap `spacing/200`; `Icon` 24 (`size/300` на height, lock ratio, `semantic/icon/default/primary`) + `Content` (VERTICAL): `Label` md `text/md-strong` / sm `text/sm-strong`, `semantic/text/default/primary`; `Subtext` md `text/sm-strong` / sm `text/sm`, `semantic/text/default/secondary`. Align Right — текст праворуч, іконка після тексту |
| `Table/Head/Cell` | `79056:3449` | `Align = Left \| Right` | `Label` `text/sm-strong`, `semantic/text/default/secondary` |

- Перевірено превʼю (Time limit history з інстансу `Table`) у MB і XON — читається в обох.
- Відступи / розміри прив'язані до наявних змінних `Product` + plugin data `tokens`; **компонентні токени `table.*` — наступний етап** (Андрей дає JSON).
- Відхилення від оригіналів (рішення на перевірку): перша колонка Time limit (`$1456.77`, `text/lg-strong`, `semantic/text/brand/primary`) — змінюється в інстансі вручну; Rules head мав gap 48 між колонками — у новій сітці колонки FILL з gap 16; рядки без вертикальних падінгів неможливі (2-рядкові комірки) — padding-v токеном за `Size`.
- Inverted у сітці не потрібен (темного контексту в джерелах немає).

## 7. Етап 2 — Лідерборд (зібрано 2026-10-23)
Section `Leaderboard` (`79075:3513`, сіра) праворуч від білих оригіналів, на рівні групи 1.

| Компонент | Node | Властивості | Анатомія |
|---|---|---|---|
| `Leaderboard` | `79075:3926` | `Style = Card \| Striped`; SLOT `Head` (preferred `Table/Head/Cell`), SLOT `Rows` (preferred `Leaderboard/Row`), Boolean `Show head` | VERTICAL 676. **Card** (Hall of fame, Ingame): без плашки, gap `spacing/200` між Head і Rows та між рядками; Head height `size/500`. **Striped** (Tournaments, Lottery, Leaders): плашка `semantic/background/slate-1`, радіус 16, clip; Head height `size/600`, fill `semantic/background/slate-for-cards`, комірки Inverted; рядки gap 0, чергуються `Plain` / `Fill` |
| `Leaderboard/Row` | `79075:3526` | `Style = Card \| Fill \| Plain` × `State = Default \| Selected` × `Inverted = False \| True` (12v); SLOT `Cells` (preferred `Table/Cell`) | HORIZONTAL 676, padding-h `spacing/400`, padding-v `spacing/200`, gap `spacing/400`. Fill: Card — `semantic/fill/subtle` / Inverted `semantic/fill/subtle-invert`, радіус 8; Fill — `semantic/background/slate-for-cards`; Plain — без заливки; **Selected** (поточний гравець) — `semantic/fill/active` для всіх стилів. Дефолт: 3 комірки md (перша з іконкою-місцем, третя Align=Right) |

- **`Table/Cell` і `Table/Head/Cell` отримали `Inverted = False | True`** — текст `semantic/text/default-invert/*`, іконка `semantic/text/default-invert/primary` (групи icon-invert немає). Сітка лишається на `Inverted=False`.
- Місце: в іконку першої комірки swap-ом ставиться `Place` (медаль, **чужа бібліотека**, key `a1aa8a61…`) або номер `List/Bullet` (як у Hall of fame). Місце розміром 24 (height токен іконки); Tournaments desktop мав 32.
- Перевірено превʼю (обидва стилі, MB і XON).
- **Бракує токенів** (на етап токенів): радіус 8 (рядок Card) і 16 (плашка Striped) — у `border-radius.global.*` є лише 4/6/12/20; стоять значення без токена.
- Відхилення від оригіналів: Lottery рядок мав падінги 12/6 → 16/8; Hall of fame — колонки з gap 48 і thumb гри 48 → колонки FILL, гра через іконку/ручну заміну; поточний гравець у Lottery мав помаранчевий текст — тепер підсвічення заливкою `Selected`, текст змінюється вручну; Ingame активний рядок `#9f87cf` (hex) → `semantic/fill/active`; spin history (чужі змінні) → `Style=Card, Inverted=True`.
- Device-варіанти (`Mobile(320-767)` / `Desktop`) не робимо: мобільна версія — та сама таблиця вужча, 2-рядкові комірки через `Subtext`.

## 8. Image у комірці (2026-10-26)
- `Table/Cell` + Boolean `⬅️ Image` (off) і swap `↳ 💠 Image` (дефолт `Image/Single` Slot=False; preferred — `Image/Single` і медалі `Place`, чужа бібліотека, set key `1a26f576…`). Шар `Image` стоїть між `Icon` і `Content` (Left) / між `Content` і `Icon` (Right). Розмір — токен на height: md `size/400` (32), sm `size/300` (24), lock ratio. Медалі 1–3 місць — swap на `Place` place=1|2|3.
- Перевірено превʼю (Striped лідерборд, медалі 1–3) — медалі на місці, 32×32.

### Знайдено 2026-10-26: токени змінились після експорту 22.10
- Змінної `semantic/background/slate-for-cards` у Figma більше немає (Export видалив) → мертві прив'язки: плашка `Leaderboard` Striped, `Head`, `Leaderboard/Row` Style=Fill (обидва Inverted).
- `semantic/background/slate-1` у MB тепер `core/grey/100a10` (світлий 10 %), в експорті 22.10 — `core.grey.700`.
- Нічого не перепривʼязано (не підміняємо без погодження). Потрібен свіжий архів JSON з Token Studio.

## 9. Звірка групи 1 з `Leaderboard` (2026-10-26)
| Оригінал | Покрито | Як |
|---|---|---|
| Leaders | ✅ | Striped; № — комірка з номером або медаль (`Image` → `Place`); поточний гравець — `Selected` |
| lottery leader table / header / players, places | ✅ | Striped + `Table/Head/Cell`; mobile — `Subtext` (нік + квиток, сума + приз) |
| Hall-of-fame / Table, Table-head, Player-number(-states) | ✅ | Card; місце — swap іконки на `List/Bullet`; статус — `Image` (Level) + Label; Current user — `Selected` |
| Ingame table row | ✅ | Card, комірки `sm` + `Image` 24 → висота рядка 40, як в оригіналі |
| spin history | ✅ | Card Inverted; дата/час — `Subtext`, сектор / 3D — `Image` |
Вручну в інстансі (не варіанти): помаранчевий текст поточного гравця (`semantic/text/brand/primary`), жовтий множник `X.2` (колір частини тексту), сума `lg-stronger`, колір посилання назви гри, thumb гри 48 (override висоти Image), заголовок таблиці (`Heading`) і `Show more` (`Button`) — поза компонентом.

## 10. `Table/Cell` — доповнення (2026-10-26)
- Єдиний порядок шарів для обох Align: `Icon` → `Image` → `Content` → `Icon right`; Align змінює лише вирівнювання тексту і групи.
- Нове: Boolean `Icon ➡️` + swap `↳ 💠 Icon right` (дефолт `plus`; для ID — `copy`). Щоб іконка стала одразу за текстом, в інстансі комірці і `Content` ставиться Hug, тексту — auto width (так у `History/Details`).
- **`Table/Cell — Slot`** (`79214:293697`, `Align = Left | Right`): SLOT `Content` (VERTICAL, gap `spacing/200`, вирівнювання за Align), preferred `Status/Badge`, `Button`, `Button/Text`. Для статусів, лічильників статусів, kebab, сума + Cashout стовпчиком.

## 11. Етап 3 — Історія з розкриттям (зібрано 2026-10-26)
Section `History` (`79215:4197`, сіра) праворуч від білих оригіналів груп 2–3.

| Компонент | Node | Властивості | Анатомія |
|---|---|---|---|
| `History` | `79215:294208` | `Style = Card \| Divider`; SLOT `Head cells` (preferred `Table/Head/Cell`), SLOT `Rows` (preferred `History/Row`); Boolean `Show head`, `Chevron space` | VERTICAL 676; Card — gap `spacing/100` між рядками (як Payment history), Divider — 0. `Head`: padding-v `spacing/100`, нижня лінія `semantic/divider/default/primary`, `Chevron space` 24 (`size/300` на width) + gap `spacing/200` — колонки хедера стоять рівно над комірками рядків; Card — padding-l `spacing/200`, padding-r `spacing/400` як у рядка |
| `History/Row` | `79215:4246` | `Style = Card \| Divider` × `State = Default \| Hover \| Open`; Boolean `Chevron`; SLOT `Cells` (preferred `Table/Cell`, `Table/Cell — Slot`); SLOT `Details` лише в Open (preferred `History/Details`, `History/Row`) | VERTICAL 676, padding-v `spacing/200`, gap `spacing/200`. Card: padding-l `spacing/200`, padding-r `spacing/400`, радіус `border-radius/global/xs`, fill `semantic/fill/subtle` / Hover `semantic/fill/hover`. Divider: без падінгів по боках, нижня лінія `semantic/divider/default/primary`, Hover `semantic/fill/hover`. `Main`: `Chevron` (chevron-right / Open chevron-down, Static, 24 `size/300`, `semantic/icon/default/tertiary`) + `Cells` (gap `spacing/400`). `Details`: padding-l `spacing/800` (під текстом), gap `spacing/200`. Дефолт: комірка з іконкою + Subtext, статус, сума + Subtext |
| `History/Details` | `79215:4198` | SLOT `Content` (preferred `Table/Cell`, `Table/Cell — Slot`, `Table/Row`) | VERTICAL, padding `spacing/300` / `spacing/400`, gap `spacing/100`, fill `semantic/fill/subtle`, радіус 8 (немає токена). Дефолт: `ID: …` + copy і рядок опису |

Як збираються оригінали:
- **transactions table item / Payment history item** — `Style=Card`; статус — `Cell — Slot` зі `Status`; kebab — `Cell — Slot` з `Button/Text` або іконкою.
- **transactions table group / complicated** — у `Details` кладуться вкладені `History/Row` (без шеврона), лічильники статусів — `Status payment history{several}` у `Cell — Slot`.
- **Betting history (desktop/mobile)** — Card, 5 колонок; сума + Cashout або Win/Loss (`type bet Statuses`) стовпчиком у `Cell — Slot`; Express Open — `History/Details` з `Table/Row` (подія + коефіцієнт).
- **Loyalty points / points exchange history** — `Style=Divider`; деталі — `History/Details` (ID + copy, Bonus/Status/Exchange rate).
- **Контейнери** (Payment history content/mobile, Bets history content, заголовок, таби, Filter, empty state) — композиція в лейауті: `Heading` + `Tabs`/`Filter button` + `History` + `Empty`. Окремих компонентів-контейнерів не робимо.
- Device-варіантів немає: mobile — та сама `History`, вужча, 2-рядкові комірки.

Перевірено превʼю: Card і Divider (MB, XON), Express Open з Cashout і картками подій (MB).

Відхилення від оригіналів (на перевірку):
- Картка рядка була `semantic/background/slate-2` (білий в обох брендах — у XON білий текст на білому) → `semantic/fill/subtle`.
- Панель деталей була `contextual/popup/slate/2` (чужий компонентний токен) → `semantic/fill/subtle`.
- Іконка в колі 40 (Loyalty) → `Image` 32 або іконка 24; copy 20 → 24; відступи між колонками 24–56 → колонки FILL з gap 16 (ширини колонок можна задати в інстансі).
- Опис під рядком транзакції (на всю ширину) — `Details` з `Table/Cell sm`.
- Inverted не потрібен (темного контексту немає).

## 12. Доробки групи 4 (2026-10-26) — підбірка покрита повністю
- **`Table` перескладено набором** (`79220:4707`, старий `79056:291816` видалено — 0 інстансів): `Style = Plain | Filled`; слоти `Head`, `Rows`, Boolean `Show head` — як раніше.
  - **Filled** (Welcome bonus): плашка `contextual/table/fill`, радіус `border-radius/global/md` (12), clip; `Head` з заливкою `contextual/table/header` і padding-h `spacing/400`; `Rows` padding-h `spacing/400`. Токени `contextual/table/*` уже були в `Product` (обидва зараз alias на одну змінну — перевірити на етапі токенів).
  - Хедер Welcome bonus в оригіналі `text/md-strong` heading, у нас `Table/Head/Cell` `text/sm-strong` secondary — ручний override або питання.
- **`Table/Row` + `Direction = Horizontal | Vertical`** (8v): Vertical — комірки стовпчиком, gap `spacing/200`, ширина 328 (Time limit history mobile, key-value рядки).
- Комірка з кількома блоками «заголовок + опис» (Welcome bonus) — `Table/Cell — Slot` з кількома `Table/Cell` стовпчиком.
- Перевірено превʼю: Welcome bonus (Filled) і Time limit mobile (Vertical) у MB і XON.

### Підсумок покриття (усі 4 групи)
| Група | Новий компонент |
|---|---|
| 1. Лідерборди | `Leaderboard` (Card / Striped) + `Leaderboard/Row` |
| 2. Транзакції та платежі | `History` (Card) + `History/Row` + `History/Details` |
| 3. Історія з розкриттям | `History` (Card / Divider) + `History/Row` + `History/Details` |
| 4. Таблиці з колонками | `Table` (Plain / Filled) + `Table/Row` (Horizontal / Vertical) |
| Спільне | `Table/Cell`, `Table/Cell — Slot`, `Table/Head/Cell` |

## 13. Єдиний неймінг властивостей (2026-10-26, рішення Андрея)
`Variant` = **як розділені рядки**; ті самі слова в усіх таблицях. Порядок: `Variant → Size → State → Align → Inverted → Direction`.

| Значення | Що означає | Де |
|---|---|---|
| `Divider` | рядки розділені лінією, без фону | `Table`, `Table/Row`, `History`, `History/Row` |
| `Card` | кожен рядок — окрема картка з відступом | `Leaderboard`, `Leaderboard/Row`, `History`, `History/Row` |
| `Striped` | рядки чергуються на спільній темній плашці | `Leaderboard` |
| `Panel` | уся таблиця на плашці, хедер із заливкою (Welcome bonus) | `Table` |
| `Stripe` / `Plain` | один рядок смуги: із заливкою / без | `Leaderboard/Row`, `Table/Row` (Plain = без лінії) |

| Компонент | Властивості |
|---|---|
| `Table` | `Variant = Divider \| Panel`; слоти `Head`, `Rows`; `Show head` |
| `Table/Row` | `Variant = Divider \| Plain`, `Size = md \| sm`, `Direction = Horizontal \| Vertical`; слот `Cells` |
| `Leaderboard` | `Variant = Card \| Striped`; `Head`, `Rows`; `Show head` |
| `Leaderboard/Row` | `Variant = Card \| Stripe \| Plain`, `State = Default \| Selected`, `Inverted`; `Cells` |
| `History` | `Variant = Divider \| Card`; `Head`, `Rows`; `Show head`, `Chevron space` |
| `History/Row` | `Variant = Card \| Divider`, `State = Default \| Hover \| Open`; `Chevron`; `Cells`, `Details` |
| `History/Details` | слот `Content` |
| `Table/Cell` | `Size`, `Align`, `Inverted`; `⬅️ Icon` + `↳ 💠 Icon left`, `Image` + `↳ 💠 Image`, `Subtext`, `Icon ➡️` + `↳ 💠 Icon right` |
| `Table/Cell — Slot` | `Align`; слот `Content` |
| `Table/Head/Cell` | `Align`, `Inverted` |

Замінено: `Style` → `Variant`; `Filled` → `Panel`; рядок `Fill` → `Stripe`; `Divider = True | False` → `Variant = Divider | Plain`; слот `Head cells` → `Head`; `↳ 💠 Icon` → `↳ 💠 Icon left`; `⬅️ Image` → `Image`.
Пастка: при перейменуванні варіантів за шаблоном набір `History` отримав назви `Component` (порожній результат) — після масового перейменування перевіряти `variantOptions` кожного набору.

## 14. Повернуто `Table/Row` (2026-10-27)
Спроба зібрати `Table` без `Table/Row` відкочена на прохання Андрея. `Table/Row` перестворено з тими самими варіантами й прив'язками (новий node `79415:4874`, key `0766282b…`); `Table` — `Variant = Default | Filled` (назви Андрея), слот `Rows` з інстансами `Table/Row`; preferred у `Table` і `History/Details` відновлено.
`Table/Cell` Inverted: ліва `Icon` теж на `semantic/text/default-invert/primary`.

## 15. `Table/Cell — Slot` злито в `Table/Cell` (2026-10-27, рішення Андрея)
- `Table/Cell` (`79056:3444`): **`Type = Text | Slot`** × `Size` × `Align` × `Inverted` — 16 варіантів. Порядок: `Type → Size → Align → Inverted`.
- `Type=Slot`: SLOT `Content` (VERTICAL, gap `spacing/200`, вирівнювання за Align; preferred `Status/Badge`, `Button`, `Button/Text`), дефолт — `Status/Badge`. Варіанти Slot однакові для всіх Size/Inverted — повна матриця потрібна, щоб перемикач `Type` працював з будь-якої комбінації (неповна матриця → «Unable to find a variant»).
- `Type=Text`: як раніше (`⬅️ Icon`, `Image`, `Subtext`, `Icon ➡️` + swap-и). Figma показує лише властивості поточного Type.
- Злиття — перенесенням компонентів (`set.appendChild`): властивість SLOT переїхала, 12 інстансів (у `History/Row`) лишились прив'язаними, старий набір (`79214:293697`) зник сам.
- Preferred оновлено: `History/Row` Cells → `Table/Cell`; `History/Details` → `Table/Cell`, `Table/Row`.

## 16. Статус у `Table/Cell` замість `Type=Slot` (2026-10-27, рішення Андрея)
- `Type = Text | Slot` прибрано: `Table/Cell` знову `Size × Align × Inverted` (8v), без слота.
- Нове: Boolean **`Status`** (off) — exposed instance `Status/Badge` (Status=Success, Size=md, Variant=Subtle) усередині `Content` під текстом; вирівнюється за `Align`. Його варіанти (Status, Size, Variant) змінюються з батьківського інстансу.
- Нове: Boolean **`Label`** (on) — вимикає основний текст. Колонка статусу = `Label` off + `Status` on.
- Порядок у `Content`: `Label` → `Subtext` → `Status` (gap 0).
- 6 комірок-статусів у мейнах `History/Row` переведено на `Table/Cell` (Label off, Status on); вкладені копії оновились від мейнів. Варіанти Slot і властивість `Content` видалено.
- Cashout / kebab / сума + кнопка стовпчиком більше не мають окремої комірки — у разі потреби повернутись до питання (Button у комірці).

## 17. `History/Details` прибрано (2026-10-27, рішення Андрея)
- Обгортка деталей збирається в таблиці кастомно: у слоті `Details` рядків `State=Open` — **фрейм `Details`**: VERTICAL, padding `spacing/300` / `spacing/400`, gap `spacing/100`, fill `semantic/fill/subtle`, радіус 8 (без токена), STRETCH; всередині `Table/Cell sm` (перша — Hug + `Icon ➡️` copy, текст auto width; друга — опис).
- Компонент `History/Details` (`79215:4198`) видалено після заміни 2 інстансів у мейнах `History/Row` (Open); вкладені копії оновились від мейнів.
- `History/Row` → слот `Details` preferred: `Table/Cell`, `History/Row` (вкладені рядки груп транзакцій).
- Картка події Express — такий самий фрейм із `Table/Row` / двома `Table/Cell`.

## 18. Слот `Details` прибрано (2026-10-27, рішення Андрея)
- `History/Row` (Open): `Details` — звичайний фрейм (VERTICAL, STRETCH, padding-l `spacing/800`, gap `spacing/200`), всередині фрейм `Panel` (колишня обгортка деталей, токени ті самі). Усе кастомно редагується в інстансі.
- Властивості `History/Row`: `Variant`, `State`, `Chevron`, слот `Cells`.

## 19. Структура після правок Андрея (2026-10-27)
4 сірі Section: `Table` (`Table`, `Table/Row`) · `Leaderboard` (`Leaderboard`, `Leaderboard/Row`) · `History` (`History`, `History/Row`) · `Cell` (`Table/Cell`, `Table/Head/Cell` — спільні для всіх таблиць). Основний компонент у кожній — зверху.

## 20. План токенів (чернетка до JSON-handoff)
Текст, іконки, шеврони — `semantic.*` напряму (правило); компонентні токени — розміри, падінги, gap, радіуси, заливки, лінії. Значення — лише alias.

**table** (`mb/component`, `xon/component`)
| Токен | Значення | Шар |
|---|---|---|
| `table.head.height` | `{size.500}` | Head |
| `table.panel.padding-h` | `{spacing.400}` | Head, Rows (Filled) |
| `table.row.padding-v.md` / `.sm` | `{spacing.400}` / `{spacing.200}` | Table/Row |
| `table.row.gap` | `{spacing.400}` | Cells (Horizontal), Head |
| `table.row.gap-vertical` | `{spacing.200}` | Cells (Vertical) |
| `table.cell.gap` | `{spacing.200}` | Table/Cell |
| `table.cell.icon-size` | `{size.300}` | Icon, Icon right |
| `table.cell.image-size.md` / `.sm` | `{size.400}` / `{size.300}` | Image |
| `border-radius.table` | `{border-radius.global.md}` | Table Filled |
| `contextual.table.fill` | зараз `{core.brand-60.a10}` → alias `semantic.*` (?) | Table Filled |
| `contextual.table.header` | зараз = fill (двічі накладається) → (?) | Head Filled |
| `contextual.table.divider` | `{semantic.divider.default.primary}` | Table/Row Divider |

**leaderboard**
| Токен | Значення | Шар |
|---|---|---|
| `leaderboard.gap` | `{spacing.200}` | Card: між Head і Rows, між рядками |
| `leaderboard.head.height.card` / `.striped` | `{size.500}` / `{size.600}` | Head |
| `leaderboard.row.padding-h` / `padding-v` / `gap` | `{spacing.400}` / `{spacing.200}` / `{spacing.400}` | Leaderboard/Row |
| `border-radius.leaderboard.row` | 8 — alias немає (?) | Row Card |
| `border-radius.leaderboard.striped` | 16 — alias немає (?) | Striped |
| `contextual.leaderboard.row.fill.card` / `.card-inverted` | `{semantic.fill.subtle}` / `{semantic.fill.subtle-invert}` | Row Card |
| `contextual.leaderboard.row.fill.stripe` | (?) — `slate-for-cards` видалено | Row Stripe |
| `contextual.leaderboard.row.fill.selected` | `{semantic.fill.active}` | Row Selected |
| `contextual.leaderboard.striped.fill` / `.head-fill` | (?) — темний в обох брендах | Striped, Head |

**history**
| Токен | Значення | Шар |
|---|---|---|
| `history.gap` | `{spacing.100}` | Card: між рядками |
| `history.head.padding-v` | `{spacing.100}` | Head row |
| `history.row.padding-v` / `padding-left` / `padding-right` / `gap` | `{spacing.200}` / `{spacing.200}` / `{spacing.400}` / `{spacing.200}` | History/Row (Card) |
| `history.chevron-size` | `{size.300}` | Chevron, Chevron space |
| `history.details.padding-left` / `gap` | `{spacing.800}` / `{spacing.200}` | Details |
| `history.panel.padding-v` / `padding-h` / `gap` | `{spacing.300}` / `{spacing.400}` / `{spacing.100}` | Panel |
| `border-radius.history.row` | `{border-radius.global.xs}` | Row Card |
| `border-radius.history.panel` | 8 — alias немає (?) | Panel |
| `contextual.history.row.fill.card` / `.hover` | `{semantic.fill.subtle}` / `{semantic.fill.hover}` | Row |
| `contextual.history.panel.fill` | `{semantic.fill.subtle}` | Panel |
| `contextual.history.divider` | `{semantic.divider.default.primary}` | Row Divider, Head |

Відкриті рішення: alias для радіусів 8 і 16; темна заливка Striped/Stripe замість видаленого `slate-for-cards` (і `slate-1`, що в MB став світлим); `contextual.table.fill|header` — на core і однакові.

## 21. Виправлено 3 проблеми токенів (2026-10-27, на прохання Андрея)
Створено змінні в `Product` (обидва режими, alias на core, явні scopes) + фрагменти JSON для Token Studio (`tokens/table-fixes.{mb,xon}.{alias,component}.json` — **вставити в Token Studio до наступного Export**, інакше Export видалить змінні):
| Новий alias | Значення | Де |
|---|---|---|
| `border-radius.global.card` | `{border-radius.core.200}` = 8 | Leaderboard/Row Card, History/Row Panel |
| `border-radius.global.container` | `{border-radius.core.400}` = 16 | Leaderboard Striped |
| `semantic.background.slate-dark-1` | `{core.grey.700}` | Leaderboard Striped (плашка) |
| `semantic.background.slate-dark-2` | `{core.grey.800}` | Striped Head, Row Stripe Inverted |
| `semantic.background.brand-subtle` | `{core.brand-60.a10}` | `contextual.table.fill` / `header` |
- `slate-dark-*` = значення, які мали `slate-1` / `slate-for-cards` в експорті 22.10 (колеги перевели `slate-1` у MB на світлий і видалили `slate-for-cards`).
- `contextual.table.fill|header` → `{semantic.background.brand-subtle}` (було `{core.brand-60.a10}`); однакові навмисно — хедер темніший за рахунок накладання, як в оригіналі Welcome bonus.
- `Leaderboard/Row` Stripe Inverted=False → `semantic.fill.subtle` (світлий контекст).
- Перевірка: 0 мертвих прив'язок, 0 радіусів без токена в усіх табличних наборах; превʼю MB/XON.

## 22. Токени MB component (2026-10-27, JSON-handoff)
Андрей дав повний `mb/component`; додано +48, змінено 2 (`contextual.table.fill|header` → `{semantic.background.brand-subtle}`), видалено 0. Підмножина — `tokens/table.mb.component.json`. Назви — як у §20, з уточненнями: `history.row.gap` (Main↔Details і шеврон↔комірки) + `history.row.cells-gap`; `leaderboard.head.padding-h`; інвертовані — `contextual.leaderboard.row.inverted.fill.{card|stripe|selected}`.
Залежить від alias із `tokens/table-fixes.*.alias.json` (`border-radius.global.card|container`, `semantic.background.slate-dark-1|2`, `semantic.background.brand-subtle`) — вони мають бути в `mb/alias` до вставки, інакше посилання обірвуться.
Далі: XON component (той самий набір), Export → прив'язка токенів на шари (plugin data `tokens` + змінні).
