// console.log('working')
const loadPhone = async ()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    const phone = data.data;
    displayPhones(phone);
    

}
const displayPhones = (phone)=>{
    // console.log(phone);
    const divContainer = document.getElementById('divContainer');
    divContainer.textContent = '';

    phone.forEach(element => {
        console.log(element);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-orange-100 shadow-2xl`
        phoneCard.innerHTML = `
       
        <figure class="px-10 pt-10">
          <img src="${element.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-gray-400">${element.brand}</h2>
          <p class="text-gray-400">${element.phone_name}</p>
          <div class="card-actions">
            <button class="btn btn-accent font-medium text-white my-4">show details</button>
          </div>
        </div>
      </div>
        `

        divContainer.appendChild(phoneCard);
    });
   
}
loadPhone();