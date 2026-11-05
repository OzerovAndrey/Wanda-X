# Betting — сторінка `70172:36058` (`Betting +`)

Зібрано 2026-11-05 (Claude). Сторінка = промо-банер + вбудований спортбук провайдера (iframe, тема — JSON у Section `Json`).

## Розкладка
| Що | ID | x |
|---|---|---|
| Сет `Betting` (сіра) | 80791:3718 · `Layout/3xs` 80791:5711 · `Layout/xl` 80791:8068 | 0 |
| `Json` — тема спортбука для провайдера (довідка для фронту, не чіпати вміст) | 70172:36061 | 2256 |
| `Old — Pages` (чорна): `Desktop page` 70334:126929 (Layout/xl + старий `Homepage / Banner`) · `Desktop page` 80778:167564 (remote `[M] Desktop page component`) · 2 × `Mobile page` | 80791:9962 | 3341 |

## Main Area
```
xl:  Container (p 16/32, gap 32) → Banner device=lg · Sportsbook
3xs: Banner device=xs (поза Container) → Container (p 16/16) → Sportsbook
```
- `Banner` 78647:15753: Content block, ↳ Discription = true, Subtitle / Slot = false; Description «Get bonuses on your first 3 deposits», Label «Get Bonus». **Title — вписати вручну** «Welcome Bonus up to 600% + 500 FS» (MrBet, конектор не пише).
- `Sportsbook` — фрейм FILL × Fixed з image-заливкою (скрин iframe провайдера зі старого макета; xl 792×511, 3xs 288×645). Це не компонент ДС — погоджений виняток аудиту `hardFills`.
- Старий `Homepage / Banner` (`↳ Slider/Banner - Ден`) не використано — замінено на DS `Banner`.

## Питання
- Спортбук лишаємо скрином (iframe) чи збирати блоки ДС?
- `Sidebar/Item` Betting — ставити `State=Active` у лейаутах сторінок? (на інших сетах активних нема)
