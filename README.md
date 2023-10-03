# Project-3-Group-2

# The purpose of the project is to help people who are new to sports and are trying to get more information about which were the best years in Sports for the five major sports (NBA, NHL, NFL, MLB, MLS). The information will be learnt by using a chosen dataset, clean it, visualize the finding and analyse it in order to gain the information across the years of 1958-2018.

# The overll all project was accomplished by cleaning the CSV file which we acquired that held the information about these five major sports, which this step was done by Gurpal using Jupyter notebook. The next step was importing the CSV into MongoDB database. After that step, we as a team tackled the steps of using Flask to connect MOngoDB database (local database) to the HTML. Finally, we as a team, used Chat.js as the Java Script library to create the charts for the data analysis and visualization.

# The biggest challenge we encountered was making the Java Script read the Flask. We solved this by implenting Flask CORS and putting the origins to a null.

# Before running the code, make sure you import the dataset with mongoimport --type csv -d titles_db -c titles_clean --headerline --drop titles_clean.csv
