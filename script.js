// 카카오톡 공유하기 openApi
Kakao.init('41e44d0a8040b479d200df8dd89fd8f4');

// 첫 번째 페이지와 두 번째 페이지를 선택
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');

// 페이지1
// 버튼을 선택
const page1Button = document.getElementById('page1_button'); // 말씀 뽑기 버튼

// 첫 번째 페이지 -> 두 번째 페이지 전환
page1Button.addEventListener('click', () => {
  page1.style.display = 'none'; // 첫 번째 페이지 숨기기
  page2.style.display = 'flex'; // 두 번째 페이지 보이기

  // 2초 후 두 번째 페이지 -> 세 번째 페이지 전환
  setTimeout(() => {
    goToPage3(); // 두 번째 페이지를 숨기고 세 번째 페이지로 이동
  }, 4000); // 2초
});

function goToPage3() {
  page2.style.display = 'none'; // 두 번째 페이지 숨기기
  page3.style.display = 'flex'; // 세 번째 페이지 보이기

  // 3초 후 세 번째 페이지 -> 네 번째 페이지 전환
  setTimeout(() => {
    page3.style.display = 'none'; // 세 번째 페이지 숨기기
    page4.style.display = 'flex'; // 네 번째 페이지 보이기

    // **네 번째 페이지가 보이는 순간 랜덤 말씀 표시**
    displayRandomBible();
  }, 3000); // 3초
}

// 말씀 데이터

