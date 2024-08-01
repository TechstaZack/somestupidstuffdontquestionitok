const currentDate = new Date();
const firebaseConfig = {
    apiKey: "AIzaSyBLUOrxSKOMUeiLDIY0dTBihkNixehRfdc",
    authDomain: "techstalink.firebaseapp.com",
    projectId: "techstalink",
    storageBucket: "techstalink.appspot.com",
    messagingSenderId: "82134761757",
    appId: "1:82134761757:web:fbad1cf81ff00e45d861f4"
  };


firebase.initializeApp(firebaseConfig);
const database = firebase.database()

function copyToClipboard(){
    url = document.getElementById('urlGoesHere')
    url.select();
    url.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(url.value);
    document.getElementById('haveucopied').innerHTML='Successfully Coppied!'
  
} 



function restart(){
    window.location.reload()
}
const hehabooya = document.getElementById('id1')
const skip = document.getElemendById('skip')
const nosubmit = document.getElementById('linkURL')
nosubmit.submit(false);
//skip
skip.addEventListener('click', function(){
  let code = document.getElementById('wegohereboys').value;
  let domain = document.getElementById('domaintogo').value;
  let code2 = null
  let domain2 = null
  if (domain = 'techsta.link'){
    domain2 = 'techstalink'
  }
code2 = code.replace('+','')
  if (code.includes('techsta.link' || '/' || 'https://')){
    code = code.replace('techsta.link',"")
    code = code.replace('/',"")
    code = code.replace('https://',"")
    code = code.replace('+',"")
  }
  const urlto = `https://${domain}/${code}+`;
  const doesexist = database.ref(`${domain2}/`+code2);
  doesexist.once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
      window.location.href = urlto
    }else{
      document.getElementById('Lnoexist').innerHTML = "Shortened URL Doesn't Exist"
    }
  })
})
hehabooya.addEventListener('click', function(){
  let code = document.getElementById('wegohereboys').value;
  let domain = document.getElementById('domaintogo').value;
  let code2 = null
  let domain2 = null
  if (domain = 'techsta.link'){
    domain2 = 'techstalink'
  }
code2 = code.replace('+','')
  if (code.includes('techsta.link' || '/' || 'https://')){
    code = code.replace('techsta.link',"")
    code = code.replace('/',"")
    code = code.replace('https://',"")
    code = code.replace('+',"")
  }
  const urlto = `https://${domain}/${code}` ;
  const doesexist = database.ref(`${domain2}/`+code2);
  doesexist.once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
      window.location.href = urlto
    }else{
      document.getElementById('Lnoexist').innerHTML = "Shortened URL Doesn't Exist"
    }
  })
})
// const iranoutofstupidnameslmao = document.getElementById('linkURL');
// console.log(iranoutofstupidnameslmao)
// iranoutofstupidnameslmao.addEventListener('submit', function(e){
  // e.preventDefault()
  // let code = document.getElementById('wegohereboys').value;
  // if (code.includes('techsta.link' || '/' || 'https://' || '+')){
   //  code = code.replace('techsta.link',"")
    // code = code.replace('/',"")
    // code = code.replace('https://',"")
    // code = code.replace('+',"")
  //}
    //const urlto = 'https://techsta.link/' + code + '+';
 // window.location.href = urlto
//})

const form = document.getElementById('createURL')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const database = firebase.database()
    let shortener = document.getElementById('short').value;
    shortener = shortener.toLowerCase()
    let url = document.getElementById('url').value;
    if(shortener.includes('crypto')){
      url = 'https://www.youtube.com/watch?v=C_1V_tGrtlw'
    }
    const domain = document.getElementById('domain').value;
    const domain2 = domain.replace('.','')
    const variableRef = database.ref(`${domain2}/${shortener}`)
    if( shortener.includes('+') || shortener.includes('/') || shortener.includes(' ') || shortener.includes('$') || shortener.includes('#') || shortener.includes('[') || shortener.includes(']') || shortener.includes('.') ){
        document.getElementById('errorToPrint').innerHTML = 'Your Shortener cannot contain a space, +, /, $, #, ., [,  and ].'
        return
    }
    variableRef.once('value')
      .then(snapshot => {
          const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();

        if (snapshot.exists()) {
          const variableData = snapshot.val();
            document.getElementById('errorToPrint').innerHTML = 'A shortened URL with this shortener has already been made.'
        } else {
            const shortenerInfo = {
                shortener: shortener,
                url: url,
                domain: domain,
                year: year,
                month: month,
                day: day
              };

              const tosave = database.ref(`${domain2}/${shortener}`)

              tosave.set(shortenerInfo)
              .then(() => {
                document.getElementById('somethingImportant').innerHTML = `<h3>URL Successfully created!</h3>
                <input id="urlGoesHere" readonly="readonly" class="input-field form-control bg-dark text-primary">
                <hr>
                <span id="button-container">
                <h5 class="NOERROR" id="haveucopied"></h5>
                    <button class="buttonOneLine btn btn-success" id='copy' onclick='copyToClipboard()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
                      </svg> Copy</button>
                      <a class="buttonOneLine btn btn-info" id='copy' href='https://${domain}/${shortener}' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                      </svg> Visit</a>
                      <button class="buttonOneLine btn btn-primary" id='copy' onclick="restart()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg> Make Another</button>
                </span>`
                document.getElementById('urlGoesHere').value = `https://${domain}/${shortener}`
              })
              .catch(error => {
                document.getElementById('errorToPrint').innerHTML = 'there was an error when making your URL'
              });
        }
      })
      .catch(error => {
        document.getElementById('errorToPrint').innerHTML = 'there was an error when making your URL'
      });
})
