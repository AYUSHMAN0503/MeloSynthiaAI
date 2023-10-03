pip install -r requirements.txt
gunicorn -w 10 "predict" 