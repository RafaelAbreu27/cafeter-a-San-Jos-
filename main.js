const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    frame:false,
    webPreferences: {
      
      
    }
  });


  mainWindow.loadFile('./home/index.html');

});


function validateForm_student(event) {
  event.preventDefault(); 


  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;

 
  if (rollNumber === "admin" && password === "admin") {
   
    window.location.href = "../student details/student-details.html";
  } else {
    
    alert("Nombre o Contraseña Incorrecta");
  }
}


function validateForm_studentadmin(event) {
  event.preventDefault(); 

  
  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;

 
  if (rollNumber === "admin" && password === "admin") {
   
    window.location.href = "../student details/student-details.html";
  } else {
    
    alert("Nombre o contraseña Incorrecta");
  }
}


function validateForm_faculty(event) {
  event.preventDefault(); 

 
  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;

  
  if (rollNumber === "admin" && password === "admin") {
    
    window.location.href = "../faculty details/faculty-details.html";
  } else {
   
    alert("roll number or password is incorrect");
  }
}

function validateForm_admin(event) {
  event.preventDefault(); 
 
  var rollNumber = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (rollNumber === "admin" && password === "admin") {
   
    window.location.href = "../admin details/admin-details.html";
  } else {
    
    alert("username or password is incorrect");
  }
}

function change_password(event) {
  event.preventDefault(); 

  
  var current_password = document.getElementById("curr-password").value;
  var new_password = document.getElementById("new-password").value;
  var conform_password = document.getElementById("conf-password").value;

 
  if (current_password != "" && new_password != "" && conform_password != "") {
   
    if(new_password === conform_password) {
      alert("password changed");
    }
    else {
      alert("new password not matched");
    }
  } else {
    
    alert("fill all the field");
  }
}


function added(event) {
  var money = document.getElementById('add').value;
  if(money > 0) {
    alert("money added");
    window.location.href("../admin details/admin-details.html");
  }
}


function admin_update(event,value) {
  console.log("button clicked",value);
  localStorage.setItem(value,"display");
}

function add(event,value) {
  
  console.log("Clicked button value:", value);

  
  const label = document.createElement('label');
  label.setAttribute('id',value);
  label.textContent = value;

 
  const input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('id',value+'inp');

  
  const break_tag = document.createElement('br');
  
  const cartList = document.getElementById('cart-list');
  cartList.appendChild(label);
  cartList.appendChild(input);
  cartList.appendChild(break_tag);
}


function final_submit(event) {
 
  const form = document.getElementById('cart-list');

 
  const labels = form.querySelectorAll('label');


  const newDocument = document.implementation.createHTMLDocument('../final bill/bill.html');

  
  const newForm = newDocument.createElement('form');


  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const break_tg = document.createElement('br');

   
    const clonedLabel = label.cloneNode(true);
    const clonedbreak_tg = break_tg.cloneNode(true);

    
    newForm.appendChild(clonedLabel);
    newForm.appendChild(clonedbreak_tg);
}


  newDocument.body.appendChild(newForm);

 
  const targetHTML = newDocument.documentElement.outerHTML;


  const downloadLink = document.createElement('a');
  downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(targetHTML);
  downloadLink.download = 'target.html';
  downloadLink.click();

  window.location.href = "../final bill/target.html"
  
}


function visible_morning(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_1.style.display = 'flex';
  div_2.style.display = 'none';
  div_3.style.display = 'none';
}

function visible_lunch(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_2.style.display = 'flex';
  div_1.style.display = 'none';
  div_3.style.display = 'none';
}

function visible_snacks(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_3.style.display = 'flex';
  div_1.style.display = 'none';
  div_2.style.display = 'none';
}

function back(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_1.style.display = 'none';
  div_2.style.display = 'none';
  div_3.style.display = 'none';
}