const bibleVerses = [
  // 1
  {
    text: '내가 너로 큰 민족을 이루고\n네게 복을 주어\n네 이름을 창대케 하리니\n너는 복의 근원이 될찌라',
    reference: '창세기 12:2',
  },
  // 2
  {
    text: '여호와는 네게 복을 주시고\n너를 지키시기를 원하며\n여호와는 그 얼굴로 네게 비추사\n은혜 베푸시기를 원하며',
    reference: '민수기 6:24-25',
  },
  // 3
  {
    text: '너는 마음을 다하고\n성품을 다하고 힘을 다하여\n네 하나님 여호와를 사랑하라',
    reference: '신명기 6:5',
  },
  // 6
  {
    text: '여호와는 나의 목자시니\n내가 부족함이 없으리로다\n그가 나를 푸른 초장에\n누이시며 쉴 만한 물가로\n인도하시는도다',
    reference: '시편 23:1-2',
  },
  // 7
  {
    text: '그 마음에는\n하나님의 법이 있으니\n그 걸음에 실족함이\n없으리로다',
    reference: '시편 37:31',
  },
  // 8
  {
    text: '나의 하나님이여\n내가 주의 뜻 행하기를 즐기오니\n주의 법이 나의 심중에 있나이다\n하였나이다',
    reference: '시편40:8',
  },
  // 10
  {
    text: '나는 너를 애굽 땅에서\n인도하여 낸 여호와 네 하나님이니\n네 입을 넓게 열라\n내가 채우리라',
    reference: '시편 81:10',
  },
  // 11
  {
    text: '청년이 무엇으로\n그 행실을 깨끗케 하리이까\n주의 말씀을 따라\n삼갈 것이니이다',
    reference: '시편 119:9',
  },
  // 12
  {
    text: '고난당한 것이\n내게 유익이라 이로 인하여\n내가 주의 율례를\n배우게 되었나이다',
    reference: '시편 119:71',
  },
  // 13
  {
    text: '나의 생전에\n여호와를 찬양하며\n나의 평생에\n내 하나님을 찬송하리로다',
    reference: '시편 146:2',
  },
  // 15
  {
    text: '무릇 지킬 만한 것보다\n더욱 네 마음을 지키라\n생명의 근원이\n이에서 남이니라',
    reference: '잠언 4:23',
  },
  // 16
  {
    text: '너의 행사를\n여호와께 맡기라\n그리하면\n너의 경영하는 것이 이루리라',
    reference: '잠언 16:3',
  },
  // 18
  {
    text: '사람의 행위가\n자기 보기에는 모두 정직하여도\n여호와는 심령을 감찰하시느니라',
    reference: '잠언 21:2',
  },
  // 19
  {
    text: '주께서 심지가 견고한 자를\n평강에 평강으로 지키시리니\n이는 그가 주를 의뢰함이니이다',
    reference: '이사야 26:3',
  },

  // 22
  {
    text: '우리는 다 양 같아서\n그릇 행하여 각기 제 길로\n갔거늘 여호와께서는\n우리 무리의 죄악을\n그에게 담당시키셨도다',
    reference: '이사야 53:6',
  },
  // 23
  {
    text: '너희는 여호와를\n만날 만한 때에 찾으라\n가까이 계실 때에 그를 부르라',
    reference: '이사야 55:6',
  },

  // 25
  {
    text: '너는 내게 부르짖으라\n내가 네게 응답하겠고\n네가 알지 못하는 크고\n비밀한 일을 네게 보이리라',
    reference: '예레미야 33:3',
  },
  // 26
  {
    text: '여호와의 자비와 긍휼이\n무궁하시므로 우리가\n진멸되지 아니함이니이다\n이것이 아침마다 새로우니\n주의 성실이 크도소이다',
    reference: '예레미야애가 3:22-23',
  },
  // 27
  {
    text: '나는 여호와를 인하여\n즐거워하며 나의 구원의\n하나님을 인하여 기뻐하리로다',
    reference: '하박국 3:18',
  },

  // 29
  {
    text: '말씀하시되\n나를 따라 오너라\n내가 너희로 사람을 낚는 어부가\n되게하리라 하시니',
    reference: '마태복음 4:19',
  },
  // 30
  {
    text: '이같이\n너희 빛을 사람 앞에 비취게 하여\n저희로 너희 착한 행실을 보고\n하늘에 계신 너희 아버지께\n영광을 돌리게 하라',
    reference: '마태복음 5:16',
  },
  // 31
  {
    text: '너희는 먼저 그의 나라와\n그의 의를 구하라\n그리하면이 모든 것을\n너희에게 더하시리라',
    reference: '마태복음 6:33',
  },
  // 32
  {
    text: '구하라\n그러면 너희에게 주실 것이요\n찾으라\n그러면 찾을 것이요\n문을 두드리라\n그러면 너희에게 열릴 것이니',
    reference: '마태복음 7:7',
  },
  // 33
  {
    text: '그러므로\n추수하는 주인에게 청하여\n추수할 일꾼들을 보내어 주소서\n하라 하시니라',
    reference: '마태복음 9:38',
  },
  // 34
  {
    text: '수고하고 무거운 짐진 자들아\n다 내게로 오라\n내가 너희를 쉬게 하리라',
    reference: '마태복음 11:28',
  },
  // 35
  {
    text: '두세 사람이\n내 이름으로 모인 곳에는\n나도 그들 중에 있느니라',
    reference: '마태복음 18:20',
  },
  // 36 (확정본)
  {
    text: '너희가 기도할 때에\n무엇이든지 믿고 구하는 것은\n다 받으리라 하시니라',
    reference: '마태복음 21:22',
  },
  // 37 (19-20 중 20절만)
  {
    text: '내가 너희에게\n분부한 모든 것을\n가르쳐 지키게 하라 볼지어다\n내가 세상 끝 날까지\n너희와 항상 함께 있으리라 하시니라',
    reference: '마태복음 28:20',
  },
  // 38
  {
    text: '인자의 온 것은\n섬김을 받으려 함이 아니라\n도리어 섬기려 하고\n자기 목숨을 많은 사람의\n대속물로 주려 함이니라',
    reference: '마가복음 10:45',
  },
  // 39
  {
    text: '또 무리에게 이르시되\n아무든지 나를 따라 오려거든\n자기를 부인하고 날마다\n제 십자가를 지고\n나를 좇을 것이니라',
    reference: '누가복음 9:23',
  },
  // 40
  {
    text: '영접하는 자\n곧 그 이름을 믿는 자들에게는\n하나님의 자녀가 되는\n권세를 주셨으니',
    reference: '요한복음 1:12',
  },

  // 42
  {
    text: '새 계명을 너희에게 주노니\n서로 사랑하라\n내가 너희를 사랑한 것같이\n너희도 서로 사랑하라',
    reference: '요한복음 13:34',
  },
  // 43
  {
    text: '나의 계명을 가지고\n지키는 자라야 나를 사랑하는 자니\n나를 사랑하는 자는\n내 아버지께 사랑을 받을 것이요\n나도 그를 사랑하여\n그에게 나를 나타내리라',
    reference: '요한복음 14:21',
  },
  // 44
  {
    text: '너희가 내 안에 거하고\n내 말이 너희 안에 거하면\n무엇이든지 원하는 대로\n구하라 그리하면 이루리라',
    reference: '요한복음 15:7',
  },
  // 45
  {
    text: '오직 성령이\n너희에게 임하시면\n너희가 권능을 받고\n예루살렘과 온 유대와\n사마리아와 땅 끝까지 이르러\n내 증인이 되리라 하시니라',
    reference: '사도행전 1:8',
  },
  // 46
  {
    text: '이것을 인하여\n나도 하나님과 사람을 대하여\n항상 양심에 거리낌이\n없기를 힘쓰노라',
    reference: '사도행전 24:16',
  },
  // 47
  {
    text: '내가 복음을\n부끄러워하지 아니하노니\n이 복음은 모든 믿는 자에게\n구원을 주시는 하나님의 능력이 됨이라\n첫째는 유대인에게요\n또한 헬라인에게로다',
    reference: '로마서 1:16',
  },
  // 48
  {
    text: '믿음이 없어\n하나님의 약속을 의심치 않고\n믿음에 견고하여져서\n하나님께 영광을 돌리며',
    reference: '로마서 4:20',
  },
  // 49
  {
    text: '우리가 아직 죄인 되었을 때에\n그리스도께서 우리를 위하여\n죽으심으로\n하나님께서 우리에게 대한\n자기의 사랑을 확증하셨느니라',
    reference: '로마서 5:8',
  },
  // 50
  {
    text: '죄의 삯은 사망이요\n하나님의 은사는\n그리스도\n예수 우리 주 안에 있는\n영생이니라',
    reference: '로마서 6:23',
  },
  // 51
  {
    text: '이는 그리스도 예수 안에 있는\n생명의 성령의 법이\n죄와 사망의 법에서\n너를 해방하였음이라',
    reference: '로마서 8:2',
  },
  // 52
  {
    text: '육신을 좇는 자는 육신의 일을\n영을 좇는 자는 영의 일을 생각하나니\n육신의 생각은 사망이요\n영의 생각은 생명과 평안이니라',
    reference: '로마서 8:5-6',
  },
  // 53
  {
    text: '이와 같이\n성령도 우리 연약함을 도우시나니\n우리가 마땅히 빌 바를 알지 못하나\n오직 성령이 말할 수 없는 탄식으로\n우리를 위하여 친히 간구하시느니라',
    reference: '로마서 8:26',
  },
  // 54
  {
    text: '우리가 알거니와\n하나님을 사랑하는 자\n곧 그 뜻대로 부르심을 입은 자들에게는\n모든 것이 합력하여 선을 이루느니라',
    reference: '로마서 8:28',
  },
  // 55
  {
    text: '자기 아들을 아끼지 아니하시고\n우리 모든 사람을 위하여 내어주신 이가\n어찌 그 아들과 함께\n모든 것을 우리에게\n은사로 주지 아니하시겠느뇨',
    reference: '로마서 8:32',
  },

  // 58
  {
    text: '너희는 이 세대를 본받지 말고\n오직 마음을 새롭게 함으로 변화를 받아\n하나님의 선하시고 기뻐하시고\n온전하신 뜻이 무엇인지\n분별하도록 하라',
    reference: '로마서 12:2',
  },
  // 59
  {
    text: '십자가의 도가\n멸망하는 자들에게는\n미련한 것이요\n구원을 얻는 우리에게는\n하나님의 능력이라',
    reference: '고린도전서 1:18',
  },
  // 60
  {
    text: '우리가 세상의 영을 받지 아니하고\n오직 하나님께로 온 영을 받았으니\n이는 우리로 하여금\n하나님께서 우리에게 은혜로 주신\n것들을 알게 하려 하심이라',
    reference: '고린도전서 2:12',
  },
  // 61
  {
    text: '너희가\n하나님의 성전인 것과\n하나님의 성령이\n너희 안에 거하시는 것을\n알지 못하느뇨',
    reference: '고린도전서 3:16',
  },
  // 62
  {
    text: '그런즉\n믿음 소망 사랑\n이 세 가지는\n항상 있을 것인데\n그 중에 제일은 사랑이라',
    reference: '고린도전서 13:13',
  },

  // 64
  {
    text: '그런즉 누구든지\n그리스도 안에 있으면\n새로운 피조물이라\n이전 것은 지나갔으니\n보라 새것이 되었도다',
    reference: '고린도후서 5:17',
  },

  // 68
  {
    text: '오직 성령의 열매는\n사랑과 희락과 화평과 오래 참음과 자비와\n양선과 충성과 온유와 절제니\n이 같은 것은 금지할 법이 없느니라',
    reference: '갈라디아서 5:22-23',
  },
  // 69
  {
    text: '우리가 선을 행하되\n낙심하지 말지니\n피곤하지 아니하면\n때가 이르매 거두리라',
    reference: '갈라디아서 6:9',
  },
  // 70
  {
    text: '너희가 그 은혜를 인하여\n믿음으로 말미암아\n구원을 얻었나니\n이것이 너희에게서 난 것이 아니요\n하나님의 선물이라',
    reference: '에베소서 2:8',
  },
  // 71
  {
    text: '우리 가운데서\n역사하시는 능력대로\n우리의 온갖 구하는 것이나\n생각하는 것에 더 넘치도록\n능히 하실 이에게',
    reference: '에베소서 3:20',
  },
  // 72
  {
    text: '음행과 온갖 더러운 것과 탐욕은\n너희 중에서 그 이름이라도\n부르지 말라\n이는 성도의 마땅한 바니라',
    reference: '에베소서 5:3',
  },
  // 73
  {
    text: '종말로 너희가 주 안에서와\n그 힘의 능력으로 강건하여지고\n마귀의 궤계를 능히 대적하기 위하여\n하나님의 전신갑주를 입으라',
    reference: '에베소서 6:10-11',
  },
  // 74
  {
    text: '아무 일에든지\n다툼이나 허영으로 하지 말고\n오직 겸손한 마음으로 각각\n자기보다 남을 낫게 여기고',
    reference: '빌립보서 2:3',
  },
  // 75
  {
    text: '아무것도 염려하지 말고\n오직 모든 일에 기도와 간구로\n너희 구할 것을 감사함으로\n하나님께 아뢰라',
    reference: '빌립보서 4:6',
  },
  // 76
  {
    text: '내게 능력 주시는 자 안에서\n내가 모든 것을\n할 수 있느니라',
    reference: '빌립보서 4:13',
  },
  // 77
  {
    text: '나의 하나님이\n그리스도 예수 안에서\n영광 가운데\n그 풍성한 대로\n너희 모든 쓸 것을 채우시리라',
    reference: '빌립보서 4:19',
  },
  // 78
  {
    text: '하나님의 뜻은 이것이니\n너희의 거룩함이라',
    reference: '데살로니가전서 4:3',
  },
  // 79
  {
    text: '쉬지 말고 기도하라\n범사에 감사하라\n이는 그리스도 예수 안에서\n너희를 향하신\n하나님의 뜻이니라',
    reference: '데살로니가전서 5:17-18',
  },
  // 80
  {
    text: '모든 성경은\n하나님의 감동으로 된 것으로\n교훈과 책망과\n바르게 함과\n의로 교육하기에 유익하니',
    reference: '디모데후서 3:16',
  },

  // 82
  {
    text: '자기가\n시험을 받아\n고난을 당하셨은즉\n시험받는 자들을\n능히 도우시느니라',
    reference: '히브리서 2:18',
  },

  // 84
  {
    text: '그러므로\n우리가 긍휼하심을 받고\n때를 따라 돕는 은혜를 얻기 위하여\n은혜의 보좌 앞에\n담대히 나아갈 것이니라',
    reference: '히브리서 4:16',
  },
  // 85
  {
    text: '그러므로 자기를 힘입어\n하나님께 나아가는 자들을\n온전히 구원하실 수 있으니\n이는 그가 항상 살아서\n저희를 위하여 간구하심이니라',
    reference: '히브리서 7:25',
  },

  // 87
  {
    text: '믿음이 없이는 기쁘시게 못하나니\n하나님께 나아가는 자는 반드시\n그가 계신 것과 또한\n그가 자기를 찾는 자들에게\n상 주시는 이심을 믿어야 할지니라',
    reference: '히브리서 11:6',
  },
  // 88
  {
    text: '너희가 피곤하여\n낙심치 않기 위하여\n죄인들의 이같이 자기에게 거역한\n일을 참으신 자를 생각하라',
    reference: '히브리서 12:3',
  },

  // 92
  {
    text: '너희 염려를\n다 주께 맡겨 버리라\n이는 저가 너희를 권고하심이니라',
    reference: '베드로전서 5:7',
  },
  // 93
  {
    text: '이 세상이나\n세상에 있는 것들을\n사랑치 말라\n누구든지 세상을 사랑하면\n아버지의 사랑이 그 속에 있지 아니하니',
    reference: '요한일서 2:15',
  },
  // 94
  {
    text: '자녀들아\n우리가 말과 혀로만\n사랑하지 말고\n오직 행함과 진실함으로 하자',
    reference: '요한일서 3:18',
  },
  // 95
  {
    text: '자녀들아\n너희는 하나님께 속하였고\n또 저희를 이기었나니\n이는 너희 안에 계신 이가\n세상에 있는 이보다 크심이라',
    reference: '요한일서 4:4',
  },
  // 96
  {
    text: '대저 하나님께로서\n난 자마다 세상을 이기느니라\n세상을 이긴 이김은\n이것이니\n우리의 믿음이니라',
    reference: '요한일서 5:4',
  },

  // 98
  {
    text: '사랑하는 자여\n네 영혼이 잘 됨같이\n네가 범사에 잘 되고\n강건하기를\n내가 간구하노라',
    reference: '요한3서 1:2',
  },

  // 100
  {
    text: '볼지어다\n내가 문밖에 서서 두드리노니\n누구든지 내 음성을 듣고 문을 열면\n내가 그에게로 들어가\n그로 더불어 먹고 그는\n나로 더불어 먹으리라',
    reference: '요한계시록 3:20',
  },
];
function getRandomBible() {
  const randomIndex = Math.floor(Math.random() * bibleVerses.length);
  return bibleVerses[randomIndex];
}

