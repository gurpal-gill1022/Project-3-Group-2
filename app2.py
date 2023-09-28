from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)

# root route
@app.route('/')
def hello_world():
	return 'Hello, World!'

# Set up MongoDB connection and collection
client = MongoClient('mongodb://localhost:27017/')

# Create database named demo if they don't exist already
db = client['titles_db']

# Create collection named data if it doesn't exist already
collection = db['titles_clean']

# Add data to MongoDB route
@app.route('/read')
def add_data():
	# Insert data into MongoDB

	return (collection.find_one())


if __name__ == '__main__':
	app.run()
