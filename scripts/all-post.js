const loadAllPosts = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;
    displayAllPosts(posts);
}
loadAllPosts();

const loadAllPost = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayAllPosts(posts);
}


const displayAllPosts = posts => {
    console.log(posts);

    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';
    
    posts.forEach(post => {

        const postDiv = document.createElement('div');

        const z = `
            ${post.isActive}
        `;


        postDiv.classList = `flex pl-10 pt-10 mt-3 pt-10 bg-[#F3F3F5] rounded-2xl`;
        postDiv.innerHTML = `
        <div class="flex relative">
        <img src="${post.image}" class="w-16 h-16 bg-white rounded-2xl"></img>
        <div id="active-status" class="w-[18px] h-[18px] relative right-3 border-[1px] border-[white] rounded-2xl"></div>
    </div>
    <div>
        <span class="pr-5 text-[#12132dcc] text-[14px] font-medium">#${post.category}</span>
        <span class="text-[#12132dcc] text-[14px] font-medium">Author: ${post.author.name}</span>
        <h5 class="text-[#12132D] text-xl font-bold">${post.title}</h5>
        <p class="text-[#12132d99] pt-3 pb-5">${post.description}</p>
        <hr>
        <div class="flex items-center gap-48 pt-6 pb-11">
            <div class="flex">
                <img src="./images/message.png" alt="#"><span class="text-[#12132d99] pl-2 pr-6">${post.comment_count}</span>
                <img src="./images/eye.png" alt="#"><span class="text-[#12132d99] pl-2 pr-6">${post.view_count}</span>
                <img src="./images/clock.png" alt="#"><span class="text-[#12132d99] pl-2 pr-6">${post.posted_time} min</span>
            </div>
            <div>
                <button id="mark-btn"><img class="select-none" style="-webkit-user-drag: none;" src="./images/email.png" alt="#"></button>
            </div>
        </div>
    </div>

        `;
        postContainer.appendChild(postDiv);
    });

    toggleSpinner(false);

    // mark as read section 
    document.getElementById('mark-btn').addEventListener('click', function() {

        const readContainer = document.getElementById('mark-read');
        readContainer.classList.remove('invisible');

        const readDiv = document.createElement('div');
        readDiv.innerHTML = `
        <div class="flex gap-4 p-4 bg-white mt-5 rounded-2xl">
        <p class="text-[#12132D] text-base font-semibold ">10 Kids Unaware of Their <br> Halloween Costume</p>
        <div class="flex items-center gap-1 text-[#12132d99]"><img src="./images/eye.png" alt="#"><span>1568</span></div>
        </div>
        `
        readContainer.appendChild(readDiv);
        const readCount = document.getElementById('read-count');
        const newCountInt = parseInt(readCount.innerText)
        const newCount = newCountInt + 1;
        readCount.innerText = newCount;
    })
    // mark as read section 
}

// search functionality 
const handleSearch = () => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadAllPost(searchText);
    searchField.value = '';
}
// search functionality 


// toggle loading spinner 
const toggleSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}
// toggle loading spinner 


