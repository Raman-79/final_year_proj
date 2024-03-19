import sys
import pandas as pd

def analyze_file(file_path):
    # Read the Excel file
    df = pd.read_excel(file_path, engine='xlrd')  # Use 'xlrd' for .xls files
    print(df.columns)
    # Count the occurrences of each unique value in the 'Product' column
    product_counts = df['Product'].value_counts()

    # Print the result
    for product, count in product_counts.items():
        print(f'{product}: {count}')

if __name__ == '__main__':
    # The file path is passed as a command-line argument
    file_path = sys.argv[1]
    print(file_path)
    analyze_file(file_path)