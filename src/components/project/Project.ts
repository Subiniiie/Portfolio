export interface Project {
    id: number;
    title: string;
    cardTitle: string;
    date: string;
    member: number;
    description: string;
    information: string[];
    technologies: string[];
    url: string;
    role: string;
    cover: string;
    imageFolder: string;
    images: string[];
    isImportant: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: '음원의 세션 분리 및 결합을 이용한\n음악 재창작 플랫폼',
        cardTitle: '음악의 재.구.SoNG',
        date: '2024.10.14 - 2024.11.19',
        member: 5,
        description: '음원에 녹음된 보컬과 악기들을 분리한 뒤 자유롭게 추가하거나 삭제하여 새로운 음원을 만들 수 있다. 유저는 자신이 직접 녹음한 음원을 추가할 수 있고 각 세션마다 시작 포인트를 다르게 지정할 수 있다. 커뮤니티 및 크루를 통해 다른 유저들의 작품을 보고 영감을 얻을 수 있다. 게임을 통해 음감을 키울 수 있으며 채팅으로 다른 유저와 소통할 수 있다.',
        information: [
            '이메일 인증을 통한 회원가입',
            'formData를 이용해 텍스트는 application/json 형태로, 이미지 파일은 File 형태로 전송',
            '글, 댓글, 대댓글의 생성, 수정 및 삭제 관리',
            '커뮤니티에서 PUBLIC/PRIVATE 필터링 적용',
            'zustand를 이용해 유저 및 크루 헤더 정보 변경',
            'zustand로 크루 가입 요청 및 크루원 역할 관리',
            '팔로우/팔로워 목록 생성',
            'Chakra UI를 활용한 컴포넌트 디자인',
            '백엔드 API 연결'            

        ],
        technologies: ['React', 'zustand', 'axios', 'TypeScript', 'chakraUI'],
        role: '프론트엔드',
        url: 'https://github.com/Subiniiie/Music_platform_JaeGuSong',
        cover: '/project/cover/jae_goo_SoNG.jpg',
        imageFolder: 'jae_goo_SoNG',
        images: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',],
        isImportant: true
    },
    {
        id: 2,
        title: '영양제 관리 앱',
        cardTitle: 'PILLSOO',
        date: '2024.08.26 - 2024.10.11',
        member: 4,
        description: '유저의 데이터를 기반으로 영양제를 추천해주고, 영양제 복용 알람을 설정할 수 있다. 각각의 영양제마다 알람을 설정할 수 있어 영양제 관리에 쉬우며 유저가 직접 자신의 건강 상태를 입력하여 더 상세하게 영양제를 추천받을 수 있다. 위시리스트 기능을 활용하여 자신에게 유용할 것 같은 영양제를 기록할 수 있으며 구매 url을 제공한다.',
        information: [
            'Redux로 유저 기본 정보 관리',
            '영양제 리뷰 작성 및 조회',
            '작성한 리뷰 모아보기',
            '영양제 알람 관리',
            '백엔드 API 및 FCM 서버 연결',
            '메인 페이지 CSS'
        ],
        technologies: ['React', 'Redux', 'axios', 'TypeScript', 'firebase'],
        role: '프론트엔드',
        url: 'https://github.com/Subiniiie/Pillsoo',
        cover: '/project/cover/pillsoo.jpg',
        imageFolder: 'pillsoo',
        images: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',],
        isImportant: true
    },
    {
        id: 3,
        title: '투두리스트 - 리액트 hook 복습',
        cardTitle: '투두리스트',
        date: '2025.03.08 - 2024.03.26',
        member: 1,
        description: '리액트 hook 강의를 듣고 복습을 위해 투두리스트를 만들었다. useState, useEffect, useNotification, useHover, useRef, useScroll, usePreventLeave, useConfirm, useInput를 개발에 적용할 수 있다. zustand와 style-components를 사용했다.',
        information: [
            'useState : 입력칸에 작성하는 내용을 저장',
            'useEffect: 입력칸에 작성하는 내용을 실시간으로 변동 / "당일만" 체크박스에 체크하면 끝 날짜가 시작 날짜로 변경',
            'useInput: 검색 기능',
            'useHover, useRef : 게시물에 마우스를 올리면 게시물이 확대',
            'useNotification : 게시물을 생성 혹은 삭제 했을 때 알람 제공',
            'useScroll : 마지막 게시물에서 계속 스크롤 하는 것을 감지',
            'useConfirm : 게시물 삭제 버튼을 눌렀을 때 안내창 띄우기',
            'usePreventLeave : 게시물 생성 모달을 열고 브라우저를 닫으려고 할 때 안내창 띄우기',
            'zustand를 이용하여 테마, 게시물 목록 관리',
            'styled-component 사용'
        ],
        technologies: ['React', 'TypeScript', 'Zustand'],
        role: '프론트엔드',
        url: 'https://github.com/Subiniiie/To_do_list',
        cover: '/project/cover/to_do_list.jpg',
        imageFolder: 'to_do_list',
        images: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        isImportant: true
    },
    {
        id: 4,
        title: 'WebRTC를 활용한 화상 마피아 게임',
        cardTitle: '밀정 1931',
        date: '2024.07.02 - 2024.08.16',
        member: 4,
        description: '1931년 상해 임시 정부의 독립운동을 배경으로 진행되는 WebRTC 기반의 마피아 게임이다. 플레이어는 최소 6명 이상이며 역할은 독립운동가 4명(변절자 1명 추가시 독립운동가 3명, 변절자 1명), 첩보원 1명, 밀정 1명이다. 변절자는 원래 독립운동가였으나 밀정에 의해 변절됐으며 투표권은 없다. 독립운동가와 첩보원, 밀정과 변절자는 서로를 먼저 제거해야한다.',
        information: [
            'Router를 이용해 페이지 이동',
            'props를 이용해 다른 컴포넌트로 데이터 전달',
            '웹소켓 및 백엔드 API 연결',
            'styled-component 사용'
        ],
        technologies: ['React', 'axios', 'JavaScript', 'socket-io', 'websocket'],
        role: '프론트엔드',
        url: 'https://github.com/Subiniiie/Mafia',
        cover: '/project/cover/mafia.jpg',
        imageFolder: '없음',
        images: ['없음'],
        isImportant: false
    },
    {
        id: 5,
        title: '영화 취향이 비슷한 친구 및 영화를\n추천받을 수 있는 웹사이트',
        cardTitle: '가장 가까운 지역 친구, 가지 친구',
        date: '2024.05.16 - 2024.05.24',
        member: 2,
        description: '유저는 자신이 설정한 지역 근처에서 자신과 영화 취향이 비슷한 친구를 만날 수 있고 새로운 영화를 추천받을 수 있다. 신작 영화와 추천 영화 목록을 제공하고 유저는 좋아요 기능을 통해 마음에 든 영화를 관리할 수 있다. 유저의 설정 지역과 좋아요 목록을 통해 취향이 비슷한 친구 혹은 영화를 추천한다.',
        information: [
           'Carousel을 이용해 최신 영화 및 추천 영화 페이지 구현',
           'Modal로 영화의 상세 정보 제공'
        ],
        technologies: ['Vue', 'HTML5', 'CSS'],
        role: '프론트엔드',
        url: 'https://github.com/Subiniiie/MOVIE_RECOMMENDED_GAJIFRIEND',
        cover: '/project/cover/gaji.jpg',
        imageFolder: 'gaji_friend',
        images: ['1', '2', '3', '4'],
        isImportant: false
    },

]