// 페이지4

function displayRandomBible() {
  // 1) verse_container 요소 가져오기
  const verseContainer = document.getElementById('verse_container');
  // 2) 랜덤 구절 하나 뽑기
  const randomBible = getRandomBible();
  // 3) verse_container 내용을 갈아끼우기
  verseContainer.innerHTML = `
    <div class="verse-text">${randomBible.text}</div>
    <div class="verse-reference">${randomBible.reference}</div>
  `;
}

// 카카오 공유

document.getElementById('share_btn').addEventListener('click', () => {
  // 1) verseCard 안에서 텍스트/레퍼런스 찾기 (예: #verse_container 내부)
  const verseTextEl = document.querySelector('.verse-text');
  const verseRefEl = document.querySelector('.verse-reference');
  if (!verseTextEl || !verseRefEl) {
    alert('공유할 말씀 정보가 없습니다.');
    return;
  }

  const verseText = verseTextEl.innerText;
  const verseRef = verseRefEl.innerText;

  // 2) 카카오톡 공유 (sendDefault)
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: 'Happy New Year',
      // description: '당신에게 주는 새해의 말씀',
      imageUrl: 'https://astonishing-alfajores-7acebb.netlify.app/shareImg.png',
      link: {
        mobileWebUrl: 'https://astonishing-alfajores-7acebb.netlify.app/',
        webUrl: 'https://astonishing-alfajores-7acebb.netlify.app/',
      },
    },
    buttons: [
      {
        title: '말씀 뽑기 (클릭)',
        link: {
          mobileWebUrl: 'https://astonishing-alfajores-7acebb.netlify.app/',
          webUrl: 'https://astonishing-alfajores-7acebb.netlify.app/',
        },
      },
    ],
  });
});

