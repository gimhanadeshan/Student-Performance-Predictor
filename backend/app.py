from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import joblib
import numpy as np
from datetime import datetime

# Initialize app
app = Flask(__name__)
CORS(app)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///predictions.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define database model
class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    attendance = db.Column(db.Float, nullable=False)
    study_hours = db.Column(db.Float, nullable=False)
    assignment_scores = db.Column(db.Float, nullable=False)
    prediction = db.Column(db.String(10), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Initialize database
with app.app_context():
    db.create_all()

# Load the trained model
model = joblib.load("student_model.pkl")

# Predict endpoint
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        features = np.array([
            data["attendance"],
            data["study_hours"],
            data["assignment_scores"]
        ]).reshape(1, -1)
        prediction = model.predict(features)[0]
        result = "Pass" if prediction == 1 else "Fail"

        # Save prediction to the database
        new_prediction = Prediction(
            attendance=data["attendance"],
            study_hours=data["study_hours"],
            assignment_scores=data["assignment_scores"],
            prediction=result
        )
        db.session.add(new_prediction)
        db.session.commit()

        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# History endpoint
@app.route("/history", methods=["GET"])
def history():
    try:
        predictions = Prediction.query.order_by(Prediction.created_at.desc()).all()
        results = [
            {
                "attendance": pred.attendance,
                "study_hours": pred.study_hours,
                "assignment_scores": pred.assignment_scores,
                "prediction": pred.prediction,
                "created_at": pred.created_at.strftime("%Y-%m-%d %H:%M:%S")
            }
            for pred in predictions
        ]
        return jsonify({"history": results})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run()

