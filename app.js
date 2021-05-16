console.log("working")
// window.alert("Hello")
document.write("coding is fun..when code works")
document.write(10+5)

document.getElementById("sample").innerHTML = "Good Morning !!"
var work = ()=> {
    window.alert("Hello!")
}
var animalPicture = document.getElementById("animal")
console.log(animalPicture)
//var changeAnimal = ()=> {
//animalPicture.style.display = "none"

//}
var changeAnimal = ()=>{
    animalPicture.src = "/images/cat.jpeg"
}
var changeBackToDog =()=> {
    animalPicture.src="/images/dog.jpeg"
}