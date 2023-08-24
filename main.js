function toggleBlur() {
    const i1 = document.getElementById('i1');
    i1.style.filter = i1.style.filter === 'none' ? 'blur(5px)' : 'none';
}


// bootup 

        const video = document.querySelector('.video-container video');
        video.addEventListener('ended', function() {
            document.querySelector('.video-container').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        });


     