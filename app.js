const fs = require('fs')
const request = require("request-promise");
const cheerio = require("cheerio");

const main = async () => {
    const data = await request.get(
        "https://reactnativetutorial.net/css-selectors/lesson5.html"
    )
    fs.writeFileSync("./test.html", data);
    const $ = await cheerio.load(data);
    $("h2").each((index, element) => {
        console.log($(element).text());
    })
    console.log('red id', $("#red").text());
    $('.red').each((index, element) => {
        console.log('red class', $(element).text());
    })

}

main()