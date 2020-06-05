$(document).ready(function() {
    var options = {
        animateThreshold: 100
    };
    $('.aniview').AniView(options);

    $('.code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});

var options = {
    animateThreshold: 100,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);

$('.aniview').AniView();
