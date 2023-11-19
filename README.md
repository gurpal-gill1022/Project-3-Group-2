# Project 3 - Group 2 - Most Winningest Titles in Sports History

## Project Description
The purpose of this project is to help people who are new to sports and are trying to get more information about which were the best years in Sports for the five major sports (NBA, NHL, NFL, MLB, MLS). 
The information will be learnt by using a chosen dataset, clean it, visualize the finding and analyse it in order to gain the information across the years of 1958-2018.

The overall project was accomplished by cleaning the CSV file which we acquired that held the information about these five major sports, which this step was done by Gurpal using Jupyter notebook. The next step was importing the CSV into MongoDB database. After that step, we as a team tackled the steps of using Flask to connect MOngoDB database (local database) to the HTML. Finally, we as a team, used Chart.js as the Java Script library to create the charts for the data analysis and visualization.

The biggest challenge we encountered was making the Java Script read the Flask. We solved this by implenting Flask CORS and putting the origins to a null.

Before running the code, make sure you import the dataset with mongoimport --type csv -d titles_db -c titles_clean --headerline --drop titles_clean.csv


## Code Sources

The vast majority of the project is our own work. However, information and certain snippets come from beyond:
- class material extensively referenced but not cut and pasted
- W3's HTML and JS information, primarily used to create the input fields for the dashboard
- chart.js charts were mostly made by referencing material on chart.js's own site at https://www.chartjs.org/docs/latest/
- The "grouby" code snippet in sports.js comes from https://stackoverflow.com/questions/35974976/json-group-by-count-output-to-key-value-pair-json-result and is used to create data arrays for city, state and sport data

## Data Visualization Images

![image](https://github.com/gurpal-gill1022/Project-3-Group-2/assets/123907081/b2fda808-8d2d-4fd5-be00-c65f22d2f3e6)

![image](https://github.com/gurpal-gill1022/Project-3-Group-2/assets/123907081/206d86de-2606-4198-9e5e-029c992a638f)

![image](https://github.com/gurpal-gill1022/Project-3-Group-2/assets/123907081/e0cf339d-099b-4244-8316-331386687780)

![image](https://github.com/gurpal-gill1022/Project-3-Group-2/assets/123907081/b0233ec3-ae0b-48e6-bbcd-222c728bc93d)

![image](https://github.com/gurpal-gill1022/Project-3-Group-2/assets/123907081/5a586d8a-1a32-42ee-8cc7-fcc81fd2103c)

## Conclusion

Results from the Analysis:
Best Timeline of Sports: 2008 - 2018
State with the Most Titles in the Timeline: California
City with the Most Titles in the State: Greater Los Angeles

## Dependencies
1. pandas
2. pathlib
3. pymongo
4. Flask

## Programs/Languages
1. JavaScript
2. Python
3. Jupyter Notebook
4. Visual Studio Code
5. HTML
6. Microsoft Word
7. Microsoft Powerpoint










