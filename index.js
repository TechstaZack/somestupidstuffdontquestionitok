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

function swaptovisit(){
    document.getElementById('replacer').innerHTML = `<form id="linkURL">
                    <h5 id="big4phone3">Goto to a Techsta.link</h5>
                    <div class="input-container input-group">
                      <span class="input-group-text" id="basic-addon1">
                          <svg xmlns="http://www.w3.org/2000/svg" class='svgbonus' width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                            </span>
                      <input type="text" id="wegohereboys" class="input-field form-control bg-dark text-primary phonebetter" placeholder="Shortener" required="true">
                    </div>
                    <div class="input-container input-group">
                      <span class="input-group-text" id="basic-addon1">
                          <svg xmlns="http://www.w3.org/2000/svg" class='svgbonus' width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            </span>
                            <select class="form-select form-control bg-dark text-primary phonebetter" id="domaintogo" required="true">
                              <option value="techsta.link">Techsta.Link</option>
                            </select>
                    </div>
                    <h5 class="errorWhenLoggingIn" id="Lnoexist"></h5>
                                        </form>
                      <span>
                  <button class="btn btn-success paddinpls" id="id1" onclick='normalgo()'><svg xmlns="http://www.w3.org/2000/svg" class='svgbonus' width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg> Visit</button>
                          <h1> </h1>

                          <button class="btn btn-danger paddinpls" id="skip" onclick='skipplease()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg> Visit (skip link info)</button>
                          

                      </span>
                                              <hr>
                <button class='btn btn-info' id='swaptheweb' onclick='swaptocreate()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
</svg> Create a Techsta.link</button>
                  <br>
                  <br>
                </span>`
}

function swaptocreate(){
 document.getElementById('replacer').innerHTML = `<h5 id="big4phone3">Create A Techsta.link</h5>
            <div id='somethingImportant'>
                <form id="createURL">
                    <h5 class="errorWhenLoggingIn" id="errorToPrint"></h5>
                    <h5 class="NOERROR" id="successToPrint"></h5>
                    
                    <div class="input-container input-group">
                        <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" class='svgbonus' width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                              </svg>
                              </span>
                        <input type="url" id="url" class="input-field form-control bg-dark text-primary phonebetter" placeholder="URL (with https:// or http://)" required="true">
                      </div>
                      <div class="input-container input-group">
                        <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" class='svgbonus'  width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                              </svg>
                              </span>
                        <input type="text" id="short" class="input-field form-control bg-dark text-primary phonebetter" placeholder="Shortened Code" maxlength="100" required="true">
                      </div>
                      <div class="input-container input-group">
                        <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" class='svgbonus' width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                              </svg>
                              </span>
                              <select class="form-select form-control bg-dark text-primary phonebetter" id="domain" required="true">
                                <option value="techsta.link">Techsta.Link</option>
                              </select>
                      </div>
                                        </form>
                    <button class="btn btn-primary" type='submit' id="createURL" onclick='createtheURL()'><svg xmlns="http://www.w3.org/2000/svg" class="svgbonus" width="16" height="16" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
  <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
</svg> Create</button>
                <hr>
                <button class='btn btn-info' id='swaptheweb' onclick='swaptovisit()'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
</svg> Visit a Techsta.link</button>`
}

function copyToClipboard(){
    url = document.getElementById('urlGoesHere')
    url.select();
    url.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(url.value);
    document.getElementById('haveucopied').innerHTML='Successfully Copied!'
  
} 



function restart(){
    window.location.reload()
}

//skip
function skipplease(){
    console.log('ran')
  let code = document.getElementById('wegohereboys').value;
  let domain = document.getElementById('domaintogo').value;
  let domain2 = null
  if (domain = 'techsta.link'){
    domain2 = 'techstalink'
  }
code = code.replace('+','')
  if (code.includes('techsta.link' || '/' || 'https://')){
    code = code.replace('techsta.link',"")
    code = code.replace('/',"")
    code = code.replace('https://',"")
    code = code.replace('+',"")
  }
  const urlto = `https://${domain}/${code}+`;
  const doesexist = database.ref(`${domain2}/`+code);
  doesexist.once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
      window.location.href = urlto
    }else{
      document.getElementById('Lnoexist').innerHTML = "Shortened URL Doesn't Exist"
    }
  })
}function normalgo(){
        console.log('ran')
  let code = document.getElementById('wegohereboys').value;
  let domain = document.getElementById('domaintogo').value;
  let domain2 = null
  if (domain = 'techsta.link'){
    domain2 = 'techstalink'
  }
code = code.replace('+',"")
  if (code.includes('techsta.link' || '/' || 'https://')){
    code = code.replace('techsta.link',"")
    code = code.replace('/',"")
    code = code.replace('https://',"")
    code = code.replace('+',"")
  }
  const urlto = `https://${domain}/${code}` ;
  const doesexist = database.ref(`${domain2}/`+code);
  doesexist.once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
      window.location.href = urlto
    }else{
      document.getElementById('Lnoexist').innerHTML = "Shortened URL Doesn't Exist"
    }
  })
}
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


function createtheURL(){
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
            // if(nowyear > year && nowmonth == 1){
            //    let lastyear = nowyear - 1
            //    if(lastyear == year){
            //        if(month != 12){
            //        run creation code
            //}else{
            //invalid}
            //}else{
            //run creation code
            //}
            //else{
            //let reqmonth = nowmonth - 2
            //if(nowyear == year && reqmonth >= month){
            //run creation code
            //}else{
            //runfailcode}
            //}
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
}
