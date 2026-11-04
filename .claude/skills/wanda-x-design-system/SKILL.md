---
name: wanda-x-design-system
description: Правила, еталони та чекліст очистки для Figma-файлу "[Wanda X] Design system" (fileKey 3MbdWPLOGBjBj92Y3EnPYN, бренди MB / XON, Token Studio core/alias/component). Use ANY TIME the user works on Wanda X components, layouts or tokens — audit, cleanup, fixing a component, building a layout from Wanda X components — or mentions "Wanda X", "Wanda X ДС", file key 3MbdWPLOGBjBj92Y3EnPYN, MB/XON themes. INDEX file — read rules/core.md + the one rules/ or references/ file the task needs; nothing else.
---

# Wanda X — index

Дизайн-система від іншого департаменту; команда Андрея її очищує. Еталон якості — компоненти **Ready for dev**.

| | |
|---|---|
| Figma | `3MbdWPLOGBjBj92Y3EnPYN` · `https://www.figma.com/design/3MbdWPLOGBjBj92Y3EnPYN/-Wanda-X--Design-system` |
| Бренди | **MB**, **XON** — Token Studio сети `core` / `alias` / `component`; Figma-колекція `Product`, режими MB / XON |
| Іконки | тільки `Static — Icons` (`J3DHQyf6ARy401o7WywySC`) |
| Ready for dev | Atoms → `Accordion`, `Badge`, `Button`, `Link`, `Divider`, `Dropdown`, `Label`, `Spinner` (через API не читається — оновлювати тут вручну) |

## Як читати скіл (економія токенів)
1. **Завжди:** `rules/core.md` (~6 КБ) — усі жорсткі правила.
2. **Плюс один файл під задачу** з таблиці нижче. Більше нічого не відкривати без потреби.
3. `pages/*.md` і `references/components/*.md` — база знань: відкривати **тільки** файл тієї сторінки / компонента, з яким працюєш зараз.
4. `CHANGELOG.md` (корінь репо) — історія рішень; не читати, лише дописувати рядок після роботи.

## Задача → файл
| Задача | Читати |
|---|---|
| **Зібрати / перезібрати продуктову сторінку** | `rules/build-page.md` (+ `pages/<ця-сторінка>.md`, якщо є) |
| Переробити компонент | `references/rebuild-workflow.md`, еталон — `references/reference-components.md` |
| Команда оновила / додала компонент — вивчити | `references/learning-workflow.md`, шаблон `references/components/_template.md` |
| Опис конкретного компонента | `references/components/<c>.md` |
| Токени: JSON-handoff, вставка, Export, свіжий архів + diff | `references/token-studio.md` (структура токенів — `references/tokens.md`) |
| Неймінг (компоненти, властивості, шари, токени) — деталі | `references/naming.md` |
| Щось падає в Plugin API / MrBet / міграція / Export | `references/figma-pitfalls.md` |
| Іконки | `references/icons.md` |
| Чи можна ставити Ready for dev | `references/definition-of-done.md` |
| Аудит скриптом | `references/audit-script.md`, беклог — `references/audit-2026-10-19.md` |
| Що вивчено, статуси | `references/component-registry.md`; питання — `references/open-questions.md` |

## Скрипти (`scripts/` у корені репо — виконувати, не читати)
`inventory.js` (обхід компонентів) · `layout-audit.js` (аудит сету сторінки) · `section-create.js` · `snapshot-component.js` + `snapshot-diff.py` (режим навчання) · `tokens-diff.py` (diff свіжого архіву). Повний експорт токенів — `tokens/system/`.

## Після роботи
Нове правило → у `rules/core.md` або `rules/build-page.md` **одним рядком** (без історії); рядок у `CHANGELOG.md`; коміт у `main`.
