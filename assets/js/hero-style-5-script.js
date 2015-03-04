
(function($) {

    $(document).ready(function($) {
        var modal = $('.modal-view-video');

        // When click play video
        modal.on('show.bs.modal', function(event) {
            var item = $(this);
            var block = item.parents('.block-item:first');
            var player = $('.video-player', block);
            player.html($('<iframe src="'+ player.attr('data-video') +'" />'));

//            var section = $(this).closest('.section-video');
//            section.find('iframe').each(function(index, el) {
//                if ( $(el).hasClass('dw-uber-hero-youtube-player') ) {
//                    $(el).data('dw-player').unMute();
//                } else if ( $(el).hasClass('dw-uber-hero-vimeo-player') ) {
//                    var url = $(el).attr('src').split('?')[0];
//                    $(el)[0].contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: '1' }), url);
//                }
//            });
        });

        modal.on('show.bs.modal', function(event) {
            var item = $(this);
            var block = item.parents('.block-item:first');
            var player = $('.video-player', block);
            player.html('');
        });

    });

})(jQuery);