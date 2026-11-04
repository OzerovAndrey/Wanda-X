# Інвентар компонентів Wanda X — 2026-11-04 (дельта до 2026-11-03)

Обхід перед збиранням `Mobile Application page` (`page-rebuild.md` §0), 47 сторінок розділів Components · Atoms · Molecules · Organisms · Cards · `[???]`, лише читання. Повний список — `inventory-2026-11-03.md`; тут лише те, що змінилось.

## Сторінки
- `↳ Popup` → **`↳ Modal`** (27928:150291).
- Нова позначка `🔴` на `↳ Popover`; решта списку — як 2026-11-03.

## Набори
| Компонент | Що |
|---|---|
| `Modal/Default` 79637:25109 | **колишній `Popup/Default`** — перейменовано; ті самі 12v `Breakpoint = xl \| 2xs \| 3xs × Centered × Max. height`, слоти `💠 Body`, Labels тощо, Booleans Hero / Back / Footer [stiky] / Welcome bonus / NoDeposit bonus |
| `Profile popup/Variant3`, `/Variant4` | нові на `↳ Modal` (Instance swap) |
| `Notification/Onboarding` 80363:274626 | **новий** |
| `Card / Trusted` 67851:546932 | є `Type = iOS & Android` (кандидат для сторінки Mobile App, якщо знадобиться) |
| `Footer/App banner` 78161:591177 | банер завантаження застосунку у футері (Size sm \| md \| lg) |
| `Segmented` 78970:888 / `Segmented/Item` 78970:859 | без змін; **немає `Inverted`** (на темному банері Mobile App неактивний сегмент зливається) |

Решта наборів (Button 240v, Accordion 12v, Image/Single, Navigator, Heading, Layout/*, Tabs, Table/*, Progress, Status, Time …) — без змін властивостей відносно 2026-11-03.
