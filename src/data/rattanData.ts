import { CraftStep, BasketPreset, KitProduct, WorkshopClass, FaqItem, ReviewItem } from '../types';

export const CRAFT_STEPS: CraftStep[] = [
  {
    id: 'prep',
    stepNumber: 1,
    title: '환심 수분 침수 및 기본 도구 세팅',
    subtitle: '곡선 보울의 유연함을 결정짓는 완벽한 환심 불리기',
    durationMinutes: 10,
    difficulty: '초급',
    summary: '사진과 같은 부드러운 사발형 곡선을 구현하기 위해 AA급 환심을 미온수(35~40℃)에 10분간 불려 부러짐 없는 최적의 탄성을 만듭니다.',
    keyAction: '미온수에 10분간 침수 후 젖은 린넨 타월로 감싸 수분 균일 유지',
    materials: ['인도네시아산 직수입 AA급 환심 2.0mm (보울 1개당 약 120g)', '미온수 3L'],
    tools: ['인체공학 라탄 전정가위', '스테인리스 송곳', '독일식 줄자 (1.5m)', '미세 안개 분무기', '젖은 린넨 타월'],
    instructions: [
      {
        title: '날대 및 사릿대 정밀 재단',
        description: '보울 지름과 높이에 맞추어 날대 12줄(각 65cm)과 사릿대를 전정가위로 45도 사선으로 자릅니다.',
        tip: '끝부분을 비스듬하게 45도로 잘라두면 마지막 테두리 마무르기 시 틈새로 부드럽게 들어갑니다.'
      },
      {
        title: '미온수(35℃)에 10분간 불리기',
        description: '넓은 수조나 대야에 미온수를 채우고 자른 환심을 둥글게 감아 완전히 잠기도록 담가둡니다.',
        tip: '뜨거운 물은 섬유질이 물러져 탄력이 떨어지고, 차가운 물은 불림 시간이 오래 걸립니다.'
      },
      {
        title: '젖은 린넨 타월에 보관',
        description: '불려진 환심을 건져 가볍게 물기를 털고, 촉촉한 린넨 수건 사이에 넣어 작업 중 마르지 않게 유지합니다.',
        tip: '손으로 만졌을 때 가죽처럼 부드럽게 휘어질 때가 가장 이상적인 상태입니다.'
      }
    ],
    proTips: [
      '환심을 90도로 꺾었을 때 부드럽게 반원을 그리면 합격! 딱 소리가 나면 3분 더 불려주세요.',
      '작업 중에도 공기 중 수분이 날아가므로 5분마다 분무기로 촉촉함을 유지해 줍니다.'
    ],
    commonMistakes: [
      '건조한 상태에서 억지로 엮어 줄기 표면이 갈라지거나 부러지는 경우',
      '너무 오랜 시간(수 시간) 물에 담가두어 환심 표면이 검게 산화되는 경우'
    ],
    weaveType: '수분 침수 및 규격 재단'
  },
  {
    id: 'base',
    stepNumber: 2,
    title: '십자 원형 바닥짜기 (중심 방사형 전개)',
    subtitle: '식탁 위에 흔들림 없이 안착하는 평평하고 단단한 바닥판',
    durationMinutes: 25,
    difficulty: '초급',
    summary: '가로 6줄, 세로 6줄을 직각 십자(+)로 교차시키고, 사릿대로 중심을 단단히 묶은 뒤 24가닥을 균등한 부채꼴로 펼쳐나갑니다.',
    keyAction: '테이블 바닥에 평평하게 밀착시킨 채 중심 4바퀴 묶고 2줄씩 방사형 벌리기',
    materials: ['가로 날대 6줄 (각 65cm)', '세로 날대 6줄 (각 65cm)', '사릿대 2.0mm 1롤'],
    tools: ['송곳', '안개 분무기'],
    instructions: [
      {
        title: '가로·세로 6줄 직각 십자 교차',
        description: '세로 6줄 위에 가로 6줄을 올려 정십자 형태를 만들고 가운데 중심점을 엄지로 꾹 눌러 고정합니다.',
        tip: '줄 간격이 흐트러지지 않도록 평평한 작업대 위에서 손바닥으로 안정감 있게 눌러주세요.'
      },
      {
        title: '중심 사릿대 묶음 엮기 (3~4회)',
        description: '유연한 사릿대로 십자 교차부를 대각선으로 탄탄하게 감아 중심축이 흔들리지 않도록 고정합니다.',
        tip: '첫 3바퀴를 얼마나 짱짱하게 당기느냐가 완성작의 견고함을 좌우합니다.'
      },
      {
        title: '2줄씩 고르게 벌리기 (방사형 전개)',
        description: '날대 묶음을 2줄씩 짝지어 시계 방향으로 균일한 각도(30도)로 벌려가며 상하엮기로 원을 키웁니다.',
        tip: '각도가 한쪽으로 쏠리면 원형이 아니라 찌그러진 타원이 되므로 송곳으로 간격을 일정하게 정렬하세요.'
      }
    ],
    proTips: [
      '바닥을 짤 때 공중에 들고 짜면 바닥이 밥그릇 밑바닥처럼 볼록 튀어나옵니다. 반드시 책상에 붙여서 누르세요.',
      '바닥 지름이 약 12~14cm에 도달하면 보울의 형태를 잡을 준비가 완료된 것입니다.'
    ],
    commonMistakes: [
      '날대 사이 간격이 불규칙하여 바닥 가장자리가 찌그러지는 현상',
      '손힘(텐션)을 너무 약하게 주어 바닥 중심부가 헐렁거리는 경우'
    ],
    weaveType: '십자 바닥짜기 / 방사형 전개'
  },
  {
    id: 'stake',
    stepNumber: 3,
    title: '완만한 보울 경사각 잡기 (곡선 날대 눕혀올리기)',
    subtitle: '가방의 직각(90도)과 다른, 사진 속 완만한 사발 곡선의 비결',
    durationMinutes: 20,
    difficulty: '중급',
    summary: '직각으로 세우는 가방이나 원통 바구니와 달리, 사진 속 보울은 55~65도의 완만한 곡선 각도로 바깥을 향해 부드럽게 세워올립니다.',
    keyAction: '날대 밑동에 물을 분무하고 손바닥으로 부드럽게 사발 곡률(55~65도) 잡기',
    materials: ['보강용 덧날대 (필요시 각 15cm 24줄)'],
    tools: ['송곳', '안개 분무기'],
    instructions: [
      {
        title: '바닥 테두리 2줄 꼬아엮기 마감',
        description: '바닥의 마지막 바퀴를 2줄 꼬아엮기(Twining)로 힘 있게 둘러 바닥과 벽면의 뚜렷한 경계선을 형성합니다.',
        tip: '이 꼬아엮기 라인이 보울이 식탁에 닿는 안정적인 받침 테두리가 됩니다.'
      },
      {
        title: '수분 공급 후 완만한 60도 곡선 꺾기',
        description: '날대 밑동에 분무기로 물을 충분히 뿌리고, 송곳 옆면으로 살짝 누르며 바깥쪽 60도 방향으로 둥글게 굴려 올립니다.',
        tip: '급격하게 꺾지 말고 손바닥 전체로 사발을 감싸듯 둥근 곡선을 만져줍니다.'
      },
      {
        title: '360도 균일 각도 체크',
        description: '위에서 내려다보았을 때 모든 날대가 일정한 나팔꽃 모양으로 고르게 펼쳐져 있는지 점검합니다.',
        tip: '이 각도가 일정해야 사진처럼 여러 개를 포갰을 때 틈 없이 쏙 들어가는 네스팅(Nesting)이 가능합니다.'
      }
    ],
    proTips: [
      '사진 속 네스팅 세트처럼 완벽한 겹침을 원한다면 상단 입구가 바닥보다 약 1.6~1.8배 넓어지도록 각도를 유지하세요.',
      '손바닥으로 날대를 살짝 쥐어 둥근 볼 모양 틀을 상상하며 리듬감 있게 형태를 잡습니다.'
    ],
    commonMistakes: [
      '일반 수납 바구니처럼 90도 수직으로 세워 보울이 아닌 원통형 통이 되어버리는 실수',
      '날대마다 각도가 제각각이어서 입구가 찌그러진 타원으로 벌어지는 경우'
    ],
    weaveType: '2줄 꼬아엮기 & 보울 곡률 형성'
  },
  {
    id: 'body',
    stepNumber: 4,
    title: '촘촘한 막엮기 & 나선형 볼륨 쌓기',
    subtitle: '매끄러운 틈새 없는 결, 빵 부스러기가 빠지지 않는 촘촘한 밀도',
    durationMinutes: 40,
    difficulty: '중급',
    summary: '사릿대를 날대 앞-뒤로 교차하며 균일한 손힘으로 돌아가며 엮습니다. 엄지손가락으로 매 바퀴마다 촘촘하게 아래로 다져줍니다.',
    keyAction: '매 바퀴마다 엄지손가락으로 꾹꾹 눌러 다지며 부드러운 곡면 유지',
    materials: ['긴 사릿대 2.0mm 3~4줄'],
    tools: ['송곳', '줄자', '분무기'],
    instructions: [
      {
        title: '상하 교차 막엮기 (따라엮기)',
        description: '사릿대를 날대 앞, 다음 날대 뒤로 번갈아 통과시키며 시계 방향으로 나선형 회전을 이어갑니다.',
        tip: '날대가 짝수일 경우 두 줄을 엇갈려 돌리는 따라엮기나 2줄 꼬아엮기를 교차 적용합니다.'
      },
      {
        title: '엄지로 사릿대 촘촘히 다지기',
        description: '한 바퀴를 돌 때마다 엄지와 검지로 사릿대를 아래쪽으로 꾹꾹 밀어 넣어 틈이 전혀 없도록 밀착시킵니다.',
        tip: '사진처럼 매끄러운 표면 질감은 이 다지기 과정에서 탄생합니다.'
      },
      {
        title: '사릿대 안쪽 이음새 마감',
        description: '사릿대가 끝나갈 때 새 사릿대를 날대 안쪽에서 겹쳐 잡고 2~3코 이어 엮어 겉면에서 매듭이 보이지 않게 처리합니다.',
        tip: '이음매는 항상 바구니 안쪽에 숨겨야 겉면이 티 없이 깨끗합니다.'
      }
    ],
    proTips: [
      '너무 강하게 당기면 폭이 좁아지고, 너무 헐렁하게 엮으면 보울 벽면이 울퉁불퉁해집니다. 일정한 텐션을 유지하세요.',
      '원하는 높이(약 6~7cm)에 도달할 때까지 수시로 둘레 높이를 줄자로 체크해 수평을 맞춥니다.'
    ],
    commonMistakes: [
      '사릿대 순서를 착각하여 날대 두 개를 한 번에 건너뛰는 실수 (패턴 붕괴)',
      '다지기를 소홀히 하여 줄 사이에 틈이 생겨 내용물이 비치는 경우'
    ],
    weaveType: '상하 막엮기 / 밀도 다지기'
  },
  {
    id: 'border',
    stepNumber: 5,
    title: '도톰한 원형 롤 테두리 마무르기 (Coiled Rim)',
    subtitle: '사진 속 시그니처 둥근 림(Rim)을 완성하는 마스터 테두리 공법',
    durationMinutes: 30,
    difficulty: '고급',
    summary: '사진 속 보울의 가장 큰 매력인 도톰하고 둥근 롤 테두리를 만듭니다. 남은 날대들을 바깥으로 젖혀 촘촘히 엮어 안정적인 그립감을 완성합니다.',
    keyAction: '날대 12~15cm 여유 확보 후 2줄 교차 비녀/롤 마무르기',
    materials: ['남아있는 날대 끝부분'],
    tools: ['송곳 (필수)', '전정가위', '분무기'],
    instructions: [
      {
        title: '날대에 수분 듬뿍 분무하기',
        description: '테두리는 날대를 가장 급격하게 굴려 꽂는 공정이므로, 분무기로 물을 듬뿍 뿌려 3분간 기다려 최고로 부드러운 상태로 만듭니다.',
        tip: '환심이 메마르면 테두리를 꺾는 순간 뚝 부러질 수 있으니 수분 유지가 핵심입니다.'
      },
      {
        title: '뒤로 젖혀 롤 테두리 엮기 (1차)',
        description: '첫 번째 날대를 인접한 날대 뒤로 돌려 앞으로 눕히고, 둥근 코일 형태로 감아올립니다. 이를 한 바퀴 균일하게 진행합니다.',
        tip: '사진처럼 통통하고 동글동글한 테두리를 만들기 위해 줄을 과도하게 잡아당기지 않고 볼륨감을 살립니다.'
      },
      {
        title: '안쪽 틈새로 꽂아 넣고 정밀 커팅 (2차)',
        description: '누워있는 날대 끝을 송곳으로 길을 낸 뒤 바구니 안쪽 엮음 틈새로 찔러 넣어 숨깁니다. 남은 줄은 3mm 남기고 가위로 사선 절단합니다.',
        tip: '마지막 날대는 첫 번째 시작 날대 밑 구멍으로 감쪽같이 통과시켜 이음매를 없앱니다.'
      }
    ],
    proTips: [
      '사진처럼 도톰한 둥근 림을 원할 때는 2줄을 함께 눕혀 엮는 "도톰한 젖혀마무르기"를 추천합니다.',
      '완성 후 보울을 뒤집어 평평한 바닥에 놓았을 때 테두리가 들뜸 없이 수평인지 확인하세요.'
    ],
    commonMistakes: [
      '시작점을 잊어버려 마지막 날대를 넣을 홀을 찾지 못하는 실수',
      '날대 끝을 너무 짧게 잘라 사용 중 테두리가 풀려버리는 사고'
    ],
    weaveType: '도톰한 롤 테두리 말아마무르기'
  },
  {
    id: 'finish',
    stepNumber: 6,
    title: '잔가시 정리 & 천연 호두오일 태닝 코팅',
    subtitle: '사진처럼 깊고 은은한 황금빛 내추럴 허니 브라운 발색',
    durationMinutes: 15,
    difficulty: '초급',
    summary: '표면의 미세한 잔털을 부드럽게 정돈하고, 100% 천연 냉압착 호두오일을 도포하여 방수성과 은은한 광택, 곰팡이 방지 보호막을 씌웁니다.',
    keyAction: '잔털 정리 후 호두오일 도포 및 통풍 그늘에서 24시간 자연 건조',
    materials: ['100% 천연 냉압착 호두오일 20ml', '순면 헝겊'],
    tools: ['라이터 또는 미니 토치 (잔털 제거용)', '부드러운 말총 솔'],
    instructions: [
      {
        title: '미세 잔털 스치듯 버닝 정리',
        description: '안팎의 자투리 줄을 바짝 자르고, 환심 표면에 일어난 보슬보슬한 잔가시는 라이터 불을 1초 미만으로 빠르게 스쳐 매끈하게 정리합니다.',
        tip: '불을 멈추면 그을음이 생기므로 슥- 슥- 빠르게 훑고 지나가야 합니다.'
      },
      {
        title: '통풍 그늘에서 1차 수분 건조 (12시간)',
        description: '바람이 잘 통하는 그늘진 공간에서 형태를 바르게 잡은 뒤 수분이 완전히 날아갈 때까지 말립니다.',
        tip: '직사광선에 말리면 환심이 뒤틀릴 수 있으니 통풍이 잘되는 서늘한 그늘이 최적입니다.'
      },
      {
        title: '천연 호두오일 도포 및 버핑',
        description: '순면 천에 호두오일을 적셔 결을 따라 골고루 문질러 먹입니다. 30분 뒤 마른 천으로 표면의 여분 오일을 닦아냅니다.',
        tip: '오일링을 마치면 사진처럼 따스한 골든 허니 브라운으로 발색되며, 음식물이 닿아도 오염되지 않습니다.'
      }
    ],
    proTips: [
      '천연 호두오일은 식기에 사용해도 안전한 100% 자연 유래 오일입니다.',
      '시간이 흐를수록 햇빛과 공기를 만나 가죽처럼 더욱 그윽한 빈티지 브라운으로 숙성됩니다.'
    ],
    commonMistakes: [
      '수분이 덜 마른 상태에서 밀폐 용기에 넣어 곰팡이가 번식하는 경우',
      '식용 올리브유나 콩기름을 발라 시간이 지나 쩐내(산패)가 나는 실수'
    ],
    weaveType: '천연 오일링 / 친환경 피니싱'
  }
];

