import os

# from markdown2 import markdown
import markdown

import frontmatter

from jinja2 import Environment, FileSystemLoader

template_env = Environment(loader=FileSystemLoader(searchpath="./"))

template = template_env.get_template("layout.html")

with open('config.md','r') as mdfile:

	mdcontent = mdfile.read()

	page = frontmatter.loads(mdcontent)

	page['html'] = markdown.markdown(page.content)

majorcounter = 0

page.majors = []

while True:

	try:
		major_dir = page['major{}'.format(majorcounter)]
	except KeyError:
		break
	else:
		majorcounter += 1

	with open(os.path.join(major_dir,'config.md'),'r') as mdfile:

		mdcontent = mdfile.read()

		major = frontmatter.loads(mdcontent)

	major.items = []

	itemcounter = 0

	while True:

		try:
			item_dir = major['item{}'.format(itemcounter)]
		except KeyError:
			break
		else:
			itemcounter += 1

		with open(os.path.join(major_dir,item_dir),'r') as mdfile:

			mdcontent = mdfile.read()

			item = frontmatter.loads(mdcontent)

			item['html'] = markdown.markdown(item.content)

		major.items.append(item)

	page.majors.append(major)

with open('__index__.html','w') as output_file:

	html = template.render(page=page)

	output_file.write(html)