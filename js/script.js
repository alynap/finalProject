const navigation = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if(scrollY >= 215) {
        navigation.classList.add('bg');
    }
    else {
        navigation.classList.remove('bg');
    }

})