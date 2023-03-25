const signUp = e => {
    let  name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        pass = document.getElementById('pass').value;
        gender=document.querySelector('input[name="gen"]:checked').value
        negara = document.getElementById("Negara").value

    let DataAnda = JSON.parse(localStorage.getItem('DataAnda')) || [];

    let exist = DataAnda.length && 
        JSON.parse(localStorage.getItem('DataAnda')).some(data => 
            data.name.toLowerCase() == name.toLowerCase() 
        );
        
        let profile={
            gender:gender
        } 

    if(!exist){
        DataAnda.push({ name, email, pass, gender, negara });
        localStorage.setItem('DataAnda', JSON.stringify(DataAnda));
        document.querySelector('form').reset();
        document.getElementById('name').focus();
        alert("Berhasil Daftar");
    }
    else{
        alert("Maaf akun Sudah ada");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pass = document.getElementById('pass').value;
    let DataAnda = JSON.parse(localStorage.getItem('DataAnda')) || [];
    let exist = DataAnda.length && 
    JSON.parse(localStorage.getItem('DataAnda')).some(data => data.email.toLowerCase() == email && data.pass.toLowerCase() == pass);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}