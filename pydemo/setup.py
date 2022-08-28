import os

import frontmatter

from jinja2 import Environment, FileSystemLoader

from markdown2 import markdown

import yaml

cpath = os.path.dirname(__file__)
ppath = os.path.dirname(cpath)

sitemap = os.path.join(ppath,'sitemap.yml')
layouts = os.path.join(ppath,'layouts')

Loader = yaml.loader.SafeLoader
loader = FileSystemLoader(searchpath=layouts)

with open(sitemap,'r') as ymlfile:
	smap = yaml.load(ymlfile,Loader=Loader)

template_env = Environment(loader=loader)

frame_b = template_env.get_template("base.html")
frame_r = template_env.get_template("ribbon.html")
frame_s = template_env.get_template("sidebar.html")
frame_c = template_env.get_template("canvas.html")

pages = []

for page_dir in smap['page-dirs']:

	page_path = os.path.join(ppath,page_dir)

	preface_path = os.path.join(page_path,'preface.md')

	with open(preface_path,'r') as mdfile:
		page = frontmatter.loads(mdfile.read())

	if page_dir=="pydemo":
		page['dir'] = os.curdir
	else:
		page['dir'] = os.path.join(os.pardir,page_dir)
		
	page['status'] = "active" if page_dir=="pydemo" else "passive"
	
	pages.append(page)

page = pages[smap['page-dirs'].index("pydemo")]

page['html-ribbon'] = frame_r.render(pages=pages)

page['html-preface'] = markdown(page.content)

with open('compilation.html','r') as htmlfile:
	page['html-compilation'] = htmlfile.read()

page.majors = []

for major_dir in smap['pydemo-dirs']:

	major_path = os.path.join(cpath,major_dir)

	preface_path = os.path.join(major_path,'preface.md')

	with open(preface_path,'r') as mdfile:
		major = frontmatter.loads(mdfile.read())
		major['html-preface'] = markdown(major.content)

	major.items = []

	for item_markdown in smap[f"{major_dir}-markdowns"]:

		item_path = os.path.join(major_path,item_markdown)

		with open(item_path,'r') as mdfile:
			item = frontmatter.loads(mdfile.read())
			item['html-column-1'] = markdown(item.content)

		major.items.append(item)

	page.majors.append(major)

page['html-sidebar'] = frame_s.render(page=page)
page['html-canvas'] = frame_c.render(page=page)

html = frame_b.render(page=page)

with open('../index.html','w') as output_file:
	output_file.write(html)