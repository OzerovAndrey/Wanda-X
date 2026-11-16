# Cashbox (s2p), Payment block — сторінка `34736:98754`

Статус (2026-11-16): каса перезібрана **модалками** (вся сторінка — попапи, лейаутів `Layout/*` нема). Старе — у чорних Section праворуч, нічого не видалено.

## Рішення
- Каса з бічним меню = **`Modal/Custom`** (як новий Profile): xl `Breakpoint=xl, Max. Height=True` (1096×768), `Header = false`, `Sidebar = true`; 3xs `Breakpoint=3xs` — повноекранна, висота за вмістом (Body → `HUG`), Header-слот: `Title` + Close.
- Сайдбар xl: `Profile-menu` (Deposit / Withdraw / Payment history, іконки `wallet` / `withdraw` / `history`, Chevron off) + `Cashbox/Bonus`. На 3xs меню → `Tabs Default` (Deposit / Withdraw / History) під хедером, бонус — під табами (однаковий контент).
- Статуси оплати: xl — `Modal/Custom` з сайдбаром, контент по центру Body; 3xs — `Modal/Default` знизу (як старий мобайл).
- Окремі попапи — `Modal/Default` 3xs (знизу, `Centered=False`) + xl `Size=sm, Centered=True`.
- Історія — `Table/History Variant=Card`: xl Head «Type / Date · Status · Amount», сума + метод праворуч з `more-vert`; 3xs без Head, статус під датою в 1-й клітинці.

## Розкладка (y 0, крок 2256)
Ліворуч (незалогінені, реєстрація в касі): `Top up your account` −9024 · `Enter your email address or phone number` −6768 · `Save your password` −4512 · `Have you saved your password?` −2256.
Ряд 1: `Cashbox — Deposit` 0 · `Cashbox — Payment history` 2256 · `— Empty` 4512 · `Payment — Processing` 6768 · `— Success` 9024 · `— Failed` 11280 · `Cashbox bonus` 13536 · `Deposit bonus` 15792 · `Weekly Freebet` 18048 · `Payment failed — Bonus` 20304.
Ряд 2 (y 2883): `Filter` 0.
**Порівняння:** під кожним сірим сетом — чорна `Old — <сет>` (200 нижче): клони старих мобайлів (x 80) і десктопів (x 480+), зайві старі стани — праворуч у тій же Section; для попапів без старого макета — інстанси старих локальних компонентів (`Deposit contnent` Mobile, `Cashbox/Weekly Freebet`, `Filter content`, `Save your password*`, `Have you saved your password? content`). Під `Payment history — Empty` порівняння нема — старого макета порожнього стану не було. Оригінали в `Old — Pages / Popups / Local components` не змінено.
Над плиткою: `Components` 82627:7734 (x 0, низ −600).
Old (x від 22560): `Old — Components` 81470:19878 (колишня Section `Components` команди) · `Old — Pages` 82624:7618 (7 фреймів) · `Old — Popups` 82624:7626 (19 інстансів) · `Old — Local components` 82624:7646 (21 вузол).

## Компоненти сторінки
| Компонент | ID | Будова |
|---|---|---|
| `Cashbox/Bonus` (Type = Free spins / Deposit) | 82627:7730 | 248 FIXED, p16 gap12, `fill.subtle` + `global.borderRadius.lg`. Free spins: `Image/Single` 96 + `Title` (`tt.accent1`) + `Description` + `Time sm` + `Button Primary md` «Activate», info — absolute. Deposit: ряд `Title` + info, Divider, сума + «On deposit from», `Time`, кнопка. Перевикористано в `Payment failed — Bonus` (override-и текстів, «Go to checkout») |
| `Cashbox/Method` | 82627:7731 | 128 FIXED (у сітці FILL), висота HUG = 68 для будь-якого лого; p8 gap4, `fill.subtle` + `global.borderRadius.md`: `Logo` (FILL × **36 FIXED**, по центру) → інстанс лого з бібліотеки **Payment-Methods** (`MshuL41rV4VR7vlZxqpcLU`, `Symbol=False, Theme=Light`), **Width HUG + Height FILL** — компонент лого сам тримає пропорцію (90×90…180×90 → 36…72 px), swap-властивість `Payment methods`; + `Description` «Min: 10 EUR». 36, а не 40: найширше лого (180) = 72 px влазить у картку 3xs (91). Сітка xl 5 кол., 3xs 3 кол., gap 8 |

**Top up your account:** банер — свій `Banner` у Body над інпутом (не `topBanner`, не `Banner/Modal`): H gap 16, pr 16, `fill.subtle` + `global.borderRadius.md` → `Image/Single` 120×88 + `Wrapper` (`Title` «Get a registration bonus of up to» `text.mdStrong` `tt.primary` + `Description` «$750 + 300 FS!» `tt.accent1`).

## Вписати вручну (MrBet)
Title всіх `Modal/Default` (зараз «TITLE»): Cashbox bonus «Get $10 000» · Deposit bonus «Bonus 25% on minimum deposit + 10 free spins» · Weekly Freebet · Payment failed — Bonus «Unfortunately, your payment was not processed» · Filter · Top up your account · Enter your email address or phone number · Save your password · Have you saved your password? · Payment — Processing / Success / Failed (3xs).
Inter-тексти з токеном `typography = heading.*` (застосувати Token Studio → Apply): заголовки 3xs-хедерів (Deposit / Payment history, `heading.xs`), заголовки статусів xl (`heading.md`).

## Відкриті питання
1. Згруповані операції в історії (Account Replenishment з 3 під-операціями й лічильниками статусів) — у `Table/History/Row` Details не слот, тому зараз окремими рядками. Потрібен слот у Details?
2. Статуси на 3xs — `Modal/Default` без бонусу в сайдбарі (як у старому мобайлі), на xl бонус є. Лишати так?
3. Меню на 3xs — `Tabs` (History — коротший текст). Чи потрібен окремий екран-меню, як у Profile?
4. Картинка скрині — порожній `Image/Single`, прикладу над Section ще нема.
5. `Card / Bonus` (DS) у попап не підійшов (MrBet Title, кроки не вимикаються) — взято `Cashbox/Bonus`.
6. «Filter» на xl був поповером біля кнопки; зібрано як окремий попап `Filter`.
