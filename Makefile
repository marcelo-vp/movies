requirements:
	pip install -r requirements.txt && npm i

build:
	npm run build

run:
	export FLASK_APP=movies FLASK_ENV=$(mode) && flask run
