function askName() {
     let name = prompt("Enter your name:");
     let confirm = prompt(`Are you sure your name is ${name}? (yes/no): `);
     
     if (confirm.toLowerCase() === "yes") {
         alert(`Welcome, ${name}!`);
     } else {
         askName();
     }
 }
 
 askName();