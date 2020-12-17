# Chevalier claim check app


### To run the claim check:

 - clone the repo and navigate to folder
 - type `npm start` in the console
 - navigate to http://localhost:3000 in your browser window
 
# Components

ScreenContainer:
 - takes the json file as input
 - determines which screen is shown (question/case state)
 - sets previous screen for backwards navigation
 - sets back and reset buttons
  
Screen:
 - displays current screen
 - handles any answer given
   
