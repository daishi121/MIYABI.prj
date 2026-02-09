// CHANGE: Catalog Products Database - Add ALL your products here
const catalogProducts = [
    // this are the MEN products
    {
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
    {
        id: 'product-2',
        name: 'EMPORIO ARMANI : YOU INTENSELY',
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
    {
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
        featured: true
    },
    {
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
    {
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
        featured: true
    },
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
        id: 'product-16',
        name: 'YVES SAINT LAURENT : L NUIT DE L HOMME L INTENSE',
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
        id: 'product-28',
        name: 'CHANEL : COCO MADEMOISELLE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        image: '/image/women/1.png',
        category: 'Parfums féminins',
        featured: true
    },
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
        id: 'product-42',
        name: 'ESCADA',
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
        id: 'product-52',
        name: 'VALENTINO : DONNA BORN IN ROMA',
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
    {
        id: 'product-53',
        name: 'HERMES : TWILLY D\'HERMES',
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
];

// Pagination settings
const PRODUCTS_PER_PAGE = 10;
let currentPage = 1;

// Store current filtered/sorted products
let displayedProducts = [...catalogProducts];

// Initialize catalog on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on catalog page
    if (document.getElementById('catalogProductsGrid')) {
        loadCatalogProducts();
        checkURLCategory();
    }
});

// Check URL for category parameter (from index.html collection links)
function checkURLCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
            filterProducts();
        }
    }
}

// Load products with pagination
function loadCatalogProducts() {
    const grid = document.getElementById('catalogProductsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;
    
    // Clear grid
    grid.innerHTML = '';
    
    if (displayedProducts.length === 0) {
        noResults.style.display = 'block';
        updateResultsCount(0);
        hidePagination();
        return;
    }
    
    noResults.style.display = 'none';
    
    // Calculate pagination
    const totalPages = Math.ceil(displayedProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = displayedProducts.slice(startIndex, endIndex);
    
    // Generate product cards for current page
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
    
    updateResultsCount(displayedProducts.length);
    renderPagination(totalPages);
    
    // Scroll to top of products
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-price', product.price);
    card.setAttribute('data-name', product.name);
    
    card.innerHTML = `
        <a href="product-detail.html?id=${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price.toFixed(2)} dh</p>
            </div>
        </a>
        <button class="quick-add-btn" onclick="addToCart('${product.id}')">Ajouter au panier</button>
    `;
    
    return card;
}

// Render pagination buttons
function renderPagination(totalPages) {
    let paginationContainer = document.getElementById('paginationContainer');
    
    // Create pagination container if it doesn't exist
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'paginationContainer';
        paginationContainer.className = 'pagination-container';
        
        const catalogSection = document.querySelector('.catalog-products');
        if (catalogSection) {
            catalogSection.appendChild(paginationContainer);
        }
    }
    
    // Clear existing pagination
    paginationContainer.innerHTML = '';
    
    // Don't show pagination if only 1 page
    if (totalPages <= 1) {
        hidePagination();
        return;
    }
    
    paginationContainer.style.display = 'flex';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.innerHTML = '← Précédent';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => goToPage(currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust startPage if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page + ellipsis
    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.className = 'pagination-btn';
        firstBtn.textContent = '1';
        firstBtn.onclick = () => goToPage(1);
        paginationContainer.appendChild(firstBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
    }
    
    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'pagination-btn';
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.textContent = i;
        pageBtn.onclick = () => goToPage(i);
        paginationContainer.appendChild(pageBtn);
    }
    
    // Ellipsis + last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
        
        const lastBtn = document.createElement('button');
        lastBtn.className = 'pagination-btn';
        lastBtn.textContent = totalPages;
        lastBtn.onclick = () => goToPage(totalPages);
        paginationContainer.appendChild(lastBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.innerHTML = 'Suivant →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => goToPage(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
}

// Go to specific page
function goToPage(page) {
    const totalPages = Math.ceil(displayedProducts.length / PRODUCTS_PER_PAGE);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    loadCatalogProducts();
}

// Hide pagination
function hidePagination() {
    const paginationContainer = document.getElementById('paginationContainer');
    if (paginationContainer) {
        paginationContainer.style.display = 'none';
    }
}

// Filter products by category
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    
    if (selectedCategory === 'all') {
        displayedProducts = [...catalogProducts];
    } else {
        displayedProducts = catalogProducts.filter(product => 
            product.category === selectedCategory
        );
    }
    
    // Reset to page 1 when filtering
    currentPage = 1;
    
    // Re-apply current sort
    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
        applySorting(sortFilter.value);
    }
    
    loadCatalogProducts();
}

// Sort products
function sortProducts() {
    const sortFilter = document.getElementById('sortFilter');
    const sortValue = sortFilter.value;
    
    // Reset to page 1 when sorting
    currentPage = 1;
    
    applySorting(sortValue);
    loadCatalogProducts();
}

// Apply sorting logic
function applySorting(sortValue) {
    switch(sortValue) {
        case 'price-asc':
            displayedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            displayedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            displayedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'featured':
        default:
            // Sort by featured first, then by name
            displayedProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return a.name.localeCompare(b.name);
            });
            break;
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = count;
    }
}

// Make functions available globally
window.filterProducts = filterProducts;
window.sortProducts = sortProducts;
window.goToPage = goToPage;

// CHANGE: Export catalogProducts for use in other scripts (like product-detail for related products)
window.catalogProducts = catalogProducts;