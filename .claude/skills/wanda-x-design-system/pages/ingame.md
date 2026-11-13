# Сторінка `Ingame - Ozerov` — зібрано 2026-11-05

Page id `30413:783109`. Ігрове вікно: рейка іконок + панель (стани) + гра з тулбаром. Живий приклад — winzaro.promo `/games/demo/…`.

## Джерело
Section `Design` 80806:196059 (чорна, референс — не чіпали) — 20+ під-Section: Desktop ingame, Profile, Tournament, Winning now, Bet Hero, Featured Games, Search, Boosters, Bonuses balances, Strip, Random games, Mobile ingame, Notification … Старі локальні компоненти (`Ingame left panel`, `Content ingame desktop`, `ingame mobile content`, `[M] menu mob game` …) і Section `Ingame components` — лише довідка, не переносились і не змінювались.

## Каркас — `Ingame/Layout` (а не `Layout/3xs` + `Layout/xl`)
| Breakpoint | Розмір | Склад |
|---|---|---|
| `xl` | 1096×616 (fill `semantic.background.slate-1`) | `Navigation` (64, fill `menu.fill` як у `Sidebar`, `Theme = Inverse`, p `spacing.200`, 11 кнопок + Home знизу) · слот `Panel` (264, fill `background.slate2`, p/gap `spacing.400`, `Theme = Inverse`) · `Game` (pt/pl/pr `spacing.600`, gap `spacing.400`: `Toolbar` View mode + ★ ×, `Image/Single` Fill) · `Collapse` (Button Neutral sm, absolute) |
| `3xs` | 320×640 | `Game` `Image/Single` (absolute) · `Navigation` (fill `menu.fill` як у `Sidebar`, 8 кнопок + Close, `Theme = Inverse`) · слот `Panel` (Fill, fill `background.slate2`, `Theme = Inverse`) |
**Усі панелі (`Panel` xl і 3xs) — `Theme = Inverse`**; усередині без `Inverted` / `[Invert]`-варіантів (звичайні `Text`, `Inverted=False`).
Сет = Section 1656 × (80+h+80): `Ingame/Layout 3xs` x 80 + `xl` x 480. Пункти рейки — DS `Button` `Text` lg `Label=False` (48×48) з іконкою зі Static, ім'я шару = назва іконки; активний — override `Variant=Neutral`, `State=Active` + повторний swap іконки (зміна варіанта скидає іконку). Окремого компонента пункту нема (`Ingame/Navigation item` прибрано 2026-11-11). Якщо вміст панелі вищий за екран — інстанс Hug по висоті (Profile, Tournament).

## Розкладка (2026-11-11 — плиткою, по 10 у ряд, 600 між)
| Ряд, y | Section (зліва направо, крок x 2256) |
|---|---|
| 1, y 0 | Guest · Profile · Demo · Game · Write off · Winning now · Winning now Demo · Tournament · Tournament Join · Bet Hero |
| 2, y 1496 | Bet Hero Active · Featured · Search · Search Not found · Boosters · Boosters Empty · Bonuses · Bonuses Empty · Notifications · Notifications Empty |
| 3, y 2896 | Strip Rules · Strip Choose · Strip Model · попапи Bet Hero · 5% cashback · You've already claimed a cashback! · Congratulations! · Bad luck in this game? · Back to Lobby? · Resetting girl's progress |
| 4, y 4424 | попапи Search · Search — Found |
| Над плиткою, Section `Components` 81944:7093 (x 0, y −1560) | `Ingame/Layout` 80834:42333 · `Ingame/Booster` 80836:42252 · `Ingame/Bonus` 80836:42322 |
Сети: `Ingame/Layout 3xs` x 80 + `xl` x 480 у Section 1656 × (80+h+80). Старого на сторінці більше нема.

