# Profile — сторінка `32965:145491` (`     ↳ Profile +`)

Статус: **пілот Bonus balance зібрано 2026-11-06 (на перевірці в Андрея)**; решта розділів — за тим самим зразком після погодження. Старе на сторінці **лишається як є** (не рухати, не складати в `Old — …` — Андрей відкотив таке впорядкування). `Preview` / `Design` нема.

## Рішення Андрея (2026-11-06)
- Профіль збираємо **сторінками в `Layout/3xs` + `Layout/xl`** (як старі макети), **не** як темний `Profile popup` зі сторінки `↳ Modal` (80108:43620 / 43628, `Profile popup mobile` 80108:45062).
- Рух: пілот **Bonus balance** → перевірка → решта розділів.
- Модалки Section `1`–`10` **перезібрати всі** наново (поруч, старі Section лишаються).

## Нові сети (y 0, 600 між; старт x 1488 — праворуч від загубленого `Account Info` 32634:38707 на x 744)
| x | Section | ID | Що |
|---|---|---|---|
| 1488 | `Bonus balance` | 81063:50626 | `Layout/3xs` 81063:52458 + `Layout/xl` 81063:54574 · Title + Description → `Notification/System` Info (Actions, кнопка «Games») → Active bonus (`Card / Bonuses (Profile)` Active) → Available (Delete, Default, Default + `Button Tertiary md` «Available promotions» по центру) → FAQ (9 `Accordion`, 2-й Opened) |
| 3744 | `Bonus balance — Empty` | 81065:53188 | `Layout/3xs` 81065:53189 + `Layout/xl` 81065:54048 · Title → `Notification/System` Info «No active bonuses balances» + `Button Primary lg` «Label» → FAQ |
| 6000 | `Bonus played` (модалка) | 81065:55301 | `Modal/Default` 3xs Centered 81065:55302 + xl sm Centered 81065:55352 · шапка: порожній `Image/Single` 158×120 + Title + Description «You have played the bonus.» · Body: сума (MrBet, `text.brand.primary`) + «Transferred to your main balance.» · Footer: `Button Primary lg` «OK» FILL. Приклад картинки — над Section (y −224) |

Картки — сітка `Cards` GRID xl 2 кол. gap 16 / 3xs 1 кол. gap 8, рядки HUG. Заголовки — клони MrBet-текстів зі старих макетів (`heading.xxl` / `heading.lg` сторінки, `heading.md` блоків), fill `text.default.heading`.

**Вписати вручну (MrBet):** `FAQ` ×4 — клон без стилю 24 px → стиль `heading/md`; Title модалок ×2 «TITLE» → «Congratulations!».
**Питання / зауваги:** `Card / Bonuses (Profile)` (сторінка `↳ Cards`) усередині має старий `Progress/Linear`, а у стані Delete кнопка Cancel майже не видна — це картка команди; кнопка порожнього стану в оригіналі «Label» — який текст?; нумерацію FAQ («3.» …) прибрано (в оригіналі була зламана). XON конектором не перевірити (шрифт Xon_028).

## Як було на сторінці до збирання

### 130 старих вузлів верхнього рівня, усе на x < 0 (не рухати)
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
