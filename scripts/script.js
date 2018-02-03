//Example 2
$(function () {
    var images = [{
        small : 'assets/images/image_viewer/1.jpg',
        big : 'assets/images/image_viewer/1_big.jpg'
    },{
        small : 'assets/images/image_viewer/2.jpg',
        big : 'assets/images/image_viewer/2_big.jpg'
    },{
        small : 'assets/images/image_viewer/3.jpg',
        big : 'assets/images/image_viewer/3_big.jpg'
    },{
        small : 'assets/images/image_viewer/4.jpg',
        big : 'assets/images/image_viewer/4_big.jpg'
    }];

    var curImageIdx = 1,
        total = images.length;
    var wrapper = $('#image-gallery-2'),
        curSpan = wrapper.find('.current');
    var viewer = ImageViewer(wrapper.find('.image-container'));

    //display total count
    wrapper.find('.total').html(total);

    function showImage(){
        var imgObj = images[curImageIdx - 1];
        viewer.load(imgObj.small, imgObj.big);
        curSpan.html(curImageIdx);
    }

    wrapper.find('.next').click(function(){
         curImageIdx++;
        if(curImageIdx > total) curImageIdx = 1;
        showImage();
    });

    wrapper.find('.prev').click(function(){
         curImageIdx--;
        if(curImageIdx < 0) curImageIdx = total;
        showImage();
    });

    //initially show image
    showImage();
});
