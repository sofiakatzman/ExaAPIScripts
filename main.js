import { search } from './scripts/search.js';

const script = process.argv[2]; // Second Parameter: Script Name
const parameter = process.argv[3]; // Second Parameter: Script Name

if (script === 'search') {
    search(parameter || 'hottest AI startups');
} else {
    console.error('Unknown script. Usage: node main.js <script> <prompt>');
    console.error('Available scripts: search');
}