from fastapi import FastAPI, HTTPException
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
import joblib
import numpy as np

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins; adjust as needed
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods; adjust as needed
    allow_headers=["*"],  # Allows all headers; adjust as needed
)

# Load the scaler and model once when the application starts
try:
    scaler = joblib.load("scaler.save")
    model = load_model("temperature_model.h5")
except Exception as e:
    raise RuntimeError(f"Error loading model or scaler: {e}")


@app.get("/")
async def read_root():
    return {"message": "Welcome to the Temperature Prediction API!"}


def predict_temperature(input_data: Dict[str, int]):
    # Ensure the input data is in the correct order and convert to a list
    input_data = list(input_data.values())

    # Convert input data to a NumPy array and ensure it is 2D
    input_data = np.array([input_data], dtype=np.float32)

    # Check if input data has the correct shape (should match model input shape)
    if input_data.shape[1] != 9:
        raise ValueError(f"Expected input of shape (1, 9), but got {input_data.shape}")

    # Scale the input data using the pre-loaded scaler
    input_data_scaled = scaler.transform(input_data)

    # Predict temperature using the pre-loaded model
    prediction = model.predict(input_data_scaled)

    # Return the first prediction (assuming single output)
    return float(prediction[0][0])  # Convert to float to avoid numpy issues


@app.post("/temperature")
async def predict_temp(data: Dict[str, float]):
    # Validate that the input data contains exactly 9 values
    if len(data) != 9:
        raise HTTPException(status_code=400, detail="Expected exactly 9 values.")

    # Try to predict temperature using the provided data
    try:
        temperature = round(predict_temperature(data),3)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid input data: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")

    return {"temperature": temperature}
