# Project 3 - Group 2 - Winningest Sports

The purpose of this project is to help people who are new to sports and are trying to get more information about which were the best years in Sports for the five major sports (NBA, NHL, NFL, MLB, MLS). 
The information will be learnt by using a chosen dataset, clean it, visualize the finding and analyse it in order to gain the information across the years of 1958-2018.

The overall project was accomplished by cleaning the CSV file which we acquired that held the information about these five major sports, which this step was done by Gurpal using Jupyter notebook. The next step was importing the CSV into MongoDB database. After that step, we as a team tackled the steps of using Flask to connect MOngoDB database (local database) to the HTML. Finally, we as a team, used Chart.js as the Java Script library to create the charts for the data analysis and visualization.

The biggest challenge we encountered was making the Java Script read the Flask. We solved this by implenting Flask CORS and putting the origins to a null.

Before running the code, make sure you import the dataset with mongoimport --type csv -d titles_db -c titles_clean --headerline --drop titles_clean.csv


# Code Sources
The vast majority of the project is our own work. However, information and certain snippets come from beyond:
- class material extensively referenced but not cut and pasted
- W3's HTML and JS information, primarily used to create the input fields for the dashboard
- chart.js charts were mostly made by referencing material on chart.js's own site at https://www.chartjs.org/docs/latest/
- The "grouby" code snippet in sports.js comes from https://stackoverflow.com/questions/35974976/json-group-by-count-output-to-key-value-pair-json-result and is used to create data arrays for city, state and sport data

# Data Visualization Images
![image](https://github.com/gurpal-gill1022/Project-3-Group-2/assets/123907081/b2fda808-8d2d-4fd5-be00-c65f22d2f3e6)