export const BASKET_PRESETS: BasketPreset[] = [
  {
    id: 'bowl_m',
    name: '원형 브레드 보울 (M)',
    koreanName: '사진 속 시그니처 브레드 & 과일 보울 (21cm)',
    defaultDiameter: 21,
    defaultBaseDiameter: 13,
    defaultHeight: 6.5,
    defaultThickness: 2.0,
    description: '사진 속 바로 그 메인 상품! 갓 구운 크루아상, 사과, 바게트를 담기 가장 이상적인 클래식 원형 테이블 보울',
    iconName: 'Circle',
    suggestedFinish: '도톰한 롤 테두리 마무르기'
  },
  {
    id: 'bowl_nesting',
    name: '4단 네스팅 라탄 볼 세트',
    koreanName: '사진 속 4단 중첩 네스팅 풀 컬렉션 (XS/S/M/L)',
    defaultDiameter: 25,
    defaultBaseDiameter: 15,
    defaultHeight: 8.0,
    defaultThickness: 2.0,
    description: '사진처럼 차곡차곡 쏙 포개어지는 4단 중첩형 보울 세트. 수납 공간은 절약하고 테이블 연출은 완벽하게',
    iconName: 'Layers',
    suggestedFinish: '네스팅 맞춤 완만 테두리 마무르기'
  },
  {
    id: 'bowl_mini',
    name: '미니 데스크 & 티푸드 보울 (XS)',
    koreanName: '찻자리 티푸드 & 쥬얼리 트레이 보울 (14cm)',
    defaultDiameter: 14,
    defaultBaseDiameter: 9,
    defaultHeight: 4.5,
    defaultThickness: 2.0,
    description: '소담한 다과, 찻자리 다식, 현관 차키나 반지/악세사리를 우아하게 담아내는 콤팩트 라운드 보울',
    iconName: 'Sparkles',
    suggestedFinish: '2줄 비녀마무르기'
  },
  {
    id: 'bowl_tray',
    name: '원형 채반 과일 보울 (L)',
    koreanName: '테이블 센터피스 과일 채반 보울 (25cm)',
    defaultDiameter: 25,
    defaultBaseDiameter: 16,
    defaultHeight: 5.5,
    defaultThickness: 2.5,
    description: '넓고 완만한 접시형 깊이감으로 제철 과일과 야채를 풍성하게 담아내는 내추럴 센터피스 채반 보울',
    iconName: 'Maximize2',
    suggestedFinish: '도톰한 꽈배기 림 마감'
  }
];

