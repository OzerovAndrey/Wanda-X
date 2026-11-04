# Loyalty (VIP Club) — сторінка `33498:684868`

Статус: **наведено порядок (2026-11-04)**, нова збірка ще не почата. Нові сети ставити праворуч від сету `Level Rewards` (x ≥ 29164, y = 0, 600 між сетами).

## Розкладка сторінки після впорядкування
Старі вузли складено в **чорні** Section (`#000000`, правило 2026-11-04), 80 padding / 80 між вузлами, 600 між Section. Нові сети — сірі (`#BBBBBB`). Вміст вузлів не змінювався, нічого не видалено.

| Section | ID | Що всередині |
|---|---|---|
| `Originals — VIP components` | 80498:53357 | 14 старих локальних компонентів: `VIP content`, `header/Header user`, `slider statuses`, `[M] Vip-club card`, `glow`, `benefit_card`, `benefits_section`, `terms`, `bullet-lvl-rewards`, `Content-congrats-popup`, `dialog modal content`, `slider dots`, `dots`, `lvl prize` — **не використовувати**, лише довідка (`page-rebuild.md` §2.3) |
| `Old — Authorized` | 80498:53372 | `.Desktop page (Debricate)` 1920 / 1288 / 1096 + `.Mobile page (Debricate)` 640 / 412 / 360 — стан з прогресом гравця (`Your Status`, бали, `Level`, `… left`) |
| `Old — Guest` | 80498:53379 | ті самі 6 брейкпоінтів — стан без прогресу (блок `Level Rewards`) |
| `Old — Card states` | 80498:53386 | 2 фрейми `Desktop page` (слайдер карток статусів: з `Your Status` і без) + 4 інстанси `[M] Vip-club card` |
| `Old — Popup` | 80499:61292 | старий інстанс `Popup` (62484:18326, набір `Popup` 47105:166398) |
| **`Level Rewards`** (новий сет, сірий, готовий) | 80498:53393 | `Modal/Default` Breakpoint=3xs (80367:306926): Title «Level Rewards», Description, CTA `Label` — збирав Андрей, не чіпати |

## Композиція старого макета (зверху вниз)
Hero-банер «Welcome to … loyalty program» (картинка з текстом, без Heading Primary) → слайдер карток статусів + точки рівнів → блок нагород рівня (3 картки + CTA) → Terms / FAQ (акордеони) → футер.
