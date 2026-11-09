"""Порівняння двох експортів Token Studio (структура tokens/system/).

Запуск:  python3 -I scripts/tokens-diff.py <старий експорт> <новий експорт>
Напр.:   python3 -I scripts/tokens-diff.py tokens/system /шлях/до/розпакованого/архіву

Друкує по кожному сету кількість токенів і списки + додано / − видалено / ~ змінено,
а також чи змінились $themes.json і $metadata.json.
"""
import json
import sys

import glob, os


def sets_of(root):
    """Сети з $metadata.json (tokenSetOrder), інакше — усі */*.json."""
    try:
        return json.load(open(os.path.join(root, '$metadata.json')))['tokenSetOrder']
    except Exception:
        return sorted(os.path.relpath(f, root)[:-5] for f in glob.glob(os.path.join(root, '*', '*.json')))


def flat(d, p=''):
    for k, v in d.items():
        if isinstance(v, dict) and 'value' in v and not isinstance(v['value'], dict):
            yield p + k, (json.dumps(v['value'], ensure_ascii=False), v.get('type'))
        elif isinstance(v, dict):
            yield from flat(v, p + k + '.')


def load(root, f):
    path = f'{root}/{f}.json'
    return dict(flat(json.load(open(path)))) if os.path.exists(path) else {}


def main(old, new):
    so, sn = sets_of(old), sets_of(new)
    if so != sn:
        print('== СТРУКТУРА СЕТІВ ЗМІНИЛАСЬ:', so, '→', sn)
    for f in list(dict.fromkeys(so + sn)):
        a = load(old, f)
        b = load(new, f)
        add = sorted(set(b) - set(a))
        rem = sorted(set(a) - set(b))
        chg = sorted(k for k in set(a) & set(b) if a[k] != b[k])
        print(f'== {f}: {len(b)} токенів (було {len(a)}) · +{len(add)} −{len(rem)} ~{len(chg)}')
        for k in add:
            print('  +', k, b[k][0])
        for k in rem:
            print('  −', k, a[k][0])
        for k in chg:
            print('  ~', k, a[k][0], '→', b[k][0])
    for f in ['$themes', '$metadata']:
        same = json.load(open(f'{old}/{f}.json')) == json.load(open(f'{new}/{f}.json'))
        print('==', f, 'однаковий' if same else 'ЗМІНИВСЯ')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
