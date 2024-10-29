from flask import Flask, request, render_template, redirect, url_for
import os

app = Flask(__name__)

# Configure the upload folder
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Route to render the upload form
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle the file upload
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part", 400

    file = request.files['file']
    if file.filename == '':
        return "No selected file", 400

    # Save the file to the uploads folder
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)

    # Redirect to the details page to show the uploaded file
    return redirect(url_for('details', filename=file.filename))

# Route to display the uploaded file details
@app.route('/details/<filename>')
def details(filename):
    return render_template('details.html', filename=filename)

if __name__ == '__main__':
    app.run(debug=True)
