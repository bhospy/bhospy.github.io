def hashtagcount(line):

	if len(line)<4:
		line += " "*4

	if line[:4] == "####":
		return 4
	elif line[:3] == "###":
		return 3
	elif line[:2] == "##":
		return 2
	elif line[:1] == "#":
		return 1
	else:
		return 0

lines = []

with open('mytrial.py','r') as pyfile:

	while True:

		try:
			line = next(pyfile)
		except StopIteration:
			break

		line = line.rstrip()

		if len(line)<1:
			continue

		lines.append(line)

html = []

lastline = False

for index,line in enumerate(lines):

	try:
		lines[index+1]
	except IndexError:
		lastline = True

	currcount = hashtagcount(line)

	if lastline:
		nextH2,nextH1,nextP,nextCode = False,False,False,False
	elif hashtagcount(lines[index+1])==3:
		nextH2,nextH1,nextP,nextCode = True,False,False,False
	elif hashtagcount(lines[index+1])==2:
		nextH2,nextH1,nextP,nextCode = False,True,False,False
	elif hashtagcount(lines[index+1])==1:
		nextH2,nextH1,nextP,nextCode = False,False,True,False
	elif hashtagcount(lines[index+1])==0:
		nextH2,nextH1,nextP,nextCode = False,False,False,True

	currH2,currH1,currP,currCode = False,False,False,False

	if currcount==3:
		before = "" if currH2 else "<h2>"
		after = "" if nextH2 else "</h2>"
		html.append(f"{before}{line[3:]}{after}\n")
		currH2,currH1,currP,currCode = True,False,False,False
	elif currcount==2:
		before = "" if currH1 else "<h1>"
		after = "" if nextH1 else "</h1>"
		html.append(f"{before}{line[2:]}{after}\n")
		currH2,currH1,currP,currCode = False,True,False,False
	elif currcount==1:
		before = "" if currP else "<p>"
		after = "" if nextP else "</p>"
		html.append(f"{before}{line[1:]}{after}\n")
		currH2,currH1,currP,currCode = False,False,True,False
	elif currcount==0:
		print(nextCode)
		before = "" if currCode else "<pre class='code'><code>"
		after = "" if nextCode else "</code></pre>"
		html.append(f"{before}{line}{after}\n")
		currH2,currH1,currP,currCode = False,False,False,True
	else:
		currH2,currH1,currP,currCode = False,False,False,False

with open('mytrial.html','w') as htmlfile:

	for line in html:
		htmlfile.write(line)