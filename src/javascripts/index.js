// Required by Webpack - do not touch
//require.context('../', true, /\.(html|json|txt|dat)$/i)
// require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
// require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
function displayMessage(){
    let name = document.getElementById("nameInput").value
    console.log(name)
    alert("Welcome " + name + "!")
}

document.getElementById("submit").addEventListener('click', function(){
    displayMessage()
})

document.getElementById("reset").addEventListener('click', function(){
    document.getElementById("reset").clear
})