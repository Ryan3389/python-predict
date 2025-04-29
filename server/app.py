# Imports
from flask import Flask, request, jsonify
from mongoengine import Document, StringField, connect
import requests
import pandas as pd
import joblib
from dotenv import load_dotenv
import os
from flask_cors import CORS
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
    
    model_prediction = model.predict(scaled_player_stats)
    
    return jsonify("Hall of Fame: Yes" if model_prediction[0] == 1 else "Hall of Fame: No")
    # return "Hall of Fame: Yes" if model_prediction[0] == 1 else "Hall of Fame: No"
    

   
    
    
    
    


# @app.route('/api/predict', methods=["POST"])
# def get_player_stats():
#     data = request.get_json()

    # player_stats = pd.DataFrame({
    #     "YRS": [data['YRS']], # YRS
    #     "G": [data['G']], # G
    #     "H": [data['H']], # H
    #     "2B": [data['2B']], # 2B
    #     "HR": [data['HR']], # HR
    #     "RBI": [data['RBI']], # RBI
    #     "BA": [data['BA']] # BA
    # })
    
    
    # scaled_player_stats = scaler.transform(player_stats)
    
    # model_prediction = model.predict(scaled_player_stats)
    

    # return "Hall of Fame: Yes" if model_prediction[0] == 1 else "Hall of Fame: No"
    


    

