# Сторінка `Referal program - Ozerov` — зібрано 2026-11-05

Page id `31380:680544`. Стани: **основний** (банер + «How does it work?» + Rules) і **Blocked** (реферальну систему заблоковано).

## Джерело
Section `Referal program` + `Referal program/blocked` (свіжий дизайн, тепер `Old — Design` / `Old — Design — Blocked`) — контент і структура лише з них. Старі `.Desktop/.Mobile page (Debricate)` — довідка (там Rules — заглушки `Label`).

## Розкладка (y = 0, 600 між)
| Вузол | id | x | Що |
|---|---|---|---|
| `Referral Program` | 80689:28562 | 0 | 3xs 80689:28563 · xl 80689:28564 — Banner (Title, `Stats`, Button «Copy referral link», `Description`) · Wrapper «How does it work?» + `Steps` (xl H gap 16, 3xs V gap 8) · Wrapper «Rules» + `Rules` (`List/Item — Default Ordered=False` ×3, gap 16) |
| `Referral Program — Blocked` | 80690:31866 | 2256 | 3xs 80690:31867 · xl 80690:31868 — без банера; `Empty Card=False` (слот — порожній `Image/Single` 264; приклад `lock refferal` над Section) |
| `Referral Program/Step` (компонент) | Section 80690:30213, comp 80690:30209 | 4512 | приклади над Section: цифри 1–3 + `fast pay` / `mail` / `play your bonus` |
| `Old — Design` · `Old — Design — Blocked` · `Old — Pages` 80688:7815 · `Old — Components` 80688:7823 | | 5560 → | чорні, вміст не змінювався |

База сетів — clone `VIP Club` (80510:16829) з group/ungroup; Blocked — clone основного, Empty вставлено через placeholder `Spinner` + swap.

## `Referral Program/Step`
H · center · p `spacing.400` / `spacing.200` · gap `spacing.200` · радіус `border-radius.global.lg` · fill — paint style `contextual/referral/step/fill` (токен `contextual.referral.step.fill` → `semantic.gradients.4`, вже був у TS). Анатомія: `Number` (Image/Single 40) · `Label` (`text/md`, `semantic.text.banner-cart.primary`, Fill; жирне — range `text/md-strong` в інстансі) · `Image` (Image/Single 72). Hug по висоті (у старому — фікс 84, текст не влазив на xl); на xl у ряді — Fill по висоті. Нових токенів нема (як у VIP — глобальні spacing напряму).
Замість старих `Step` (Step 1–3 × md/sm — різниця лише в картинці → один компонент). `rope` і тінь `shadow.referal.step-card` (нема в експорті TS) не перенесено.

## Банер
Стандарт: по центру (у дизайні текст ліворуч + персонаж праворуч — Title MrBet вирівняти через API не можна). `Stats` — H gap `spacing.400`, два TEXT `Friends` / `Bonus` (`text/sm`, `default-invert.secondary`, число — range `text/md-strong` + `semantic.text.brand.primary`).

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| `Referral Program` 3xs + xl, Banner `Title` | Welcome to Winzaro Loyalty Program | Invite friend and get $ 25! |
| `Referral Program`, 1-й `Heading Secondary` | Statuses and levels | How does it work? |
| `Referral Program`, 2-й `Heading Secondary` | Terms and Conditions | Rules |
| `Referral Program — Blocked`, `Empty` Title | Choose your Welcome Bonus | Oops... |

## Відкрите
1. Банер: лишити стандарт по центру чи як у дизайні — текст ліворуч?
2. «How does it work?» у дизайні по центру, «Rules» — ліворуч; зараз Heading без зміни вирівнювання (як в інстансі).
3. Тінь кроку `shadow.referal.step-card` — нема в експорті токенів; потрібна?
4. Blocked xl: у дизайні лише мобайл — xl зібрано за аналогією.
5. Тексти Rules — з дизайну (Binance / USDT) — схоже на заглушку.
