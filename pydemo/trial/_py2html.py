import contextlib

from markdown2 import markdown

class py2html():

	def __init__(self,filepath):

		with py2html.pyopen(filepath) as pyfile:
			self.lines,self.isText = self.readpy(pyfile)

	def readpy(self,pyfile):

		lines,isText = [],[]

		while True:

			try:
				line = next(pyfile)
			except StopIteration:
				break

			if len(line.rstrip())<1:
				continue

			if line[0]=="#":
				isText.append(True)
				lines.append(line[1:])
			else:
				isText.append(False)
				lines.append(line)

		return lines,isText

	def gethtml(self):

		html = ""

		for index,line in enumerate(self.lines):

			if index==0:
				prevLineIsText = False
				prevLineIsCode = False
			else:
				prevLineIsText = self.isText[index-1]
				prevLineIsCode = not prevLineIsText
			
			if index==len(self.lines)-1:
				nextLineIsText = False
				nextLineIsCode = False
			else:
				nextLineIsText = self.isText[index+1]
				nextLineIsCode = not nextLineIsText

			currLineIsText = self.isText[index]

			if not prevLineIsCode:
				code = "<pre class='code'><code>"

			if not prevLineIsText:
				text = ""

			if currLineIsText:
				code = ""
				text += line
			else:
				code += line
				text = ""

			if nextLineIsText or index==len(self.lines)-1:
				if len(code)>0:
					html += code.rstrip()+"</code></pre>\n"
			
			if nextLineIsCode or index==len(self.lines)-1:
				if len(text)>0:
					html += markdown(text)

		return html

	def savehtml(self,filepath):

		with open(filepath,'w') as htmlfile:

			htmlfile.write(self.gethtml())

	@contextlib.contextmanager
	def pyopen(filepath):

		pyfile = open(filepath,"r")

		try:
			yield pyfile
		finally:
			pyfile.close()

if __name__=="__main__":

	run = py2html("mytrial.py")

	run.savehtml("mytrial.html")