export const NESTING_SIZES_INFO = [
  {
    tier: 'XS',
    name: '미니 보울',
    diameter: 14,
    baseDiameter: 9,
    height: 4.5,
    useCase: '찻자리 티푸드, 현관 키 트레이, 반지·시계 보관',
    capacity: '소담한 디저트 1인용',
    stakesCount: 20
  },
  {
    tier: 'S',
    name: '스몰 보울',
    diameter: 17,
    baseDiameter: 11,
    height: 5.5,
    useCase: '모닝 베이글, 브라우니, 마카롱, 캡슐커피 보관',
    capacity: '베이커리 1~2개',
    stakesCount: 24
  },
  {
    tier: 'M',
    name: '미디엄 보울 (사진 속 메인)',
    diameter: 21,
    baseDiameter: 13,
    height: 6.5,
    useCase: '식사 빵, 크루아상, 사과·오렌지, 홈카페 세팅',
    capacity: '브레드 3~4개 또는 과일 4알',
    stakesCount: 28
  },
  {
    tier: 'L',
    name: '라지 보울',
    diameter: 25,
    baseDiameter: 15,
    height: 8.0,
    useCase: '제철 과일 모둠, 샐러드 볼, 다이닝 테이블 센터피스',
    capacity: '대용량 과일 & 바게트',
    stakesCount: 32
  }
];

