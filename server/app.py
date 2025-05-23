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
from compare import hof_vectors, hof_players, df
from sklearn.metrics.pairwise import cosine_similarity
import json
from flask import Flask, send_from_directory


top_hof_players = hof_vectors

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



app = Flask(__name__, static_folder='../client/dist', static_url_path='')

# app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000/"])




# db url

class User(Document): 
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    email = StringField(required=True)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

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

    # Scale player stats
    scaled_player_stats = scaler.transform(player_stats)
    
    # Determine similarity between each player in dataset
    similarity_score = cosine_similarity(scaled_player_stats, hof_vectors)

    # Determine which player (at specific index) is the most similar to user input
    most_similar_index = np.argmax(similarity_score)

    # Grab Player with the most similar stats
   

    most_similar_player = hof_players.iloc[most_similar_index]
    player_comp = most_similar_player.to_json()

    # Make HOF Prediction    
    model_prediction = model.predict(scaled_player_stats)
    json_data = feature_importance.to_json(orient='records')

    # Return
    return jsonify({
        "prediction": "Based on your input, HOF: YES. Check out your player comparable below!" if model_prediction[0] == 1 else "Based on your input, HOF: NO. Check out your player comparable below!",
        "feature_importances": json_data,
        "player_comp": player_comp
    })
   
