# Profile — сторінка `32965:145491` (`     ↳ Profile +`)

Статус (2026-11-09): **референс — Section `Profile` 81302:100053** (Андрей, «вірний референс»; чорна, вміст / назву / колір не чіпати). Зібрано 17 сетів сторінки + 11 модалок + компонент `KYC Verification/Step`. Старі лейаути й 34 старі компоненти **видалено** на прохання Андрея; лишилась `🔴Old — Components` — 18 старих компонентів, що мають інстанси на інших сторінках (`↳ Modal` Profile popup, Cashbox, Table originals, ingame).

## Рішення Андрея
- Профіль — сторінками в `Layout/3xs` + `Layout/xl`, не темний `Profile popup`.
- Референс для всього — Section `Profile` (Bonuses, Bet history / Bets history, Personal details, KYC + KYC/mobile + KYC popups, Game limits, Loyalty points, Change password).
- Модалок поза референсом не тримати (Successful registration, Bonus played — прибрано).

## Розкладка (y 0, 600 між)
Стани (порядок меню профілю): `Bonus balance` · `— Empty` · `Loyalty points` · `— Shop` · `— History` · `— History empty` · `— Email` · `Account info` · `Account info — Confirmed` · `Bet history` · `— Empty` · `Game limits` · `— Active` · `KYC Verification` · `— Photo ID` · `— Declined` · `— Completed` → модалки `Unsaved changes` · `Confirm email` · `Email confirmed` · `Password change` · `Session ending` · `Access restricted` · `Deposit limit` · `Login limit` · `Time limit history` · `— Empty` · `Verification info` → компонент `KYC Verification/Step` (81306:48393) → референс `Profile` → `🔴Old — Components`.

| Сет | Зібрано з |
|---|---|
| Bonus balance (+Empty) | Title + Description (RU-текст референсу) · `Notification/System` **Warning** + «Games» · `Card / Bonuses (Profile)` у GRID · `Button Tertiary md` «Available promotions» · FAQ `Accordion` ×9 (2-й Opened «2. Why have I been asked for verification?»). Empty — Info «No active bonuses balances» + `Primary lg` «Available promotions» |
| Loyalty points ×5 | картка slate-2: «9 083 points», `Image` 32 + «Exchange rate by / Professional» + `Badge` «10:1», `Image` 96 · `Tabs Default` (Bonus balance / Bonuses for points / History) · обмін: `Input` + сума + `Primary md` «Exchange», рівні (Image 32 + назва/курс + сума) · Shop: GRID карток (Image + «Multiplier x1.15» + «2000 points» + «Buy») · History: `Table/History Card` (Points exchange / Prize / Purchased bonus; Open — ID / Date) · History empty / Email — `Empty Card=False` (Description + «Open Email») |
| Account info (+Confirmed) | Notification Info «Share your link…» (Copy link) + Warning «…bonus - 20 FS» (Verify) · 9 `Input` Filled з підписами референсу (User name … Date of Birth) · `Segmented` Male / Female · `Checkbox` згоди · Change password / Save changes. Confirmed — без нотифікацій |
| Bet history (+Empty) | `Tabs Default` · `Table/History Card`: xl — Head 6 кол. (ID/Date & time · Bet details · Odds · Stake · Possible win · Cashout), рядки Single (без шеврона) / Express / Express Open (панель з 2 подіями); 3xs — без Head, рядки ID+дата / сума (з шевроном), Open — деталі в 1-й клітинці панелі, Cashout — у 2-й. Суми — `status.success|error.text.primary` · Empty — `Empty Card=True` |
| Game limits (+Active) | картки slate-2: Time / Deposit / Self-Restriction — `Input`, `Chip`, `Button`, `Progress` |
| KYC ×4 | hero: `Heading` Primary + картка прогресу (`Progress Type=Step`, 25% / 100%) + `Image` 294×194 з `Status` Error «Uncompleted» · `KYC Verification/Step` ×4 (Photo ID / Proof of payment / Selfie with documents / Additional documents); Photo ID Opened: опис, «Choose file», помилки (`status.error.text.primary`), формати, файли (Image 40 + назва + `Status` / `Progress`), «Send», `Image` 288×148. Declined / Completed — `Image` + `Status` + `Heading` + опис + «Go to Home» |

