import os

import yaml

with open('config.yml','r') as ymlfile:
	pagedics = list(yaml.load_all(ymlfile,
		Loader=yaml.loader.SafeLoader))[0]

paths = []

for pagedic in pagedics:
	for page,majordics in pagedic.items():
		for majordic in majordics:
			for major,items in majordic.items():
				for item in items:
					paths.append(os.path.join(page,major,item))

# print(pages[0]['pydemo']['scicomp'])

# for page in pages:
# 	print(page[page.keys()])
# 	# print()
	# for major in page:
	# 	print(major)
