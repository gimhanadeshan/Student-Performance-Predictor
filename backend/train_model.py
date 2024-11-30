import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
df = pd.read_csv("data/student_performance.csv")

# Preprocessing (adjust based on dataset)
X = df.drop("Performance", axis=1)  # Features
y = df["Performance"].map({'Fail': 0, 'Pass': 1})  # Target encoding

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
accuracy = accuracy_score(y_test, model.predict(X_test))
print(f"Model Accuracy: {accuracy:.2f}")

# Save the model
joblib.dump(model, "student_model.pkl")
print("Model saved as 'student_model.pkl'")
