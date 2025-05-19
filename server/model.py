import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix, classification_report
import joblib
from scipy.stats import zscore
from dotenv import load_dotenv
import os
load_dotenv()

# stats_file = os.getenv("BASEBALL_STATS_FILE")
stats_file = "500hits.csv"

df = pd.read_csv(stats_file, encoding="latin-1")


# zscore calculate - how far from mean 
z_scores = zscore(df.select_dtypes(include=['float64', 'int64']))

outliers = (z_scores > 3 | (z_scores < -3))
print(f"Outliers detected: {outliers.sum()}")
df_clean = df[~outliers.any(axis=1)]

X = df_clean.drop(columns=["PLAYER", "HOF", 'AB', "R", "3B", "BB", "SO", "SB", "CS"])
y = df_clean["HOF"]
#Added above


scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=11)

model = LogisticRegression(C=0.3, solver='liblinear', max_iter=1000)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
# print(f"Model Accuracy: {accuracy:.2f}")

# print("Confusion Matrix: ")
cm = confusion_matrix(y_test, y_pred)
# print(cm)

# print("\nClassification Report: ")
cr = classification_report(y_test, y_pred)
# print(cr)

#Added below
coefficients = model.coef_[0]
feature_names = X.columns

# Create a DataFrame to view the coefficients
feature_importance = pd.DataFrame({
    'Feature': feature_names,
    'Coefficient': coefficients
})


print("\nFeature Importances:")
# print(feature_importance)
#Added above



joblib.dump(model, "hof_model.pkl")

joblib.dump(scaler, "scaler.pkl")
