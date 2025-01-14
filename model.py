import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix, classification_report
import joblib
from dotenv import load_dotenv
import os
load_dotenv()

stats_file = os.getenv("BASEBALL_STATS_FILE")

df = pd.read_csv(stats_file, encoding="latin-1")

X = df.drop(columns=["PLAYER", "HOF"])
y = df["HOF"]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=11)

model = LogisticRegression(C=0.3, solver='liblinear', max_iter=1000)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)

# print("Confusion Matrix: ")
cm = confusion_matrix(y_test, y_pred)
# print(cm)

# print("\nClassification Report: ")
cr = classification_report(y_test, y_pred)
# print(cr)

# print(f"Model Accuracy: {accuracy:.2f}")

joblib.dump(model, "hof_model.pkl")

joblib.dump(scaler, "scaler.pkl")
