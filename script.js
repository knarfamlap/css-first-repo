// Login Page slideShow

let cycle = 0;

let backgroundPics = ["https://78.media.tumblr.com/890eedd4b23b25347264f6ac8c8e6b98/tumblr_p33fo10WTj1r6pbleo2_1280.png", "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg", "https://get.pxhere.com/photo/street-wall-blue-colorful-graffiti-street-art-art-mural-greece-athens-work-of-art-painting-wall-1195942.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/90/Touched_by_His_Noodly_Appendage_HD.jpg"];

setInterval(function() {
  if (cycle < 4) {
    document.body.style.backgroundImage = "url('" + backgroundPics[cycle] + "')";
    cycle += 1;
  } else {
    cycle = 0;
  }
}, 5000);
