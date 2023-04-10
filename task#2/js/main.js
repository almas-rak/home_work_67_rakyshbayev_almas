const BASEURL = 'https://rickandmortyapi.com/api/character'


function onLoad() {
    $.ajax({
        url: BASEURL,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let cards = document.createElement('div')
            cards.className = 'cards'
            let scripts = document.getElementsByTagName('script')
            scripts[0].parentNode.insertBefore(cards, scripts[0]);
            for (let i = 0; i < data.results.length; i++) {
                let a = document.createElement('a')
                a.href = `character.html?id=${data.results[i].id}`
                let div = document.createElement('div')
                div.className = 'card'
                let image = document.createElement('img')
                image.src = data.results[i].image
                image.className = 'image-card'
                let divImage = document.createElement('div')
                divImage.className = 'container-image'
                let pName = document.createElement('p')
                pName.textContent = `Name: ${data.results[i].name}`
                pName.className = 'text-card'
                pStatus = document.createElement('p')
                pStatus.textContent = `Status: ${data.results[i].status}`
                pStatus.className = 'text-card'
                divImage.append(image)
                div.append(divImage)
                div.append(pName)
                div.append(pStatus)
                a.append(div)
                cards.append(a)

            }
        }
    })

}

function character() {
    let urlParams = new URLSearchParams(window.location.search);
    let param = urlParams.get('id');
    $.ajax({
        url: `${BASEURL}/${param}`,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            let characterDiv = $('<div>').addClass('character');
            let name = $('<h1>').addClass('name').text(data.name);
            let image = $('<img>').addClass('image-card').attr('src', data.image);
            let containerImageDiv = $('<div>').addClass('container-image').append(image);
            let gender = $('<p>').addClass('character-text').text(`Gender: ${data.gender}`);
            let status = $('<p>').addClass('character-text').text(`Status: ${data.status}`);
            let species = $('<p>').addClass('character-text').text(`Species: ${data.species}`);
            characterDiv.append(name);
            characterDiv.append(containerImageDiv);
            characterDiv.append(gender);
            characterDiv.append(status);
            characterDiv.append(species);

            $('script').first().before(characterDiv);
        },
        error: function (error) {
            console.error(error);
        }
    });
}



if (document.title === 'Task#2') {
    onLoad();
}
else if (document.title === 'Character') {
    character();
}

