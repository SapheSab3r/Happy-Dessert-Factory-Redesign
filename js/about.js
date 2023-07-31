var btn = document.getElementById('cta');
var btn2 = document.getElementById('cta2');
var content = document.getElementsByClassName('text');
btn.onclick = function () {
    var morphing = anime({
        targets: '.polymorph',
        points: [
            { value: '215, 60 0, 60 0, 0 47.7, 0 67,76' },
            { value: '215, 60 0, 60 0, 0 0, 0 67,76' }
        ],
        easing: 'easeOutQuad',
        duration: 1200,
    })

    anime({
        targets: 'video',
        opacity: 1,
        duration: 800,
        easing: 'easeOutQuad',
        translateY: '960px',
        pause: false
    })
    anime({
        targets: '#cta2',
        opacity: 1,
        duration: 800,
        easing: 'easeOutQuad',
    })
    anime({
        targets: '#cta',
        opacity: 0,
        duration: 800,
        easing: 'easeOutQuad',
    })
    anime({
        targets: '.text',
        opacity: 0,
        duration: 600,
        easing: 'easeOutQuad',
    })
    anime({
        targets: '.about-img',
        opacity: 0,
        duration: 600,
        easing: 'easeOutQuad',
    })
    var promise = morphing.finished.then(() => {
        btn2.onclick = function () {
            var morphing = anime({
                targets: '.polymorph',
                points: [
                    { value: '215, 60 0, 60 0, 0 47.7, 0 67,76' },
                    { value: '215, 60 0, 60 0, 0 47.7, 0 215,0' }
                ],
                easing: 'easeOutQuad',
                duration: 1200,
            })
            anime({
                targets: 'video',
                opacity: 0,
                duration: 800,
                easing: 'easeOutQuad',
                translateY: '960px',
                pause: true
            })
            anime({
                targets: '#cta2',
                opacity: 0,
                duration: 800,
                easing: 'easeOutQuad',
            })
            anime({
                targets: '#cta',
                opacity: 1,
                duration: 800,
                easing: 'easeOutQuad',
            })
            anime({
                targets: '.text',
                opacity: 1,
                duration: 1000,
                easing: 'easeOutQuad',
            })
            anime({
                targets: '.about-img',
                opacity: 1,
                duration: 2000,
                easing: 'easeOutQuad',
            })

        }
    });

}