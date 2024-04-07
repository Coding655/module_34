const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

            const data = await res.json();
            const phones = data.data;
            displayPhones(phones, isShowAll);

}   

    const displayPhones = (phones, isShowAll) =>{
        const divContainer = document.getElementById('phone-container');
        divContainer.textContent = '';
        // console.log(phones.length);
        // console.log(phones)

        const showAllContainer = document.getElementById('show-all-container');
        if(phones.length > 12 && !isShowAll){
            showAllContainer.classList.remove('hidden');

        }
        else{
            showAllContainer.classList.add('hidden');   
        }

       if(!isShowAll){
        phones = phones.slice(0,12);
       }
        phones.forEach(element => {
            // console.log(element);
            //some steps we must be do
            /* 1: create a div
               2:  
               3:
               4:
               */
              const phoneCard = document.createElement('div');
              phoneCard.classList = `card p-4 bg-sky-200 shadow-xl`
              phoneCard.innerHTML = `

                    <figure><img src="${element.image}" alt="Phones" /></figure>
                    <div class="card-body">
                    <h2 class="card-title justify-center">Brand: ${element.brand}</h2>
                    <span class="text-center font-semibold"> 
                  
                    </span>
                    <div class="card-actions justify-center  my-8">
                        <button onclick="showDetailsBtn('${element.slug}');" class="btn btn-primary text-white font-bold " id="show-details">Show Details</button>
                    </div>
                    </div>
              `
                divContainer.appendChild(phoneCard);
        });
        /* hide loadingSpinner */
        toggleLoadingSpinner(false);    
    }
    // show details
    const showDetailsBtn = async (id) => {
        // const showDetails = document.getElementById('show-details');
        console.log('click is working',id);
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
        const data = await res.json();
        const phone = data.data;
        
        showPhoneDetails(phone);
        
    }
    const showPhoneDetails = (element) => {
        /* show modal */
        const phoneDetails = document.getElementById('show-phone-details');
        phoneDetails.innerText = element.name;

        const showDetailsContainer = document.getElementById('show-details-container');
        showDetailsContainer.innerHTML= `

                <img src="${element.image}"/>
        

        `

        console.log(element);
        show_details_modal.showModal()
    }

    /*handle search button first */
    const searchButton = (isShowAll)=> {
        toggleLoadingSpinner(true);
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        console.log(searchText);
        loadPhone(searchText, isShowAll);
    }
    /* handle search recap (second) */

    // const handleSearch2 = () => {
    //     const searchField2 = document.getElementById('searchBtn2');
    //     const searchText = searchField2.value;
    //     // console.log()
    //     loadPhone(searchText);
    // }

  
    /* loading spinner */
    const toggleLoadingSpinner = (isLoading)=>{
        const loadSpinner = document.getElementById('loading-spinner');
        if(isLoading){
            loadSpinner.classList.remove('hidden');
        }
        else{
            loadSpinner.classList.add('hidden');
        }
        
    }
    const showAllBtn = ()=>{
        searchButton(true);
    }


// loadPhone();    
