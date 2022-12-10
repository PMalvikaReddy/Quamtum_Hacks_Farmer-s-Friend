import numpy as np
import flask
from flask import Flask, render_template,request
import pickle#Initialize the flask App
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
@app.route('/')
def home():
    return render_template('dummy.html')
@app.route('/predict',methods=['POST'])
def predict():
    #For rendering results on HTML GUI
    int_features = [x for x in request.form.values()]
    print(int_features)
    newencoder = pickle.load(open("soilencoder.pkl", "rb"))
    int_features[2] = newencoder.transform([int_features[2]])
    newencoder = pickle.load(open("stateencoder.pkl", "rb"))
    int_features[3] = newencoder.transform([int_features[3]])
    newencoder = pickle.load(open("watersupplyencoder.pkl", "rb"))
    int_features[4] = newencoder.transform([int_features[4]])
    newencoder = pickle.load(open("humidityencoder.pkl", "rb"))
    int_features[5] = newencoder.transform([int_features[5]])
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    output = prediction
    return render_template('dummy.html', prediction_text='The crop suitable for your environment is: ' + output)

if __name__ == "__main__":
    app.run(debug=True)
