const firebaseConfig = {
    apiKey: "AIzaSyBLUOrxSKOMUeiLDIY0dTBihkNixehRfdc",
    authDomain: "techstalink.firebaseapp.com",
    projectId: "techstalink",
    storageBucket: "techstalink.appspot.com",
    messagingSenderId: "82134761757",
    appId: "1:82134761757:web:fbad1cf81ff00e45d861f4"
  };

  const app = initializeApp(firebaseConfig);

function createTheURL(e){
    e.preventDefault();
    const shortener = document.getElementById('short').value;
    const url = document.getElementById('url').value;
    const domain = document.getElementById('domain').value;
    const database = firebase.database();
    const variableRef = database.ref(shortener);
  
    variableRef.once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          const variableData = snapshot.val();
            document.getElementById('errorToPrint').innerHTML = 'A shortened URL with this shortener has already been made.'
        } else {
            const shortenerInfo = {
                shortener: shortener,
                url: url,
                domain: domain
              };

              const tosave = database.ref(shortener)

              tosave.set(shortenerInfo)
              .then(() => {
                document.getElementById('errorToPrint').innerHTML = ''
                document.getElementById('successToPrint').innerHTML = `<a href='https://www.${domain}/${shortener}'> Your shortener (https://www.${domain}/${shortener}) has been made! </a>`
              })
              .catch(error => {
                document.getElementById('errorToPrint').innerHTML = 'there was an error when making your URL'
              });
        }
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });
}

const signupfrom = document.getElementById('createURL')
signupfrom.addEventListener('submit', createTheURL)

console.log(window.location.pathname)  
