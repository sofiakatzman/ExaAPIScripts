import { search } from './scripts/search.js';
import { citations } from './scripts/citations.js';
import { domain } from './scripts/domain.js';
import { wishgarden } from './scripts/wishgarden.js';

// Extract parameters from command
const script = process.argv[2]; 
const parameter = process.argv[3]; 
const parameter2 = process.argv[4]; 

switch (script) {
    case 'search':
        search(parameter || 'hottest AI startups');
        break;

    case 'citations':
        citations(parameter || 'fast fashion');
        break;

    case 'domain':
        domain(parameter, parameter2 || 'wellness');
        break;

    case 'wishgarden':
        wishgarden(parameter || 'wellness');
        break;

    default:
        console.error('Unknown script. Usage: node main.js <script> <parameter>');
        console.error('Available scripts: search, citations, wishgarden, domain');
        console.error('Sample command: node main.js citations "fast fashion"');
}
