# FAQ, Rules, Statistics — сторінка `32497:579273` («FAQ, Rules, Statistics - Ozerov»)

Статус: **8 сетів зібрано 2026-11-05** (Claude), звірено з `Preview` (референс Андрея, свіжий дизайн, 8 станів × 1096 / 640 / 360) — джерело контенту і структури.

## Розкладка (y = 0, 600 між)
| Section | ID | x | `Layout/3xs` | `Layout/xl` | Що |
|---|---|---|---|---|---|
| `Rules` | 80754:37967 | 0 | 80754:37968 | 80754:38548 | 1. (2 таблиці) / 2. + блок `Games` · About us · Our contacts |
| `Terms and Conditions` | 80765:40327 | 2256 | 80765:40328 | 80765:41597 | як Rules, без таблиці статусів |
| `FAQ` | 80749:44851 | 4512 | 80749:44852 | 80749:45432 | 2 × (Heading Primary + 7 `Accordion`, 2-й Opened з відповіддю) |
| `Statistics` | 80749:27215 | 6768 | 80749:28737 | 80749:30317 | Heading + опис + 5 `Accordion` + примітка |
| `Statistics — Popular Games` | 80749:43114 | 9024 | 80749:43115 | 80749:43695 | GRID `Thumb/Default` + раунди: xl 6×4 · 3xs 3×4 |
| `Statistics — Latest Payouts` | 80749:32698 | 11280 | 80749:32699 | 80749:33279 | `Table` без Head, `Table/Row Divider`: List/Bullet + нік · сума |
| `Statistics — Best Payout to Exchange Rate` | 80749:35976 | 13536 | 80749:35977 | 80749:36557 | `Table` з Head: Image + нік · курс · Bet / Win |
| `Statistics — Best Payout to Stake` | 80749:39357 | 15792 | 80749:39358 | 80749:39938 | те саме, розкритий 5-й (Maximum Payouts) |
| `Old — Pages` · `Old — Components` | 80748:27215 · 80748:27240 | 18048 / 40176 | | | чорні, вміст не змінювався |
| `Preview` (референс Андрея) | 80727:123104 | 50192 | | | не перейменовувати й не фарбувати |

## Рішення
- Розкритий Accordion = `State=Opened`, вміст — у слот `Layout`.
- Усі таблиці сторінки — `Table Variant=Default` + `Table/Row Divider md` (як у Preview — роздільники, не картки). Фіксовані колонки: курс xl 120 / 3xs 80, сума xl 120 / 3xs 64; на 3xs gap клітинок 8.
- Статуси — `Table/Cell` Image + Label + Subtext (3-й рядок «58395770» не влазить у Cell — опущено).
- Блок «Bonus wagering prohibited…» — `Wrapper` `Games` (fill `semantic.background.slate-4`, радіус `border-radius.global.lg`, p 16): Heading Secondary · `Alphabet` GRID 9 кол. (`Link`, «All» Accent; у Preview нема «Y» — залишено) · `Divider` · `Groups` (Title `text/lg-strong` + GRID TEXT xl 4 · 3xs 1).
- Картинки (медалі, ігри) — порожні `Image` / `Thumb` (правило «інстанси без картинок»).

## Вручну (MrBet Black — конектор не змінює)
Усі `Heading` — свіжі інстанси з текстом «Title»: вписати Rules / Terms and Conditions · 1. O cliente obriga-se: · 2. Possible reasons for refusal of service provision · Bonus wagering prohibited in the following slots: · About us · Our contacts · General questions ×2 · Statistics.

## Відкрите
1. MB / XON — перевірено лише MB.
