from flask import Flask, request, render_template_string
import csv
import os

app = Flask(__name__)

CSV_FILE = 'submissions.csv'

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name', '')
    phone = request.form.get('phone', '')
    email = request.form.get('email', '')
    message = request.form.get('message', '')

    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        if not file_exists:
            writer.writerow(['Name', 'Phone', 'Email', 'Message'])
        writer.writerow([name, phone, email, message])

    return "Submission saved! <a href='/'>Go back</a>"

if __name__ == '__main__':
    app.run(debug=True)