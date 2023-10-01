from flask import Flask,jsonify
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)
mongo_host = 'localhost'
mongo_port = 27017
mongo_db = 'titles_db'

# Create a MongoClient instance
client = MongoClient(mongo_host, mongo_port)
cors = CORS(app, resources={r"/api/data": {"origins": "null"}})
# Access your database
db = client[mongo_db]
@app.route('/api/data')
def get_json():
    # Access a collection in your database
    collection = db['titles_clean']

    # Query the collection (e.g., find all documents)
    documents = collection.find({}, {"_id": 0})

    # Convert documents to a list
    data = [doc for doc in documents]
    print(data)
    return jsonify(data) 

if __name__ == '__main__':
	app.run()
