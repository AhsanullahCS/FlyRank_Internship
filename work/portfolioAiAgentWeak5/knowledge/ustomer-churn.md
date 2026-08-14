# Customer Churn Prediction

## Project Overview

Customer Churn Prediction is a machine learning classification project that predicts whether a telecom customer is likely to leave the service.

## Goal

The goal of the project is to use customer information to predict churn and understand which factors may be associated with customers leaving the service.

## Dataset

The dataset contains customer information such as:

- Gender
- SeniorCitizen
- Partner
- Dependents
- Tenure
- PhoneService
- MultipleLines
- InternetService
- OnlineSecurity
- OnlineBackup
- DeviceProtection
- TechSupport
- StreamingTV
- StreamingMovies
- Contract
- PaperlessBilling
- PaymentMethod
- MonthlyCharges
- TotalCharges
- Churn

## Data Preprocessing

The project included:

- Converting TotalCharges into numeric values
- Handling missing TotalCharges values
- Removing customerID
- Encoding categorical variables
- Feature scaling where appropriate

## Feature Engineering

An AverageMonthlySpend feature was created to provide an additional representation of customer spending.

## Models

The project involved comparing machine learning models including:

- Logistic Regression
- Gradient Boosting
- K-Nearest Neighbors
- Random Forest
- Support Vector Machine
- Decision Tree

## Hyperparameter Tuning

Logistic Regression was tuned using:

C = 0.01

class_weight = balanced

penalty = l2

solver = liblinear

## Results

[ADD ACTUAL PROJECT RESULTS HERE]

Do not invent results.

## What I Learned

The project helped develop practical experience with data preprocessing, feature engineering, classification models, model comparison, and hyperparameter tuning.