var images=[
    "https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", 
    "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg",
     "https://i.postimg.cc/JnL6wtrd/sister.jpg",
     "https://i.postimg.cc/bw5W5zSK/mother.jpg"

]

var names=[
    "Family Book","George Joseph","Rajiv Joy","Benson Samuel","Catherine Joy","Regina Joy"
] 
var index=0
function next()
{
     index++
     if(index>5){
         index=0
     }
     document.getElementById("family").src=images[index]
document.getElementById("name").innerHTML=names[index]
}
