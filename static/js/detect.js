let uploadButton = document.getElementById("dropzone-file");
let chosenImage = document.getElementById("chosen-image");
var resultContainer = document.getElementById('result-container');
let fileInput=uploadButton;

resultContainer.style.display = "none"
uploadButton.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
  console.log(reader.result);
  // fileInput = document.getElementById("dropzone-file");
  // document.querySelector(".here-the-result").style.display=None
    document.querySelector(".here-the-result").innerHTML = `<img id="chosen-image" src="${reader.result}">`
    console.log(document.querySelector(".here-the-result").innerHTML)
//    chosenImage.setAttribute("src", reader.result);

  }
}

hideLoadingSpinner()
let mybtn = document.getElementById("link-click").innerHTML;
function showLoadingSpinner() {
  // var spinner = document.getElementById('spin');
  // spinner.style.display = 'flex';
  document.getElementById("link-click").innerHTML =  `<button disabled type="button" class="mt-2 py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
  <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
  </svg>
  Loading...
  </button>`;
  // document.getElementById("link-click").appendChild(document.getElementById('spin'));

}

function hideLoadingSpinner() {
  var spinner = document.getElementById('spin');
  spinner.style.display = 'none';
}

function displayResponse(response) {
  // Get the result container element
  // resultContainer.style.display = "flex"
  resultContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    background-color: transparent;
    /* Add more styles here */
`;
  resultContainer.style.marginTop = "22px"
  // Clear the container
  resultContainer.innerHTML = '';

  

  var diseaseElement = document.createElement('a');
  diseaseElement.innerHTML = '<span style="color: red; font-weight: bold; ">Disease:  <span style="color: white;" id="real" >  '  +  response.disease ;
  diseaseElement.setAttribute('href',`https://www.google.com/search?q=${response.disease}`);
  diseaseElement.setAttribute('class', "inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-gray-400 disease-name");
  diseaseElement.style.marginTop = '7px';
  diseaseElement.style.display = 'flex';
  diseaseElement.style.justifyContent = 'center';
  // diseaseElement.style.borderRadius = '8px';
  // diseaseElement.style.color = '#fff';
  diseaseElement.style.fontFamily = 'Arial, sans-serif';
  diseaseElement.style.fontSize = '16px';

  diseaseElement.addEventListener('mouseover', ()=>{
    document.getElementById("real").style.color = "black";
  });
  diseaseElement.addEventListener('click', ()=>{
    document.getElementById("real").style.color = "black";
  });
  
  diseaseElement.addEventListener('mouseout', ()=>{
    document.getElementById("real").style.color = "white";
  });
  
  
  
  

  // Create the accuracy element
  var accuracyElement = document.createElement('p');
  accuracyElement.innerHTML = ' <span style="color: green; font-weight: bold;">Accuracy:  <span style="color: white;">  '  +   response.accuracy + " %";
  accuracyElement.style.color = 'white';
  accuracyElement.style.marginTop = '7px';
  accuracyElement.style.display = 'flex';
accuracyElement.style.justifyContent = 'center';
accuracyElement.style.fontFamily = 'Arial, sans-serif'

  

  // Create the medicine element
  var medicineElement = document.createElement('p');
  medicineElement.innerHTML = ' <span style="color: yellow; font-weight: bold;">Medicine:  <span style="color: white;">' + response.medicine;
  medicineElement.style.color = 'white';
  medicineElement.style.marginTop = '7px';
  medicineElement.style.display = 'flex';
medicineElement.style.justifyContent = 'center';
medicineElement.style.fontFamily = 'Arial, sans-serif';



 

  // Append the elements to the container
  resultContainer.appendChild(diseaseElement);
  resultContainer.appendChild(accuracyElement);
  resultContainer.appendChild(medicineElement);


  var mapButton = document.createElement("button");
  mapButton.className = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"; 
  mapButton.innerText = "Look for Clinics";
  mapButton.style.marginTop = '7px';
  mapButton.style.display = 'flex';
  mapButton.style.justifyContent = 'center';
  mapButton.style.fontFamily = 'Arial, sans-serif';
  // var body = document.getElementsByTagName("body")[0];
  // body.appendChild(mapButton);
  console.log(mapButton)
  document.getElementById("link-click").innerHTML=``;
  document.getElementById("link-click").appendChild(mapButton)
  mapButton.addEventListener ("click", function() {
  //window.open(map.html);
  window.open('https://www.google.com/maps/search/Pharmacies');
  });

  //document.getElementById(results).hidden=true;
}

function displayError(message) {
  // Get the error container element
  var errorContainer = document.getElementById('error-container');

  // Set the error message
  // Clear previous error messages
  errorContainer.innerHTML = '';

  // Create the <h4> element
  var errorMessageElement = document.createElement('h4');

  // Apply styles to the <h4> element
  errorContainer.style.marginTop = '55px';
  errorMessageElement.style.color = 'red';
  errorMessageElement.style.backgroundColor = 'transparent';



  errorMessageElement.textContent = message;

  // Append the <h4> element to the error container
  errorContainer.appendChild(errorMessageElement);


}
function submitForm() {
  var form = document.getElementById('uploadForm');
  var formData = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/detect', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert(xhr.responseText);
    } else {
      alert('Error occurred while uploading the file.');
    }
  };
  xhr.send(formData);
}
function detectFunction() {
  // Show loading spinner
  showLoadingSpinner();

  // Get the form and the selected file
  var form = document.getElementById('uploadForm');
  // var fileInput = document.getElementById('dropzone-file');
  console.log(fileInput);
  // Create a FormData object and append the selected file
  var formData = new FormData();
  formData.append('file', fileInput.files[0]);

  // Send a POST request to the server
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/detect', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Hide loading spinner
      hideLoadingSpinner();
      document.getElementById("link-click").innerHTML = mybtn;
      // Parse the response JSON
      var response = JSON.parse(xhr.responseText);

      // Display the response
      displayResponse(response);
    } else {
      // Hide loading spinner
      hideLoadingSpinner();
      document.getElementById("link-click").innerHTML = mybtn;
      var response = JSON.parse(xhr.responseText);


      // Show an error message
      displayError('Error: ' + response.message);
      setTimeout(() => {
        displayError('');

      }, 1000);
    }
  };
  xhr.send(formData);
}