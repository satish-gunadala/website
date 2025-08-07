from flask import Flask, request, redirect, render_template
import csv
import os

app = Flask(__name__)

CSV_FILE = 'data.csv'

# Ensure CSV has headers
if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Name', 'Phone', 'Message'])

@app.route('/')
def index():
    return render_template('index.html')  # ✅ Uses your existing file

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    phone = request.form['phone']
    message = request.form['message']

    with open(CSV_FILE, 'a', newline='') as f:
        writer = csv.writer(f)
        writer.writerow([name, phone, message])

    return "Thanks for submitting! ✅"

if __name__ == '__main__':
    app.run(debug=True)
