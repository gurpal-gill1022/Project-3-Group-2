from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)
mongo_host = 'localhost'
mongo_port = 27017
mongo_db = 'titles_db'

# Create a MongoClient instance
client = MongoClient(mongo_host, mongo_port)

# Access your database
db = client[mongo_db]

@app.route('/')
def index():
    # Access a collection in your database
    collection = db['titles_clean']

    # Query the collection (e.g., find all documents)
    documents = collection.find()

    # Convert documents to a list
    data = [doc for doc in documents]

    return str(data)

if __name__ == '__main__':
	app.run()
