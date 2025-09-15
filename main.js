const currency = 'EUR';
const exact_date = '10.09.2024';

let nbuURL = new URL('https://bank.gov.ua/NBU_ovdp');

nbuURL.searchParams.append('json', '');
nbuURL.searchParams.append('val_code', currency);
nbuURL.searchParams.append('date', exact_date);

console.log(nbuURL.href);
