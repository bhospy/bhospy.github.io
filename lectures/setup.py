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

frame_base		= template_env.get_template("base.html")
frame_ribbon	= template_env.get_template("ribbon.html")
frame_sidebar 	= template_env.get_template("sidebar.html")
frame_canvas 	= template_env.get_template("canvas.html")

pages = []

for page_dir in smap['page-dirs']:

	page_path = os.path.join(ppath,page_dir)

	preface_path = os.path.join(page_path,'preface.md')

	with open(preface_path,'r') as mdfile:
		page = frontmatter.loads(mdfile.read())

	page['nick'] = page_dir

	if page_dir=="pydemo":
		page['dir'] = os.pardir
	else:
		page['dir'] = os.path.join(os.pardir,page_dir)
		
	page['status'] = "active" if page_dir=="lectures" else "passive"
	
	pages.append(page)

page = pages[smap['page-dirs'].index("lectures")]

page['html-preface'] = markdown(page.content)

page.mdname = "lectures"

page.majors = []

for major_dir in smap['lectures-dirs']:

	major_path = os.path.join(cpath,major_dir)

	preface_path = os.path.join(major_path,'preface.md')

	with open(preface_path,'r') as mdfile:
		major = frontmatter.loads(mdfile.read())
		major['html-preface'] = markdown(major.content)

	major.mdname = major_dir

	major.items = []

	for item_markdown in smap[f"{major_dir}-markdowns"]:

		item_path = os.path.join(major_path,item_markdown)

		with open(item_path,'r') as mdfile:
			item = frontmatter.loads(mdfile.read())
			item['html-column-1'] = markdown(item.content)

		item.mdname = item_markdown.split(".")[0]

		major.items.append(item)

	page.majors.append(major)

page['html-ribbon'] 	= frame_ribbon.render(pages=pages)
page['html-sidebar'] 	= frame_sidebar.render(page=page)
page['html-canvas'] 	= frame_canvas.render(page=page)

index_html = frame_base.render(page=page)
index_path = os.path.join(cpath,'index.html')

with open(index_path,'w') as output_file:
	output_file.write(index_html)