import { search } from './scripts/search.js';
import { citations } from './scripts/citations.js';

const script = process.argv[2]; // Second Parameter: Script Name
const parameter = process.argv[3]; // Third Parameter: Script Parameter

switch (script) {
    case 'search':
        search(parameter || 'hottest AI startups');
        break;

    case 'citations':
        citations(parameter || 'default citation topic');
        break;

    default:
        console.error('Unknown script. Usage: node main.js <script> <parameter>');
        console.error('Available scripts: search, citations');
}
