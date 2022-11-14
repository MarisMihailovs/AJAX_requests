const xhrBtn = document.getElementById('xhr');
const fetchBtn = document.getElementById('fetch');
const jqueryBtn = document.getElementById('jquery');
const axiosBtn = document.getElementById('axios');

const quote = document.getElementById('quote');
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

function getQuoteXhr() {
    console.log("Xhr req");
    const req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(req);
            quote.innerText = req.responseText.replace(/[\[\]]/g, '');
        }
    };
    req.open("GET", url, true);
    req.send();
}

async function getQuoteFetch() {
    console.log("Fetch req");
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        quote.innerText = JSON.stringify(result).replace(/[\[\]]/g, '');
    } catch (error) {
        // catch error here
        console.log(error);
    }
}

function getQuotejQuery() {
    console.log("jQuery req");
    const jqxhr = $.ajax(url)
        .done(function () {
            console.log(jqxhr);
            quote.innerText = jqxhr.responseText.replace(/[\[\]]/g, '');
        })
        .fail(function () {
            alert("error");
        });
}



function getQuoteAxios() {
    console.log("Axios req");

    // Make a request for quote
    axios.get(url)
        .then(function (response) {
            console.log(response);
            quote.innerText = "\"" + response.data + "\"";
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


xhrBtn.addEventListener('click', getQuoteXhr);
fetchBtn.addEventListener('click', getQuoteFetch);
jqueryBtn.addEventListener('click', getQuotejQuery);
axiosBtn.addEventListener('click', getQuoteAxios);
