// CHANGE: Products Database - Add your actual products here
const products = { //this is the men porfums
        'product-1': {
        id: 'product-1',
        name: 'VERSACE : DYLAN BLEU',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/1.png',
        category: 'Parfums masculins',
        featured: true
    },
    'product-2': {
        id: 'product-2',
        name: 'JEAN PAUL GAULTIER : LE MALE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/2.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-3': {
        id: 'product-3',
        name: 'BVLGARI : MAN wood essence',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/3.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-4': {
        id: 'product-4',
        name: 'JEAN PAUL GAULTIER : ULTRA MALE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/4.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-5': {
        id: 'product-5',
        name: 'GIORGIO ARMANI : ARMANI CODE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/5.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-6': {
        id: 'product-6',
        name: 'EMPORIO ARMANI : YOU LEATHER',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/6.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-7': {
        id: 'product-7',
        name: 'AZZARO : THE MOST WANTED',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/7.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-8': {
        id: 'product-8',
        name: 'ARMANI PRIVE : VERTMALCHITE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/8.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-9': {
        id: 'product-9',
        name: 'HUGO BOSS : BOTTLED',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/9.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-10': {
        id: 'product-10',
        name: 'GUCCI : GUILTY ELIXIR DE PARFUM POUR HOMME',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/10.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-11': {
        id: 'product-11',
        name: 'VERSACE : EROS EAU DE PARFUM',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/11.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-12': {
        id: 'product-12',
        name: 'DIOR : HOMME INTENSE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/12.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-13': {
        id: 'product-13',
        name: 'JEAN PAUL GAULTIER : SCANDAL',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/13.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-14': {
        id: 'product-14',
        name: 'JEAN PAUL GAULTIER : LE MALE ELIXIR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/14.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-15': {
        id: 'product-15',
        name: 'JEAN PAUL GAULTIER : LE MALE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/15.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-16': {
        id: 'product-16',
        name: 'YVES SAINT LAURENT : L\'NUIT DE L\'HOMME L\'INTENSE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/16.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-17': {
        id: 'product-17',
        name: 'GIORGIO ARMANI : ACQUA DI GIO',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/17.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-18': {
        id: 'product-18',
        name: 'PACO RABANNE : MILLION ELIXIR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/18.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-19': {
        id: 'product-19',
        name: 'PACO RABANNE : MILLION LUCKY',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/19.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-20': {
        id: 'product-20',
        name: 'PACO RABANNE : MILLION PARFUM',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/20.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-21': {
        id: 'product-21',
        name: 'PACO RABANNE : INVICTUS VICTORY',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/21.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-22': {
        id: 'product-22',
        name: 'CHANEL : BLEU DE CHANEL PARFUM',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/22.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-23': {
        id: 'product-23',
        name: 'SAUVAGE : DIOR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/23.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-24': {
        id: 'product-24',
        name: 'JEAN PAUL GAULTIER : LE MALE LE PARFUM',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/24.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-25': {
        id: 'product-25',
        name: 'CHRISTIAN DIOR : AMBRENUIT',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/25.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-26': {
        id: 'product-26',
        name: 'LACOSTE : EAU DE LACOSTE L.12.12 NOIR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/26.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-27': {
        id: 'product-27',
        name: 'GIARDINI DI TOSCANA : BIANCO LATTE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/men/27.png',
        category: 'Parfums masculins',
        featured: false
    },
    'product-28': {
    id: 'product-28',
    name: 'CHANEL : COCO MADEMOISELLE',
    category: 'Parfums féminins',
    image: '/image/women/1.png',
    sizes: {
        '30ml': {
            price: 50.00,
            originalPrice: 70.00,
            discount: 14
        },
        '50ml': {
            price: 85.00,
            originalPrice: 100.00,
            discount: 15
        }
    },
    defaultSize: '30ml',
    price: 50.00  // For catalog display
},
    'product-29': {
        id: 'product-29',
        name: 'CAROLINA HERRERA : GOOD GIRL',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/2.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-30': {
        id: 'product-30',
        name: 'AVON : TOMORROW ALWAYS',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/3.png',
        category: 'Parfums féminins',
        featured: true
    },
    'product-31': {
        id: 'product-31',
        name: 'VICTORIA\'S SECRET : BOMBSHELL SUMMER',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/4.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-32': {
        id: 'product-32',
        name: 'DIOR : HYPNOTIC POISON',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/5.png',
        category: 'Parfums féminins',
        featured: true
    },
    'product-33': {
        id: 'product-33',
        name: 'YVES ROCHER : EVIDENCE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/6.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-34': {
        id: 'product-34',
        name: 'BURBERRY : GODDESS',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/7.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-35': {
        id: 'product-35',
        name: 'GIORGIO ARMANI : APOLLO',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/8.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-36': {
        id: 'product-36',
        name: 'CHANEL : COCO',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/9.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-37': {
        id: 'product-37',
        name: 'PARFUMS DE MARLY : DELINA EXCLUSIF',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/10.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-38': {
        id: 'product-38',
        name: 'DIOR : MISS DIOR CHÉRIE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/11.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-39': {
        id: 'product-39',
        name: 'DIOR : J\'ADORE L\'OR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/12.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-40': {
        id: 'product-40',
        name: 'ELIE SAAB : LE PARFUM',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/13.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-41': {
        id: 'product-41',
        name: 'GUCCI : FLORA GORGEOUS GARDENIA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/14.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-42': {
        id: 'product-42',
        name: 'ESCADA : SORBETTO ROSA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/15.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-43': {
        id: 'product-43',
        name: 'CAROLINA HERRERA : GOOD GIRL MIDNIGHT',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/16.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-44': {
        id: 'product-44',
        name: 'DOLCE & GABBANA : DEVOTION',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/17.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-45': {
        id: 'product-45',
        name: 'YVES SAINT LAURENT : MON PARIS',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/18.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-46': {
        id: 'product-46',
        name: 'GIORGIO ARMANI : MY WAY',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/19.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-47': {
        id: 'product-47',
        name: 'PACO RABANNE : OLYMPEA INTENSE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/20.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-48': {
        id: 'product-48',
        name: 'PRADA : PARADOXE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/21.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-49': {
        id: 'product-49',
        name: 'ZADIG & VOLTAIRE : THIS IS HER!',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/22.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-50': {
        id: 'product-50',
        name: 'FLYING GODDESS : SUPER LOVE SEXY ANGEL',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/23.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-51': {
        id: 'product-51',
        name: 'GIORGIO ARMANI : SI PASSIONE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/24.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-52': {
        id: 'product-52',
        name: 'CHRISTIAN DIOR : AMBRENUIT',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/25.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-53': {
        id: 'product-53',
        name: 'LACOSTE : EAU DE LACOSTE L.12.12 NOIR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/26.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-54': {
        id: 'product-54',
        name: 'YVES SAINT LAURENT : LIBRE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/27.png',
        category: 'Parfums féminins',
        featured: false
    },
    'product-55': {
        id: 'product-55',
        name: 'LATTAFA : OUD MOOD',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/1.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-56': {
        id: 'product-56',
        name: 'PARFUMS DE MARLY : ALTHAÏR',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/2.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-57': {
        id: 'product-57',
        name: 'ASDAAF : AMERAT AL ARAB',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/3.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-58': {
        id: 'product-58',
        name: 'NISHANE : ANI',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/4.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-59': {
        id: 'product-59',
        name: 'ELYSIA : VANILLA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/5.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-60': {
        id: 'product-60',
        name: 'MAISON FRANCIS KURKDJIAN : BACARRAT ROUGE 540',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/6.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-61': {
        id: 'product-61',
        name: 'INITIO : OUD FOR GREATNESS',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/7.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-62': {
        id: 'product-62',
        name: 'LATTAFA : KHAMRAH',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/8.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-63': {
        id: 'product-63',
        name: 'MONTALE : ARABIANS TONKA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/9.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-64': {
        id: 'product-64',
        name: 'LATTAFA : YARA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/10.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-65': {
        id: 'product-65',
        name: 'MONTALE : BLACK AQUA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/11.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-66': {
        id: 'product-66',
        name: 'NISHANE : HACIVAT',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/12.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'product-67': {
        id: 'product-67',
        name: 'CELESTE : LUXURY',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/both/13.png',
        category: 'Parfums unisexes',
        featured: false
    },
    'featur-1': {
        id: 'featur-1',
        name: 'CDIOR : HYPNOTIC POISON',
        price: 50.00,
        originalPrice: 70.00,
        discount: 29,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/featur/1.png',
        category: 'Parfums',
        featured: true
    },

    'featur-2': {
        id: 'featur-2',
        name: 'GUCCI : FLORA GORGEOUS GARDENIA',
        price: 50.00,
        originalPrice: 70.00,
        discount: 29,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/featur/2.png',
        category: 'Parfums',
        featured: true
    },

    'featur-3': {
        id: 'featur-3',
        name: 'BVLGARI : MAN WOOD ESSENCE',
        price: 60.00,
        originalPrice: 80.00,
        discount: 25,
        price50ml: 95.00,
        originalPrice50ml: 110.00,
        discount50ml: 14,
        image: '/image/featur/3.png',
        category: 'Parfums masculins',
        featured: true
    },

    'featur-4': {
        id: 'featur-4',
        name: 'JEAN PAUL GAULTIER : LE MALE',
        price: 70.00,
        originalPrice: 90.00,
        discount: 22,
        price50ml: 105.00,
        originalPrice50ml: 120.00,
        discount50ml: 13,
        image: '/image/featur/4.png',
        category: 'Parfums masculins',
        featured: true
    }
};

// Cart Storage - USING localStorage (cart persists across page refreshes)
let cart = JSON.parse(localStorage.getItem('miyabiCart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('miyabiCart', JSON.stringify(cart));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    updateCartCount();
});

// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Toggle Cart Sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

// Quantity Controls
function increaseQty(inputId) {
    const input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
}

function decreaseQty(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Quantity
    let quantity = 1;
    const qtyInputs = ['qty1', 'qty2', 'productQty'];
    for (let qtyId of qtyInputs) {
        const qtyInput = document.getElementById(qtyId);
        if (qtyInput) {
            quantity = parseInt(qtyInput.value) || 1;
            break;
        }
    }

    // Size (MUST be explicit)
    const sizeInput = document.querySelector('input[name="size"]:checked');
    const selectedSize = sizeInput ? sizeInput.value : '30ml';

    // Find existing cart item (id + size)
    const existingItemIndex = cart.findIndex(
        item => item.id === productId && item.size === selectedSize
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            size: selectedSize,
            name: product.name,
            price: selectedSize === '50ml' ? product.price50ml : product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartDisplay();
    updateCartCount();
}

// Remove from Cart
function removeFromCart(productId, size) {
    cart = cart.filter(
        item => !(item.id === productId && item.size === size)
    );
    saveCart();
    updateCartDisplay();
    updateCartCount();
}


// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotal.textContent = '0.00 dh';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let cartHTML = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name} (${item.size})
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', '${item.size}', -1)">−</button>
                             <span class="qty-display">${item.quantity}</span>
                         <button class="qty-btn" onclick="updateQuantity('${item.id}', '${item.size}', 1)">+</button>
                    </div>
                    <div class="cart-item-price">${item.price.toFixed(2)} dh</div>
                    
                    <div class="item-total">${itemTotal.toFixed(2)} dh</div>
                </div>
                <button class="delete-btn" onclick="removeFromCart('${item.id}','${item.size}')">🗑️</button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    cartTotal.textContent = total.toFixed(2) + ' dh';
}
function updateQuantity(productId, size, change) {
    const itemIndex = cart.findIndex(
        item => item.id === productId && item.size === size
    );

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }

        saveCart();
        updateCartDisplay();
        updateCartCount();
    }
}


// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #000;
        color: #fff;
        padding: 15px 25px;
        border-radius: 4px;
        z-index: 3000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    // Don't close if clicking on quantity buttons or delete buttons
    if (event.target.closest('.qty-btn') || event.target.closest('.delete-btn')) {
        return;
    }
    
    if (cartSidebar && cartSidebar.classList.contains('active')) {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove('active');
        }
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Export cart data
function getCartData() {
    return {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
}

// Clear cart
function clearCart() {
    cart = [];
    localStorage.removeItem('miyabiCart');
    updateCartDisplay();
    updateCartCount();
}

// =============================================================================
// CHECKOUT FORM SYSTEM
// =============================================================================

// Your WhatsApp business number
const BUSINESS_WHATSAPP = '212608674504';

// Delivery fee constant
const DELIVERY_FEE = 30.00;

// Track if user opened checkout (for abandoned cart tracking)
let checkoutOpened = false;
let checkoutCompleted = false;

// Open checkout modal
function openCheckout() {
    const cart = JSON.parse(localStorage.getItem('miyabiCart')) || [];
    
    if (cart.length === 0) {
        alert('Votre panier est vide');
        return;
    }
    
    checkoutOpened = true;
    checkoutCompleted = false;
    
    if (!document.getElementById('checkoutOverlay')) {
        createCheckoutModal();
    }
    
    populateCheckoutItems(cart);
    
    const overlay = document.getElementById('checkoutOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Create checkout modal HTML
function createCheckoutModal() {
    const modalHTML = `
        <div id="checkoutOverlay" class="checkout-overlay">
            <div class="checkout-modal">
                <div class="checkout-header">
                    <h2>Commande avec paiement à la livraison</h2>
                    <button class="close-checkout" onclick="closeCheckout()">×</button>
                </div>
                
                <div class="checkout-body">
                    <div class="delivery-method">
                        <h3>Mode de livraison</h3>
                        <div class="delivery-option">
                            <input type="radio" id="cashOnDelivery" name="deliveryMethod" checked>
                            <label for="cashOnDelivery">Paiement à la livraison</label>
                            <span class="delivery-price">${DELIVERY_FEE.toFixed(2)} dh</span>
                        </div>
                    </div>
                    
                    <div class="checkout-items" id="checkoutItemsList"></div>
                    
                    <div class="checkout-form-section">
                        <h3>Entrez votre adresse de livraison</h3>
                        
                        <div class="form-field">
                            <label>Nom complet <span class="required">*</span></label>
                            <div class="input-with-icon">
                                <span class="input-icon">👤</span>
                                <input type="text" id="fullName" placeholder="Nom complet" required>
                                <span class="error-message">Ce champ est obligatoire.</span>
                            </div>
                        </div>
                        
                        <div class="form-field">
                            <label>Téléphone <span class="required">*</span></label>
                            <div class="input-with-icon">
                                <span class="input-icon">📞</span>
                                <input type="tel" id="phone" placeholder="Téléphone" required>
                                <span class="error-message">Ce champ est obligatoire.</span>
                            </div>
                        </div>
                        
                        <div class="form-field">
                            <label>Adresse <span class="required">*</span></label>
                            <div class="input-with-icon">
                                <span class="input-icon">📍</span>
                                <input type="text" id="address" placeholder="Adresse" required>
                                <span class="error-message">Ce champ est obligatoire.</span>
                            </div>
                        </div>
                        
                        <div class="form-field">
                            <label>Ville <span class="required">*</span></label>
                            <div class="input-with-icon">
                                <span class="input-icon">🏙️</span>
                                <input type="text" id="city" placeholder="Ville" required>
                                <span class="error-message">Ce champ est obligatoire.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-summary">
                        <div class="summary-row">
                            <span>Sous-total</span>
                            <span id="subtotalAmount">0.00 dh</span>
                        </div>
                        <div class="summary-row">
                            <span>Livraison</span>
                            <span>${DELIVERY_FEE.toFixed(2)} dh</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span id="totalAmount">0.00 dh</span>
                        </div>
                    </div>
                    
                    <button class="complete-order-btn" onclick="completeOrder()">
                        Finaliser votre achat
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('checkoutOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCheckout();
        }
    });
}

// Populate cart items in checkout
function populateCheckoutItems(cart) {
    const itemsList = document.getElementById('checkoutItemsList');
    itemsList.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemHTML = `
            <div class="checkout-item">
                <div class="checkout-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="checkout-item-details">
                    <div class="checkout-item-name">${item.name} (${item.size})</div>
                    <div class="checkout-item-quantity">Quantité: ${item.quantity}</div>
                </div>
                <div class="checkout-item-price">${itemTotal.toFixed(2)} dh</div>
            </div>
        `;
        
        itemsList.insertAdjacentHTML('beforeend', itemHTML);
    });
    
    const total = subtotal + DELIVERY_FEE;
    document.getElementById('subtotalAmount').textContent = subtotal.toFixed(2) + ' dh';
    document.getElementById('totalAmount').textContent = total.toFixed(2) + ' dh';
}

// Close checkout modal
function closeCheckout() {
    const overlay = document.getElementById('checkoutOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    if (checkoutOpened && !checkoutCompleted) {
        sendAbandonedCartMessage();
    }
}

// Complete order
function completeOrder() {
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    
    let isValid = true;
    
    if (!fullName) {
        document.getElementById('fullName').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('fullName').classList.remove('error');
    }
    
    if (!phone) {
        document.getElementById('phone').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('phone').classList.remove('error');
    }
    
    if (!address) {
        document.getElementById('address').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('address').classList.remove('error');
    }
    
    if (!city) {
        document.getElementById('city').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('city').classList.remove('error');
    }
    
    if (!isValid) {
        return;
    }
    
    checkoutCompleted = true;
    
    const cart = JSON.parse(localStorage.getItem('miyabiCart')) || [];
    
    let message = '🛍️ *NOUVELLE COMMANDE MIYABI*\n\n';
    message += '👤 *Informations client:*\n';
    message += `Nom: ${fullName}\n`;
    message += `Téléphone: ${phone}\n`;
    message += `Adresse: ${address}\n`;
    message += `Ville: ${city}\n\n`;
    
    message += '📦 *Produits commandés:*\n';
    let subtotal = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        message += `${index + 1}. ${item.name} (${item.size})\n`;
        message += `   Quantité: ${item.quantity}\n`;
        message += `   Prix: ${itemTotal.toFixed(2)} dh\n\n`;
    });
    
    const total = subtotal + DELIVERY_FEE;
    message += `💰 *Sous-total:* ${subtotal.toFixed(2)} dh\n`;
    message += `🚚 *Livraison:* ${DELIVERY_FEE.toFixed(2)} dh\n`;
    message += `💳 *Total:* ${total.toFixed(2)} dh\n\n`;
    message += '✅ Paiement à la livraison';
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    localStorage.removeItem('miyabiCart');
    closeCheckout();
    
    updateCartDisplay();
    updateCartCount();
    
    alert('Merci pour votre commande! Vous allez être redirigé vers WhatsApp pour finaliser.');
}

// Send abandoned cart message
function sendAbandonedCartMessage() {
    const cart = JSON.parse(localStorage.getItem('miyabiCart')) || [];
    
    if (cart.length === 0) return;
    
    let message = '⚠️ *PANIER ABANDONNÉ - MIYABI*\n\n';
    message += '❌ Un client a ouvert le checkout mais n\'a pas finalisé.\n\n';
    
    message += '🛒 *Produits dans le panier:*\n';
    let subtotal = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        message += `${index + 1}. ${item.name} (${item.size})\n`;
        message += `   Quantité: ${item.quantity}\n`;
        message += `   Prix: ${itemTotal.toFixed(2)} dh\n\n`;
    });
    
    const total = subtotal + DELIVERY_FEE;
    message += `💰 *Total potentiel:* ${total.toFixed(2)} dh\n\n`;
    message += '📞 *Action suggérée:* Contacter le client si possible.';
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedMessage}`;
    
    const win = window.open(whatsappURL, '_blank');
    if (win) {
        win.blur();
        window.focus();
    }
}

// Go to checkout - calls the checkout form
function goToCheckout() {
    openCheckout();
}

// Make functions available globally
window.toggleMobileMenu = toggleMobileMenu;
window.toggleCart = toggleCart;
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.goToCheckout = goToCheckout;
window.getCartData = getCartData;
window.clearCart = clearCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.completeOrder = completeOrder;
window.updateQuantity = updateQuantity;
