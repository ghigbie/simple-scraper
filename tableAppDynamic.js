const request = require("request-promise");
const cheerio = require("cheerio");

const tableJSONArray = [];

const main = async () => {
    const result = await request.get("https://www.codingwithstefan.com/table-example/");
    const $ = cheerio.load(result);
    const tableHeaders = [];
    const scrapedRows = [];
    $("body > table > tbody > tr").each((index, element) => {
        if (index === 0){
            const ths = $(element).find("th");
            ths.each((index, header) => {
                tableHeaders.push($(header).text().toLowerCase());
            });
            console.log(tableHeaders);
            return true;
        }
        const tds = $(element).find("td");
        const company = $(tds[0]).text();
        const contact = $(tds[1]).text();
        const country = $(tds[2]).text();
        const scrapedRow = {company, contact, country };
        scrapedRows.push(scrapedRow);
    });
    console.log(scrapedRows);
}

main();