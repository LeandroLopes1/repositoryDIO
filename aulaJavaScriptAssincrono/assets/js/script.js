const catBtn = document.getElementById('change-cat');
const catImage = document.getElementById('cat');



const getCats = async () => {
    const response = await fetch('https://thatcopy.pw/catapi/rest/');
    const data = await response.json();
    console.log(data);
    return data.webpurl;
}

const loadImg = async () => {
    const url = await getCats();
    catImage.src = url;
}

catBtn.addEventListener('click', loadImg);

loadImg();



    

          


 
     
  
