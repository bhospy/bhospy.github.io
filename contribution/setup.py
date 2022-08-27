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
frame_m = template_env.get_template("default.html")
frame_p = template_env.get_template("profile.html")

pages = []

for page_dir in smap['page-dirs']:

	page_path = os.path.join(ppath,page_dir)

	preface_path = os.path.join(page_path,'preface.md')

	with open(preface_path,'r') as mdfile:
		page = frontmatter.loads(mdfile.read())

	page['dir'] = os.path.join(os.pardir,page_dir)
	page['status'] = "active" if page_dir=="contribution" else "passive"
	
	pages.append(page)

page = pages[smap['page-dirs'].index("contribution")]

page['html-ribbon'] = frame_r.render(pages=pages)

page['html-preface'] = markdown(page.content)

page.majors = []

for major_dir in smap['contribution-dirs']:

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
			item['html-column-2'] = frame_p.render(item=item)

		major.items.append(item)

	page.majors.append(major)

page['html-main'] = frame_m.render(page=page)

html = frame_b.render(page=page)

with open('index.html','w') as output_file:
	output_file.write(html)