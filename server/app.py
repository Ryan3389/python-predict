# Imports
from flask import Flask, request, jsonify
from mongoengine import Document, StringField, connect
import requests
import joblib
from dotenv import load_dotenv
import os
from flask_cors import CORS
import pandas as pd
import numpy as np
from model import feature_importance
from compare import hof_vectors
from sklearn.metrics.pairwise import cosine_similarity

top_hof_players = hof_vectors
print(top_hof_players)

load_dotenv()


hof_model_url = os.getenv("HOF_MODEL_FILE")
hof_model_path = "download_hof_model.pkl"

scaler_model_url = os.getenv("SCALER_MODEL_FILE")
scaler_model_path = "download_scaler_model.pkl"

with open(hof_model_path, "wb") as f:
    response = requests.get(hof_model_url)
    f.write(response.content)

with open(scaler_model_path, "wb") as f:
    response = requests.get(scaler_model_url)
    f.write(response.content)

model = joblib.load(hof_model_path)
scaler = joblib.load(scaler_model_path)




app = Flask(__name__)
CORS(app, origins=["http://localhost:3000/"])




# db url

class User(Document): 
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    email = StringField(required=True)

@app.route('/api/predict', methods=["POST"])
def get_player_stats():
    data = request.get_json()
    
    player_stats = pd.DataFrame({
        "YRS": [data['YRS']], # YRS
        "G": [data['G']], # G
        "H": [data['H']], # H
        "2B": [data['doubles']], # 2B
        "HR": [data['HR']], # HR
        "RBI": [data['RBI']], # RBI
        "BA": [data['BA']] # BA
    })

    scaled_player_stats = scaler.transform(player_stats)
    
    # player_vector = scaled_player_stats.to_numpy()
    
    similarity_score = cosine_similarity(scaled_player_stats, hof_vectors)
    print("similarity score below: ")
    # print(similarity_score)

    most_similar_index = np.argmax(similarity_score)
    print("Most similar plyer score below:")
    print(most_similar_index)
    
    model_prediction = model.predict(scaled_player_stats)
    json_data = feature_importance.to_json(orient='records')
    return jsonify({
        "prediction": "Hall of Fame: Yes" if model_prediction[0] == 1 else "Hall of Fame: No",
        "feature_importances": json_data
    })
