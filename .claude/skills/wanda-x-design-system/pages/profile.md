# Profile — сторінка `32965:145491` (`     ↳ Profile +`)

Статус (2026-11-06): **зібрано 7 сетів сторінки + 13 модалок; KYC Verification і Loyalty points — ще ні** (потрібні нові компоненти сторінки). Старе — референсами в чорних `Old — …` праворуч (Андрей попросив так після пілоту). `Preview` / `Design` нема.

## Рішення Андрея (2026-11-06)
- Профіль — **сторінками в `Layout/3xs` + `Layout/xl`**, не темний `Profile popup` (`↳ Modal` 80108:43620 / 43628, `Profile popup mobile` 80108:45062).
- Модалки Section `1`–`10` — **перезібрати**: клон модалки команди (зберігає вписані MrBet-заголовки) у новий сірий сет + переклад за правилами (CTA у Footer FILL, `Description`, картинки → порожній `Image/Single` + приклад над Section, `Accordions`). Старі Section `1`–`10` → чорні `Old — Popup N · …` (вміст не чіпали; вкласти Section у Section конектор не може).

## Розкладка (y 0, 600 між)
| x | Section | ID | Що |
|---|---|---|---|
| 0 | `Bonus balance` | 81063:50626 | Title+Description → `Notification/System` Info (Actions «Games») → Active bonus → Available (+ `Button Tertiary md`) → FAQ (`Accordion` ×9) |
| 2256 | `Bonus balance — Empty` | 81065:53188 | Title → Info «No active bonuses balances» + `Button Primary lg` → FAQ |
| 4512 | `Account info` | 81087:61895 | Title → `Notification/System` Info «Share your link…» (Copy link) + Warning «Please confirm your email…» (Verify) → `Inputs` 5 рядів (`Input` Filled; xl 2 кол., 3xs 1 кол.; 5-й — дата + `Segmented`) → `Checkbox` згоди → Change password (`Button Text md`) + Save changes (`Primary md`) |
| 6768 | `Game limits` | 81086:58889 | Title → 3 картки `Wrapper` (fill `semantic.background.slate-2`, radius `border-radius.global.lg`, p 16): Time Limit / Deposit Limit / Self-Restriction — Title + `Button Text sm` «Limits history», Description, `Input`, `Chip`-и, `Button Primary lg` |
| 9024 | `Game limits — Active` | 81086:61116 | те саме, Time Limit — відлік «02d : 58h…» + «Active until…» + `Progress` (новий 79804:4510) |
| 11280 | `Bet history` | 81085:63070 | Title → `Tabs Default` (Open bets / Settled bets) → `Table` 6 кол. (xl з Head; 3xs без Head, `Table/Row Direction=Vertical`), Cashout — `Button Primary sm` у слоті 6-ї клітинки |
| 13536 | `Bet history — Empty` | 81085:66050 | Title → Tabs → `Empty Card=True` (Description «You have no open bets», Button «Place a bet») |
| 15792 … 42864 | модалки (по 2256) | | `Bonus played` 81065:55301 · `Successful registration` 81081:54758 · `Session ending` 81081:54913 · `Access restricted` 81081:54990 · `Login limit` 81081:55067 · `Deposit limit` 81081:55144 · `Time limit history` 81083:56052 (`Table` Limit/Start/Finish) · `Time limit history — Empty` 81083:55036 · `Password change` 81083:55810 (2 `Input` + Primary lg + Text «My profile») · `Unsaved changes` 81083:55151 · `Confirm email` 81083:55252 · `Email confirmed` 81083:55399 · `Verification info` 81083:55520 |
| 45120 → | чорні `Old — Bonus balance` · `Loyalty points` · `Account info` · `KYC Verification` · `Game limits` · `Bet history` · `Popups` · `Popup 1…10 · …` · `Components` | | вміст не змінено |

Заголовки — клони MrBet-текстів зі старих макетів, fill `text.default.heading`. Сетка карток — GRID, рядки HUG.

**Вписати вручну (MrBet):** стиль `heading/md` на `FAQ` ×4 і на назвах карток Game limits ×12 (клони без стилю); Title модалки `Bonus played` ×2 «TITLE» → «Congratulations!»; заголовок Game limits: xl «Time limits», 3xs «Game limits» — вирівняти на один.
**Відкрито:** KYC Verification (список · Photo ID з завантаженням · Declined · Verified) і Loyalty points (обмін · магазин · історія · email) — потрібні нові компоненти сторінки (`KYC Verification/Step`, `Loyalty points/Summary`, `/Level`, `/Offer`); кнопка порожнього Bonus balance «Label»; `Card / Bonuses (Profile)` зі старим `Progress/Linear`; Achievements / Referral / Real / Sport balance — макетів нема. XON конектором не перевірити.

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
