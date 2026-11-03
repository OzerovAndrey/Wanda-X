# Сторінка `Hall of fame - Ozerov` — перша сторінка, зібрана Claude за стандартом

Page id `35259:128064` · зібрано 2026-11-03 · стандарт — `page-rebuild.md`.

## Старе (не чіпали)
- `.Desktop page (Debricate)` ×2 (48766:79015 — сайдбар розгорнутий, 68136:34188 — згорнутий), `.Mobile page (Debricate)` 640 і 360.
- Локальні набори: `[M] Hall-of-fame / Header` (35348:267604 — фон-арена + заголовок + п'єдестал; **зламаний**: вміст 516 px у рамці 383, заголовок і опис обидва `heading/xxl` налазять один на одного, п'єдестал обрізаний), `Hall-of-fame / Prize` (35338:238623, `Prize = 1-Gold | 2-Silver | 3-Bronze`: медаль + `Prize-text`), `[M] Hall-of-fame / Prize-text` (сума / нік / гра, прихований номер квитка з hex-кольором), `Hall-of-fame / Content` (48681:1335718: Header + `Hall-of-fame / Table` + Button).
- Таблиця-оригінал — на `↳ Table` (`Hall-of-fame / Table` 48681:1133800, рядки `Player-number-states`).

## Нова збірка — сет `Hall of Fame` (80409:6454)
x 11000, y 0 (праворуч від усього), 1656 × 4025, сіра Section. `Layout/3xs` 80409:6455 (x 80), `Layout/xl` 80409:9246 (x 480). Один стан — у старих макетах інших станів немає.

```
Main Area
├─ Hero  V · center · gap 24 · FILL — ПОЗА Container, на всю ширину
│   ├─ Banner  V · center/center · gap 12 · FIXED xl 360 / 3xs 280 · p48/32 (3xs 32/16) · clip
│   │   ├─ Image — `Image/Single Slot=False` ABSOLUTE, STRETCH, fill = чисте фото арени (imageHash з `Banner-background`), **без фейдерів / оверлеїв**
│   │   ├─ Title — звичайні шари (не компонент): 2 TEXT «Best players» / «of Winzaro» heading/xxl, `semantic/text/default-invert/heading`
│   │   │          ⚠ поки в 3 вкладених `Wrapper` — залишок detach; підняти TEXT прямо в Banner і видалити фрейм — вручну (MrBet Black)
│   │   └─ Description — TEXT text/lg-strong (3xs md-strong), center, 400 (3xs 256), `semantic/text/default-invert/primary`
│   └─ Podium — копія `Prizes-on-pedestal` під картинкою (3xs: gap 4, HUG)
└─ Container  V · xl p16/32 gap 32 · 3xs p16/16 gap 24
    └─ Wrapper V gap 16 · center
        ├─ Heading Variant=Secondary                     ← «The biggest wins of the month»
        ├─ Date  H gap 4 (HUG, по центру): `calendar` 20 + Link Accent md Strong «May 2026»
        ├─ Table/Leaderboard Variant=Card
        │   ├─ Head: Table/Head/Cell — xl: Place / Winner · Status · Game name · Amount won (Right)
        │   │                          3xs: Winner / Game name · Amount won (Right, HUG)
        │   └─ Rows: 9 × Table/Leaderboard/Row Variant=Card (місця 4–12; поточний гравець MyNick — State=Selected)
        │       xl : Cell(⬅️ Icon = List/Bullet № · нік) · Cell(Image = Level «Scout») · Cell(Image = Image/Single · гра) · Cell(Right · сума)
        │       3xs: Cell(List/Bullet № + Image Level + нік + Subtext гра) · Cell(Right · сума, HUG)
        └─ Button Secondary md · Icon ➡️ chevron-down · «Show more»
```
**Без `Heading Primary`**; банер — рішення Андрея 2026-11-03: компонент `Image`, чисте зображення без фейдерів, текст поверх відформатований (заголовок + опис по центру). На цій сторінці назву сторінки замінює велика картинка з текстом усередині (рішення Андрея 2026-11-03 — дивитися на композицію старого макета, а не лише на правила).
- Номер місця: `List/Bullet Text=False`, `Type=Default`, для поточного гравця `Type=Active`.
- Статус: `Table/Cell Image` → swap на `Level` (remote, `Type=1 Scout`, 77898:65928).
- Топ-3 — на п'єдесталі, тому таблиця починається з 4-го місця (в оригіналі стояли плейсхолдери «0»).

## Що треба доробити вручну (шрифт MrBet Black конектору недоступний)
- **`Heading Secondary`** — дефолт `Title`: вписати «The biggest wins of the month» і поставити вирівнювання тексту по центру (як у старому макеті) в обох брейкпоінтах.

## Відхилення / питання
| # | Що | Пропозиція |
|---|---|---|
| 1 | Заголовок банера: інстанс `[M] Hall-of-fame / Header` від'єднано (detach) у звичайні шари; конектор не може переносити / створювати TEXT з MrBet Black, тому лишились вкладені `Wrapper` | вручну: TEXT — прямо в `Banner`, фрейм `Title` видалити (Андрей сказав: компонент не потрібен, проста збірка) | якщо такий hero повторюється (Tournaments, Lottery) — кандидат у компонент `Hero` |
| 2 | Комірка суми на 3xs: `Content` / текст переведено в HUG в інстансі, щоб нік не переносився | у `Table/Cell Align=Right` зробити Content HUG за замовчуванням — **питання** |
| 3 | `Prize-text`: прихований номер квитка з hex-кольором і стилем `Mobile/Mariupol/SM` | прибрати або токенізувати в компоненті |
| 4 | Відступи Container / Hero / Wrapper — без токенів | як на Tournaments / Calendar |
| 5 | Ячейка гри — `Image/Single` 32 (в оригіналі thumb 48 + Link) | ок за `table.md` §7; збільшувати thumb — лише за рішенням |

Аудит збірки: векторів 0, текстів без стилю 0, hardcode-кольорів 0, фреймів без AL 0; remote — лише фон `Banner-background` та іконка `calendar`.
