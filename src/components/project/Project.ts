export interface Project {
    id: number;
    title: string;
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
        title: '작은 도서관 장서 개발 도우미',
        date: '2023.12.11 - 2023.12.20',
        member: 1,
        description: '예산이 부족한 작은 도서관이 효율적으로 운영될 수 있도록 구비할 도서 추천',
        information: [
            '제 3회 빅데이터 활용 사회문제해결 해커톤 우수상',
            '파이썬과 주피터 노트북을 이용한 형태소 분석',
            '필터링을 통해 지역, 성별, 나이별 인기 대출 도서를 파악해 줄거리가 유사한 최신 도서 추천',
        ],
        technologies: ['Python'],
        role: '데이터 분석',
        url: 'https://github.com/Subiniiie/Small_library_book_rec_service',
        cover: '/project/cover/small_library.jpg',
        imageFolder: 'small_library',
        images: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        isImportant: true
    },
    {
        id: 2,
        title: '가장 가까운 지역 친구, 가지 친구',
        date: '2024.05.16 - 2024.05.24',
        member: 2,
        description: '근처에서 자신과 영화 취향이 비슷한 친구를 만날 수 있고 새로운 영화를 추천받을 수 있는 플랫폼',
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
    {
        id: 3,
        title: '밀정 1931(WebRTC를 활용한 화상 마피아 게임)',
        date: '2024.07.02 - 2024.08.16',
        member: 4,
        description: '1931년 상해 임시 정부의 독립운동을 배경으로 진행되는 WebRTC 기반의 마피아 게임',
        information: [
            'Router를 이용해 페이지 이동',
            'props를 이용해 다른 컴포넌트로 데이터 전달',
            '웹소켓 및 axios 연결',
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
        id: 4,
        title: 'PILLSOO',
        date: '2024.08.26 - 2024.10.11',
        member: 4,
        description: '사용자의 데이터를 기반으로 영양제를 추천해주고, 영양제 복용 알람을 설정할 수 있는 영양제 관리 앱',
        information: [
            'Redux로 유저 기본 정보 관리',
            '영양제 리뷰 작성 및 조회',
            '작성한 리뷰 모아보기',
            '영양제 알람 관리',
            '백엔드 및 FCM 서버와 연결',
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
]