**Компонент `KYC Verification/Step`** (81306:48393): State=Closed | Opened; картка slate-2, radius lg, p16; `Image/Single` 64 + Title (`text.lg-stronger`, `text.default.heading`) + Value «+25%» (`status.success.text.primary`) + chevron-down / up; Opened — слот `Content`.

**Вписати вручну (MrBet / іконки):** `heading/md` на `FAQ` ×4 і назвах карток Game limits ×12; `Heading` у KYC ×8 — «Please complete verification by submitting your documents» / «Account Declined» (джерел MrBet-тексту більше нема); заголовок Game limits xl «Time limits» vs 3xs «Game limits»; іконка смітника в рядках файлів KYC (зараз дефолтна `plus`); кнопки «Confirm» у полях телефону / email Account info.
**Порівняння (2026-11-09):** під кожним сірим сетом — чорна `Old — <сет>` (200 нижче): клон старого мобайлу з референсу під `Layout/3xs` (x 80) і десктопа під `Layout/xl` (x 480); для модалок — попап 360 / 384–640. Клони — тільки для звірки, сам референс `Profile` не змінено.
**Відкрито:** Cashout у референсі під сумою (у нас — окрема колонка); XON конектором не перевірити.

## Як було на сторінці до збирання

### 130 старих вузлів (тепер у чорних `Old — …`)
| Група | Скільки | Де | Примітка |
|---|---|---|---|
| Попапи `Modal/Default` 3xs + xl у сірих Section `1`…`10` | 10 | x −43328 … −27704, y 5494 | вже нового стандарту (1656×928); назви — цифри, порядок по x: 1–5, далі 6…10 у зворотному. Схоже, зібрав Андрей / команда — **не чіпати** без підтвердження |
| Розрізнені `Modal/Default` / старі `Popup` | 2 + 3 | x −25734 … −25350 | Password change, Time limit history (3xs без xl) + старі `Popup` |
| `.Desktop page (Debricate)` / `.Mobile page (Debricate)` / `Profile … / KYC …` | ~55 | x −53415 … −29638 | старі макети станів |
| `Layout/xl` (старого вигляду, вміст старий) | 5 | серед старих | 78094:550638 Bet history, 78251:83302 / 78809:176252 / 78251:71936 KYC, 67913:78952 Time limits — не нові сети, а старий вміст у новому `Layout` |
| Локальні компоненти / сети (old) | ~45 | x −68716 … −55409 | `Profile sidebar`, `content profile balances`, `Bets history content`, `limit block`, `Account info`, `mobile verification*`, `Document`, `file`, `points header`, `shop`, `Bonus`, `Profile popup content*` … — **не використовувати** |
| `Account Info` (компонент) | 1 | x 744 y 0 | єдиний вузол у додатних координатах — загубився |

## Стани сторінки (за старими макетами)
Меню профілю (`Profile sidebar`): Balances (Real · Bonus · Sport · Loyalty points) · Personal details · Bets history · Achievements · Referral program · Game limits · KYC Verification · Logout.

| Стан | Desktop | Mobile |
|---|---|---|
| Bonus balance — активний + доступні бонуси | 67589:87178 (1096), 67589:90472 (1288) | 67916:159926 / 173359 / 178612 |
| Bonus balance — порожній + FAQ | 67916:196424 | 67916:181240 / 184051 |
| Loyalty points — обмін | 67821:196190 | 67819:193346 |
| Loyalty points — магазин / історія / «not exchanged» / email | 67916:676422 | 67895:49939 / 57218 / 59745 |
| Account info (Personal details) — з банерами Share link / Confirm email · без | 67485:76750, 67818:192838, 67614:167578 | 67703:75303 |
| KYC — список документів (Uncompleted) | 67709:72062, 67904:42366 / 519934 | 67910:805153 / 813228 / 821700 |
| KYC — Photo ID / Driving licence / Proof of payment (upload, помилка файлу) | 67825:296880, 67902:40953 / 40218, 67908:528196 (+ Layout/xl ×3) | 67911:* , 67912:* (13 шт.) |
| KYC — Account Declined / Completed | 67909:793107 / 794007 | — |
| Game limits — Time limit (налаштування · активний ліміт) | 67724:71791, Layout/xl 67913:78952 | 67811:88626, 67913:79613 |
| Bet history — Open / Settled · порожній | 67821:232557, 67916:768292 · 67917:223843 (+ Layout/xl 78094:550638) | 67821:232556, 67916:768873 · 67917:87285 |
| Achievements, Referral program, Real / Sport balance | — | лише компонент `Achievements mob content`; окремих макетів нема |

