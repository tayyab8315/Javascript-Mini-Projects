let searchbtn = document.querySelector('.play');
let inputfield = document.querySelector('.selectrr');
let viewmore = document.querySelectorAll('.morebtn');
let imageouter = document.querySelector('.image-outer');
let paginate = document.querySelector('.paginate');


let client_id = 'iV6Ww4Cd9g9Z4K4K9SM8icRhD0V5hC3K0sL1a_aZbkw';
let page = 1;

searchbtn.addEventListener('click', () => {
    page ;
    Getimage(page);
});

viewmore.forEach(e => {
    e.addEventListener('click', () => {
        page = parseInt(e.dataset.page);  
        Getimage(page);
    });
});

function Getimage(page) {
    let serchimgname = inputfield.value;
    fetch(`https://api.unsplash.com/search/photos?per_page=16&page=${page}&query=${serchimgname}&client_id=${client_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.total_pages);

            let results = data.results;
            let htmlData = '';  

            results.forEach(result => {
                console.log(result);
                htmlData += `<img src="${result.urls.small}" class="col-sm-6 col-md-4 col-lg-3 p-0 ps-3 mt-4 img-inner" height="230px" alt="">`;
            });

            imageouter.innerHTML = htmlData; 

      
            if (viewmore.length >= 4) {
                viewmore[0].dataset.page = 1;
                viewmore[1].dataset.page = page > 1 ? page - 1 : 1; 
                viewmore[2].dataset.page = page < data.total_pages ? page + 1 : data.total_pages; 
                viewmore[3].dataset.page = data.total_pages;
            }
            paginate.classList.remove('d-none');
            if(page<=1){
                viewmore[0].classList.add('d-none');
                viewmore[1].classList.add('d-none');
            }else{
                viewmore[0].classList.remove('d-none');
                viewmore[1].classList.remove('d-none');
            }
            if(page>=data.total_pages){
                viewmore[2].classList.add('d-none');
                viewmore[3].classList.add('d-none');
            }else{
                viewmore[2].classList.remove('d-none');
                viewmore[3].classList.remove('d-none');
            }

         
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
