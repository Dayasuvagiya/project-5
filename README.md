# Foodies Fanclub

I'm a food lover, just like many of others. Food posts and new recipes have always caught my attention, inspiring me to try new dishes and explore my culinary creativity. This passion led me to create Foodies Fanclub, a platform designed for people who share the same love for food.

Foodies Fanclub is a user-friendly space where user can upload pictures of their favorite recipes and engage with others in the community. User can like and comment on recipes, building an interactive and supportive food community. Additionally, User have the option to save their cherished recipes for future reference and create ingredient lists for their next culinary adventures.

My goal is to unite food enthusiasts from all corners of the world. User will find an ever-growing collection of delicious recipes referance, cooking tips, and the collective wisdom of a community that shares the same passion for great food. Whether they are a seasoned chef, an aspiring cook, or simply someone who appreciates a good meal, Foodies Fanclub is here to make user's culinary journey more enjoyable.

This fictional site was created for Portfolio Project #5 (Advanced Front End) - Diploma in Full Stack Software Development Diploma at the [Code Institute](https://www.codeinstitute.net).

[View live website here](https://project-react-5-90ce600c5df4.herokuapp.com/)

![Foodies Fanclub main image](images/main_image.png)

## Table of Contents

- [Project](<#project>)
    * [Objective](<#objective>)
    * [Site Users Goal](<#site-users-goal>)
    * [Project Management](<#project-management>)
        *[Github Project Board](<#github-project-board>)
        *[Database Schema](<#database-schema>)

- [User Experience (UX)](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [User Stories](<#user-stories>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)

- [Existing Features](#features)
  * [Navigation](#navigation)
  * [Authentication](#authentication)
  * [Homepage](#homepage)
  * [Feed](#feed)
  * [Create a Post](#create-a-post)
  * [Ingredients](#ingredients)
  * [Recipes](#recipes)
  * [Profile Page](#profile-page)
  * [Reusable React Components](#reusable-react-components)




    # **Project**

    ## Objective

    Foodies Fanclub aims to create a vibrant online community where food enthusiasts can connect, share their favorite recipes pictures, and discover new culinary experiences. The platform allows users to view, create, edit, delete, comment and review Food posts. The content can be viewed in a logical order and searched on by keywords. Users can also follow each other.

    ## Site User's Goal

    The goal of Foodies Fanclub is to become the go-to online destination for food lovers worldwide, providing a welcoming space for sharing, discovering, and celebrating the world of food. I aim to build a thriving and engaged community of users who connect over their shared passion for food, creating a repository of diverse, mouthwatering recipes and culinary wisdom. Our ultimate goal is to inspire, and delight food enthusiasts of all levels, fostering a global network of individuals who are united by their love for great food and the joy it brings to our lives.

    ## Project Management

    ### Github Project Board

    I've been using the project board in GitHub to keep my project together. In the initial design phase, it was really helpful to plan the project as a whole, and create the user stories based on my wireframe designs. I created a Milestone for each main app created in the backend API plus one additional for Navigation and Authentication, in order to maintain a similar structure to the backend [Project Board](https://github.com/users/Dayasuvagiya/projects/7). Each milestone has a list of bullet points for the main desired frontend features.

    ![User Stories](images/user_story.png)
    ![Project Board](images/project_ss.png)

    ### Database Schema

    All the models have been set up in a separate DRF repository. Click [here](https://github.com/Dayasuvagiya/react.api) to view the repository or [here](https://react-api-p5-3222a1d91d69.herokuapp.com/) to view the deployed API.


    # **User Experience (UX)**

    ## Wireframes

    The wireframes for the site were created in the software [Balsamiq](https://balsamiq.com). The wireframes have been created principally for desktop devices as this is a browser based platform. However, the wesbite is responsive for tablet and mobile. The main grid layout of the components is initially based on the CI Moments walkthrough tutorial as this seems to me the best layout both for wider desktops as for smaller mobile devices for a content sharing platform so I didn't see much reason to change it or find many areas where I could improve on it. Any differences are down to personalised content that fits the project goals.

    <details><summary><b>Wireframes</b></summary>
    ![Post Page](images/home_wf.png)
    ![Post Page2](images/page_before_login.png)
    ![Signin Page](images/signin_wf.png)
    ![Signup Page](images/signup_wf.png)
    ![Profile Page](images/profile_wf.png)
    ![Create Post Page](images/post_wf.png)
    ![User Post Page](images/wf2.png)
    ![Ingredient Page](images/ingredient_wf.png)
    ![Recipe Page](images/recipe_wf.png)

    </details><br/>

    ## User Stories
Here I have listed the main user stories for a user who is not logged in, or has no account and a logged in user. These user stories were then tested and confirmed in the [Testing](<#testing>) section.

### Logged Out Site User
|  | | |
|:-------:|:--------|:--------|
| As a Logged out User | I can log in so that I can interact fully with the site | &check; |
| As a Logged out User | I can sign up so that I can interact fully with the site | &check; |
| As a Logged out User | I can see a list of all posts so that I can see all Posts that have been shared to the site | &check; |
| As a Logged out User | I can view the popular profiles so that I can see who has the most followers | &check; |
| As a Logged out User | I can view the details of an individual profile page so that I can see more profile data | &check; |
| As a Logged out User | I can filter posts so that I can view only the post I'm interested in | &check; |
| As a Logged out User | I can search post by title, profile, date or tag so that I can find one particular post | &check; |
| As a Logged out User | I can view comments of a post so that I can see what other users think about the foos post | &check; |

### Logged In Site User
|  | | |
|:-------:|:--------|:--------|
| As a Logged in User | I can log in so that I can interact fully with the site | &check; |
| As a Logged in User | I can log out from the site so that no-one else can interact with the site using my details | &check; |
FOOD-POSTS
| As a Logged in User | I can see a list of all posts so that I can see all posts that have been shared to the site | &check;
| As a Logged in User | I can view a single post so that I can see single post details | &check; |
| As a Logged in User | I can view the feed page so that I can only see posts of profiles I follow | &check; |
| As a Logged in User | I can view the details of an individual profile page so that I can see more profile data | &check; |
| As a Logged in User | I can see all the posts from one profile so that I can view all the posts of one profile easily | &check; |
| As a Logged in User | I can filter posts by category so that I can view only the post I'm interested in  | &check; |
| As a Logged in User | I can search posts by title, profile, date or tag so that I can find one particular post | &check; |
| As a Logged in User | I can create a new post so that I can promote my didh picture| &check; |
| As a Logged in User | I can edit my posts so that I can change the details or correct mistakes | &check; |
| As a Logged in User | I can delete my own posts so that I can remove posts from the site | &check; |
COMMENTS
| As a Logged in User | I can view comments of the food post so that I can see what other users think about the dish | &check; |
| As a Logged in User | I can create a comment so that I can publicly show my thoughts about my delicious dish | &check; |
| As a Logged in User | I can edit my comments so that I can correct mistakes | &check; |
| As a Logged in User | I can delete a comment that I created so that I can remove comments as I see fit | &check; |
FOLLOW
| As a Logged in User | I can follow another user so that I can see their posts in my feed page | &check; |
| As a Logged in User | I can unfollow another user so that I can stop seeing their food post in my feed page | &check; |
INGREDIENT
| As a Logged in User | I can add ingredients so that I can have a list of ingredient for shopping or next recipe| &check; |
| As a Logged in User | I can Edit and delete ingredients from ingredient list so that I can change my shopping list | &check; |
RECIPE
| As a Logged in User | I can add recipe so that I can keep record of recipes for future reference| &check; |
| As a Logged in User | I can Edit and Delete Recipe from list so that I can change my recipe base on test | &check; |
PROFILES
| As a Logged in User | I can view the popular profiles so that I can see who has the most followers | &check; |
| As a Logged in User | I can view the profile page of another user so that I can see more details about that user | &check; |
| As a Logged in User | I can edit my own profile page so that I can add additional information for other users to see about me | &check; |
| As a Logged in User | I can change my username and password so that I can change my login details if I feel they are not secure | &check; |
| As a Logged in User | I can change my username and password so that I can change my login details if I feel they are not secure | &check; |

[Back to top](<#table-of-contents>)

## Site Structure

Foodies Fanclub is split up in two parts: when the user is logged out and when the user is logged in. Depending on login status different pages are available for the user. When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. When the user is logged in Feed, Add a meal, feed, ingredients, recipes, like, Signout and Profile Page also become available. 

## Design Choices

* ### Color Scheme

Color scheme reflects the warm and inviting world of culinary delights. Antique white serves as the navbar, providing a clean and timeless canvas for our content. Orange accents infuse a vibrant and appetizing energy into the design, symbolizing the zest and creativity of the food community. Together, these colors create a harmonious and enticing visual environment that complements our culinary journey."

* ### Typography
- 'Playfair Display', serif: This elegant and timeless serif font brings a touch of classic refinement to our platform. It is used for headings, titles, and other prominent text elements, adding an air of distinction to our content.

- 'Roboto', sans-serif: The 'Roboto' sans-serif font provides a modern, clean, and legible typeface for the body text and other essential content. It ensures readability and a seamless reading experience across all devices.

# **Existing Features**

* ## Navigation

The navigation bar is very clean and straight forward. Depending on whether you are logged in or not, different menus are visible for the site user. For tablet and mobile devices, the navigation bar menu turns into a hamburger dropdown list. 

On accessing the site for the first time, the user is logged out and the following menu items are visible:

* Foodies Fanclub Logo - On the far left hand side of the navigatin bar is the Foodies Fanclub brand logo. This is visible throughout the site to all user types and contains a link back to the homepage. 
* Home - the first menu item, and the initial default start page, is 'Home', where all posts shared among the community are displayed. 
* Authentication - Next to the Home user has the options to Signin or Signup which takes them to the respective page. 

![Logged out Navbar](images/navbar1.png)

Once the user logs in, additional links become available to select:

* Add new meal - Logged in users can access the add new meal where they can create a food posts.
* Feed - Logged in users can access the feed page where they can see posts of other profiles they follow.
* Ingredients - Logged in users can go to the ingredient page and make ingredient list.
* Recipes - Logged in users can go to the recipes page and add receipe to keep record.
* Authentication - The icons within the authentication change once a user has logged in, and now display a link to the user's own profile page or a link to sign out of the site. 

![Logged in Navbar](images/navbar2.png)

## Authentication

Users who are new to the site, or haven't previously created an account can click on the Signup Menu option on the Navigation Bar to create a user account.  I have used the standard dj-rest/auth/registration user account signup process for this. 

![Sign up](images/signup.png)

If a user has a Foodies Fanclub user account, they can click on the Signin menu option in the Navigation Bar to sign into their account.

![Sign in](images/signin.png)

 * ## Homepage

The Home Page serves as the central hub of our culinary platform. It offers users the following key features:

Post Exploration: Users can discover an array of culinary posts from contributors worldwide. Whether it's a tantalizing dish, a cherished recipe, or a culinary story, this page provides a space for inspiration and exploration.

Interactive Engagement: Users have the ability to engage with posts by liking and leaving comments. This interaction fosters a lively culinary community where users can share their thoughts, tips, and compliments.

User Connections: Profile owners can establish connections by following other users. This enables them to receive updates on the culinary journeys of those they follow. Users can easily unfollow others should their interests change.

### Popular Profiles Component

The "Popular Profiles" feature is a consistent element present on every page of the website, situated at the top. This component employs a filter to arrange all site users based on their follower counts, with the users having the most followers considered the most popular. The top six users, with the highest follower counts, are then showcased within the "Popular Profiles" component.

![Home Page](images/homepage1.png)

![Popular Profiles - own profile](images/user_profile.png)

Each profile avatar can be clicked on to view the full profile page of that user. 

### Searchbar
The entry feed, My plants, To-do list, Shoppinglist, Following and Liked entries feature a searchbar for easy navigation. If no match to searchquery can be found a No results image and message is displayed. 

![Searchbar](src/assets/Printscreens/searchbar.jpg)
![No result found](src/assets/Printscreens/no-result.jpg)

## Feed
Users food posts are displayed in the post feed on the home page, sorted by latest posts by all users. The feed features infinite scrolling, as long as there is content the user can scroll further. 

Clicking on the comments icon will redirect the user to a detailed view of the post and it's commentfield. 

![Feed](images/feed.png)

## Create a Post

Our "Add new Meal" page provides you with an empty canvas to share culinary adventures with the world. It's a space where user can create and post a new culinary masterpiece, complete with an image, title, and delightful story.

Image: Add a mouthwatering image of the dish, allowing others to see the visual appeal of the creation.

Title: Give a captivating title that sets the stage for what's to come. Make it as tempting as the dish!

Content: Share the magic behind the creation. Tell the story of the meal, its ingredients, preparation, and what makes it special. User content can be as simple or as detailed as they like.

![Post form](images/upload_post.png)

## Ingredients

Our Ingredient page is a versatile tool designed to make user's culinary journey more organized and efficient. Here's what user can do:

Add Ingredients: Need to create a shopping list for user's next culinary adventure? Or perhaps they want to keep track of those essential ingredients for their upcoming recipes? user can easily add ingredients to the list with a simple click with name of the ingredient and how much quantity they want.

Edit and Customize: Ingredients can be edited and customized to fit specific needs. Update quantities, notes for different recipes.

Delete and Organize: If user have used up an ingredient or no longer need it on the list, user can effortlessly delete it. Keep an ingredient list clean and organized at all times.

![Ingredient form](images/Ingredient_image.png)

### Recipes

When navigate to the Recipe Page, user will find a space dedicated to preserving food recipe for future enjoyment:

Add Recipes: Capture the essence of culinary creations by adding the recipe name and its full details. This allows user to create a comprehensive culinary journal, making it easy to revisit favorite dishes anytime.

Edit and Customize: Recipes aren't set in stone, and  culinary skills may evolve. User can edit recipe names and content to reflect any changes or improvements.

Delete and Organize: If a recipe no longer suits taste or needs, User have the option to delete it. 

![Recipe form](images/recipe_image.png)

## Profile Page

Clicking the avatar image or username in the navbar redirects the user to their own profile page. Here they can view all their own food posts, add a bio and profile image, see how many posts they've made, how many other users they are following and how many are following them. Clicking the dropdown menu lets the user edit their username, password and bio. 

If a user tries to edit their username to an already existing one they will be notified of this. If they try to change their password to an invalid one they will be notified of this.

![Profile form](images/recipe_image.png)

### Like - Liked entries
By clicking the heart icon on a diary post a user can like the post, increasing the likes count on a post. The post is also saved to the Liked entries feed, so that users can find and read their favorite entries again. 
By clicking the heart icon again the likes count is decreased and the post is  removed from the Liked entries feed. 

User can not like their own post, and are notified if they try to click the heart icon on their own post.

### Comments
Users can comment on posts through the commentfield. When posting a comment the comments count on the post is increased, and decreased if a user deletes their comment.

Only the user who posted the comment can edit or delete it.

![Comment](images/comment_image.png)

### Page not found
If the user tries a url that dont exist on Foodies Fanclub, they are redirected to a `Page not found`, which let them redirect back to the home page. 

![Page not found](images/pagenotfound.png)