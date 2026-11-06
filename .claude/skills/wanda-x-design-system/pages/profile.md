# Profile — сторінка `32965:145491` (`     ↳ Profile +`)

Статус: **дослідження 2026-11-06; впорядкування в `Old — …` Андрей попросив відкотити — сторінка як була.** Нових сетів сторінки ще нема; `Preview` / `Design` Section нема. Правила збірки Андрей дасть окремо.

## Що на сторінці (130 вузлів верхнього рівня, усе на x < 0, хаотично)
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
- Section `1`–`10` — Андрей їх зібрав / погодив? Перейменовувати (`Successful registration` …) і ставити в ряд з x 0?
- Desktop має дві ширини (1096 і 1288) — для нових сетів беремо один стандарт `Layout/xl`.
- Чи збираємо Achievements / Referral program / Real / Sport balance, яких нема в старих макетах.
