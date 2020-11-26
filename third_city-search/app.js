

console.log('hey mf');


const data= [];

async function getFetch(){
const res= await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
// .then(res=> res.json())
// .then(d=> data.push(...d))
const getJson= await res.json()
data.push(...getJson)
//console.log(data[0])
//const getData= await getJson.then(data=>console.log(data))
}

function matchWord(word,data){

    return data.filter(test=>
        {
            
            const regex= new RegExp(word,'gi')
            return test.city.match(regex)

        })
    
}

function displayCities(){
    const matchArray = matchWord(this.value, data);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        //select(cityName);
        while(search.value!==''){
        return `
          <li>
            <span class="name">${cityName}</span>
            <span class="population">${place.population}</span>
          </li>
        `;
        }
      }).join('')
    
    suggestions.innerHTML=html;
}

// function select(){

//     console.log("heyyyy")
//     const x=document.getElementById("foot")
//     x.innerHTML=`You clicked ${d}`
//     return x
// }

getFetch();

const suggestions = document.querySelector('.suggestions');
const search=document.querySelector('.search')

//suggestions.addEventListener('click',select)

search.addEventListener('keyup', displayCities);