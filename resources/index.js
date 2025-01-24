
async function getUser() {
    try {
        $.getJSON('https://api.github.com/users/JushPush', function(data) {
            const imgTag = document.getElementById('git-user-id');
            imgTag.setAttribute('src', data.avatar_url);

            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = data.avatar_url;
        });
        
    } catch (err) {
        console.log(err);
    }
}

function toggleTheme() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
}

// picks a random banner for the page
function cycleImage() {
    // cycle between banner images, KEEP READABILITY do NOT ruin the look of it because users can't read the page.
    const randomIndex = Math.floor(Math.random() * bannerFiles.length);
    const banner = document.getElementById("banner");
    if (banner)
        banner.style.backgroundImage = `url('images/${bannerFiles[randomIndex]}')`;
}

$( document ).ready(function() {
    getUser();

    cycleImage();

    document.body.className = "visible d-flex flex-column min-vh-100";
});
