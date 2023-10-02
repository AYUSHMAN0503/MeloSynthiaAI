import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
import pickle


# Sample data
data = {
    'Query': ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    1: [73.37, 70.65, 79.12, 70.43, 91.82],
    2: [109.35, 123.38, 115.56, 104.63, 114.34],
    3: [151.23, 182.29, 144.33, 139.88, 149.87],
    4: [198.90, 222.95, 181.15, 178.67, 187.78],
    5: [215.29, 238.26, 237.78, 223.93, 231.28]
}

# Create a DataFrame from the data
df = pd.DataFrame(data)

# Create an empty DataFrame to store results
results_df = pd.DataFrame(columns=['Query', 'Requested_Duration', 'Predicted_Time'])

# Iterate through the rows and fit linear regression models
for index, row in df.iterrows():
    query = row['Query']
    X = np.array(row.index[1:]).reshape(-1, 1)  # Requested duration
    y = row.values[1:]  # Time taken

    model = LinearRegression()
    model.fit(X, y)

    # Generate a range of requested durations for testing
    test_durations = np.arange(1, 6)

    # Predict the times for the test durations
    predicted_times = model.predict(test_durations.reshape(-1, 1))

    # Create a DataFrame for the current query's results
    query_results = pd.DataFrame({'Query': [query] * 5,
                                  'Requested_Duration': test_durations,
                                  'Predicted_Time': predicted_times})

    # Concatenate the query results with the main results DataFrame
    results_df = pd.concat([results_df, query_results], ignore_index=True)



    print(model.coef_)


with open('duration_analysis.pkl', 'wb') as model_file:
  pickle.dump(model, model_file)