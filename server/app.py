# Imports
from flask import Flask, request, jsonify
from mongoengine import Document, StringField, connect
import pandas as pd
import joblib

model = joblib.load('hof_model.pkl')
scaler = joblib.load('scaler.pkl')

app = Flask(__name__)


# Database Connection
connect("hof-predict", host="mongodb://localhost:27017/hof-predict")

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
    


    

