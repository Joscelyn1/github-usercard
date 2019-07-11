/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get('https://api.github.com/users/Joscelyn1')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('problem', error);
  })
/*
1. iterate over a list of data received from a server
2. creating a set of components
3. adding them to the DOM
*/

// // select the main dom node to attach our dynamic content
// const entry = document.querySelector('.entry')

// // https://dog.ceo/api/breed/terrier/images
// const breed = 'hound'

// // const promise = axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
// // ❌ console.log(promise) //
// // ✅ Reading the value of a promise, use .then:
// axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
//   .then(data => {
//     // 1. (see above)
//     // Handles Success: here's where we get the results from server
//     console.log('3 random doggos:', data)
//     const images = data.data.message
//     images.forEach(imageUrl => {
//       // 2. (see above)
//       const element = createDogCard(imageUrl, breed)
//       // 3. (see above)
//       entry.appendChild(element)
//     })
//   })
//   .catch(error => {
//     // Handles failure:
//     console.log('The dogs API is currently down, try again later', error)
//   })


// // Manual test, before wiring in the Async/GET request:
// // const terrier = createDogCard('https://images.dog.ceo/breeds/terrier-american/n02093428_10164.jpg', 'terrier')
// // entry.appendChild(terrier)


// /*
// creates and returns DOM node
// */
// function createDogCard(imageUrl, breed) {
//   // create the elements
//   const card = document.createElement('div')
//   const img = document.createElement('img')
//   const title = document.createElement('h3')
  
//   // set the styles
//   card.classList.add('dog-card')
//   img.classList.add('dog-image')
  
//   // set the content
//   img.src = imageUrl
//   title.textContent = `Breed: ${breed}`
  
//   // put together
//   card.appendChild(img)
//   card.appendChild(title)
//   return card
// }




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/


const cardContainer = document.querySelector('.cards');

function makeCards(array) {
  // make elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const addressLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // nest elements
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(addressLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  // add classes

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // add content

  image.src = `${array.data.avatar_url}`;
  addressLink.href = `${array.data.url}`;
  name.textContent = `${array.data.name}`;
  userName.textContent = `${array.data.login}`;
  location.textContent = `${array.data.location}`;
  addressLink.textContent = `${array.data.url}`;
  followers.textContent = `Followers: ${array.data.followers}`;
  following.textContent = `Following: ${array.data.following}`;
  bio.textContent = `Bio: ${array.data.bio}`;



  return card;


}

console.log(makeCards());

/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
