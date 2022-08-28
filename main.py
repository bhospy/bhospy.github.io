import yaml

Loader = yaml.loader.SafeLoader

with open('sitemap.yml','r') as ymlfile:
	smap = yaml.load(ymlfile,Loader=Loader)
	
for path in smap["page-dirs"]:
	__import__(f"{path}.setup")