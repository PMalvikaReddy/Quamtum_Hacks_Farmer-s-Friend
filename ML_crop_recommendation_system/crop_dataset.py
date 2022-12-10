import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

ds = pd.read_csv("crop.csv")
from sklearn.preprocessing import LabelEncoder
encoder = LabelEncoder()
ds["soil"] = encoder.fit_transform(ds["soil"].values)
pickle.dump(encoder, open("soilencoder.pkl", "wb"))
ds["state"] = encoder.fit_transform(ds["state"].values)
pickle.dump(encoder, open("stateencoder.pkl", "wb"))
ds["water_supply"] = encoder.fit_transform(ds["water_supply"].values)
pickle.dump(encoder, open("watersupplyencoder.pkl", "wb"))
ds["humidity"] = encoder.fit_transform(ds["humidity"].values)
pickle.dump(encoder, open("humidityencoder.pkl", "wb")) 

x = ds.iloc[:, :-1].values
y = ds.iloc[:, -1].values
x_train, x_test, y_train, y_test = train_test_split(x, y ,test_size= 0.3, random_state= 50)

from sklearn.svm import SVC
model = SVC(kernel= "linear", random_state=0)
model.fit(x_train, y_train)
file = open("model.pkl", "wb")
pickle.dump(model, file)
file.close()
newmodel = pickle.load(open("model.pkl","rb"))
pred = newmodel.predict(x_test)
print("Accuracy score  of the machine learning model trained is  {:.2f}%".format(accuracy_score(y_test, pred)*100))