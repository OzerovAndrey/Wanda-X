# Loyalty (VIP Club) — сторінка `33498:684868`

Статус: **наведено порядок (2026-11-04)**, нова збірка ще не почата. Нові сети ставити праворуч від Section `Popups` (x ≥ 28484, y = 0, 600 між сетами).

## Розкладка сторінки після впорядкування
Усі старі вузли складено в сірі Section (стиль `section-layout.md`, 80 padding / 80 між вузлами, 600 між Section). Вміст вузлів не змінювався, нічого не видалено.

| Section | ID | Що всередині |
|---|---|---|
| `Originals — VIP components` | 80498:53357 | 14 старих локальних компонентів: `VIP content`, `header/Header user`, `slider statuses`, `[M] Vip-club card`, `glow`, `benefit_card`, `benefits_section`, `terms`, `bullet-lvl-rewards`, `Content-congrats-popup`, `dialog modal content`, `slider dots`, `dots`, `lvl prize` — **не використовувати**, лише довідка (`page-rebuild.md` §2.3) |
| `Old — Authorized` | 80498:53372 | `.Desktop page (Debricate)` 1920 / 1288 / 1096 + `.Mobile page (Debricate)` 640 / 412 / 360 — стан з прогресом гравця (`Your Status`, бали, `Level`, `… left`) |
| `Old — Guest` | 80498:53379 | ті самі 6 брейкпоінтів — стан без прогресу (блок `Level Rewards`) |
| `Old — Card states` | 80498:53386 | 2 фрейми `Desktop page` (слайдер карток статусів: з `Your Status` і без) + 4 інстанси `[M] Vip-club card` |
| `Popups` | 80498:53393 | `Popup/Default` 3xs (80367:306926) і старий інстанс `Popup` (62484:18326) |

## Композиція старого макета (зверху вниз)
Hero-банер «Welcome to … loyalty program» (картинка з текстом, без Heading Primary) → слайдер карток статусів + точки рівнів → блок нагород рівня (3 картки + CTA) → Terms / FAQ (акордеони) → футер.
