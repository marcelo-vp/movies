requirements:
	pip install -r requirements.txt

dev:
	export FLASK_APP=movies && flask run