## Попапи (Section 1–10)
1 Successful registration · 2 Attention (сесія 5 хв) · 3 Access temporarily restricted · 4 Attention (ліміт на вхід) · 5 Attention · 6 Time limit history — empty · 7 Unsaved changes · 8 Confirm your email address · 9 Congratulation / Keep in touch · 10 Info (What is verification? FAQ).

## Відкриті питання
- Desktop має дві ширини (1096 і 1288) — для нових сетів беремо один стандарт `Layout/xl`.
- Чи збираємо Achievements / Referral program / Real / Sport balance, яких нема в старих макетах.

## Версія 2 — Profile popup (2026-11-09)
Референс — Section-и Андрея під рядом (y ≈ 20 522, сині: `Balances`, `Personal details`, `KYC Verification`, `Game limits` ×2, `Bonus balance`, `Sport balance`, `Loyalty points`, `Bets history`, `Achievements`, `Referral program`) — не чіпали. Сети `Profile popup — <стан>` стоять **праворуч від синього референсу версії 2** (y 20 522, з x 21 714, крок 2256 — так хоче Андрей), під кожним — чорна `Old — Profile popup — <стан>` з клонами референсу (мобайл x 80, десктоп x 480).
- **xl:** `Modal/Custom` Max. Height=True — Header-слот: `Image` 40 + «Roberto Cao Petruchko» / «Professional • 850/2000(36%)» + `Button Text sm` «Online help» (paddingRight 56 від хрестика); Sidebar-слот: `Wrapper` V (слот у варіанті Max. Height=True горизонтальний — дефект команди) → `Profile-menu` (Balances Open + `Profile-menu/Subitem` Real / Bonus / Sport / Loyalty, Personal details з Tag «2», Bets history, Achievements, Game limits, KYC Verification) + `Profile-menu/Item` «Logout»; Body — вміст.
- **3xs:** `Modal/Default` 3xs Max. height=True (у `Modal/Custom` 3xs / 2xs слоти ще FRAME, не SLOT — у роботі в команди): блок користувача — у верхній слот Header, вміст — у Body.
- Body = клон `Container` з відповідного сету версії-сторінки **без page Title** (навігація — меню), padding 0.
- Зібрано: Balances (поточний баланс + 4 картки балансів + промокод; 3xs — + меню-список, Online help, Logout) · Bonus balance · Personal details · KYC Verification · Game limits · Game limits — Set time limit · Loyalty points ×5 · Bets history — Open / Settled.
- Модалки версії 2 (у тому ж ряду після Bets history, з `Old —` під кожною; референс — Section `Game limits` 81313:170511): Attention — Session · Access restricted · Attention — Deposit · Attention — Login · Time limit history — Empty · Time limit history · Deposit Limit history · Self-Restriction history (свіжа `Table` у Body; Title — клон «Time limit history», **вписати вручну** «Deposit Limit history» / «Self-Restriction history»). Стан `Loyalty points — Confirm email` — після Loyalty — Email.
- **Ще ні:** блоки Game limits версії 2 Cool-off Period і Subscriptions; Sport balance (+ Free Bet), Bonus balance — Free Spins, попапи «Congratulations!» і «Bônus 45.000$ + 270 FS», Achievements, Referral program; іконки пунктів меню (дефолтний `plus`).
- 2026-11-09: видалено повністю покриті Section референсу версії 2 — Balances, Personal details, KYC Verification, Game limits (81313:170485), Loyalty points, Bets history (клони лишились у `Old —` під сетами). Лишились, бо є незібрані екрани: `Bonus balance` (Free Spins, Congratulations!, Bônus 45.000$ + 270 FS), `Sport balance` (+ Free Bet), `Achievements`, `Referral program`, `Game limits` 81313:170511 (екрани з Cool-off Period / Subscriptions). Верхній ряд не чіпали.
- 2026-11-09 (доповнення): версія 2 зібрана повністю — 29 сетів `Profile popup — …` (+ `Old —` під кожним). Додано: Bonus balance — Free Spins (картки «20 FS Adventures» / «Soon Free Spins» + FAQ), Sport balance (картки бонусів + нотифікація), Sport balance — Free Bet («20 $», Odds / Wager / Events, «Make a bet» + FAQ), Achievements (картка Welcome bonus + `Card / Achievement` + «Go to Achievements»), Referral program (банер, 2 лічильники, «Copy referal link», `List/Item` ×3), модалки Congratulations (RU-текст, `Image` у шапці, «OK») і Bonus offer (4 рядки умов, `List/Item` ×2, «Activate»); Game limits обох станів — + блоки Cool-off Period і Subscriptions (`Checkbox` «Unsubscribe from all promotional emails», «Apply»), кнопки «Apply limit» / «Apply restriction».
- Увесь референс версії 2 видалено (усе покрито; клони — у `Old —` під сетами). Верхній ряд не чіпали.
- **Вписати вручну (MrBet):** Title модалок Congratulations («Congratulations!») і Bonus offer («Bônus 45.000$ + 270 FS»); назви блоків Cool-off Period і Subscriptions у Game limits (зараз клон «Self-Restriction»); Deposit Limit history / Self-Restriction history.
- Пастка: у `List/Item — Default` перший TEXT — `Indicator` (номер), текст пункту — `Label`.

