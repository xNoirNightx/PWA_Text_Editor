# PWA_Text_Editor


## Description
Build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

**Note**: I followed the criteria below provided by the class instructors.

## User Story

- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use


## Acceptance Criteria

- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application


- **Note**: 

 ## Installation
 - To install the PWA , follow these steps:
 - Clone the repository.
 - Navigate to the project directory.
 - Install the dependencies: npm install
 
 
**Note**: add your own mySQL information to db.js or .env ( add to .gitignore ) for higher security.

 ## Usage
 - To use the PWA, run the following command inside the "Root" folder:
 - In terminal enter NPM RUN START


## Mock-Up

The following image shows the application.

**Note**: This image is a screen shot once I finished the assignment.

![Social-Network-API]()
![Social-Network-API]()
![Social-Network-API]()


## Credits
- [web dev](https://web.dev/learn/pwa/)
- [Lesson edu](https://frontend.turing.edu/lessons/module-4/pwas/index.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAjw4P6oBhBsEiwAKYVkq2YPNddH4cdkv8H8-LheAdUl3X5_7VxyHwGgC9bpj-2tjokoUx4PjxoCAtQQAvD_BwE)
- Course Material 
- Study Group Support.
- Project 2 gave extra practice.


**Note**: User story and acceptance criteria was provided to me in class
 UNB-VIRT-FSF-PT-04-2023-U-LOLC.

## My Github

- [Github](https://github.com/xNoirNightx/PWA_Text_Editor)

## License

[![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)