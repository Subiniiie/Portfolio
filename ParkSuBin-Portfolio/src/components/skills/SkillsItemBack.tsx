interface SkillsItemBackProps {
    skillLogo: string
}

const skillDescriptions: { [key: string]: string} = {
    'JavaScript' : 'ES6+ 문법을 사용할 수 있고 변수, 조건문, 반복문과 타입을 알고 있습니다. 적절하게 함수를 만들어 이용할 수 있으며 JavaScript를 이용해 게임 페이지를 만든 경험이 있습니다.',
    'Python' : '다양한 라이브러리를 이용해서 필요한 데이터를 생산할 수 있습니다. Python을 이용한 형태소 분석을 한 경험이 있습니다.',
    'React' : 'React 구조와 Hook을 알고 효과적인 component 사용으로 재사용성을 높일 수 있습니다. Redux로 상태 관리를 할 수 있고 props를 다른 컴포넌트로 전달할 수 있습니다.',
    'HTML' : '다양한 태그를 적재적소로 사용해 코드에서 요소가 나타내는 것이 무엇인지 알려줄 수 있습니다. styled-component를 사용할 수 있습니다.',
    'CSS': 'position, display, flex를 이용해 요소의 위치를 지정할 수 있습니다. box-shadow를 이용해 입체감을 줄 수 있고 hover 효과를 줄 수 있습니다.',
    'Bootstrap' : 'Bootstrap을 이용해 CSS 효과를 빠르게 줄 수 있으며 필요할 경우 수정할 수 있습니다.',
    'TypeScript' : '변수를 정의할 때 타입을 지정할 수 있습니다. props를 넘겨주기 위해 부모 컴포넌트에서 타입 지정을 export 할 수 있으며 자식 컴포넌트에서 사용할 수 있습니다.',
    'ReactNative' : '안드로이드 스튜디오와 함께 사용했습니다. <Text>와 <ScrollView> 태그 사용 방법을 이해하고 있으며 react-native-date-picker 라이브러리를 사용할 수 있습니다.',
    'Vue' : 'Vue와 Vuex를 이용해 웹 페이지를 만든 경험이 있습니다. 렌더링 방식을 이해하고 부모 컴포넌트와 자식 컴포넌트가 props, emit으로 데이터를 전달하는 방식을 알고 있습니다.',
    'Django' : 'migrate와 migration을 이용해 DB를 다룬 경험이 있습니다.'
}


export default function SkillsItemBack({skillLogo}: SkillsItemBackProps) {
  const description = skillDescriptions[skillLogo] || '내용이 없습니다.'
  return (
    <div className="skill-item-back">
        <div className="skill-item-back-container">
            <h5>{skillLogo}</h5>
            <p>{description}</p>
        </div>    
    </div>
  )
}
