import 'dotenv/config'; 
import Exa from 'exa-js';

const exa = new Exa(process.env.EXA_API_KEY);

export const wishgarden = async (prompt) => {
    try {
        const response = await exa.searchAndContents(
            `citations for a blog post on ${prompt}`,
            {
                type: "neural",
                useAutoprompt: true,
                numResults: 5,
                text: true,
                includeDomains: ["https://www.wishgardenherbs.com/"],
            }
        );

        // Extract results if any found 
        if (response && response.results && response.results.length > 0) {
            console.log('Search Results:');
            response.results.forEach((result, index) => {
                console.log(`\nResult ${index + 1}:`);
                console.log(`Title: ${result.title || 'No Title Available'}`);
                console.log(`URL: ${result.url || 'No URL Available'}`);
                console.log(`Published Date: ${result.publishedDate || 'No Date Available'}`);
                console.log(`Author: ${result.author || 'No Author Available'}`);
                console.log(`Snippet: ${result.text.slice(0, 200) || 'No Text Available'}...`);
                console.log(`Image: ${result.image || 'No Image Available'}`);
            });
        } else {
            console.log('No results found.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
