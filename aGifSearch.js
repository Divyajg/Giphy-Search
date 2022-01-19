function searchForGifs() {

    document.getElementById('gifTitle').innerHTML = "Giphy searcher:";

    //get div created in html:
    const divGif = document.getElementById('getGif');

    //create input type text to search:
    const gifInput = document.createElement('input');
    gifInput.setAttribute('type', 'text');
    gifInput.setAttribute('class', 'font');
    gifInput.setAttribute('placeholder', 'Ex: funny cat');
    gifInput.id = "gifInput";
    divGif.appendChild(gifInput);

    const gap1 = document.createElement('p');
    divGif.appendChild(gap1);

    //button to initiate search
    const gifButton = document.createElement('button');
    gifButton.innerHTML = 'Search for gif';
    divGif.appendChild(gifButton);


    const gap2 = document.createElement('p');
    divGif.appendChild(gap2);

    //create and append input type number to specify how many search results should be showed:
    const gifNum = document.createElement('input');
    gifNum.setAttribute('type', 'number');
    gifNum.setAttribute('class', 'font');
    gifNum.setAttribute('placeholder', 'Ex:4');
    divGif.appendChild(gifNum);

    //display the result
    const gifResult = document.getElementById('gifResult');

    //gifpersonalized key 
    const gifKey = 'YZy2UKXShrQ6lnfkDnxnLnDpj6umQeap';

    function getYourGifs() {
        fetch(gifUrl)
            .then(response => response.json())
            .then(gifData => {
                gifData.data.forEach((giphy) => {
                    const image = document.createElement("img");
                    image.setAttribute("src", `${giphy.images.fixed_width.url}`);
                    gifResult.appendChild(image);
                });

            })
    }

    function gifSearch() {
        if (gifInput) {

            gifResult.innerHTML = "";
            gifUrl = ` https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifInput.value}&limit=20&offset=0&rating=g&lang=en`;

            getYourGifs();
        } else {
            const missingInput = document.createElement('p');
            missingInput.innerHTML = "Please provide your search."
            divGif.appendChild(missingInput);
        }
    }


    function gifQty() {
        gifResult.innerHTML = "";
        gifUrl = ` https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifInput.value}&limit=${gifNum.value}&offset=0&rating=g&lang=en`;
        getYourGifs();
    }

    gifButton.addEventListener('click', gifSearch);
    gifNum.addEventListener('input', gifQty);
}

document.getElementById('gif').addEventListener('click', searchForGifs);