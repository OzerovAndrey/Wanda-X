---
name: wanda-x-design-system
description: Правила, еталони та чекліст очистки для Figma-файлу "[Wanda X] Design system" (fileKey 3MbdWPLOGBjBj92Y3EnPYN, бренди MB / BB / SC / XON, Token Studio core/alias/component). Use ANY TIME the user works on Wanda X components, layouts or tokens — audit, cleanup, fixing a component, building a layout from Wanda X components — or mentions "Wanda X", "Wanda X ДС", file key 3MbdWPLOGBjBj92Y3EnPYN, MB/BB/SC/XON themes. INDEX file — read rules/core.md + the one rules/ file the task needs; nothing else.
---

# Wanda X — index

Дизайн-система від іншого департаменту; команда Андрея її очищує. Еталон якості — компоненти **Ready for dev**.

| | |
|---|---|
| Figma | `3MbdWPLOGBjBj92Y3EnPYN` · `https://www.figma.com/design/3MbdWPLOGBjBj92Y3EnPYN/-Wanda-X--Design-system` |
| Бренди | **MB**, **BB**, **SC**, **XON** — Token Studio сети `<бренд>/core` + `<бренд>/override`, спільні `default/*` + `inverse/*`; Figma-колекції `Product` (MB / BB / SC / XON) і `Theme` (Default / Inverse) |
| Іконки | тільки `Static — Icons` (`J3DHQyf6ARy401o7WywySC`) |
| Ready for dev | Atoms → `Accordion`, `Badge`, `Button`, `Link`, `Divider`, `Dropdown`, `Label`, `Spinner` (через API не читається — оновлювати тут вручну) |

## Як читати (економія токенів)
1. **Завжди:** `rules/core.md` — усі жорсткі правила.
2. **Плюс один `rules/` файл під задачу.** Нічого більше без потреби.
3. `pages/*.md`, `references/components/*.md` — база знань: **тільки** файл сторінки / компонента, з яким працюєш зараз.
4. `references/*` — довідка на випадок проблеми. `CHANGELOG.md` (корінь репо) — не читати, лише дописувати.

## Задача → файл
| Задача | Читати |
|---|---|
| **Зібрати / перезібрати продуктову сторінку** | `rules/build-page.md` (+ `pages/<ця-сторінка>.md`, якщо є) |
| Переробити / виправити компонент | `rules/build-component.md` (+ `references/components/<c>.md`) |
| Команда оновила / додала компонент — вивчити | `rules/learn-component.md` |
| Токени: свіжий архів, нові токени, прив'язка, JSON-handoff | `rules/tokens.md` |
| Щось падає в Plugin API / MrBet / міграція / Export | `references/figma-pitfalls.md` |
| Деталі: неймінг і опечатки · еталони Ready for dev · іконки · проблеми токенів · ручна вставка JSON | `references/naming.md` · `reference-components.md` · `icons.md` · `tokens.md` · `token-studio.md` |
| Аудит скриптом / беклог | `references/audit-script.md`, `references/audit-2026-10-19.md` |
| Статуси компонентів, питання команді | `references/component-registry.md`, `references/open-questions.md` |

## Куди записувати нове (робити самому, без нагадувань)
| Андрей сказав / сталося | Куди | Як |
|---|---|---|
| Нове правило для всього (токени, шари, неймінг, Section, режим роботи) | `rules/core.md` | один рядок у свій розділ; суперечить старому — замінити старий рядок |
| Нове правило збірки сторінок (розкладка, блок, Layout, чекліст) | `rules/build-page.md` | рядок у §1–7 або рядок у таблицю «Типові блоки» |
| Нове правило збірки компонента / властивостей / DoD | `rules/build-component.md` | так само |
| Нове правило токенів (іменування, handoff, Export) | `rules/tokens.md` | так само |
| Нова пастка Plugin API | `references/figma-pitfalls.md` | рядок у свій розділ |
| Знання про конкретну сторінку (ID сетів, нові компоненти, відхилення, питання) | `pages/<page>.md` | створити за зразком `pages/vip.md`, коротко |
| Знання про конкретний компонент (анатомія, токени, рішення) | `references/components/<c>.md` | за `_template.md` |
| Статус компонента змінився | `references/component-registry.md` (+ список Ready for dev тут) | рядок |
| Питання до команди / відповідь на нього | `references/open-questions.md` → після відповіді — у правило або `components/<c>.md` | |
| Що зроблено (будь-яка робота) | `CHANGELOG.md` у корені репо | один рядок зверху, з датою |
- Правило в `rules/` — **без історії й дат**, один рядок; історія — лише в `CHANGELOG.md`.
- Після запису — коміт у `main` (`rule: …`, `page(<p>): …`, `component(<c>): …`, `learn(<c>): …`, `tokens: …`) і push.
- Скіл у Claude app — копія; після змін у репо нагадати Андрею перезалити zip, якщо він ним користується.

## Скрипти (`scripts/` у корені репо — виконувати, не читати)
`inventory.js` (обхід компонентів) · `layout-audit.js` (аудит сету сторінки) · `section-create.js` · `snapshot-component.js` + `snapshot-diff.py` (вивчення) · `tokens-diff.py` (diff свіжого архіву). Повний експорт токенів — `tokens/system/`.