## Локальні компоненти Profile popup (над своїм сетом)
- `Profile/Balance` (Section 81406:98481 над `Profile popup — Balances`, comp 81406:98480): картка балансу — `Image/Single` 32 + Description + Title; fill `background.1`, radius `global.borderRadius.lg`, padding `spacing.300`, gap `spacing.200`; дефолт тексти `Label`. У сеті 8 інстансів (xl 1×4, 3xs 2×2), тексти — override.
- `Profile popup — Loyalty points — Bonuses for points`: картки магазину — інстанси ДС `shop` (67873:163682): xl 2 в ряд, 3xs стовпчиком; кнопка «Buy»; «4000 points» (MrBet) — дефолт, змінювати вручну.
- Кандидати далі: картка балів Loyalty («9 083 points», 3 сети), картки Game limits (Time / Deposit Limit / Self-Restriction), лічильники Referral, Current balance, прогрес KYC.

## Зміни 2026-11-11 (оновлення компонента Table)
- `Table Default → Divider` (автоматично); `Table/History Card` без змін; знято 4 мертві override-и висоти.

## Розкладка ряду Profile popup (y 20522, крок 2256)
Ліворуч (незалогінені): `Attention — Login` (x −1918). Далі сети сторінки від x 338 (Balances … Referral program), праворуч — модалки залогінених: Session, Access restricted, Deposit, Time limit history (Empty / full), Deposit Limit history, Self-Restriction history, Congratulations, Bonus offer. Під кожним — `Old — …` на 200 нижче (у Balances і Bonus balance Old уже нема).
`Personal details`: Input з Prefix (код +380, стрілка) і Suffix-кнопкою `Confirm` (Phone, Email), Country — Suffix-стрілка, Date of Birth — Suffix; футер xl — Change password ліворуч / Save праворуч; 3xs — модалка 640 (Max. height), відступи 8.

`Profile popup — KYC Verification`: кроки документів — `Accordion` (Closed, 78143:289103) замість `KYC Verification/Step` (картинка й «+25%» прибрані — в Accordion нема); 3xs-модалка 640. `KYC Verification/Step` (81306:48393) лишається для верхнього ряду.

`Profile popup — Game limits`: заголовки блоків — наш `heading/md` (MrBet, клони); **вручну**: «Cool-off Period» і «Subscriptions» (xl і 3xs, зараз «Self-Restriction»; те саме в `Game limits — Set time limit`), «… history» праворуч; xl — Input + `Save limit` в одному ряду, Deposit — Input `Sum` + «Time period» з чипами праворуч; плейсхолдери Hours / Sum; 3xs 640. Не зроблено: суфікс `BRL` у полі суми (в Input нема текстового суфікса).

**Еталон Андрея — `Profile popup — Game limits` 3xs**: заголовки `heading/md` Time Limit / Deposit Limit / Restriction / Cool-off Period / Subscriptions, посилання `History` праворуч у тому ж ряду, модалка на всю висоту вмісту. Те саме перенесено в `Game limits — Set time limit` (3xs) + xl-заголовки Cool-off Period / Subscriptions в обох сетах (клони MrBet з еталона).
