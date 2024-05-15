const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');
        console.log(`Star ${value} was clicked!`);

        stars.forEach(innerStar => {
            if (innerStar.getAttribute('data-value') <= value) {
                innerStar.style.color = 'gold';
            } else {
                innerStar.style.color = '#ccc';
            }
        });
    });
});
