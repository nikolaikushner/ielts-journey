#!/usr/bin/env python3
"""Append to data/log.js (the study journal shown on the page).

Usage:
  python3 tools/log.py session < session.json   # add one session entry
  python3 tools/log.py words <week> "<theme>" < words.txt   # add/replace words of a week, lines "word — перевод"
  python3 tools/log.py show                     # print summary

session.json: {"date":"YYYY-MM-DD","mode":"daily|check writing|grammar|speaking|mock speaking|weekly review|words|group|tutor",
  "week":1,"title":"...","summary":"1-2 lines","score":"8/10","level":"A2","band":{"ta":5,"cc":5,"lr":5,"gra":4.5,"overall":5},
  "errors":[{"cat":"Grammar","wrong":"...","right":"..."}]}
Only date, mode, summary are required.
"""
import json, re, sys, os, datetime
P = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'log.js')
PREFIX = 'window.IELTS_LOG = '

def load():
    if not os.path.exists(P): return {"words": {}, "sessions": []}
    s = open(P, encoding='utf-8').read().strip()
    assert s.startswith(PREFIX), 'bad log.js'
    return json.loads(s[len(PREFIX):].rstrip(';'))

def save(d):
    d["sessions"].sort(key=lambda x: (x["date"], x["id"]))
    open(P, 'w', encoding='utf-8').write(PREFIX + json.dumps(d, ensure_ascii=False, indent=1) + ';\n')

cmd = sys.argv[1] if len(sys.argv) > 1 else 'show'
d = load()
if cmd == 'session':
    e = json.load(sys.stdin)
    for k in ('date', 'mode', 'summary'): assert e.get(k), f'missing {k}'
    datetime.date.fromisoformat(e['date'])
    base = e['date'] + '-' + re.sub(r'[^a-z0-9]+', '-', e['mode'].lower()).strip('-')
    ids = {s['id'] for s in d['sessions']}
    eid, n = base, 2
    while eid in ids: eid = f'{base}-{n}'; n += 1
    e['id'] = eid
    for x in e.get('errors', []):
        for k in ('cat', 'wrong', 'right'): assert x.get(k), 'error needs cat/wrong/right'
    d['sessions'].append(e); save(d); print('added', eid)
elif cmd == 'words':
    week, theme = sys.argv[2], sys.argv[3]
    lst = []
    for l in sys.stdin.read().splitlines():
        l = l.strip().strip('`')
        if not l or '—' not in l and ' - ' not in l: continue
        w, t = re.split(r'\s+[—-]\s+', l, 1)
        lst.append([w.strip(), t.strip()])
    cur = d['words'].get(week, {"theme": theme, "list": []})
    cur['theme'] = theme
    seen = {x[0].lower() for x in cur['list']}
    cur['list'] += [x for x in lst if x[0].lower() not in seen]
    d['words'][week] = cur; save(d); print('week', week, len(cur['list']), 'words')
else:
    for w, v in sorted(d['words'].items(), key=lambda x: int(x[0])): print(f'words week {w}: {len(v["list"])} — {v["theme"]}')
    for s in d['sessions']: print(s['date'], s['mode'], '|', s.get('summary', ''))
