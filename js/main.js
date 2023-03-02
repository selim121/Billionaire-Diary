const userList = async() => {
    // const URL = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    // const res = await fetch(URL);
    // const data = await res.json();
    
    const users = document.getElementById('user-container');
    billionaires.forEach(user => {
        console.log(user);
        const userDiv = document.createElement('tbody');
        userDiv.innerHTML = `
        <tr>
            <td onclick="loadUserDetails(${user.position})" class="bd-color-6" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#bio">${user.personName}</td>
            <td class="bd-color-6">${user.countryOfCitizenship}</td>
            <td class="bd-color-6">${user.industries}</td>
            <td class="bd-color-6">${user.rank}</td>
            <td class="bd-color-6">$${user.finalWorth} m</td>
        </tr>
        `;
        users.appendChild(userDiv);
    })
}

const displaySingleUserProfile = user =>{
    const userBioTitle = document.getElementById('bioLabel');
    userBioTitle.innerText = user.person.name;
    const userBioBody = document.getElementById('user-bio-details');
    userBioBody.innerText = user.bios;

    const citizenship = document.getElementById('citizenship');
    citizenship.innerText = user.countryOfCitizenship;
    const state = document.getElementById('state');
    state.innerText = user.state;
    const city = document.getElementById('city');
    city.innerText = user.city;
    const birthday = document.getElementById('birthday');
    birthday.innerText = user.birthday;
    const gender = document.getElementById('gender');
    gender.innerText = user.financialAssets.gender;

    const exchange = document.getElementById('exchange');
    exchange.innerText = user.financialAssets.exchange;
    const ticker = document.getElementById('ticker');
    ticker.innerText = user.financialAssets.ticker;
    const numberOfShares = document.getElementById('numberOfShares');
    numberOfShares.innerText = user.financialAssets.numberOfShares;
    const sharePrice = document.getElementById('sharePrice');
    sharePrice.innerText = user.financialAssets.sharePrice;
    // const generalInfo = document.getElementById('general-info');
    // generalInfo.innerHTML = `
    //     <h4>General Information</h4>
    //     <p class="fw-bold">Citizenship: ${user.countryOfCitizenship}</p>
    //     <p class="fw-bold">State: ${user.state}</p>
    //     <p class="fw-bold">City: ${user.city}</p>
    //     <p class="fw-bold">Birthday: ${user.birthDate}</p>
    //     <p class="fw-bold">Gender: ${user.gender}</p>
    // `;
}

const loadUserDetails = async(id) =>{
    // const URL = `https://forbes400.onrender.com/api/forbes400?limit=${id}`;
    // const res = await fetch(URL);
    // const data = await res.json();
    billionaires.forEach(user => {
        displaySingleUserProfile(user);
        console.log(user);
    });
}
userList();

 
