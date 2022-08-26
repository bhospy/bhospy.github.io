import os

import yaml

with open('config.yml','r') as ymlfile:
	sitemap = yaml.load(ymlfile,Loader=yaml.loader.SafeLoader)
