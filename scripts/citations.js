import 'dotenv/config'; 
import Exa from 'exa-js';

const exa = new Exa(process.env.EXA_API_KEY);

export const citations = async (prompt) => {
    try {
        const result = await exa.searchAndContents(
            `citations for a blog post on ${prompt}`,
            {
                type: "neural",
                useAutoprompt: true,
                numResults: 5,
                text: true
            }
        );
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
};