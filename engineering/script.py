from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader

template_env = Environment(loader=FileSystemLoader(searchpath="./"))
template = template_env.get_template("layout.html")

class page: pass
class accordion: pass
class item: pass

page.title = "Engineering"

with open('main.md','r') as markdown_file:
	page.html = markdown(markdown_file.read())

with open('_index_.html','w') as output_file:
	html = template.render(page=page)
	output_file.write(html)