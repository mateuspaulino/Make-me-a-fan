export default (idVideo, target) => {
  new WM.Player({
    videosIDs: idVideo,
    width: '100%',
    height: '100%',
    displayEndScreen: true,
    sitePage: '',
    startMuted: false,
    onPlay() {
      WM.PlayerManager.forEach((item) => {
        if (item !== this) {
          item.pauseVideo();
        }
      });
    },
  }).attachTo(target);
};