export const KIT_PRODUCTS: KitProduct[] = [
  {
    id: 'kit-bowl-01',
    name: '[사진 속 상품] 원형 라탄 브레드 & 과일 보울 바구니 만들기 DIY 키트',
    category: 'kit',
    price: 21800,
    originalPrice: 28000,
    rating: 4.98,
    reviewsCount: 428,
    badge: '대표 베스트',
    difficulty: '★☆☆ (입문)',
    timeRequired: '약 2시간',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: '사진 속 바로 그 라운드 보울 바구니! 빵과 과일을 담아 식탁 위에 두면 아늑한 홈카페가 완성됩니다. 초보자도 100% 성공할 수 있는 정밀 재단 환심과 4K 상세 제작 영상 QR코드가 동봉됩니다.',
    includes: [
      '인도네시아산 직수입 AA등급 환심 2.0mm 200g',
      '초보자용 정밀 곡선 라탄가위',
      '고탄성 스테인리스 송곳 & 소프트 줄자',
      '미세 안개 분무기 100ml',
      '천연 호두오일 미니 보틀 (20ml)',
      '올컬러 제작 도면 및 4K 전단계 영상 가이드 QR코드'
    ],
    features: ['사진 속 원형 사발형 보울 제작', '식기에 안전한 100% 천연 호두오일 포함', '초보자 완성률 99.8%']
  },
  {
    id: 'kit-bowl-02',
    name: '[시그니처 컬렉션] 4단 네스팅 라탄 볼 풀 마스터 세트 키트 (XS/S/M/L)',
    category: 'kit',
    price: 49000,
    originalPrice: 65000,
    rating: 4.99,
    reviewsCount: 285,
    badge: '사진 속 4단 풀세트',
    difficulty: '★★☆ (중급)',
    timeRequired: '총 4개 완성 (개당 1.5~2.5시간)',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
    description: '사진처럼 4개의 보울이 쏙쏙 포개어지는 4단 네스팅 보울을 모두 완성할 수 있는 풍성한 풀키트. 크기별 맞춤 재단 가이드와 마스터 전용 테두리 기법을 전수합니다.',
    includes: [
      'AA등급 환심 2.0mm & 2.5mm 대용량 550g',
      '크기별(14/17/21/25cm) 4단 전용 날대 규격표',
      '고급 마스터 라탄 도구 3종 (가위, 송곳, 줄자)',
      '천연 냉압착 호두오일 50ml + 버핑 전용 순면 헝겊',
      '보관용 친환경 린넨 패키지 주머니'
    ],
    features: ['4개 보울이 하나로 겹쳐지는 네스팅 설계', '대용량 환심으로 가성비 극대화', '선물용 패키지']
  },
  {
    id: 'kit-bowl-03',
    name: '내추럴 원형 과일 채반 보울 & 코스터 듀오 키트',
    category: 'kit',
    price: 24000,
    originalPrice: 31000,
    rating: 4.93,
    reviewsCount: 164,
    badge: '인기상품',
    difficulty: '★☆☆ (입문)',
    timeRequired: '약 2시간',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
    description: '넓고 완만한 채반형 라탄 보울 1개와 매칭 원형 티코스터 2개를 함께 만드는 실용적인 테이블웨어 세트입니다.',
    includes: [
      'AA등급 환심 2.0mm 250g',
      '기초 도구 3종 세트',
      '친환경 마감 스폰지 & 호두오일',
      '상세 가이드북'
    ],
    features: ['과일 채반과 티코스터 듀얼 완성', '통풍이 우수한 엮음 구조', '테이블 감성 연출']
  },
  {
    id: 'mat-01',
    name: '인도네시아 수마트라 직수입 AA등급 내추럴 환심 500g (2.0mm/2.5mm)',
    category: 'material',
    price: 16500,
    originalPrice: 20000,
    rating: 4.97,
    reviewsCount: 920,
    badge: '원자재 1위',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    description: '라탄의 본고장 인도네시아 수마트라섬에서 1차 가공 후 직수입한 최상급 AA등급 환심. 잔가시가 없고 탄성이 뛰어나 둥근 보울 엮기에 최적화되어 있습니다.',
    includes: ['AA등급 환심 500g 벌크팩', '보관용 방습 지퍼백'],
    features: ['부러짐 없는 우수한 탄성', '자연스러운 아이보리 베이지 톤', '잔가시 최소화']
  },
  {
    id: 'tool-01',
    name: '라탄 보울 마스터 전용 5종 수제 도구 세트',
    category: 'tool',
    price: 18900,
    originalPrice: 24000,
    rating: 4.95,
    reviewsCount: 350,
    badge: '공방 추천',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
    description: '손목에 무리가 없는 인체공학적 곡선형 전정가위, 스테인리스 송곳, 1.5m 독일식 줄자, 미세 안개 분무기, 날대 정리용 우드 주걱.',
    includes: ['곡선형 라탄가위', '고탄성 스테인리스 송곳', '소프트 줄자', '안개 분무기', '우드 주걱'],
    features: ['장시간 작업도 편안한 그립', '부식 방지 특수 코팅', '전용 캔버스 파우치']
  },
  {
    id: 'finish-01',
    name: '100% 천연 냉압착 호두오일 (우드 & 라탄 전용) 50ml',
    category: 'finish',
    price: 6500,
    originalPrice: 8500,
    rating: 4.96,
    reviewsCount: 210,
    badge: '식기안심',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    description: '화학 성분이 전혀 없는 100% 순수 호두씨 추출 오일. 라탄 보울에 은은한 골든 브라운 광택을 부여하고 곰팡이와 음식물 오염을 방지합니다.',
    includes: ['호두오일 50ml 드롭퍼 보틀', '전용 도포용 린넨 코튼 2매'],
    features: ['100% 푸드 그레이드 식기 안전', '산패 없는 천연 오일', '황금빛 앤티크 발색']
  }
];

