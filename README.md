# Web Development Final Project - *The Quarantine Zone*

Submitted by: **Meghan Thomas - Z23651457**

This web app was built to provide a community space dedicated to discussing everything related to Naughty Dog's incredible series, The Last of Us. Whether you're passionate about the intricate story of the games, hooked on the HBO adaptation, or just want to share theories, fan art, or gameplay moments, this is the place for you. We aim to provide a platform for respectful discussion, analysis, and sharing among fans. Remember to look for the light!

Time spent: **21** hours spent in total

Netlify Deployment Link: https://thequarantinezone.netlify.app/ 

## Required Features

The following **required** functionality is completed:


- [X] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms should have the *option* for users to add: 
    - additional textual content
    - an image added as an external image URL
- [X] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed should show only the post's:
    - creation time
    - title 
    - upvotes count
  - Clicking on a post should direct the user to a new page for the selected post
- [X] **Users can view posts in different ways**
  - Users can sort posts by either:
    -  creation time
    -  upvotes count
  - Users can search for posts by title
- [X] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page. 
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times
- [X] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

The following **optional** features are implemented:


- [X] Web app implements pseudo-authentication
  - Users can only edit and delete posts or delete comments by entering the secret key, which is set by the user during post creation
  - **or** upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them
  - For both options, only the original user author of a post can update or delete it
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post
  - Users can repost a previous post by referencing its post ID
  - On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface
  - e.g., selecting the color scheme or showing the content and image of each post on the home feed
- [ ] Users can add more characterics to their posts
  - Users can share and view web videos
  - Users can set flags such as "Question" or "Opinion" while creating a post
  - Users can filter posts by flags on the home feed
  - Users can upload images directly from their local machine as an image file
- [X] Web app displays a loading animation whenever data is being fetched

The following **additional** features are implemented:

- [X] Users must create an account and be signed in to create a new post, upvote, or comment
- [X] Web app is deployed through Netlify
- [X] Added an info page where users can view the purpose of the app, the TOS, and the Privacy Policy

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/FAU-FullStack-Dev-Spring2025/final-project-meghane/blob/main/finalproject.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

Here's a walkthrough of the User Login and Sign Up functionality:

<img src='https://github.com/FAU-FullStack-Dev-Spring2025/final-project-meghane/blob/main/finalproject_login.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Gifski

## Notes

The only "challenge" I faced throughout this project was teaching myself a little more about supabase and how to implement effectively. Luckily, with this project, I didn't experience many issues. 

## License

    Copyright [2024] [Meghan Thomas]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
