// Challenge  2
const where = document.querySelector('.image');

const insertImage = function(src){
    where.innerHTML = `<img  src="${src}"/>`;
};

const imageTimeout = function(seconds){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            document.querySelector('img').src = "";
            resolve()
        }, seconds);
    });
};


insertImage('img/img-1.jpg');
document.querySelector('img').addEventListener('load', function(){
    console.log("this image has been loaded");
    imageTimeout(3000)
        .then(()=> {
            insertImage('img/img-2.jpg');
            return imageTimeout(3000);
        })
        .then(() => {
            insertImage('img/img-3.jpg');
            return imageTimeout(3000);
        });
});


imageTimeout(10000).then(()=> console.log("This is being printed after 10 seconds"));
