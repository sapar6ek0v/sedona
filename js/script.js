const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 3000],
    connect: true,
    range: {
        'min': 0,
        'max': 4000
    }
});

const from = document.querySelector('.pricing-input-from')
const to = document.querySelector('.pricing-input-to')


slider.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
        from.value = 'ОТ ' + Math.round(values[handle])
    } else if (handle === 1) {
        to.value = 'ДО ' + Math.round(values[handle])
    }
});


