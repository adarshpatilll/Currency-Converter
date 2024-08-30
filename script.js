const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const resArr = document.querySelectorAll(".res-column");
const input = document.querySelector("input");
const button = document.querySelector("#cross-button");

const from = document.querySelector("#left-select");
const to = document.querySelector("#right-select");

const fromFlag = document.querySelector("#from-img");
const toFlag = document.querySelector("#to-img");
fromFlag.setAttribute("src", `https://flagsapi.com/${countryList[from.value]}/flat/64.png`)
toFlag.setAttribute("src", `https://flagsapi.com/${countryList[to.value]}/flat/64.png`)

// Main function
document.querySelector("button").addEventListener('click', () => {
    if(!input.value) {
        document.querySelector("input").style.border = "2px solid red";
    }
    else {
        document.querySelector(".loader-wrapper").style.display = 'flex';
        setTimeout(async () => {
            try {
                const response = await fetch(`${BASE_URL}/${from.value.toLowerCase()}.json`) 
                const data = await response.json();
                const amount =(data[from.value.toLowerCase()][to.value.toLowerCase()] * input.value);
     
                resArr[0].textContent = input.value;
                resArr[1].textContent = from.value+" =";
                resArr[2].textContent = amount.toFixed(2);
                resArr[3].textContent = to.value;
                document.querySelector(".loader-wrapper").style.display = 'none';
            } 
            catch (error) {
                console.log(error);
            }
        }, 500)
    }
});

// Flag change when dropdown selected
const changeFlags = () => {
    from.addEventListener('change', () => {
        fromFlag.setAttribute("src", `https://flagsapi.com/${countryList[from.value]}/flat/64.png`);
    })

    to.addEventListener('change', () => {
        toFlag.setAttribute("src", `https://flagsapi.com/${countryList[to.value]}/flat/64.png`);
    })

};

// Restrictions and Validations
const restrictionsAndValidations = () => {
    document.querySelector("#cross-btn").addEventListener('click', () => {
        input.value = "";
        resArr[0].textContent = "---";
        resArr[1].textContent = "---";
        resArr[2].textContent = "---";
        resArr[3].textContent = "---";
    });

    document.querySelector("input").addEventListener('keypress', () => {
        document.querySelector("input").style.border = "2px solid #15803d";
    })

    document.addEventListener('contextmenu', (e) => e.preventDefault());
}

// Adding all options in both select tags
const selects = [from, to];
Object.keys(countryList).forEach(elem => {
    selects.forEach((i) => {
        const opt = document.createElement('option');
        opt.value = elem;
        opt.textContent = elem;
        i.appendChild(opt);
    });
});

restrictionsAndValidations();
changeFlags();