## Компоненти сторінки
| Компонент | Анатомія / токени |
|---|---|
| `Ingame/Layout` | див. Каркас; слот `Panel` |
| `Ingame/Booster` | V p `spacing.400` gap `spacing.300`, fill `fill.subtle`, радіус `global.borderRadius.lg`: `Image/Single` 96 · опис · `Price` (Coin `Image` 20 + Value lg-stronger) · Button Primary «Buy» · `Info` (absolute) |
| `Ingame/Bonus` | `State = Default \| Delete`; fill `fill.subtle`, p `spacing.300` / pb `spacing.400`, gap `spacing.200`, без обведення, радіус `global.borderRadius.lg`; `Image` (absolute праворуч) · Header + close · Progress-рядок (DS `Progress` Line sm) · Valid for / Wager · Activate; Delete — Title, Description, Cancel (Static) / Delete |
Блоки без нових компонентів (`Wrapper` + DS): рядок Winning now (`Wrapper` H gap `spacing.200`: `Image/Single` 40 · `Wrapper` Player xs + Game sm-strong · `Amount` md-strong; `Ingame/Winner` прибрано 2026-11-11), User (аватар, ім'я, статус, mail, Progress), Talisman, Bonus-рядок (Progress/Circle + trash), Write off, Tournament Banner/Stats/My result, провайдери в пошуку. Нових токенів нема.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| усі 9 попапів, `Title` (3xs + xl) | Title | назва Section (Bet Hero, 5% cashback, You've already claimed a cashback!, Congratulations!, Bad luck in this game?, Back to Lobby?, Resetting girl's progress) |
| `Boosters Empty`, `Bonuses Empty` — `Empty` Title | Choose your welcome bonus | No active booster |

## Відкрите
1. **Колекція змінних**: у файлі з'явилась нова колекція `Theme` (80802:…, режими Default / Inverse, camelCase-назви `text/default/primary`, `ingame/navmenu/fill` …), а `Product` тепер лише core + `override/*`; старі `contextual/*` змінні видалені. Прив'язки зроблено до `Theme` (Token Studio plugin data — як завжди). Це нова схема від команди? Оновити правило «однойменна змінна Product»?
2. 3xs-панель: режим `Theme = Inverse` на слоті замість `Inverted`-варіантів кожного DS-компонента — ок? Кнопки / List / Progress / Table на ньому не інвертуються (прив'язані до старих змінних) → використано `Text [Invert]`, `Inverted=True` де є.
3. MB: панель xl біла (`contextual.content.fill` = slate-2 = white), а `Account/Balance`, `FastClickPayment` розраховані на темне тло — тексти майже не читаються. Потрібен Inverted у цих компонентах або темний `content.fill` для Ingame.
4. Заголовки панелей (`Header/Title`, 18 сетів × 2) — xl `heading/xl`, 3xs `heading/xs`; токени Token Studio `heading.xl` / `heading.xs` проставлено на всіх 36, стиль застосовано: Demo (Андрій), Game і Write off (клон його `Book Of Ra`); решта 30 — вручну (конектор не пише MrBet, клонувати можна лише готовий текст із тим самим словом на цій сторінці).
5. Рейка: іконки — найближчі зі Static (crown = Winning now, flame = Strip, gamepad = Bet Hero, thumb-up = Popular?, flash = Boosters, goblet-filled = Tournament, support); на 3xs пункт «wallet» замість картки — уточнити.
6. Горизонтальний мобайл (640×360) не збирався — наступний захід (третій Breakpoint `Ingame/Layout`?).
7. Картинки-приклади (банери турніру / стрипу, скриня, слот-машина) над Section не викладені — у референсі вони remote / растрові.

## Зміни 2026-11-11 (оновлення компонента Table)
- `— Tournament`, `— Tournament Join`, 3xs: рядки `Leaderboard/Row Card Inverted=True` і комірки `…/True` (42 інстанси) → swap на актуальні (без Inverted); на обох лідербордах виставлено `Theme = Inverse` — тексти білі, картки `fill.subtleInvert`. Питання 2 вище для таблиць закрите: інверсія тепер лише через `Theme`.
- Відкрите: у вузькій 3xs-комірці Subtext (номер) переноситься `58395 / 770` — `Subtext` у `Table/Cell` FIXED.

## Поверхні на панелі (2026-11-11)
Картки й блоки на панелі (`Ingame/Booster`, `Ingame/Bonus`, Bonus-рядок, Write off, провайдери) — `fill.subtle` (Default `core.content.a8`, Inverse `core.white.a30`). Не `fill.default` (це заливка контролів) і не `background.slate2` (= фон панелі `content.fill`, у Inverse зливається). Компонентні `bonuses.*`, `card.general.*` прибрано — лише глобальні.

## Токени `Ingame/Layout` (2026-11-11)
Лише глобальні: корінь xl `background.slate1`, `Navigation` `menu.fill` — той самий токен, що в `Sidebar/Desktop` (рішення Андрея: навігація = кольори сайдбару), `Panel` `background.slate2` (Inverse → `core.grey.900`), `spacing.*`, `global.borderRadius.md`. Компонентні `ingame.*`, `content.fill` не використовуються — команда їх депрекейтне. Мобільна панель тепер суцільна (було напівпрозоре `ingame.mob.bg` поверх гри).

## Відступи (2026-11-13)
Усі gap / padding власних фреймів сторінки (каркас `Ingame/Layout`, `Panel`, `Wrapper`-и, сітки, `Ingame/Booster`, `Ingame/Bonus`) — прості значення без токенів; згадані вище `spacing.*` — лише довідка про значення (100 = 4, 200 = 8, 300 = 12, 400 = 16, 600 = 24).
