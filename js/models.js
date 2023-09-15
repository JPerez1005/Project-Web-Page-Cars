// Toggle menu button
const d=document;
function toggleMenu(){
    const menu=d.querySelector('.menu');
    const nav=d.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// Change the background video when click on the gallery image
function changeVideo(name){
    const bgVideoList=d.querySelectorAll('.bg_video');
    const trailers = d.querySelectorAll('.trailer');
    const models=d.querySelectorAll('.model');

    // JavaScript higher order array function forEach
    // this is easier to do datta mapping
    bgVideoList.forEach(video=>{
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });

    //mapping model name change
    models.forEach(model=>{
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
        }
    });

    trailers.forEach(video=>{
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
}