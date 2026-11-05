# Сторінка `Strip - Ozerov` — зібрано 2026-11-05

Page id `33809:116111`. Стрип-гра: банер «Strip service» + вкладки **Gallery / My model** + попап правил **Strip Game**.

## Джерело
Сині Section дизайну `Gallery`, `My model`, `rules` (тепер `Old — Design — …`, чорні) — контент і структура лише з них (вміст — remote `Strip content` з іншого файлу). Старі `.Desktop/.Mobile page (Debricate)` — довідка. Попап `Strip Game` (колишня Section `1`) Андрей зібрав сам — лише перейменовано.

## Розкладка (y = 0, 600 між)
| Вузол | id | x | Що |
|---|---|---|---|
| `Strip — Gallery` | 80698:16502 | 0 | 3xs 80698:16503 · xl 80698:17110 — Banner (Title, Button «More details») · `Tabs` Navigation (Gallery Selected) · `Gallery`: `Cards` GRID (xl 3 кол. gap `spacing.300`, 3xs 2 кол. gap `spacing.200`) 9 × `Strip/Card` (1 Active, 2 On, 6 Off) + `Strip/Model` (xl Fixed 300 праворуч, 3xs Fill під сіткою) |
| `Strip — My Model` | 80698:18052 | 2256 | 3xs 80698:18053 · xl 80698:18660 — Banner · `Tabs` (My model Selected) · `My Model` V center: прогрес `Wrapper` (xl 312 по центру; 3xs у ряді з `Actions`) · `Girls` (xl Hidden · Default · Hidden, 3xs лише Default; Prev / Next absolute) · `Navigator` · `Bonus` (gift + «Bonus $ 9 000») · `Actions` (undo, close-circle; xl absolute праворуч угорі) |
| `Strip Game` (попап) | 80144:121463 | 4512 | Section Андрея `1`, `Modal/Default` 3xs + xl — не змінювався |
| `Strip/Model` · `Strip/Card` · `Strip/Girl` | Section 80698:14224 / 14225 / 14226 | 6768 → | нові компоненти; приклади картинок (remote `girls`, `Girl`) — над Section Card і Girl |
| `Old — Design — Gallery` · `— My Model` · `— Rules` · `Old — Pages` 80693:14131 · `Old — Components` 80693:14138 | | далі праворуч | чорні, вміст не змінювався |

База сетів — clone `Referral Program` (80689:28562) з group/ungroup; Stats / Description / блоки Container прибрано. Аудит `layout-audit.js` — 0.

## Компоненти
| Компонент | ID | Анатомія / токени |
|---|---|---|
| `Strip/Card` (set) | 80698:14189 | `Type=On, State=Default\|Active` · `Type=Off, State=Default`. V p `spacing.150`, 148 Fixed, fill `contextual.strip.card.fill.default`, stroke `…stroke.default` / `…stroke.active` (Active), радіус `border-radius.global.md` → `Image/Single` 136 (Fill, aspect) · absolute: `Status` (Off; fill `contextual.strip.card.status`, p `spacing.100`/`spacing.200`, радіус md TL+BR, `lock` `semantic.icon.default.secondary`) · `Level` праворуч (heart-filled `semantic.status.error.icon.primary` + `0/7` `text/xs-strong`) · `Price` знизу по центру (gift `semantic.icon.brand.primary` лише On + `text/sm-strong`) |
| `Strip/Model` | 80698:14190 | V p `spacing.300` gap `spacing.200`, 300 Fixed / Hug, fill / stroke `contextual.strip.model-overview.*`, радіус `border-radius.card.general` → `Strip/Girl` Default · прогрес `Wrapper` · `Button Primary md` «Choose» (Fill) · absolute `Info` праворуч угорі (`Title` lg-stronger, `Bonus` gift + lg-strong brand, `Value` lg brand) · `Prev` / `Next` chevron `semantic.icon.default.primary` |
| `Strip/Girl` (set) | 80698:14154 | `Type = Default \| Hidden` (було `Size = >360 \| unvisible`). 288×360 Fixed, V center → `Image/Single` (182 / 202 × Fill) · absolute `Light` (ELLIPSE, style `contextual/strip/girl/light`) · `Podium` (`Ring` stroke `contextual.strip.girl.bottom.elipse-2` + `Glow` style `…elipse-1`) · `Play` (Hidden; play-filled `semantic.icon.brand.primary`) |
**Прогрес** — не окремий компонент: `Wrapper` V gap `spacing.100`, right → DS `Progress` (Secondary md Line, `Value`=true, текст «2/10») + TEXT `Points` (`text/xs`, `semantic.text.default.primary`). Тимчасовий `Strip/Progress` видалено (2026-11-05, на запит).
Нових токенів нема — лише готові `contextual.strip.*` + глобальні. Замість старих `Strip_Card`, `Strip_Status` (злито в `Strip/Card` Off), `Model Overview`, `Strip_Girl`; `Strip_Progress` → DS `Progress`. Не перенесено (приховане в дизайні): `Strip girl step` / `Strip_Steps`, `Strip_video`, `Heart` у прогресі.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| обидва сети, 3xs + xl, Banner `Title` | Welcome to Winzaro Loyalty Program | Strip service |

## Відкрите
1. Банер: у дизайні текст ліворуч + персонажі праворуч — зараз стандарт по центру (як Referral #1).
2. `Strip/Card State=Active` — нового варіанту в старому компоненті не було; в дизайні перша картка з активною рамкою, токен `contextual.strip.card.stroke.active` уже існував.
3. 3xs Gallery: в дизайні 360 — лише карусель моделей без сітки; зроблено сітку 2 кол. (9 карток, остання сама в ряду) + картку моделі — однаковий контент.
4. `Strip/Model` gap: в оригіналі −12 (дівчина накладається на прогрес) — зараз `spacing.200`, картка вища (467 проти 425).
5. `Light` / `Podium` без розмиття (в оригіналі layer blur) — ефектів-токенів нема; додати?
6. Undo / close у My Model — голі іконки (як в оригіналі); може, `Button Text Label=False`?
7. XON-перевірка через API неможлива — глянути вручну.
