const plusBth = document.getElementById('plusBth')
const  minusBth = document.getElementById('minusBth')
const adultsBth = document.getElementById('adultsBth')

plusBth.addEventListener('click', () => {
    adultsBth.value =  adultsBth.value >= 10 ? adultsBth.value : +adultsBth.value + 1
})
minusBth.addEventListener('click', () => {
    adultsBth.value = adultsBth.value <= 0 ? adultsBth.value : +adultsBth.value - 1
})


const secondPlus = document.getElementById('secondPlus')
const  secondMinus = document.getElementById('secondMinus')
const secondAdults = document.getElementById('secondAdults')

secondPlus.addEventListener('click', () => {
    secondAdults.value =  secondAdults.value >= 10 ? secondAdults.value : +secondAdults.value + 1
})
secondMinus.addEventListener('click', () => {
    secondAdults.value = secondAdults.value <= 0 ? secondAdults.value : +secondAdults.value - 1
})