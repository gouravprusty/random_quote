const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector(".button");

const api_url ="https://quotes-api-self.vercel.app/quote";

async function getapi(url){
    try{
        const response = await fetch(url);
        var data = await response.json();
        return data;
    }catch(err){
        return err;
    }
};
button.addEventListener("click", async () => {
    let quoteData = await getapi(api_url);
    quote.innerText = quoteData.quote;
    author.innerText = quoteData.author;
});