const loadLatestPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data;
    // console.log(posts);
    displayLatestPosts(posts);
}

const displayLatestPosts = posts => {
    // console.log(posts);
    const postContainer = document.getElementById('latest-post-container');

    posts.forEach(post => {
        console.log(post);

        const latestPostDiv = document.createElement('div');

        latestPostDiv.classList = `p-6 border-[1px] rounded-[24px]`;
        latestPostDiv.innerHTML = `
        <img class="w-80 h-48 bg-[#12132d0d] rounded-3xl" src="${post.cover_image}" alt="#">
        <div class="flex pt-6 pb-3 gap-1"><img src="./images/date-logo.png" alt="#"><span>${post.author.posted_date === undefined ? 'No Publish Date' : post.author.posted_date}</span></div>
        <p class="text-[#12132D] text-[18px] font-extrabold">${post.title}</p>
        <p class="text-[#12132d99] text-base font-normal pt-2 pb-4">${post.description}</p>
        <div class="flex gap-4">
            <img class="w-11 h-11 rounded-[44px]" src="${post.profile_image}" alt="#">
            <div>
                <p class="text-[#12132D] text-base font-bold">${post.author.name}</p>
                <p class="text-[#12132d99] text-sm font-normal">${post.author.designation === undefined ? 'Unknown' : post.author.designation }</p>
            </div>
        </div>
        `;
        postContainer.appendChild(latestPostDiv);
    })
}

loadLatestPost();