export const WORKSHOP_CLASSES: WorkshopClass[] = [
  {
    id: 'class-oneday-01',
    title: '[원데이 클래스] 사진 속 시그니처 원형 라탄 브레드 보울 만들기',
    subtitle: '손끝으로 엮는 따스한 쉼, 3시간 만에 완성하는 나만의 테이블 오브제',
    category: 'oneday',
    level: '초보자 환영 (손재주 없어도 100% 완성 보장)',
    duration: '3시간 (회당 4인 소수 정예)',
    price: 55000,
    capacity: 4,
    location: '충청남도 아산시 시민로 456 (온양온천역·아산시청 인근)',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '사진 속 원형 라탄 보울 1점(지름 21cm) 당일 완성 소장',
      'AA등급 고급 환심 및 전문가 도구 일체 무료 대여',
      '전문 작가의 1:1 밀착 코칭 및 손잡기 지도',
      '유기농 웰컴 티 & 아산 로컬 다과 제공',
      '천연 호두오일 마감 & 감성 크라프트 선물 포장'
    ],
    curriculum: [
      '환심의 수분 성질 이해와 도구 안전 사용법',
      '십자짜기로 중심잡고 원형 평면 바닥 완성하기',
      '완만한 60도 보울 곡률 형성 및 상하 엮기',
      '사진 속 도톰한 둥근 롤 테두리 마무르기',
      '천연 호두오일 버핑 및 포토존 촬영'
    ],
    availableDates: ['2026-09-20', '2026-09-22', '2026-09-25', '2026-09-27', '2026-10-02'],
    timeSlots: ['오전 10:30 ~ 13:30', '오후 14:30 ~ 17:30', '저녁 18:30 ~ 21:30']
  },
  {
    id: 'class-regular-02',
    title: '[4주 정규 취미반] 4단 네스팅 라탄 볼 풀 마스터 컬렉션',
    subtitle: 'XS부터 L까지, 차곡차곡 포개어지는 4개의 보울을 완성하는 체계적인 코스',
    category: 'regular',
    level: '입문 ~ 중급 코스',
    duration: '주 1회 3시간 x 4주 (총 12시간)',
    price: 220000,
    capacity: 6,
    location: '충청남도 아산시 시민로 456 본점 공방 & 1:1 온라인 보강 지원',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '4주 동안 사진 속 4단 네스팅 보울 전 라인업(4개) 완성 소장',
      '크기별 완벽한 겹침(Nesting)을 계산하는 직조 곡률 비법 전수',
      '비녀마무르기부터 꽈배기 테두리, 롤 마감까지 마스터',
      '수강생 전용 환심 원자재 상시 20% 특별 할인 혜택'
    ],
    curriculum: [
      '1주차: XS 미니 티푸드 & 쥬얼리 보울 (기초 십자짜기 & 비녀마감)',
      '2주차: S 모닝 베이글 보울 (보울 곡선 각도 제어 & 2줄 꼬아엮기)',
      '3주차: M 사진 속 메인 브레드 보울 (도톰한 롤 테두리 마무르기)',
      '4주차: L 센터피스 과일 보울 & 4단 합체 피팅 및 호두오일링'
    ],
    availableDates: ['2026-09-26 (토요반)', '2026-09-27 (일요반)', '2026-10-06 (화요 저녁반)'],
    timeSlots: ['오전반 (10:00 ~ 13:00)', '오후반 (14:00 ~ 17:00)']
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '사진 속 보울처럼 예쁜 밥공기 모양 곡선을 만들려면 어떻게 해야 하나요?',
    answer: '바닥을 다 짠 뒤 날대를 세울 때, 직각(90도)으로 꺾지 마시고 손바닥으로 감싸며 바깥쪽으로 약 55~65도 기울여 눕혀 올려주세요. 그리고 사릿대를 엮을 때 너무 강하게 잡아당기지 않고, 매 바퀴마다 엄지로 아래로 꾹꾹 눌러주시면 사진처럼 부드럽고 풍성한 사발형 곡선이 자연스럽게 연출됩니다.',
    category: '엮기테크닉',
    keywords: ['보울 곡선', '사발형', '날대 각도', '손바닥']
  },
  {
    id: 'faq-2',
    question: '4개의 보울이 쏙 포개어지는 네스팅(Nesting) 세트는 어떻게 만드나요?',
    answer: '네스팅 보울의 핵심은 "상단 입구 지름"과 "바닥 지름"의 일정한 비율(약 1.6~1.8배) 유지입니다. XS(14cm), S(17cm), M(21cm), L(25cm)처럼 지름이 3~4cm씩 규칙적으로 커지도록 날대 길이를 계산하고, 동일한 경사각(약 60도)으로 엮어 올리면 여러 개를 포갰을 때 틈 없이 딱 들어맞게 됩니다. 저희 계산기를 이용하시면 크기별 날대 길이가 자동으로 계산됩니다.',
    category: '엮기테크닉',
    keywords: ['네스팅', '중첩', '세트', '포개어짐', '비율']
  },
  {
    id: 'faq-3',
    question: '사진 속 테두리처럼 통통하고 둥근 롤(Rim) 마무리는 어떻게 하나요?',
    answer: '이 테두리는 "도톰한 젖혀마무르기(Coiled Rim)" 기법입니다. 날대를 약 12~15cm 여유 있게 남겨두고, 분무기로 물을 듬뿍 뿌린 뒤 날대를 2가닥씩 겹쳐 둥글게 굴리며 엮어 넣는 방식입니다. 날대를 너무 바짝 당겨 납작하게 만들지 않고, 볼륨을 살려 살포시 말아 넣으면 손으로 잡았을 때 포근한 그립감이 살아납니다.',
    category: '엮기테크닉',
    keywords: ['테두리', '마무르기', '롤 테두리', '볼륨', '둥근 림']
  },
  {
    id: 'faq-4',
    question: '빵이나 과일을 담았을 때 기름기나 과즙이 묻으면 어떻게 세척하나요?',
    answer: '천연 호두오일로 코팅된 라탄 보울은 1차 생활 방수가 되어 있습니다. 빵 부스러기는 솔로 가볍게 털어내시고, 오염이 묻었을 땐 미온수나 물티슈로 부드럽게 닦은 뒤 통풍이 잘되는 그늘에서 바짝 말려주시면 됩니다. 1년에 1~2회 호두오일을 가볍게 덧발라주시면 평생 사용할 수 있는 대물림 오브제가 됩니다.',
    category: '관리보관',
    keywords: ['세척', '빵 부스러기', '과일 얼룩', '오일 코팅', '보관']
  },
  {
    id: 'faq-5',
    question: '엮다가 환심이 뚝 부러졌을 때 중간부터 다시 해야 하나요?',
    answer: '전혀 아닙니다! 부러진 날대나 사릿대는 송곳을 이용해 바로 이전 엮음 틈새 뒤쪽으로 2~3코 숨겨 넣고, 새로운 환심을 같은 자리에 겹쳐서 자연스럽게 이어서 엮어나가면 됩니다. 완성 후 자투리를 안쪽에서 잘라내면 겉에서는 전혀 표시가 나지 않으니 안심하세요.',
    category: '트러블슈팅',
    keywords: ['부러짐', '환심 연결', '이음매', '수정']
  },
  {
    id: 'faq-6',
    question: '습한 여름철에 곰팡이가 생기지 않게 관리하는 방법은 무엇인가요?',
    answer: '라탄은 통풍을 아주 좋아하는 천연 식물 섬유입니다. 밀폐된 서랍이나 비닐봉지에 보관하지 마시고, 공기가 순환하는 식탁이나 선반 위에 자연스럽게 올려두세요. 혹시 습기로 곰팡이가 살짝 생겼다면 에탄올이나 식초를 묻힌 솔로 털어낸 후 햇빛 없는 서늘한 그늘에서 바짝 건조하고 호두오일을 덧발라주시면 됩니다.',
    category: '관리보관',
    keywords: ['곰팡이', '통풍', '건조', '여름철 보관']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-01',
    author: '이*경 (홈카페 크리에이터)',
    date: '2026.09.15',
    rating: 5,
    productOrClassName: '사진 속 원형 라탄 보울 DIY 키트',
    comment: '사진 보고 반해서 주문했는데 설명서와 동영상 보면서 주말 오후에 뚝딱 완성했어요! 갓 구운 크루아상이랑 사과 담아 식탁에 올려두니 카페가 따로 없네요. 롤 테두리가 너무 둥글둥글 귀여워요.',
    likes: 38,
    tag: '실제 완성작 인증',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rev-02',
    author: '박*하 (성수동 원데이 수강생)',
    date: '2026.09.12',
    rating: 5,
    productOrClassName: '성수동 원데이 클래스 수강',
    comment: '손재주가 전혀 없어서 걱정했는데 선생님이 보울 각도 잡는 법을 친절하게 알려주셔서 사진이랑 똑같이 완만한 사발 모양으로 잘 나왔어요! 호두오일 바르니까 황금빛 나는 게 너무 고급스러워요.',
    likes: 29,
    tag: '성수 본점 수강',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rev-03',
    author: '김*은 (인테리어 디자이너)',
    date: '2026.09.08',
    rating: 5,
    productOrClassName: '4단 네스팅 라탄 볼 풀세트 키트',
    comment: '4개가 쏙쏙 겹쳐지는 네스팅 보울 진짜 실물 깡패예요... 수납할 땐 하나로 포개놓고 손님 오실 땐 과일, 빵, 견과류 각각 담아 내놓으니 다들 어디서 샀냐고 물어보네요. 강력 추천합니다!',
    likes: 45,
    tag: '4단 네스팅 완성',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80'
  }
];
