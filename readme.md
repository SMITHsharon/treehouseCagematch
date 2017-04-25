# NSS Treehouse Cage Match

### Project Description 

This exercise displays two user input text fields that accept Treehouse user profile names. When the user clicks the `Start Cage Match` button, the code makes two `ajax` requests to Treehouse which returns the profiles. The data is returned as `json` objects. The profile picture for each user is displayed (if available), and the Treehouse points earned. The "winner" is determined, and when the user clicks the `Show Badges!` button the screen is cleared the the winner's badges are displayed. Text elements and badges display animations if clicked. 

#### Treehouse Cage Match w User Input on Launch 
![Treehouse Cage Match w User Input on Launch]()

#### Treehouse Cage Match Showing Winner
![Treehouse Cage Match Showing Winner]()

#### Treehouse Cage Match Showing Winner's Badges
![Treehouse Cage Match Showing Winner's Badges]()

#### Treehouse Cage Match Showing Result of Animations
![Treehouse Cage Match Showing Animations]()


### Project Specs
- Site requires two inputs and a button
- The inputs expect a Treehouse username; then click the button
- Once the button is hit the code: 
	- Makes `ajax` requests to Treehouse and returns the profile
	-	Example `url = https://teamtreehouse.com/krissycaron.json`
	-	Uses `Promise.all` to return the two profiles at the same time
	-	Shows a user friendly message if no if returned from Treehouse
	-	Displays the profile picture for each of the two profiles
	-	Displays the total number of points for each profile
	-	Determines the cage match winner - the person with the most points
	-	Clearly displays who the winner is
	-	Displays the winner's badges
	-	Uses `jQuery` `.animate` method to apply animation to the images

- Completed code does not have any Grunt errors.


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `ES6`
- `jQuery`
- `Bootstrap`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone ### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/wysiwyg.git
cd wysiwyg
http-server -p 8080
This will show in your browser at: http://localhost:8080
```


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
cd treehouseCagematch
cd lib
bower install
npm install
http-server -p 8080
This will show in your browser at: http://localhost:8080
```


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

