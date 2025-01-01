const data = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Jane', age: 22, city: 'Los Angeles' },
    { name: 'Mike', age: 32, city: 'Chicago' }
];

function generateTable(data) {
    let table = '<table border="1">';
    table += '<tr>';
    for (let key in data[0]) {
        table += `<th>${key}</th>`;
    }
    table += '</tr>';

    data.forEach(row => {
        table += '<tr>';
        for (let key in row) {
            table += `<td>${row[key]}</td>`;
        }
        table += '</tr>';
    });

    table += '</table>';
    return table;
}

document.body.innerHTML = generateTable(data);