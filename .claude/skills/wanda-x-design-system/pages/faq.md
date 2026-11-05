# FAQ, Rules, Statistics — сторінка `32497:579273` («FAQ, Rules, Statistics - Ozerov»)

Статус: **7 сетів зібрано 2026-11-05** (Claude). Section `Design` нема — джерело: 8 старих `.Desktop page` + 16 `.Mobile page` (640 / 360) і локальний `FAQ, Rules, Statistics / Content`. База сетів — клон `News` (Layout/3xs + Layout/xl).

## Розкладка (y = 0, 600 між)
| Section | ID | x | `Layout/3xs` | `Layout/xl` | Що |
|---|---|---|---|---|---|
| `Rules` | 80754:37967 | 0 | 80754:37968 | 80754:38548 | Rules (1. / 2. + 2 таблиці + блок `Games`) · About us · Our contacts |
| `FAQ` | 80749:44851 | 2256 | 80749:44852 | 80749:45432 | 2 × (Heading Primary + 7 `Accordion`, 2-й Opened) — як в оригіналі |
| `Statistics` | 80749:27215 | 4512 | 80749:28737 | 80749:30317 | Heading + Description + 5 `Accordion` Closed + примітка |
| `Statistics — Popular Games` | 80749:43114 | 6768 | 80749:43115 | 80749:43695 | 1-й Opened: GRID `Thumb/Default` + TEXT раундів (xl 5 · 3xs 2 кол., 10 шт.) + опис |
| `Statistics — Latest Payouts` | 80749:32698 | 9024 | 80749:32699 | 80749:33279 | 3-й Opened: `Table/Leaderboard Card` без Head, 10 рядків (List/Bullet + нік · сума) |
| `Statistics — Best Payout to Exchange Rate` | 80749:35976 | 11280 | 80749:35977 | 80749:36557 | 4-й Opened: Leaderboard з Head (Game / Nick · Exchange rate · Bet / Win) |
| `Statistics — Maximum Payouts` | 80749:39357 | 13536 | 80749:39358 | 80749:39938 | 5-й Opened: те саме, що Exchange Rate |
| `Old — Pages` / `Old — Components` | 80748:27215 / 80748:27240 | 15792 / 37920 | | | чорні; десктопи → 640 → 360; 6 локальних компонентів |
| `Preview` | 80727:123104 | 47936 | | | не наш — не чіпали |

## Рішення
- Розкритий Accordion = `State=Opened`, вміст — у слот `Layout` (slot gap 16 для Popular Games).
- Таблиці Rules — `Table Variant=Default` + `Table/Row Divider md`; статуси — `Table/Cell` Image + Label + Subtext (3-й рядок «58395770» з оригіналу в Cell не влазить — опущено); стовпчик курсу Fixed (3xs 64 · xl 120).
- Статистика — `Table/Leaderboard Card` (одна стилістика на сторінці); місце — `⬅️ Icon` = `List/Bullet`; гра — `Image` (порожній дефолт).
- 3xs Exchange Rate / Max Payouts: 3 колонки не влазять у 256 → курс перенесено в `Subtext` під нік, клітинки `Size=sm`, gap Cells 8, сума Fixed 52.
- Блок «Bonus wagering prohibited…» — не компонент, а `Wrapper` `Games` (як hero-wrapper): fill `semantic.background.slate-4`, радіус `border-radius.global.lg`, p 16 → Heading Secondary · `Alphabet` (Link Accent «All» + Default, wrap) · `Divider` · `Groups` (Title `text/lg-strong` + GRID TEXT xl 4 · 3xs 1 кол.). Нових компонентів і токенів нема.
- Відкритого стану «Best Payout» в оригіналі нема (вміст = Latest Payouts) — окремий сет не робили.

## Вручну (MrBet Black — конектор не змінює)
| Де | Зараз | Має бути |
|---|---|---|
| усі сети, перший `Heading Primary` | News | Rules / General questions / Statistics |
| FAQ, 2-й `Heading Primary` | News | General questions |
| Rules, `Heading Secondary` ×3 | Title | 1. O cliente obriga-se: · 2. Possible reasons for refusal of service provision · Bonus wagering prohibited in the following slots: |
| Rules, `Heading Primary` 2-й / 3-й | News | About us / Our contacts |

## Відкрите
1. Картинки статусів (медалі) і ігор у таблицях — порожні `Image` (правило «інстанси без картинок»); приклади лишились у `Old — Pages`.
2. FAQ: тексти питань як в оригіналі (1-ше без номера, 2-ге — `Title / Description…`).
3. MB / XON — перевірено лише MB.
