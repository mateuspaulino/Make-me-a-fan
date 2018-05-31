# Make me a fan! - Editors Lab Final 2018

<!-- ![alt text](http://infograficos-estaticos.s3.amazonaws.com/assets-hackathon-globo/banner.jpg) -->

## Team - Brazil
* Luís Guilherme Julião - Journalist, specialized in fact checking and data journalism | luis.juliao@infoglobo.com.br
* Mateus Paulino - Developer, specialized in Front-End developer and perfomance | mateus.santos@oglobo.com.br
* Vinicius Ribeiro Machado - Designer, specialized in UX/UI | vinicius.machado@infoglobo.com

## About the project
Often in Brazil the public don’t know the athletes from others sports besides soccer that already have winning careers. "Make me a fan" will spark interest in sports of the brazilian public who do not have contact with the subject, letting them know the potential and engage with the interesting life stories of brazilian olympic athletes who do not have visibility in the media. Designed to be used in the next Olympics, in 2020, the tool is a web app that will cross data and draw a profile of the type of the athlete that will cause interest in the user, after that user indicating what characteristics he considered more important for the formation of a true national idol. "Make an Idol" gives to the public the reasons why they should cheer for that athlete at the Olympics and gives him personalized content about that competitor, also. 

When accessing the tool, the user is exposed to nine statements, which take into account from the performance of athletes in competitions to personal aspects such as personality. He will assign a grade to each of them, ranging from "not important" to "very important" in an idol. These answers will be cross-checked with the characteristics of the olympic athletes, previously raised by a journalists team, and the tool will show the athletes who best fit the type of idol that the reader wants to know. After learning about the life and the career of that athlete, the reader will sign up to start receiving personalized content about this competitor. The athletes also will have seals like “Keep on eye”, “charismatic” or “promising”, to indicate what is expected about his participating in the Olympics. 

The user will be notified by browser or by email when a new article about the athlete is published. Once launched, the tool will also guide the newsroom, which will begin to produce special content on these athletes who are followed by users.

Model of the questionnaire presented in the tool:
“Assign one grade to the following statements. An idol:

1) Must have a history of overcoming

2) Have to position himself politically and give opinions about the subjects in the national debate

3) Must not have career failures

4) Must demonstrate patriotism and pride of his country

5) Must have won the main competitions he has participated

6) Must be friendly and charismatic

7) Must be linked to a social cause

8) Should not be subject to controversy in career or in his personal life

9) Have to be an athlete of a popular sport in his country


## About the building process
The layout of the application was made with the Sketch design software. Since our project got out of the box, technology shouldn't be different as well. We constructed an algorithm that analyzes the fan profile and compares it with the athlete's profile, the code is based on the concept of the k-means algorithm, a data analysis technique. This type of algorithm allows the classification of the user, using their own data, clustering the results, which is much faster than the conventional analyzes. This increase the user experience and providing a real classification.

The project is structured for AMP (Accelerated Mobile Pages), which is a technology that loads the pages almost instantly; it is also our goal to predict where the user goes, using machine learning and preloading a few pages before the user opens it. Making the user experience also smooth and more engaged on desktop and mobile. Which is awesome

Users will also receive notifications in the best possible way, either through HTML5 notification or through the fast Amazon email service.

Implementation, technological resume:

Programming language: JavaScript
Development Environment: Node.js
Front-End Architecture: ReactJs
WebApp Technology: AMP - Accelerated Mobile Pages
Email service - Amazon Email Service
Notification - Browser Notifications
Functional programming, PWA and Machine Learning are future implementations
 
## Demo
- App [click here](https://marvelapp.com/44cd58g/screen/40871628), when it load, click in preview

## Presentation
- [Click to check our presentation](https://marvelapp.com/44cd58g/screen/40871628)

## How to run our technical analysis algorithm
- Get into the folder algorithm-analize-data, [here](algorithm-analize-data)
- Download all the files
- Inside the folder, in terminal, run the followind commands
```sh
$ npm install
```
```sh
$ node intelligence.js
```
- That is it! The results are on the board
 
## License

Copyright 2018 Luís Guilherme Julião, Mateus Paulino da Silva Santos, Vinicius Ribeiro Machado

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
