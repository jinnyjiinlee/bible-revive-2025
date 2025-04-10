export const shareKakaoTalk = (bibleVerseId) => {
  if (window.Kakao) {
    window.Kakao.Share.sendCustom({
      templateId: 118994,
      templateArgs: {
        RECEIVED_VERSE_BUTTON_URL: `result?id=${bibleVerseId}`,
      },
    });
  }
};