// 저장
setTimeout(() => {
  document.getElementById('save_btn').addEventListener('click', () => {
    const phoneSize = document.getElementById('phone_size');
    const actionButtons = document.querySelector('.action_btns'); // 버튼 그룹 요소
    const page4 = document.getElementById('page4'); // 네 번째 페이지

    if (!phoneSize) {
      alert('phone_size 요소를 찾을 수 없습니다!');
      return;
    }

    // 기존 애니메이션과 스타일 백업
    const oldAnimation = page4.style.animation; // 애니메이션 백업
    const oldOpacity = phoneSize.style.opacity;
    const oldFilter = phoneSize.style.filter;
    const oldDisplay = actionButtons.style.display; // 버튼 그룹 display 값 백업

    // 애니메이션 제거 및 버튼 숨기기
    page4.style.animation = 'none'; // 애니메이션 제거
    actionButtons.style.display = 'none'; // 버튼 숨기기

    // 캡처 직전: 불투명도와 필터 초기화
    phoneSize.style.opacity = '1';
    phoneSize.style.filter = 'none';

    // html2canvas로 캡처
    html2canvas(phoneSize, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      // 애니메이션 및 버튼 복원
      // page4.style.animation = oldAnimation; // 애니메이션 복구
      actionButtons.style.display = oldDisplay; // 버튼 복구

      // 스타일 복구
      phoneSize.style.opacity = oldOpacity;
      phoneSize.style.filter = oldFilter;

      // 이미지 다운로드
      const link = document.createElement('a');
      link.download = '말씀새록 2025.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });
}, 2000);

// 다시 버튼
document.getElementById('back_btn').addEventListener('click', () => {
  // 4페이지 숨기고, 1페이지 보여주기
  page4.style.display = 'none';
  page1.style.display = 'block';
});




// 링크 공유
document.getElementById('link_copy').addEventListener('click', () => {
  const linkToCopy = 'https://astonishing-alfajores-7acebb.netlify.app/'; // 복사할 링크

  navigator.clipboard
    .writeText(linkToCopy)
    .then(() => {
      // 팝업 열기
      const popup = document.getElementById('copy_popup');
      popup.style.display = 'flex';
    })
    .catch((error) => {
      console.error('복사 실패: ', error);
      alert('링크를 복사하는 데 실패했습니다. 다시 시도해주세요.');
    });
});

// 닫기 버튼 클릭 시 팝업 닫기
document.getElementById('close_popup').addEventListener('click', () => {
  const popup = document.getElementById('copy_popup');
  popup.style.display = 'none';
});
