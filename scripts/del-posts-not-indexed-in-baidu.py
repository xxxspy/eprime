import pandas as pd  
from pathlib import Path


here = Path(__file__).absolute().parent

data = pd.read_csv(str(here / '入口页面_20190605-20200208.csv'))
print(data['页面URL'])

urls = list()
for url in data['页面URL']:
    if '/questionaire-' in url:
        if '?' in url:
            url = url.split('?')[0].strip('/')
        url = url.split('/')[-1]
        if '.' in url:
            url = url.split('.')[0]
        urls.append(url)




all_files = []
for fpath in Path(r'D:\mysites\eprime\source\_posts').iterdir():
    if fpath.is_file() and 'questionaire-' in fpath.name:
        # all_files.append(fpath)
        with open(str(fpath), 'r', encoding='utf8') as f:
            length = len(f.read())
        all_files.append((length, fpath))

all_files.sort(key=lambda x: x[0])


del_count = 0
for i in range(700):
    length, fpath = all_files[i]
    if fpath.stem in urls:
        print('keep:', fpath)
        continue
    print('del:', fpath, length)
    fpath.unlink()
    

