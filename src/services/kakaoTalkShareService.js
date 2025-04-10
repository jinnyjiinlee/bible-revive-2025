export const shareKakaoTalk = (bibleVerseId) => {
  if (window.Kakao) {
    window.Kakao.Share.sendCustom({
      templateId: 118994,
      templateArgs: {
        MY_VERSE_BUTTON_URL: 'http://localhost:3000/',
        RECEIVED_VERSE_BUTTON_URL: `result?id=${bibleVerseId}`,
      },
    });
  }
};
