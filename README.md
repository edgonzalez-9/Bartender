# Bartender
Finds drinks that can be made from ingredients on hand. 

Step 1 - Create dummy data for drink recipes. 
    - Data will include drink name, ingredients, and proportions. 
Step 2 - Set up a visual layout of how you want the recipes to be displayed
    - Use semantic or another UI library for this, we want something to show for the moment. 
Step 3 - Set up a filter function that allows users to select from a drop down menu to narrow down options
    - Drop down menus will provide a minimum of three ingredients to narrow down with. 
Step 4 - Create a backend to store user recipes. 
    - Backend will alow the addition of recipes through the frontend interface 
Step 5 - Test adding recipes to the database. 
    - Use this to increase the ammount of recipes that are stored in the database.


USER EXPERIENCE

When first opened, the user will see the website title and 'Click Here to Start' button. There the user will see a series of drop down menu selctions that narrow down what drinks can be made with on hand inventory. Once the drinks available are shown the user will be able to click on a drink to see a detailed instruction sheet. This page will also have a button that allows user to start the process from the beginning without having to reset the page. At all times there will be a contact button at the bottom of the page that can be used to send an email with recipe suggestions. 

Go throught Krivik's suggestions on react add ons that we can use. Read documentation and understand where to implement them. 

We now have implemented a dropdown search menu with options that I selected. Next we need to use the selected option to sort through the drinks based on what option is picked. this will require us to understand how to use the select component and how to get it to pass back up the selected option to the app. Then this will be used to reduce the drinks that are shown. 

Will write a thorough flowchart to know what needs to be implemented tomorrow. 

FLOWCHART OF USER EXPERIENCE AND APP FUNCTIONS

1 - User loads page that has title and start options. DONE

2 - User see the dropdown menu that allows them to select drink ingredients. 
    - There is currently a dropdown menu with options but it doesn't do anything. It needs to be connected to a function that takes the input and selects ingredients based on that. 

3 - Once the user has selected an ingredient recipes will show up that contain the ingredients selected. 

4 - The user can click on a particular recipe to see ingredients and instructions. 

5 - ???