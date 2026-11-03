# Сторінка `Hall of fame - Ozerov` — перша сторінка, зібрана Claude за стандартом

Page id `35259:128064` · зібрано 2026-11-03 · стандарт — `page-rebuild.md`.

## Старе (не чіпали)
- `.Desktop page (Debricate)` ×2 (48766:79015 — сайдбар розгорнутий, 68136:34188 — згорнутий), `.Mobile page (Debricate)` 640 і 360.
- Локальні набори: `[M] Hall-of-fame / Header` (35348:267604 — фон-арена + заголовок + п'єдестал; **зламаний**: вміст 516 px у рамці 383, заголовок і опис обидва `heading/xxl` налазять один на одного, п'єдестал обрізаний), `Hall-of-fame / Prize` (35338:238623, `Prize = 1-Gold | 2-Silver | 3-Bronze`: медаль + `Prize-text`), `[M] Hall-of-fame / Prize-text` (сума / нік / гра, прихований номер квитка з hex-кольором), `Hall-of-fame / Content` (48681:1335718: Header + `Hall-of-fame / Table` + Button).
- Таблиця-оригінал — на `↳ Table` (`Hall-of-fame / Table` 48681:1133800, рядки `Player-number-states`).

## Нова збірка — сет `Hall of Fame` (80409:6454)
x 11000, y 0 (праворуч від усього), 1656 × 4025, сіра Section. `Layout/3xs` 80409:6455 (x 80), `Layout/xl` 80409:9246 (x 480). Один стан — у старих макетах інших станів немає.

```
Main Area → Container  V · xl p16/32 gap 32 · 3xs p16/16 gap 24
├─ Heading Variant=Primary (lg | 3xs)                      ← назва сторінки
├─ Hero  V · center · gap 24 · p32/16/16/16 (3xs: бокові 0) · clip
│   ├─ Background — інстанс `Hall of fame / Banner-background` (remote), ABSOLUTE, STRETCH
│   ├─ Description — TEXT text/lg-strong, center, semantic/text/default/primary
│   └─ Podium — копія фрейму `Prizes-on-pedestal`: Hall-of-fame / Prize 2 · 1 · 3 (HUG; 3xs gap 4)
└─ Wrapper V gap 16 · center
    ├─ Heading Variant=Secondary                            ← «The biggest wins of the month»
    ├─ Date  H gap 4: `calendar` 20 + Link Accent md Strong «May 2026»
    ├─ Table/Leaderboard Variant=Card
    │   ├─ Head: Table/Head/Cell — xl: Place / Winner · Status · Game name · Amount won (Right)
    │   │                          3xs: Winner / Game name · Amount won (Right, HUG)
    │   └─ Rows: 9 × Table/Leaderboard/Row Variant=Card (місця 4–12; поточний гравець MyNick — State=Selected)
    │       xl : Cell(⬅️ Icon = List/Bullet № · нік) · Cell(Image = Level «Scout») · Cell(Image = Image/Single · гра) · Cell(Right · сума)
    │       3xs: Cell(List/Bullet № + Image Level + нік + Subtext гра) · Cell(Right · сума, HUG)
    └─ Button Secondary md · Icon ➡️ chevron-down · «Show more»
```
- Номер місця: `List/Bullet Text=False`, `Type=Default`, для поточного гравця `Type=Active`.
- Статус: `Table/Cell Image` → swap на `Level` (remote, `Type=1 Scout`, 77898:65928).
- Топ-3 — на п'єдесталі, тому таблиця починається з 4-го місця (в оригіналі стояли плейсхолдери «0»).

## Що треба доробити вручну (шрифт MrBet Black конектору недоступний)
- **Тексти `Heading`** — стоять дефолтні `Title`: вписати «Hall of Fame» (Primary) і «The biggest wins of the month» (Secondary) в обох брейкпоінтах.
- Великий заголовок героя (`Best players of Winzaro`, `heading/xxl`) конектор створити не може — його роль виконує `Heading Primary`; якщо потрібен центрований заголовок на фоні, вписати вручну.

## Відхилення / питання
| # | Що | Пропозиція |
|---|---|---|
| 1 | Hero зібрано фреймом з remote-фоном і локальними `Hall-of-fame / Prize` (продуктовий блок) | якщо такий hero повторюється (Tournaments, Lottery) — кандидат у компонент `Hero` |
| 2 | Комірка суми на 3xs: `Content` / текст переведено в HUG в інстансі, щоб нік не переносився | у `Table/Cell Align=Right` зробити Content HUG за замовчуванням — **питання** |
| 3 | `Prize-text`: прихований номер квитка з hex-кольором і стилем `Mobile/Mariupol/SM` | прибрати або токенізувати в компоненті |
| 4 | Відступи Container / Hero / Wrapper — без токенів | як на Tournaments / Calendar |
| 5 | Ячейка гри — `Image/Single` 32 (в оригіналі thumb 48 + Link) | ок за `table.md` §7; збільшувати thumb — лише за рішенням |

Аудит збірки: векторів 0, текстів без стилю 0, hardcode-кольорів 0, фреймів без AL 0; remote — лише фон `Banner-background` та іконка `calendar`.
