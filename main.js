import 'dotenv/config'; 
import Exa from 'exa-js';

const exa = new Exa(process.env.EXA_API_KEY);

const run = async (prompt) => {
    try {
        const result = await exa.searchAndContents(
            prompt,
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

// uses prompt that is 3 argument in command line 
const prompt = process.argv[2];

if (prompt) {
    run(prompt); 
} else {
    console.error("Please provide a prompt as a command-line argument.");
}