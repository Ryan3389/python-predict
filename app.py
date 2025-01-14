from flask import Flask, request

import pandas as pd
import joblib

model = joblib.load('hof_model.pkl')
scaler = joblib.load('scaler.pkl')

app = Flask(__name__)



@app.route("/", methods=["POST"])
def get_player_stats():
    data = request.get_json()

    player_stats = pd.DataFrame({
        "YRS": [data['YRS']],
        "G": [data['G']],
        "AB": [data['AB']],
        "R": [data['R']],
        "H": [data['H']],
        "2B": [data['2B']],
        "3B": [data['3B']],
        "HR": [data['HR']],
        "RBI": [data['RBI']],
        "BB": [data['BB']],
        "SO": [data['SO']],
        "SB": [data['SB']],
        "CS": [data['CS']],
        "BA": [data['BA']]
    })
    
    scaled_player_stats = scaler.transform(player_stats)
    
    model_prediction = model.predict(scaled_player_stats)
    

    return "Hall of Fame: Yes" if model_prediction[0] == 1 else "Hall of Fame: No"
    


    

