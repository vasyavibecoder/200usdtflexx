import json, pathlib, urllib.request
ROOT=pathlib.Path(__file__).resolve().parents[1]
assets=json.loads((ROOT/'assets-manifest.json').read_text(encoding='utf8'))['assets']
for i,url in enumerate(assets,1):
    if not url.startswith('https://game-seawar.com/assets/'): continue
    rel=url.split('/assets/',1)[1].split('?',1)[0]
    out=ROOT/'assets'/rel
    out.parent.mkdir(parents=True,exist_ok=True)
    if out.exists(): continue
    try:
        print(f'[{i}/{len(assets)}] {rel}')
        urllib.request.urlretrieve(url,out)
    except Exception as e:
        print('FAILED',url,e)
