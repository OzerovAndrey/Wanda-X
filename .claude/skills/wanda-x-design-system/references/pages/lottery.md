# Сторінка `Lottery - Ozerov` — зібрано 2026-11-04

Page id `31431:343385`. Модалку (сет `1`, 80390:359896: `Popup/Default` «Good luck» + `Card/Lottery & Tournament/Tickets`) зробив Андрей; лейаути — праворуч від неї, `y = 16837`, 600 px між сетами.

## Джерело контенту — Section `Design` (80445:174868)
Андрей додав на сторінку **Section `Design`** (x 13194, y 20990): `Desktop page` ×2 (список 80445:174871, деталі 80445:174874) і `Mobile page` ×2 (80445:174877, 80445:174878) — **звідси беремо контент і структуру** (рішення 2026-11-04). Картинки в картки і верхній банер **не додаємо** (лишаються плейсхолдери).

## Старе (не чіпали)
`.Desktop page (Debricate)` 68221:20434 (список) і 68345:220505 (деталі), `.Mobile page (Debricate)` 68293:602060 (список) і 68371:162859 (деталі); локальні набори `Lotteries/content`, `Buy tickets section` (default | blocked), `Lottery content`, `Content lottery`, `ticket` (Default | Winning | Gold | Gold-winning), `tickets block text`, `Buy tickets popup content`, `tickt information/1`, `Tiket buy wrap`.

## Нова збірка
| Сет | id | x | Що |
|---|---|---|---|
| `Lottery` | 80453:9009 | 21963 | список за `Design`: `Heading Primary` «Lottery», `Tabs Navigation` All / Lottery history; **xl** — Active і Coming soon по 6 карток (2 кол. × 3), **без Finished**; **3xs** — Active, Coming soon, Finished по 2. Картки: Active — бейдж «Now», «Ends in: 12 d : 35 h», Participate / Read More; Coming soon — без бейджа, «Start in:», Participate (неактивна) / Read More; Finished — бейдж «Finished», «From 14.01.25 – to 25.01.25», Show Results. Статус «This lottery is available…» — на одній картці блоку лише на xl. `Show more` — Secondary без іконки |
| `Lottery — Active` | 80453:14180 | 24219 | деталі лотереї |
| `Lottery/Ticket` (компонент) | Section 80454:14666, set 80454:14665 | 26475 | `Status = Default \| Winning \| Gold \| Gold-winning` |

База — копії сетів Tournaments (`Tournaments`, `Tournament — Active`), перенесені group/ungroup, далі змінено за оригіналом Lottery.

### `Lottery — Active`
```
Container
├─ Wrapper: Button Text + «Lottery» · hero БЕЗ плашки (Image/Multi + назва + приз + Time «Ends in: 12 d : 35 h» + Button Primary lg «Purchase»)
├─ Tags Tickets / Terms / Results            (лише 3xs)
├─ Wrapper: Heading «Terms» + Description + Title «How to get a lottery ticket?» (TEXT text/lg-stronger) + 2 × List/Item + Button Secondary «Show less»
├─ Wrapper «Buy tickets» (лише 3xs): Heading Info + ряд Card/Lottery & Tournament/Tickets (clip) + Navigator
│      + панель «Buy another quantity» (fill semantic/fill/subtle, r16): Title · Input + arrow-narrow-right + Price · Button Primary lg Fill «Buy»
├─ Wrapper «You have 25 lottery tickets»: Heading Info; 3xs — 21 × Lottery/Ticket (wrap, 3 в ряд) + Show more
└─ Wrapper «Prize places»: Table/Leaderboard Striped — Player / Ticket · (Results xl) · Sum / Prize; 1–3 кубки + номер квитка,
       5-й (я) — Selected, помаранчевий текст; Button «Load more»; xl — ще Button Primary md «Claim reward»
```
3xs: комірки таблиці `sm`, колонка Sum / Prize 120.

### `Lottery/Ticket`
H · hug · h24 · center · gap spacing/100 · padding-h spacing/200 · r4 · TEXT `Label` text/md-strong (+ `Icon` 16 у рядку одразу за текстом). Іконка — стандартна `check-mark` зі Static (та сама, що в `Checkbox`). Default — текст `default/primary`; Winning — лише помаранчевий текст `brand/primary`, **без галочки** (рішення 2026-11-04); Gold — обведення `semantic/status/gold/fill`; Gold-winning — заливка `semantic/status/gold/fill`, текст і Icon `default-invert/primary`. Без absolute-бейджа (рішення Андрея 2026-11-04). Старий `ticket` не використовуємо.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| `Lottery` 3xs, третій блок | Coming soon | **Finished** |
| | Tournament games (3xs) | Buy tickets |
| | My progress | You have 25 lottery tickets |
| | Leaders | Prize places |
| | приз у hero `$ 5 000` | `$ 7 500 500` |
| | ціни карток квитків `23.65` (3xs) | 10.00 / 18.65 / 26.65 |

## Відхилення / питання
- Панель «Buy another quantity»: в оригіналі темна (і в MB заголовок нечитабельний) — зібрано світлою карткою `semantic/fill/subtle`; заголовок — TEXT `text/lg-stronger` (heading-стиль конектор не ставить).
- Посилання «Label» після пунктів How to get… в оригіналі — не додано (плейсхолдер).
- Desktop за `Design` не має тегів, Buy tickets і сітки квитків — так і зібрано.
- Декор hero (2 × `Union`) — як на Tournaments.

- Джерело структури списку — локальний `Lotteries/content` (Desktop / mobile: Active, Coming Soon, Finished), а не обрізаний `.Desktop page` (там лише Active і Coming Soon). Урок: серед старих прикладів брати найповніший.
