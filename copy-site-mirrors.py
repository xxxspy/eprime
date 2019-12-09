import shutil
from pathlib import Path


here = Path(__file__).absolute().parent
public = here / 'public'

for dirpath in (here / 'siteMirrors').iterdir():
    if not dirpath.is_file():
        dest = public / dirpath.name
        if dest.exists():
            shutil.rmtree(str(dest))
        shutil.copytree(str(dirpath), str(dest))