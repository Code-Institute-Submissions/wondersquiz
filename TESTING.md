# Testing
## Validator testing
No Errors were found on WC3 HTML Validator
No Errors were found on WC3 CSS Validator
## Manual testing
### Full testing
The website has been tested on the following devices:
* IPhone 12 Pro
* IPhone 14 Pro Max
* IPad pro
* Asus Zenbook Duo

### Testing user stories
`First time visitors`
| Goals | How are they achieved? |
| :--- | :--- |
| I want to be able to test my knowledge on both the modern wonders and ancient wonders of the world. | The wonders quiz offers a quiz on both the ancient wonders of the world and the modern wonders of the world |
| I want to be able to enter a username and the website respond to my name. | The wonders quiz includes an input element that will respond with the users name once the user has met the username requirements |
| I want the website to tell me how many questions I got correct and incorrect. | The wonders quiz has a scoring system that is presented at the bottom of the pages once the user has chosen a quiz. At the end of the quiz the users score will be presented to them. |

`returning users`
| Goals | How are they achieved? |
| :--- | :--- |
|  |  | 

### Fixed bugs
| Bug | Solution |
| ---| ---|
| script.js was not linked to index.html correctly | changed href attribute to src attribute |
| onclick function linked to h1 elements reveals all elements rather than just the pregame message and the lets play button. | wrote a seperate function to reset the webpage rather than using an existing function. |
| quizQuestions array was not recognised by the console. | Had to rename the array as the name was used elsewhere. |
| when moving onto a question the previous selected answer remains highlighted. |  |

### Unfixed bugs