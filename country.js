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

// let dataURL = 'https://countries-states-cities-dataset.p.rapidapi.com/list-countries';
let finalURL = 'https://referential.p.rapidapi.com/v1/city?ip=128.218.229.26';


submitButton.addEventListener("click", handleSubmitButton);

async function handleSubmitButton() {
    
    try {
        let result = await fetch('https://referential.p.rapidapi.com/v1/city?ip=128.218.229.26', option);
        let actualResult = await result.json();
        console.log(actualResult);
    } catch (error) {
        errMessage.innerHTML = `
            Error alert, ${error.message};
        `
    }

}


// const option = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '61599e639cmsh766add475f0c45ap10729ajsn71c5b14020c6',
// 		'X-RapidAPI-Host': 'referential.p.rapidapi.com'
// 	}
// };

// fetch('https://referential.p.rapidapi.com/v1/city?ip=128.218.229.26', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

