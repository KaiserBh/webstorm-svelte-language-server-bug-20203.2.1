import psl from 'psl';
import type { ParsedDomain } from 'psl';
export const hasValidSubdomain = (domain: string): boolean => {
    const parsed = psl.parse(domain);
    if ('error' in parsed) {
        console.error('Error parsing domain:', parsed.error);
        return false;
    }
    const subdomain = (parsed as ParsedDomain).subdomain;
    return !!(subdomain && subdomain !== 'www');
};