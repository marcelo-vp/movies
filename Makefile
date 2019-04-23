get-deps:
	pip install flask

run-dev:
	export FLASK_APP=script1.py && flask run