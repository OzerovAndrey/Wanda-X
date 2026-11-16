# Log in / Sign up — сторінка `34214:1395174` (`↳ Log in / Sign up - Ozerov`)

Статус (2026-11-16): вся сторінка — **попапи** (`Modal/Default` 3xs + xl), лейаутів `Layout/*` нема. Логін і реєстрація — окремими рядами сетів. Старе — у чорних Section праворуч, нічого не видалено.

## Розкладка (крок 2256, 600 між рядами)
Ряд 1 — **логін** (y 0): `Login` 82681:4954 · `Login — Phone` 82682:5104 · `Forgot password` 82682:5314 · `Forgot password — Email sent` 82682:5426 · `Forgot password — Sent again` 82682:5528 · `Forgot password — SMS` 82682:5630 · `New password` 82682:5756 · `Password updated` 82682:5892.
Ряд 2 — **реєстрація** (y 1528): `Registration` 82684:5805 · `Registration — Step 1` 82686:5987 · `Registration — Step 2` 82686:6307 · `Account details` 82686:6645 · `One more step` 82686:6849 · `Congratulations` 82686:6959 · `Congratulations — Email sent` 82686:7073 · `Congratulations — Resend timer` 82686:7181 · `Welcome bonus` 82686:7287.
Old (y 0, від x 20304): `Old — Pages` 82678:4954 (3 signup page) · `Old — Login popups` 82678:4958 · `Old — Password recovery popups` 82678:4966 · `Old — Registration popups` 82678:4986 (one more step / congratulations · реєстрація · AFK) · `Old — Components` 82678:5017 (22 локальні набори / фрейми).

## Як зібрано
- 3xs `Modal/Default Breakpoint=3xs` (x 80, вікно знизу); xl `Breakpoint=xl, Size=sm, Centered=True` (x 480). Header + Title + Closable; Footer лише там, де в оригіналі нижня дія (`Back to Login`, `Proceed to the game` — `Button Text Accent md`, Fill).
- Форма: `Input` (Default / Filled / Error), пароль — Suffix + `eye-off` (Static — Icons), телефон — Prefix `↳ Text` +380 + Arrow (іконку `plus` сховано), селекти (Currency, Country, Date of birth) — Suffix `↳ Arrow`. Пари полів — `Wrapper` H gap 16 (обидва FILL).
- CTA — `Button Primary lg` FILL (maxWidth знято); «Forgot password?» — `Link Neutral md Strong`; «Register / Log in / Resend» — `Link Accent md Strong` у ряді `Prompt` з `Description` (`text/md`, `tt.secondary`).
- Соцмережі — `Divider` Label «or» + ряд `Socials` (Google, TikTok, X — набір `Social icons` 55092:3697, remote, як в оригіналі).
- Кроки реєстрації — ряд `Steps`: «Step N of 2» (`text/sm`, `tt.tertiary`) + `ProgressBar Type=Step` з 2 `Progress/Step`.
- Банер бонусу: xl — `leftBanner = true` у Modal; 3xs — свій `Banner` першим у Body (як у Cashbox: `fill.subtle` + `global.borderRadius.md`, `Image/Single` 88×88 (квадрат) + `Title` / `Description` `text/mdStrong` `tt.primary` / `tt.accent1`). Той самий `Banner` — у `Congratulations` («Confirm your email»).
- Ілюстрації над заголовком (замок у Forgot password, дівчина в Welcome bonus) — вбудований `⬆️ Hero`, порожній.
- 3xs з довгою формою (`Registration — Step 1` 660, `— Step 2` 816) — модалка на висоту вмісту.

## Вписати вручну (MrBet)
- `Title` модалок: Login ×2 сети — «Login»; Forgot password ×4 — «Forgot your password?» (Email sent — «Please wait», Sent again — «Send again»); New password — «New password»; Password updated — «Successfully!»; Registration ×3 — «Registration»; Account details — «Provide your account details»; One more step — «There is just one more step»; Congratulations ×3 — «Congratulations!»; Welcome bonus — «Get up to 300 UAH».
- `leftBanner` (xl, 3 сети реєстрації): Overline «Welcome package», Title «Up to $2 000 + 225 Free Spins».

## Відкриті питання
1. Тексти кнопок в оригіналі були `Label` — поставлено Log in / Send / Send again / Confirm / Save / Next / Register / Confirm email / Go to email / Registration. Підтвердити.
2. `One more step`: в оригіналі ключі перекладів (`email.popup.*.description`) — лишено як є; іконок / рядків-переваг з макета не видно (текст на темному), потрібен референс.
3. Step 2 реєстрації: кругла кнопка «+» ліворуч від CTA в оригіналі — не зібрано (незрозуміла роль).
4. Варіант логіну з 8 соцмережами і відкритий список країн (Dropdown) — окремими сетами не збирали.
5. Локальні `Log out content`, `Nontypical device`, `Confirmation content`, `AFK modal content` не мали попапів на сторінці — сетів нема. Збирати?
6. Приклади картинок (замок, скриня, дівчина, банер Welcome package) над Section — ще не розкладено.
