dependencies:
	pip install -r requirements.txt && npm i

build:
	npm run build

run:
	export FLASK_APP=movies FLASK_ENV=$(mode) && flask run

run-front:
	npm run dev

test-all:
	pytest

test:
	pytest -k $(matching)
