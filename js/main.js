console.log('Welcome to Fullstacknest!');

// document.getElementById(); => done
// document.querySelector();** => done
// document.querySelectorAll(); > done
// document.getElementsByClassName(); => done
// document.getElementsByName(); => done
// document.getElementsByTagName(); => done

// const username = document.getElementById('username');
// console.log(username.value);
// console.log(username.name);
// console.log(username.className);

// const username = document.querySelector('input[id="username"]'); // 1
// const username = document.querySelector('form > input[id="username"]'); // 2
// const username = document.querySelector('#username');
// const username = document.querySelector('input[name="input-username"]');
// const username = document.querySelector('.user-name'); // class based query selector
// const username = document.querySelector('input[class="form-control user-name my-2"]');

// const pass = document.querySelector('input[type="password"]')

// console.log(username.value);
// console.log(username.name);
// console.log(username.className);

// console.log(pass);

const allClasses = document.getElementsByClassName('form-control')
console.log(allClasses);

// Array.from(allClasses).forEach(item => {
//     console.log('clas -', item.value);
// })


const allClassesByQuerySel = document.querySelectorAll('.form-control')
console.log(allClassesByQuerySel);

// allClassesByQuerySel.forEach(item => {
//     console.log('qs-', item.value);
// })

const allClassesByQuerySel2 = document.querySelectorAll('.form-control, .form-label')
// console.log(allClassesByQuerySel2);
allClassesByQuerySel2.forEach(item => {

    if (item.value !== undefined) {
        console.log('qs2-', item.value);
    } else {
        console.log('label-', item.textContent);
    }
})

// const labelValue = document.querySelector('label');
// console.log(labelValue.innerText);

const inputName = document.getElementsByName('input-username');
console.log(inputName);

let userValues = ['myUserName', 'myUserPassword']
inputName.forEach((item, index) => {
    item.value = userValues[index];
})


const byTagName = document.getElementsByTagName('input'); // HTML-collection
// console.log(byTagName);

Array.from(byTagName).forEach(item => {
    console.log('byTagName -', item.value);
})

const btn = document.querySelector('button[type="button"]');

btn.addEventListener('click', () => {
    // const languages = document.getElementById('languages')
    const languages = document.querySelector('#languages')
    const showText = document.getElementById('showText');
    showText.innerText = '';

    let temp = [];
    for (let i = 0; i < languages.options.length; i++) {
        const lang = languages.options[i];
        if (lang.selected) {
            temp.push(lang.value)
        }
    }

    if (temp.length !== 0)
        showText.innerText = `You had selected: ${temp.join(', ')}.`


    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    let checkboxesValues = [];
    // checkboxes.forEach(item => {
    //     if (item.checked)
    //         // console.log(item.value);
    //         checkboxesValues.push(item.value)
    // })

    for (let i = 0; i < checkboxes.length; i++) {
        const item = checkboxes[i];
        if (item.checked)
            checkboxesValues.push(item.value)
    }

    if (checkboxesValues.length !== 0)
        showText.innerText += ` You had choosed: ${checkboxesValues.join(', ')} as your Job Profile`


    // const radios = document.querySelectorAll('input[type="radio"]')
    // radios.forEach(item => {
    //     if (item.checked)
    //         console.log(item.value);
    // })

    // const radios = document.querySelector('input[type="radio"]:checked').value;
    // if (radios !== null || radios !== undefined) {
    //     showText.innerText = '';
    //     showText.innerText += `Your gender is ${radios}`
    // }

    const radios = document.getElementsByName('gender');
    radios.forEach(item => {
        if (item.checked) {
            // showText.innerText = '';
            showText.innerText += `Your gender is ${item.value}`
        }

    })
})

// 1) Showing image

// document.getElementById('userProfile').addEventListener('change', (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = function (e) {
//             const imageURL = e.target.result;
//             const showImage = document.getElementById('showImage');
//             // const imageTag = document.createElement('img')
//             // imageTag.src = imageURL;
//             // imageTag.className = 'selected-image'
//             const imageTag = `<img class="selected-image" src="${imageURL}" alt="User selected profile pic" />`
//             // imageTag.style.width = '200px'
//             // imageTag.style.height = '200px'


//             // showImage.append(imageTag)
//             showImage.innerHTML = imageTag;

//         }
//     }
// })


// 2)
// document.getElementById('userProfile').addEventListener('change', (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         const imageURL = URL.createObjectURL(file)
//         const showImage = document.getElementById('showImage');
//         const imageTag = document.createElement('img')
//         imageTag.src = imageURL;
//         imageTag.className = 'rounded-image'
//         showImage.append(imageTag)


// const fileReader = new FileReader();
// fileReader.readAsDataURL(file);
// fileReader.onload = function (e) {
//     const imageURL = e.target.result;
//     const showImage = document.getElementById('showImage');
//     const imageTag = document.createElement('img')
//     imageTag.src = imageURL;
//     imageTag.className = 'selected-image'
//     showImage.append(imageTag)
// const imageTag = `<img class="selected-image" src="${imageURL}" alt="User selected profile pic" />`
// imageTag.style.width = '200px'
// imageTag.style.height = '200px'



// showImage.innerHTML = imageTag;

// }
//     }
// })


// 3)
// document.getElementById('showImgBtn').addEventListener('click', () => {
//     const file = document.getElementById('userProfile').files[0];
//     if (file) {
//         const imageURL = URL.createObjectURL(file)
//         const showImage = document.getElementById('showImage');
//         const imageTag = document.createElement('img')
//         imageTag.src = imageURL;
//         imageTag.className = 'rounded-image'
//         showImage.append(imageTag)
//     }
// })

// function showImageOnClick() {
//     const file = document.getElementById('userProfile').files[0];
//     if (file) {
//         const imageURL = URL.createObjectURL(file)
//         const showImage = document.getElementById('showImage');
//         const imageTag = document.createElement('img')
//         imageTag.src = imageURL;
//         imageTag.className = 'rounded-image'
//         showImage.append(imageTag)
//     }
// }



//-------------------------- MULTIPLE -----------------

document.getElementById('userProfile').addEventListener('change', (e) => {
    const filesList = e.target.files;
    const showImage = document.getElementById('showImage');
    showImage.innerHTML = null;

    for (let i = 0; i < filesList.length; i++) {
        const file = filesList[i];

        if (file) {
            const imageTag = document.createElement('img')
            // const imageURL = URL.createObjectURL(file)
            // imageTag.src = imageURL;
            // imageTag.className = 'rounded-image'
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                const imageURL = e.target.result;
                const showImage = document.getElementById('showImage');
                const imageTag = document.createElement('img')
                imageTag.src = imageURL;
                imageTag.className = 'rounded-image'
                showImage.append(imageTag)
            }


            showImage.append(imageTag)
        }
    }
})


// const paras = document.getElementById('informations').querySelectorAll('p');
const infoDiv = document.getElementById('informations');
const paras = infoDiv.querySelectorAll('p');
paras.forEach(item => {
    item.style.color = 'blue'
    item.style.fontWeight = 'bold'
    item.style.fontSize = '30px'
})

const secDiv = document.getElementById('secondary');
const paras2 = secDiv.querySelectorAll('p');
paras2.forEach(item => {
    item.style.color = 'red'
    item.style.fontWeight = 'bold'
    item.style.fontSize = '20px'
})