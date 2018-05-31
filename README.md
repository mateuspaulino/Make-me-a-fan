# Make me a fan! - Editors Lab Final 2018

![alt text](https://www.imageupload.co.uk/images/2018/05/31/raphaela.gif)
<!-- ![alt text](http://infograficos-estaticos.s3.amazonaws.com/assets-hackathon-globo/banner.jpg) -->

## Team - Brazil
* Luís Guilherme Julião - Journalist, specialized in fact checking and data journalism | luis.juliao@infoglobo.com.br
* Mateus Paulino - Developer, specialized in Front-End developer and perfomance | mateus.santos@oglobo.com.br
* Vinicius Ribeiro Machado - Designer, specialized in UX/UI | vinicius.machado@infoglobo.com

## About the project
Often in Brazil the public does not know their national athletes from sports other than soccer although they might already have winning careers. "Make me a fan" will spark interest in sports from brazilians who do not have contact with such subject yet, letting them know the potential of brazilian olympic athletes who do not have much visibility in the media and engage with their interesting life stories. 

Designed to be used during the 2020 Olympics,  this tool is a web app that will cross data and draw a profile of the type of athlete that could arouse interest from its users, after individuals indicate what characteristics they consider to be more important in a true national idol. "Make me a fan” offers the public the reasons why they should cheer for that athlete at the Olympics and also personalized content about that competitor. 

When accessing the tool the user is exposed to nine statements, which take into account many aspects - from previous performance of athletes to their individual aspects such as personality traits. Users will assign a grade to each topic ranging from "not important" to "very important" in an idol. These answers will be cross-checked with the characteristics of the olympic athletes, previously raised by a team of journalists, and the tool will present the athletes who best fit into the type of idol that each reader would enjoy getting to know. After learning about the life and career of that athlete, readers will sign up to start receiving personalized content about this competitor. The athletes also will be tagged as “Keep on eye”, “Charismatic” or “Promising” to indicate what is expected from his participation in the Olympics. 

Users will be notified by browser or by email when a new article about that athlete is published. Once launched, the tool will also be able to guide the newsroom so that reporters can produce special content on the most followed athletes.

Model of questionnaire to be presented by the tool:

“Assign a grade to the following statements. To you, an idol must:

1) Have an inspirational story of overcoming adversity;

2) Position himself politically and give opinions about subjects of national debate;

3) Not have big career failures in previous competitions;

4) Demonstrate patriotism and pride of his country;

5) Have won the main competitions he has participated of;

6) Be friendly and charismatic;

7) Be engaged in a social cause;

8) Not be subject to public controversy in his career or personal life

9) Be an athlete of a popular sport in his country


## About the building process
As we deeply believe in open-source our project is already on Github. And since it got out of the box, technology should not be any different. We constructed an algorithm that analyzes the fan profile and compares it with the athlete's profile. The code is based on the concept of the k-means algorithm, a data analysis technique. This type of algorithm allows users to be classified, using their own data and clustering the results. This is a much faster process than conventional analysis, being also able to increase users' experience and provide a classification that actually matches reality.

The project is structured for AMP (Accelerated Mobile Pages), a technology that loads pages almost instantly. It is also our goal to predict where users go using machine learning and preloading a few pages before they open it. Such resources make that experience smooth and more engaged on desktop and mobile - which is frankly awesome.

Users will also receive notifications in the best possible way, either through HTML5 notification or through the fast Amazon email service.

Implementation, technological resume:

- Programming language: JavaScript
- Development Environment: Node.js
- Front-End Architecture: ReactJs
- WebApp Technology: AMP - Accelerated Mobile Pages
- Email service - Amazon Email Service
- Notification - Browser Notifications
- Functional programming, PWA and Machine Learning are future implementations
 
## Demo
- App [click here](https://marvelapp.com/3h587b6/screen/43604671), when it load, click in preview

## Presentation
- [Click to check our presentation](https://marvelapp.com/3h587b6/screen/43604671)

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
