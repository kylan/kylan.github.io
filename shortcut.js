sc_map = {
    'test': 'https://www.google.com'
}

const queryString = new URLSearchParams(window.location.search);
const sc = queryString.keys().next().value;

if (sc in sc_map) {
    window.location.replace(sc_map[sc]);
}