import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CommonLayoutSize from '../components/CommonLayout.jsx';
import bibleVersesList from '../constants/bibleVersesList.js';

import { Link, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';

function ResultPage() {
  const [bibleVerse, setBibleVerse] = useState(null);
  const randomIndex = Math.floor(Math.random() * bibleVersesList.length);

  const currentUrl = useLocation();
  const parsedQuery = new URLSearchParams(currentUrl.search);
  const idFromUrl = parsedQuery.get('id');

  useEffect(() => {
    if (idFromUrl) {
      const sharedIndex = bibleVersesList.find((verse) => verse.id === Number(idFromUrl));
      setBibleVerse(sharedIndex);
    } else {
      setBibleVerse(bibleVersesList[randomIndex]);
    }

    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('ee1c97242a0d1348b2b752a62187b335');
    }
  }, [idFromUrl]);

  const handleDownload = () => {
    html2canvas(document.getElementById('capture')).then((canvas) => {
      saveImg(canvas.toDataURL('image/jpg'), 'bibleVerseImage.jpeg');
    });
  };

  const saveImg = (uri, filename) => {
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendCustom({
        templateId: 118994,
        templateArgs: {
          MY_VERSE_BUTTON_URL: 'http://localhost:3000/',
          RECEIVED_VERSE_BUTTON_URL: `result?id=${bibleVerse.id}`,
        },
      });
    }
  };

  return (
    <CommonLayoutSize id='capture'>
      <div>
        <Header>당신을 위한 말씀</Header>
        <HeaderSubText>이 말씀으로 새해를 더욱 은혜롭게 시작해보세요</HeaderSubText>
      </div>

      <ContentContainer>
        <YearText>2025YEAR</YearText>
        {bibleVerse && (
          <BibleVerseText>
            <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#333333' }}>{bibleVerse.text}</p>
            <p style={{ fontSize: '16px', color: '#35225a' }}>{bibleVerse.reference}</p>
          </BibleVerseText>
        )}
      </ContentContainer>

      <ButtonContainer>
        <Button onClick={handleKakaoShare}>
          <svg viewBox='0 0 24 24' fill='#5c3c2c' style={{ width: '18px', height: '18px', marginRight: '5px' }}>
            <path d='M12 2C6.48 2 2 6.05 2 10.8c0 3.39 2.35 6.33 5.77 7.87-.08.56-.51 3.53-.56 3.81 0 0-.01.07.03.1.04.03.1.01.1.01.13-.02 3.19-2.1 3.54-2.34.71.1 1.44.15 2.12.15 5.52 0 10-4.05 10-8.8C22 6.05 17.52 2 12 2z' />
          </svg>
          공유
        </Button>

        <Button onClick={handleDownload}>
          <svg viewBox='0 0 24 24' fill='#5c3c2c' style={{ width: '18px', height: '18px', marginRight: '5px' }}>
            <path d='M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h11l5 5v11c0 1.1-.9 2-2 2zM5 5v14h14v-9h-4c-.55 0-1-.45-1-1V5H5z' />
          </svg>
          저장
        </Button>

        <Link to='/' style={{ textDecorationLine: 'none' }}>
          <Button>
            <svg viewBox='0 0 24 24' fill='#5c3c2c' style={{ width: '18px', height: '18px', marginRight: '5px' }}>
              <path d='M12 4c4.42 0 8 3.13 8 7s-3.58 7-8 7H8.41l2.29 2.29-1.41 1.41L3.58 16l5.71-5.71 1.41 1.41L8.41 14H12c3.31 0 6-2.24 6-5s-2.69-5-6-5S6 5.24 6 8H4c0-3.87 3.58-7 8-7z' />
            </svg>
            다시
          </Button>
        </Link>
      </ButtonContainer>
    </CommonLayoutSize>
  );
}

export default ResultPage;

const Header = styled.h1`
  padding-top: 50px;

  font-weight: 600;
  color: #3a3939;
`;

const HeaderSubText = styled.p`
  padding-top: 10px;

  font-size: 15px;
  font-weight: 100;
  color: #3a3939;
`;

const ContentContainer = styled.div`
  margin: 50px auto;
  padding-top: 1.5px;

  background-color: white;

  width: 278px;
  height: 265px;
  border-radius: 20px;
`;

const YearText = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 1px;
  background: linear-gradient(135deg, #e5f2ff 20%, #ffe6f2 100%);

  width: 274px;
  height: 65px;
  line-height: 65px;
  border-radius: 20px 20px 0 0;

  font-size: 15px;
  color: #444444;
  font-weight: 400;
  letter-spacing: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 73px;
  height: 35px;
  line-height: 35px;
  border-radius: 80px;

  background: white;
  border-width: 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const BibleVerseText = styled.div`
  padding: 7px 30px 0 30px;
  word-break: keep-all;
`;
