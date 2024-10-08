let Etudiants=[
    {
        Numerounique:"561561230",
        prenom:  "charaf",
        nom:"tbibzat",
        Date:"10/10/2004",
        Département:"PC",
        Note:19,
        Email:"charafeddine@gmail.com",
        city:"taza",
        state:"maroc",
        Zip:"50000",
    }
];

function AddEtudiant(){
    let etudiant = {
        Numerounique: document.getElementById('Numero-unique').value,
        prenom: document.getElementById('first-name').value,
        nom: document.getElementById('last-name').value,
        Date: document.getElementById('Date').value,
        Département: document.getElementById('Département').value,
        Note: document.getElementById('Note').value,
        password: document.getElementById('password').value,
        Email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        Zip: document.getElementById('zip').value,
    };
    if(!Etudiants.some(e=>e.Numerounique===etudiant.Numerounique)){
        Etudiants.push(etudiant);
        document.getElementById("validation").innerHTML="Etudiant Ajouter avec succés";
        console.log(Etudiants)
    }else{
       document.getElementById("erreur").innerHTML=" erreur Etudiant déje Existe";
    }
}


function Edit_Etucdiant(e){
    e.preventDefault();
}
function Show_Dtails_Etudiant(e){
    e.preventDefault();
}
// function Delete_Etudiant(e,Numerounique){
//     e.preventDefault();
//     if(Numerounique==Numerounique){
//         Etudiants.pop()
//         }
//     // delete(Etudiants.Numerounique);
// }

let key=document.getElementById('Numero-unique');
key.addEventListener("submit",function(e){
    e.preventDefault();
    key.value = Date.now().toString();
})
 window.onload = function() {
    key.value = Date.now().toString();
}

let form= document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    AddEtudiant();
   
})

Etudiants.map((etudiant)=>{
    document.getElementById('Tap').innerHTML+=
    `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${etudiant.Numerounique}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.prenom}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.nom}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.Date}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.Département}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.Note}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.state}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.Zip}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.city}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${etudiant.Email}</td>
            <td>
                <a href="#">Edit</a>
                <a href="#">Detail</a>
                <a href="#" onclick="Delete_Etudiant(${etudiant.Numerounique})">Delete</a>
            </td>
        </tr>
    `
})