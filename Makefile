requirements:
	pip install -r requirements.txt

dev:
	export FLASK_APP=movies FLASK_ENV=development && flask run
