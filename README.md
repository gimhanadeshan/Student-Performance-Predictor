
---

# **Student Performance Predictor**

This is a web application that predicts a student's performance (Pass/Fail) based on their attendance, study hours, and assignment scores. The application is built with a React frontend, Flask backend, and a machine learning model.

demo - http://www.spp.gimhana.live

![Image](https://github.com/user-attachments/assets/57681924-dd1a-48cf-88ac-b9bde4440466)

---

## **Features**
- User-friendly interface for entering student data.
- Predicts whether a student will pass or fail.
- Displays prediction history.
- Styled for a modern look.

---

## **Technologies Used**
### **Frontend:**
- React
- Axios (for API communication)
- CSS (for styling)

### **Backend:**
- Flask (Python)
- Scikit-learn (for the machine learning model)
- Joblib (to save/load the model)

---

## **How to Run the Project**
### **1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/StudentPerformancePredictor.git
cd StudentPerformancePredictor
```

### **2. Backend Setup**
- Navigate to the backend folder:
  ```bash
  cd backend
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Train the model (if not pre-trained):
  ```bash
  python train_model.py
  ```
- Run the Flask server:
  ```bash
  python app.py
  ```

### **3. Frontend Setup**
- Navigate to the frontend folder:
  ```bash
  cd frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the React development server:
  ```bash
  npm start
  ```

### **4. Open the Application**
Visit `http://localhost:3000` in your browser to use the application.

---

## **Folder Structure**
```
StudentPerformancePredictor/
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── student_model.pkl
│   ├── requirements.txt
│   └── dataset.csv
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   └── package.json
└── README.md
```

---

## **Future Enhancements**
- Add more features for prediction (e.g., quiz scores, project grades).
- Visualize the dataset and model performance.

---

## **License**
This project is open-source and available under the [MIT License](LICENSE).

---

