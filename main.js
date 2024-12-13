import { search } from './scripts/search.js';
import { citations } from './scripts/citations.js';

// Extract parameters from command
const script = process.argv[2]; 
const parameter = process.argv[3]; 

switch (script) {
    case 'search':
        search(parameter || 'hottest AI startups');
        break;

    case 'citations':
        citations(parameter || 'fast fashion');
        break;

    default:
        console.error('Unknown script. Usage: node main.js <script> <parameter>');
        console.error('Available scripts: search, citations');
        console.error('Sample command: node main.js citations "fast fashion"');
}
