
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

$( document ).ready(function() {
    getUser();

    document.body.className = "visible d-flex flex-column min-vh-100";
});
