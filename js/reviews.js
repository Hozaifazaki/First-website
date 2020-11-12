// set an object
var reviews= [
    {
        id : 1,
        name : 'susan smith',
        job : 'web developer',
        img : 'images/person2.jpg',
        text :
            "all summaries, the problems seem simpler than they actually are. In the following conclusions, anxiety may sound again like an abnormal condition affecting only unfortunate individuals. I would like to emphasize again that anxiety is a life-long challenge,all summaries, the problems seem simpler than they actually are. In the following conclusions, anxiety may sound again like an abnormal condition affecting only unfortunate individuals. I would like to emphasize again that anxiety is a life-long challenge, all summaries, the problems seem simpler than they actually are. In the following conclusions, anxiety may sound again like an abnormal condition affecting only unfortunate individuals. I would like to emphasize again that anxiety is a life-long challenge.",
    },
    {
        id : 2,
        name : 'john alfrid ',
        job : 'web designer',
        img : 'images/person3.jpg',
        text :
            "Having reviewed diverse theories and hypotheses on the waning of the Age of Enlightenment in Central Asia, it is now time to step back and raise a larger question: does it really require an explanation? The assumption behind our search for causes is that if one ", 
    },
    {
        id : 3,
        name : 'peter johnson ',
        job : 'intern',
        img : 'images/person4.jpg',
        text :
            "It was summertime, and two children scampered down the sidewalk toward a man approaching in the distance. The man waved, and the children raced each other to him. It was still summertime, and the children came closer.", 
    }
];

var
    image = document.querySelector('img'),
    author = document.querySelector('.author'),
    job = document.querySelector('.job'),
    info = document.querySelector('.text'),
    prevBtn = document.querySelector('.prev-btn'),
    nextBtn = document.querySelector('.next-btn'),
    randomBtn = document.querySelector('.random-btn'),
    currentItem = 0;

window.addEventListener('DOMContentLoaded', function (){
    editContent();
    // DOMContentLoaded --> The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
});

function editContent() {
    const item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
   
   currentItem++;
   if (currentItem > reviews.length -1) {
    //code
    currentItem = 0;
   }
   editContent();
   console.log(currentItem);
    
});

prevBtn.addEventListener('click', function(){
   
   currentItem--;
   // cond. for no items  with negative index
   if (currentItem < 0) {
    //code
    currentItem = reviews.length -1;
    // cause .length show the last index + 1
    
   }
   editContent();
   console.log(currentItem);
    
});

randomBtn.addEventListener('click', function(){
   // for random no.
   currentItem = Math.floor(Math.random() * reviews.length);
   console.log(currentItem);
   // call the func.
   editContent();
});















