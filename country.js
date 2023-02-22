// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '61599e639cmsh766add475f0c45ap10729ajsn71c5b14020c6',
// 		'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
// 	}
// };

const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61599e639cmsh766add475f0c45ap10729ajsn71c5b14020c6',
		'X-RapidAPI-Host': 'referential.p.rapidapi.com'
	}
};

let submitButton = document.querySelector(".profile-card__button");
let countrySelect = document.querySelector("#country");
let countryOption = `<option value="">select your country of choice</option>`;
let stateSelect = document.querySelector("#state");


let finalURL = 'https://referential.p.rapidapi.com/v1/country?fields=iso_a2';


// submitButton.addEventListener("click", handleSubmitButton);

// async function handleSubmitButton() {

//     console.log("clickedd")
    
// }

// handleCountryOnchange();
handleCountryOnchange();
countrySelect.addEventListener('change', handleFillStateOption);

async function handleFillStateOption(event){
   const countryCode = event.currentTarget.value;
   console.log(countryCode);

   const statesList = await fetchState(countryCode);

   handleStateList(statesList);

}

async function fetchCountry() {
    try {
        let result = await fetch(finalURL, option);

        if (result.ok) {
            let actualResult = await result.json();
            // console.log(actualResult)
            return actualResult;
        } else {
            throw new Error(result.statusText != "" ? result.statusText : result.status);
        }
        
        // let countryList = await actualResult;
    } catch (error) {

        errMessage.innerHTML = `
            Error alert, ${error.message};
        `
        console.log(error);
    }
}

async function handleCountryOnchange() {
    let countryList = await fetchCountry();
    
    // console.log(countryList);

    for (countryArr of countryList) {
        countryOption = countryOption + `<option value="${countryArr.iso_a2}">${countryArr.value}</option>`;
    }

    countrySelect.innerHTML = countryOption;
}

async function fetchState(countryCode) {
    try {
        let result = await fetch(`https://referential.p.rapidapi.com/v1/state?iso_a2=${countryCode}`, option);
        
        if (result.ok) {
            let actualResult = await result.json();

            return actualResult;
        } else {
            throw new Error(result.statusText != "" ? result.statusText : result.status);
        }
        
        // let countryList = await actualResult;
    } catch (error) {

        errMessage.innerHTML = `
            Error alert, ${error.message};
        `
        console.log(error);
    }
}

async function handleStateList(statesList) {
    // statesList = await fetchState(countryCode);
    let optionHtml = '<option value="">select state of choice</option>';

    // console.log(countryList);

    for (stateArr of statesList) {
        optionHtml = optionHtml + `<option value="${stateArr.key}">${stateArr.value}</option>`;
    }

    stateSelect.innerHTML = optionHtml;
}