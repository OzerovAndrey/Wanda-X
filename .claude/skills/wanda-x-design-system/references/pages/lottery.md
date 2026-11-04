# Сторінка `Lottery - Ozerov` — зібрано 2026-11-04

Page id `31431:343385`. Модалку (сет `1`, 80390:359896: `Popup/Default` «Good luck» + `Card/Lottery & Tournament/Tickets`) зробив Андрей; лейаути — праворуч від неї, `y = 16837`, 600 px між сетами.

## Старе (не чіпали)
`.Desktop page (Debricate)` 68221:20434 (список) і 68345:220505 (деталі), `.Mobile page (Debricate)` 68293:602060 (список) і 68371:162859 (деталі); локальні набори `Lotteries/content`, `Buy tickets section` (default | blocked), `Lottery content`, `Content lottery`, `ticket` (Default | Winning | Gold | Gold-winning), `tickets block text`, `Buy tickets popup content`, `tickt information/1`, `Tiket buy wrap`.

## Нова збірка
| Сет | id | x | Що |
|---|---|---|---|
| `Lottery` | 80453:9009 | 21963 | список: `Heading Primary` «Lottery», `Tabs Navigation` All / Lottery history, Active · Coming soon · Finished (як у `Lotteries/content` — структура для обох брейкпоінтів), xl — 4 картки 2×2, 3xs — 2, у кожному блоці `Show more` |
| `Lottery — Active` | 80453:14180 | 24219 | деталі лотереї |
| `Lottery/Ticket` (компонент) | Section 80454:14666, set 80454:14665 | 26475 | `Status = Default \| Winning \| Gold \| Gold-winning` |

База — копії сетів Tournaments (`Tournaments`, `Tournament — Active`), перенесені group/ungroup, далі змінено за оригіналом Lottery.

### `Lottery — Active`
```
Container
├─ Wrapper: Button Text + «Lottery» · hero (Image/Multi + назва + приз + Time «Ends in: 12 d : 35 h» + Button Primary lg)
├─ Tags ×3                                   (лише 3xs — як в оригіналі)
├─ Wrapper: Heading «Terms» + Description
├─ Wrapper: Heading «How to get a lottery ticket?» + 2 × List/Item — Default + Button Secondary «Show less»
├─ Wrapper «Buy tickets» (лише 3xs): Heading Info + ряд Card/Lottery & Tournament/Tickets (clip) + Navigator
│      + панель «Buy another quantity» (fill semantic/fill/subtle, r16): Title · Input + arrow-narrow-right + Price · Button Primary lg Fill «Buy»
├─ Wrapper «You have 25 lottery tickets»: Heading Info; 3xs — 21 × Lottery/Ticket (wrap, 3 в ряд) + Show more
└─ Wrapper «Prize places»: Table/Leaderboard Striped — Player / Ticket · (Results xl) · Sum / Prize; 1–3 кубки + номер квитка,
       5-й (я) — Selected, помаранчевий текст; Button «Load more»; xl — ще Button Primary md «Claim reward»
```
3xs: комірки таблиці `sm`, колонка Sum / Prize 120.

### `Lottery/Ticket`
H · hug · h24 · padding-h spacing/200 · r4 · TEXT `Label` text/md-strong. Default — текст `default/primary`; Winning — `brand/primary` + `check-mark-circle-filled` 16 (absolute, top-right, `semantic/icon/default/primary`); Gold — обведення `semantic/status/gold/fill`; Gold-winning — заливка `semantic/status/gold/fill`, текст `default-invert/primary` + check. Старий `ticket` не використовуємо.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| `Lottery`, обидва бп, третій блок | Coming soon | **Finished** |
| `Lottery — Active`, обидва бп | Rules: | How to get a lottery ticket? |
| | Tournament games (3xs) | Buy tickets |
| | My progress | You have 25 lottery tickets |
| | Leaders | Prize places |
| | приз у hero `$ 5 000` | `$ 7 500 500` |

## Відхилення / питання
- Панель «Buy another quantity»: в оригіналі темна (і в MB заголовок нечитабельний) — зібрано світлою карткою `semantic/fill/subtle`; заголовок — TEXT `text/lg-stronger` (heading-стиль конектор не ставить).
- Посилання «Label» після пунктів How to get… в оригіналі — не додано (плейсхолдер).
- Desktop оригінал не має Buy tickets і сітки квитків — так і лишено; якщо потрібно на xl — скажіть.
- Декор hero (2 × `Union`) — як на Tournaments.

- Джерело структури списку — локальний `Lotteries/content` (Desktop / mobile: Active, Coming Soon, Finished), а не обрізаний `.Desktop page` (там лише Active і Coming Soon). Урок: серед старих прикладів брати найповніший.
