const main = async() => {
    console.dir(data);
    var mydata = data;

    const container = document.getElementById('main-container');
    
    var toAdd = `<table id="rental-table">`;
    
    Object.keys(mydata.types).forEach((typeKey) => {
        toAdd+=`<tr>
            <th colspan="3">${typeKey}</th>
        </tr>`;
        mydata.types[typeKey].forEach(rental => {
            toAdd+=`<tr>
                <td>${rental.name}</td>
                <td>$${rental.pricePerDay}</td>
                <td><img src="${rental.img}" alt="${rental.name}"></td>
            </tr>`;
        });
    });

    container.innerHTML+=toAdd
}

main();