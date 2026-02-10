// CHANGE: Full Products Database with detailed info
const detailedProducts = {
    'product-1': {
        id: 'product-1',
        name: 'VERSACE : DYLAN BLEU',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        images: [
            '/image/men/1.png',
            ],
        category: 'Parfums masculins',
        sku: 'PRF-001',
        inStock: true,
        description: 'Parfum VERSACE DYLAN BLEU',
        fullDescription: 'Parfum VERSACE DYLAN BLEU',
        topNotes: 'Bergamote, Citron, Lavande',
        heartNotes: 'Rose, Jasmin, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/2.png',
            '/image/men/2.png',
            '/image/men/2.png',
        ],
        category: 'Parfums masculins',
        sku: 'PRF-002',
        inStock: true,
        description: 'EMPORIO ARMANI : YOU INTENSELY',
        fullDescription: 'Parfum EMPORIO ARMANI YOU INTENSELY',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/3.png',
            '/image/men/3.png',
            '/image/men/3.png',
        ],
        category: 'Parfums masculins',
        sku: 'PRF-003',
        inStock: true,
        description: 'Parfum BVLGARI MAN wood essence',
        fullDescription: 'Parfum BVLGARI MAN wood essence',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/4.png',
            '/image/men/4.png',
            '/image/men/4.png',
        ],
        category: 'Parfums masculins',
        sku: 'PRF-004',
        inStock: true,
        description: 'Parfum JEAN PAUL GAULTIER ULTRA MALE',
        fullDescription: 'Parfum JEAN PAUL GAULTIER ULTRA MALE',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/5.png',
            '/image/men/5.png',
            '/image/men/5.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-005',
        inStock: true,
        description: 'Parfum GIORGIO ARMANI ARMANI CODE',
        fullDescription: 'Parfum GIORGIO ARMANI ARMANI CODE',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml',],
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
        images: [
            '/image/men/6.png',
            '/image/men/6.png',
            '/image/men/6.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-006',
        inStock: true,
        description: 'Parfum EMPORIO ARMANI YOU LEATHER',
        fullDescription: 'Parfum EMPORIO ARMANI YOU LEATHER',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/7.png',
            '/image/men/7.png',
            '/image/men/7.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-007',
        inStock: true,
        description: 'Parfum AZZARO THE MOST WANTED',
        fullDescription: 'Parfum AZZARO THE MOST WANTED',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/8.png',
            '/image/men/8.png',
            '/image/men/8.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-008',
        inStock: true,
        description: 'Parfum ARMANI PRIVE VERTMALCHITE',
        fullDescription: 'Parfum ARMANI PRIVE VERTMALCHITE',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/9.png',
            '/image/men/9.png',
            '/image/men/9.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-009',
        inStock: true,
        description: 'Parfum HUGO BOSS BOTTLED',
        fullDescription: 'Parfum HUGO BOSS BOTTLED',
        topNotes: 'Citron, Bergamote, Pomme',
        heartNotes: 'Jasmin, Rose, Géranium',
        baseNotes: 'Musc, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/10.png',
            '/image/men/10.png',
            '/image/men/10.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-010',
        inStock: true,
        description: 'Parfum masculin intense et séduisant',
        fullDescription: 'Gucci Guilty Elixir de Parfum Pour Homme est une fragrance intense et séduisante avec des notes épicées et boisées.',
        topNotes: 'Poivre Rose, Lavande',
        heartNotes: 'Encens, Cèdre',
        baseNotes: 'Patchouli, Musc, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/11.png',
            '/image/men/11.png',
            '/image/men/11.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-011',
        inStock: true,
        description: 'Parfum fougueux et passionné',
        fullDescription: 'Eros Eau de Parfum de Versace est une fragrance fougueuse qui célèbre la passion et la force.',
        topNotes: 'Menthe, Pomme Verte, Citron',
        heartNotes: 'Tonka, Géranium',
        baseNotes: 'Vanille, Vétiver, Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/12.png',
            '/image/men/12.png',
            '/image/men/12.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-012',
        inStock: true,
        description: 'Parfum sophistiqué et élégant',
        fullDescription: 'Dior Homme Intense est une fragrance sophistiquée pour l\'homme moderne.',
        topNotes: 'Lavande, Iris',
        heartNotes: 'Cèdre, Patchouli',
        baseNotes: 'Cuir, Vanille, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/13.png',
            '/image/men/13.png',
            '/image/men/13.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-013',
        inStock: true,
        description: 'Parfum audacieux et provocant',
        fullDescription: 'Scandal de Jean Paul Gaultier est un parfum masculin audacieux et provocant.',
        topNotes: 'Gingembre, Poivre',
        heartNotes: 'Miel, Fleur d\'Oranger',
        baseNotes: 'Patchouli, Cèdre, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/14.png',
            '/image/men/14.png',
            '/image/men/14.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-014',
        inStock: true,
        description: 'Version élixir du classique Le Male',
        fullDescription: 'Le Male Elixir de Jean Paul Gaultier est une version enrichie et plus intense du parfum iconique Le Male.',
        topNotes: 'Lavande, Cardamome',
        heartNotes: 'Vanille, Iris',
        baseNotes: 'Bois de Santal, Ambre, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/15.png',
            '/image/men/15.png',
            '/image/men/15.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-015',
        inStock: true,
        description: 'Parfum iconique au flacon marin',
        fullDescription: 'Le Male de Jean Paul Gaultier est un parfum iconique reconnaissable à son flacon en forme de torse de marin.',
        topNotes: 'Lavande, Menthe',
        heartNotes: 'Cannelle, Orange',
        baseNotes: 'Vanille, Ambre, Bois de Santal',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/16.png',
            '/image/men/16.png',
            '/image/men/16.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-016',
        inStock: true,
        description: 'Version intense de La Nuit de L\'Homme',
        fullDescription: 'L\'Nuit de L\'Homme L\'Intense de Yves Saint Laurent est une version plus concentrée et durable du parfum nocturne original.',
        topNotes: 'Cardamome, Bergamote',
        heartNotes: 'Cèdre, Vétiver',
        baseNotes: 'Cuir, Carvi, Cashmeran',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/17.png',
            '/image/men/17.png',
            '/image/men/17.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-017',
        inStock: true,
        description: 'Parfum aquatique frais iconique',
        fullDescription: 'Acqua di Gio de Giorgio Armani est un parfum aquatique frais et iconique, évoquant la Méditerranée.',
        topNotes: 'Notes Marines, Mandarine',
        heartNotes: 'Jasmin, Romarin',
        baseNotes: 'Bois de Cèdre, Patchouli',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/18.png',
            '/image/men/18.png',
            '/image/men/18.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-018',
        inStock: true,
        description: 'Version élixir de 1 Million',
        fullDescription: '1 Million Elixir de Paco Rabanne est une version plus concentrée et intense du parfum original 1 Million.',
        topNotes: 'Sangria, Cannelle',
        heartNotes: 'Cuir, Rose',
        baseNotes: 'Bois Précieux, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/19.png',
            '/image/men/19.png',
            '/image/men/19.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-019',
        inStock: true,
        description: 'Édition chanceuse de 1 Million',
        fullDescription: '1 Million Lucky de Paco Rabanne est une édition spéciale avec des notes fruitées et boisées pour porter chance.',
        topNotes: 'Raisin, Framboise',
        heartNotes: 'Noisette, Iris',
        baseNotes: 'Bois de Cèdre, Patchouli',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/20.png',
            '/image/men/20.png',
            '/image/men/20.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-020',
        inStock: true,
        description: 'Version parfum de 1 Million',
        fullDescription: '1 Million Parfum de Paco Rabanne est la concentration parfum la plus intense de la gamme 1 Million.',
        topNotes: 'Sangria, Cannelle',
        heartNotes: 'Cuir, Rose',
        baseNotes: 'Ambre Gris, Bois de Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/21.png',
            '/image/men/21.png',
            '/image/men/21.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-021',
        inStock: true,
        description: 'Parfum de victoire sportif',
        fullDescription: 'Invictus Victory de Paco Rabanne célèbre l\'esprit de victoire avec des notes énergisantes et toniques.',
        topNotes: 'Poivre, Lavande',
        heartNotes: 'Feuille de Vigne, Baies',
        baseNotes: 'Bois de Cèdre, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/22.png',
            '/image/men/22.png',
            '/image/men/22.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-022',
        inStock: true,
        description: 'Version parfum de Bleu de Chanel',
        fullDescription: 'Bleu de Chanel Parfum est la concentration la plus intense et durable du parfum iconique de Chanel.',
        topNotes: 'Citron, Menthe',
        heartNotes: 'Gingembre, Encens',
        baseNotes: 'Bois de Santal, Patchouli',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/23.png',
            '/image/men/23.png',
            '/image/men/23.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-023',
        inStock: true,
        description: 'Parfum sauvage et épicé iconique',
        fullDescription: 'Sauvage de Dior est un parfum masculin iconique aux notes sauvages et épicées, fraîches et audacieuses.',
        topNotes: 'Poivre de Sichuan, Bergamote',
        heartNotes: 'Épices, Lavande',
        baseNotes: 'Ambroxan, Musc, Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/24.png',
            '/image/men/24.png',
            '/image/men/24.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-024',
        inStock: true,
        description: 'Version parfum de Le Male',
        fullDescription: 'Le Male Le Parfum de Jean Paul Gaultier est la concentration parfum la plus intense et luxueuse de la gamme.',
        topNotes: 'Cardamome, Lavande',
        heartNotes: 'Iris, Vanille',
        baseNotes: 'Bois de Santal, Ambre, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/25.png',
            '/image/men/25.png',
            '/image/men/25.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-025',
        inStock: true,
        description: 'Parfum ambré nocturne luxueux',
        fullDescription: 'Ambre Nuit de Christian Dior est un parfum ambré-floral nocturne et sensuel de la collection Privée.',
        topNotes: 'Bergamote, Raisin',
        heartNotes: 'Rose, Épices',
        baseNotes: 'Ambre Gris, Patchouli, Bois de Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/26.png',
            '/image/men/26.png',
            '/image/men/26.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-026',
        inStock: true,
        description: 'Parfum sportif élégant noir',
        fullDescription: 'Eau de Lacoste L.12.12 Noir est un parfum sportif-élégant, frais et moderne avec des notes nocturnes.',
        topNotes: 'Pamplemousse, Poivre',
        heartNotes: 'Violette, Iris',
        baseNotes: 'Musc, Bois de Cèdre, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/men/27.png',
            '/image/men/27.png',
            '/image/men/27.png'
        ],
        category: 'Parfums masculins',
        sku: 'PRF-027',
        inStock: true,
        description: 'Parfum gourmand lacté délicieux',
        fullDescription: 'Bianco Latte est un parfum gourmand irrésistible avec des notes lactées, vanillées et caramélisées comme un dessert italien.',
        topNotes: 'Lait, Caramel',
        heartNotes: 'Vanille, Noix de Coco',
        baseNotes: 'Musc, Bois de Santal',
        sizes: ['30ml', '50ml'],
        featured: false
    },
    'product-28': {
        id: 'product-28',
        name: 'CHANEL : COCO MADEMOISELLE',
        price: 50.00,
        originalPrice: 70.00,
        discount: 14,
        price50ml: 85.00,
        originalPrice50ml: 100.00,
        discount50ml: 15,
        images: [
            '/image/women/1.png',
            '/image/women/1.png',
            '/image/women/1.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-028',
        inStock: true,
        description: 'Parfum iconique élégant et moderne',
        fullDescription: 'Coco Mademoiselle de Chanel est un parfum iconique qui incarne l\'élégance moderne.',
        topNotes: 'Orange, Bergamote',
        heartNotes: 'Rose, Jasmin',
        baseNotes: 'Patchouli, Vétiver, Vanille',
        sizes: ['30ml', '50ml'],
        featured: true
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
        images: [
            '/image/women/2.png',
            '/image/women/2.png',
            '/image/women/2.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-029',
        inStock: true,
        description: 'Parfum séduisant et mystérieux',
        fullDescription: 'Good Girl de Carolina Herrera est une fragrance audacieuse et séduisante dans son flacon emblématique en forme de talon aiguille.',
        topNotes: 'Amande, Café',
        heartNotes: 'Tubéreuse, Jasmin Sambac',
        baseNotes: 'Cacao, Patchouli, Santal',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/3.png',
            '/image/women/3.png',
            '/image/women/3.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-030',
        inStock: true,
        description: 'Parfum floral doux et romantique',
        fullDescription: 'Tomorrow Always d\'Avon est une fragrance florale douce et romantique pour la femme moderne et optimiste.',
        topNotes: 'Pêche, Poire',
        heartNotes: 'Rose, Muguet',
        baseNotes: 'Musc, Bois de Santal',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/4.png',
            '/image/women/4.png',
            '/image/women/4.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-031',
        inStock: true,
        description: 'Parfum estival fruité et floral',
        fullDescription: 'Bombshell Summer de Victoria\'s Secret est une édition limitée estivale aux notes fruitées et florales ensoleillées.',
        topNotes: 'Framboise, Pamplemousse',
        heartNotes: 'Pivoine, Gardénia',
        baseNotes: 'Musc, Bois de Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/5.png',
            '/image/women/5.png',
            '/image/women/5.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-032',
        inStock: true,
        description: 'Parfum sensuel et envoûtant',
        fullDescription: 'Hypnotic Poison de Dior est une fragrance sensuelle et mystérieuse avec des notes amandées et vanillées envoûtantes.',
        topNotes: 'Amande, Noix de Coco',
        heartNotes: 'Jasmin, Rose',
        baseNotes: 'Vanille, Santal, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/6.png',
            '/image/women/6.png',
            '/image/women/6.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-033',
        inStock: true,
        description: 'Parfum floral frais et léger',
        fullDescription: 'Evidence d\'Yves Rocher est une fragrance florale fraîche et légère, parfaite pour le quotidien.',
        topNotes: 'Pêche, Framboise',
        heartNotes: 'Rose, Lilas',
        baseNotes: 'Bois de Santal, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/7.png',
            '/image/women/7.png',
            '/image/women/7.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-034',
        inStock: true,
        description: 'Parfum vanillé élégant et chaleureux',
        fullDescription: 'Goddess de Burberry est une fragrance vanillée élégante qui célèbre la force et la grâce féminine.',
        topNotes: 'Lavande, Mandarin',
        heartNotes: 'Vanille de Madagascar',
        baseNotes: 'Cacao, Cashmeran',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/8.png',
            '/image/women/8.png',
            '/image/women/8.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-035',
        inStock: true,
        description: 'Parfum floral boisé sophistiqué',
        fullDescription: 'Apollo de Giorgio Armani est un parfum floral-boisé sophistiqué de la collection Privée.',
        topNotes: 'Néroli, Bergamote',
        heartNotes: 'Jasmin, Rose de Mai',
        baseNotes: 'Bois de Santal, Vétiver',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/9.png',
            '/image/women/9.png',
            '/image/women/9.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-036',
        inStock: true,
        description: 'Parfum oriental épicé iconique',
        fullDescription: 'Coco de Chanel est un parfum oriental épicé iconique, riche et sophistiqué.',
        topNotes: 'Coriane, Mandarine',
        heartNotes: 'Rose, Jasmin',
        baseNotes: 'Patchouli, Vanille, Vétiver',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/10.png',
            '/image/women/10.png',
            '/image/women/10.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-037',
        inStock: true,
        description: 'Parfum floral-oud luxueux',
        fullDescription: 'Delina Exclusif de Parfums de Marly est une version plus intense et sensuelle de Delina, avec des notes d\'oud ajoutées.',
        topNotes: 'Litchi, Rhubarbe',
        heartNotes: 'Rose, Oud',
        baseNotes: 'Musc, Vétiver, Vanille',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/11.png',
            '/image/women/11.png',
            '/image/women/11.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-038',
        inStock: true,
        description: 'Parfum gourmand fruité délicieux',
        fullDescription: 'Miss Dior Chérie est un parfum gourmand-fruité joyeux et délicieux avec des notes de caramel et de fraise.',
        topNotes: 'Fraise, Framboise',
        heartNotes: 'Caramel, Popcorn',
        baseNotes: 'Patchouli, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/12.png',
            '/image/women/12.png',
            '/image/women/12.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-039',
        inStock: true,
        description: 'Édition dorée luxueuse de J\'adore',
        fullDescription: 'J\'adore L\'Or est une édition luxueuse et dorée du célèbre J\'adore, enrichie de notes plus chaudes et ambrées.',
        topNotes: 'Bergamote, Mandarine',
        heartNotes: 'Rose, Jasmin, Ylang-Ylang',
        baseNotes: 'Ambre, Patchouli, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/13.png',
            '/image/women/13.png',
            '/image/women/13.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-040',
        inStock: true,
        description: 'Parfum floral-oriental élégant',
        fullDescription: 'Le Parfum d\'Elie Saab est une fragrance florale-orientale élégante qui reflète l\'esthétique raffinée du créateur.',
        topNotes: 'Orange, Fleur d\'Oranger',
        heartNotes: 'Jasmin, Rose',
        baseNotes: 'Patchouli, Miel, Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/14.png',
            '/image/women/14.png',
            '/image/women/14.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-041',
        inStock: true,
        description: 'Parfum floral frais et joyeux',
        fullDescription: 'Flora Gorgeous Gardenia de Gucci est une fragrance florale fraîche et joyeuse centrée sur le gardénia.',
        topNotes: 'Poire Rouge, Bergamote',
        heartNotes: 'Gardénia, Frangipanier',
        baseNotes: 'Patchouli, Musc Blond',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/15.png',
            '/image/women/15.png',
            '/image/women/15.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-042',
        inStock: true,
        description: 'Parfum fruité floral estival',
        fullDescription: 'Sorbetto Rosa d\'Escada est une fragrance estivale fruitée-florale rafraîchissante comme un sorbet.',
        topNotes: 'Framboise, Cassis',
        heartNotes: 'Rose, Pivoine',
        baseNotes: 'Musc, Bois Blanc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/16.png',
            '/image/women/16.png',
            '/image/women/16.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-043',
        inStock: true,
        description: 'Version nocturne de Good Girl',
        fullDescription: 'Good Girl Midnight est une version plus mystérieuse et nocturne de Good Girl, avec des notes plus profondes et sensuelles.',
        topNotes: 'Café, Amande',
        heartNotes: 'Tubéreuse, Jasmin',
        baseNotes: 'Cacao, Patchouli, Santal',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/17.png',
            '/image/women/17.png',
            '/image/women/17.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-044',
        inStock: true,
        description: 'Parfum gourmand citronné',
        fullDescription: 'Devotion de Dolce & Gabbana est un parfum gourmand-citronné inspiré des gâteaux siciliens à la citronnelle.',
        topNotes: 'Citron, Bergamote',
        heartNotes: 'Fleur d\'Oranger, Vanille',
        baseNotes: 'Benjoin, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/18.png',
            '/image/women/18.png',
            '/image/women/18.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-045',
        inStock: true,
        description: 'Parfum floral fruité romantique',
        fullDescription: 'Mon Paris de Yves Saint Laurent est une déclaration d\'amour à la ville de Paris, romantique et passionnée.',
        topNotes: 'Fraise, Framboise',
        heartNotes: 'Datura, Rose Blanche',
        baseNotes: 'Patchouli, Musc Ambré',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/19.png',
            '/image/women/19.png',
            '/image/women/19.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-046',
        inStock: true,
        description: 'Parfum floral blanc moderne',
        fullDescription: 'My Way de Giorgio Armani est un parfum floral blanc moderne qui célèbre l\'esprit d\'aventure et de découverte.',
        topNotes: 'Bergamote, Orange',
        heartNotes: 'Tubéreuse, Jasmin',
        baseNotes: 'Bois de Cèdre, Vanille de Madagascar',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/20.png',
            '/image/women/20.png',
            '/image/women/20.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-047',
        inStock: true,
        description: 'Version intense d\'Olympéa',
        fullDescription: 'Olympéa Intense de Paco Rabanne est une version plus concentrée et durable du parfum original, plus sensuelle.',
        topNotes: 'Mandarine, Gingembre',
        heartNotes: 'Fleur de Sel, Jasmin',
        baseNotes: 'Ambre Gris, Bois de Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/21.png',
            '/image/women/21.png',
            '/image/women/21.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-048',
        inStock: true,
        description: 'Parfum floral musqué contemporain',
        fullDescription: 'Paradoxe de Prada est un parfum floral-musqué contemporain qui explore les dualités de la personnalité féminine.',
        topNotes: 'Mandarine, Néroli',
        heartNotes: 'Fleur d\'Oranger, Jasmin',
        baseNotes: 'Ambre, Musc Blond',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/22.png',
            '/image/women/22.png',
            '/image/women/22.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-049',
        inStock: true,
        description: 'Parfum vanillé cashmeran doux',
        fullDescription: 'This Is Her! de Zadig & Voltaire est un parfum vanillé-cashmeran doux et réconfortant, comme un pull en cachemire.',
        topNotes: 'Bergamote, Poivre Rose',
        heartNotes: 'Fève Tonka, Vanille',
        baseNotes: 'Cashmeran, Musc, Santal',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/23.png',
            '/image/women/23.png',
            '/image/women/23.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-050',
        inStock: true,
        description: 'Parfum floral fruité joyeux',
        fullDescription: 'Super Love Sexy Angel de Flying Goddess est un parfum floral-fruité joyeux et énergisant.',
        topNotes: 'Fruits Rouges, Poire',
        heartNotes: 'Rose, Muguet',
        baseNotes: 'Vanille, Musc, Bois Blanc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/24.png',
            '/image/women/24.png',
            '/image/women/24.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-051',
        inStock: true,
        description: 'Version passionnée de Sì',
        fullDescription: 'Sì Passione de Giorgio Armani est une version plus intense et passionnée du parfum Sì original.',
        topNotes: 'Poire, Cassis',
        heartNotes: 'Rose, Jasmin',
        baseNotes: 'Vanille, Patchouli, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/25.png',
            '/image/women/25.png',
            '/image/women/25.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-052',
        inStock: true,
        description: 'Parfum ambré floral nocturne',
        fullDescription: 'Ambre Nuit de Christian Dior est un parfum ambré-floral nocturne et sensuel de la collection Privée.',
        topNotes: 'Bergamote, Raisin',
        heartNotes: 'Rose, Épices',
        baseNotes: 'Ambre Gris, Patchouli, Bois de Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/26.png',
            '/image/women/26.png',
            '/image/women/26.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-053',
        inStock: true,
        description: 'Parfum féminin sportif élégant',
        fullDescription: 'Eau de Lacoste L.12.12 Noir est un parfum féminin sportif-élégant, frais et moderne.',
        topNotes: 'Pamplemousse, Poire',
        heartNotes: 'Muguet, Rose',
        baseNotes: 'Musc, Bois de Cèdre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/women/27.png',
            '/image/women/27.png',
            '/image/women/27.png'
        ],
        category: 'Parfums féminins',
        sku: 'PRF-054',
        inStock: true,
        description: 'Parfum floral aromatique libre',
        fullDescription: 'Libre de Yves Saint Laurent est un parfum floral-aromatique qui célèbre la liberté et l\'audace féminine.',
        topNotes: 'Lavande, Mandarine',
        heartNotes: 'Fleur d\'Oranger, Jasmin',
        baseNotes: 'Musc Ambré, Vanille de Madagascar',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/1.png',
            '/image/both/1.png',
            '/image/both/1.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-055',
        inStock: true,
        description: 'Parfum oriental intense avec des notes d\'oud',
        fullDescription: 'Oud Mood de Lattafa est un parfum unisexe qui capte l\'essence mystérieuse de l\'oud avec des nuances boisées et épicées.',
        topNotes: 'Safran, Rose',
        heartNotes: 'Oud, Bois de Santal',
        baseNotes: 'Ambre, Musc, Vanille',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/2.png',
            '/image/both/2.png',
            '/image/both/2.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-056',
        inStock: true,
        description: 'Parfum luxueux aux notes lactées et vanillées',
        fullDescription: 'Althaïr de Parfums de Marly est une création sophistiquée mariant des notes lactées crémeuses avec des accents vanillés et des nuances boisées chaleureuses.',
        topNotes: 'Lait, Amande',
        heartNotes: 'Vanille, Iris',
        baseNotes: 'Bois de Cèdre, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/3.png',
            '/image/both/3.png',
            '/image/both/3.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-057',
        inStock: true,
        description: 'Parfum boisé oriental envoûtant',
        fullDescription: 'Amerat Al Arab d\'Asdaaf est un parfum boisé-oriental captivant. Des notes épicées et boisées créent un sillage mystérieux et durable.',
        topNotes: 'Poivre, Safran',
        heartNotes: 'Rose, Oud',
        baseNotes: 'Bois de Cèdre, Ambre, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/4.png',
            '/image/both/4.png',
            '/image/both/4.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-058',
        inStock: true,
        description: 'Parfum vanillé épicé et sophistiqué',
        fullDescription: 'Ani de Nishane est un parfum vanillé-épicé complexe. La vanille de Madagascar rencontre le gingembre et la bergamote sur un fond de patchouli et de bois.',
        topNotes: 'Bergamote, Gingembre',
        heartNotes: 'Vanille de Madagascar, Heliotrope',
        baseNotes: 'Patchouli, Bois de Santal, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/5.png',
            '/image/both/5.png',
            '/image/both/5.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-059',
        inStock: true,
        description: 'Parfum vanillé crémeux et réconfortant',
        fullDescription: 'Vanilla d\'Elysia est une interprétation moderne de la vanille. Douce et crémeuse avec des touches de fève tonka et d\'ambre pour une senteur réconfortante.',
        topNotes: 'Vanille Bourbon',
        heartNotes: 'Fève Tonka, Cacao',
        baseNotes: 'Ambre, Musc Blanc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/6.png',
            '/image/both/6.png',
            '/image/both/6.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-060',
        inStock: true,
        description: 'Parfum ambré-saffroné iconique',
        fullDescription: 'Baccarat Rouge 540 est un parfum iconique de Maison Francis Kurkdjian. Un accord unique de safran et de jasmin s\'harmonise avec le bois d\'ambergris et le cèdre.',
        topNotes: 'Safran, Jasmin',
        heartNotes: 'Bois d\'Ambre',
        baseNotes: 'Bois de Cèdre, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/7.png',
            '/image/both/7.png',
            '/image/both/7.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-061',
        inStock: true,
        description: 'Parfum oud moderne et puissant',
        fullDescription: 'Oud for Greatness d\'Initio réinvente l\'oud traditionnel avec une approche moderne. Un mélange d\'oud de qualité supérieure, de safran et de patchouli.',
        topNotes: 'Safran, Poivre Noir',
        heartNotes: 'Oud, Rose',
        baseNotes: 'Patchouli, Ambre Gris',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/8.png',
            '/image/both/8.png',
            '/image/both/8.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-062',
        inStock: true,
        description: 'Parfum oriental gourmand et boisé',
        fullDescription: 'Khamrah de Lattafa est un parfum oriental gourmand qui mêle des notes de datte, de cannelle et de vanille sur un fond de bois précieux.',
        topNotes: 'Datte, Cannelle',
        heartNotes: 'Tonka, Vanille',
        baseNotes: 'Bois de Santal, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/9.png',
            '/image/both/9.png',
            '/image/both/9.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-063',
        inStock: true,
        description: 'Parfum tonka-oud intense',
        fullDescription: 'Arabians Tonka de Montale associe la douceur de la fève tonka à la richesse de l\'oud, créant un parfum oriental intense et durable.',
        topNotes: 'Fève Tonka, Vanille',
        heartNotes: 'Oud, Rose',
        baseNotes: 'Ambre, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/10.png',
            '/image/both/10.png',
            '/image/both/10.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-064',
        inStock: true,
        description: 'Parfum fruité-crémeux féminin',
        fullDescription: 'Yara de Lattafa est un parfum fruité et crémeux qui mélange des notes de fruits rouges, de vanille et de musc pour une senteur douce et enveloppante.',
        topNotes: 'Fruits Rouges, Bergamote',
        heartNotes: 'Vanille, Lait de Coco',
        baseNotes: 'Musc, Bois de Santal',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/11.png',
            '/image/both/11.png',
            '/image/both/11.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-065',
        inStock: true,
        description: 'Parfum aquatique boisé mystérieux',
        fullDescription: 'Black Aqua de Montale est un parfum aquatique-oud moderne. Des notes marines fraîches rencontrent la chaleur de l\'oud et du bois pour un contraste unique.',
        topNotes: 'Notes Marines, Poivre',
        heartNotes: 'Oud, Rose',
        baseNotes: 'Bois de Cèdre, Ambre',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/12.png',
            '/image/both/12.png',
            '/image/both/12.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-066',
        inStock: true,
        description: 'Parfum chypré-fruité vert',
        fullDescription: 'Hacivat de Nishane est un parfum chypré-fruité moderne. Un accord vibrant d\'ananas et de pamplemousse se mêle à des notes de patchouli et de mousse de chêne.',
        topNotes: 'Ananas, Pamplemousse',
        heartNotes: 'Patchouli, Jasmin',
        baseNotes: 'Mousse de Chêne, Musc',
        sizes: ['30ml', '50ml'],
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
        images: [
            '/image/both/13.png',
            '/image/both/13.png',
            '/image/both/13.png'
        ],
        category: 'Parfums unisexes',
        sku: 'PRF-067',
        inStock: true,
        description: 'Parfum floral-ambré luxueux',
        fullDescription: 'Luxury de Celeste est un parfum floral-ambré opulent. Un bouquet de fleurs blanches s\'enroule autour de notes d\'ambre et de bois précieux.',
        topNotes: 'Bergamote, Néroli',
        heartNotes: 'Jasmin, Tubéreuse',
        baseNotes: 'Ambre, Vanille, Bois de Santal',
        sizes: ['30ml', '50ml'],
        featured: false
    },
    'featur-1': {
    id: 'featur-1',
    name: 'CDIOR : HYPNOTIC POISON',
    brand: 'MIYABI',
    price: 50.00,
    originalPrice: null,
    discount: null,
    price50ml: null,
    originalPrice50ml: null,
    discount50ml: null,
    images: [
        '/image/featur/1.png'
    ],
    category: 'Parfums',
    sku: 'PRF-F001',
    inStock: true,
    description: 'Parfum Dior Hypnotic Poison',
    fullDescription: 'Hypnotic Poison de Dior est un parfum emblématique aux notes orientales vanillées, créant un sillage envoûtant et sensuel.',
    topNotes: 'Amande, Noix de Coco',
    heartNotes: 'Jasmin, Tuberose',
    baseNotes: 'Vanille, Musc, Bois de Santal',
    sizes: ['Standard'],
    featured: true
},

'featur-2': {
    id: 'featur-2',
    name: 'GUCCI : FLORA GORGEOUS GARDENIA',
    brand: 'MIYABI',
    price: 50.00,
    originalPrice: null,
    discount: null,
    price50ml: null,
    originalPrice50ml: null,
    discount50ml: null,
    images: [
        '/image/featur/2.png'
    ],
    category: 'Parfums',
    sku: 'PRF-F002',
    inStock: true,
    description: 'Parfum Gucci Flora Gorgeous Gardenia',
    fullDescription: 'Flora Gorgeous Gardenia de Gucci est un parfum floral pétillant qui capture l\'essence du gardénia avec des touches de poire et de fleur d\'oranger.',
    topNotes: 'Poire Rouge, Fleur d\'Oranger',
    heartNotes: 'Gardénia, Frangipanier',
    baseNotes: 'Patchouli, Musc Blanc',
    sizes: ['Standard'],
    featured: true
},

'featur-3': {
    id: 'featur-3',
    name: 'BVLGARI : MAN WOOD ESSENCE',
    brand: 'MIYABI',
    price: 60.00,
    originalPrice: null,
    discount: null,
    price50ml: null,
    originalPrice50ml: null,
    discount50ml: null,
    images: [
        '/image/featur/3.png'
    ],
    category: 'Parfums masculins',
    sku: 'PRF-F003',
    inStock: true,
    description: 'Parfum masculin Bvlgari Wood Essence',
    fullDescription: 'Man Wood Essence de Bvlgari est un parfum boisépicé qui mélange des notes de cèdre, vétiver et cardamome pour une fragrance masculine moderne.',
    topNotes: 'Cardamome, Poivre Rose',
    heartNotes: 'Cèdre, Vétiver',
    baseNotes: 'Ambre, Musc, Bois de Gaiac',
    sizes: ['Standard'],
    featured: true
},

'featur-4': {
    id: 'featur-4',
    name: 'JEAN PAUL GAULTIER : LE MALE',
    brand: 'MIYABI',
    price: 70.00,
    originalPrice: null,
    discount: null,
    price50ml: null,
    originalPrice50ml: null,
    discount50ml: null,
    images: [
        '/image/featur/4.png'
    ],
    category: 'Parfums masculins',
    sku: 'PRF-F004',
    inStock: true,
    description: 'Parfum iconique Jean Paul Gaultier Le Male',
    fullDescription: 'Le Male de Jean Paul Gaultier est un parfum masculin iconique aux notes fraîches de menthe et lavande, avec un fond vanillé et ambré.',
    topNotes: 'Menthe, Lavande, Bergamote',
    heartNotes: 'Cannelle, Carvi',
    baseNotes: 'Vanille, Ambre, Bois de Cèdre',
    sizes: ['Standard'],
    featured: true
}

    // CHANGE: Add all your products here with complete details
};

// Current product being viewed
// PRODUCT DETAIL SCRIPT - With Dynamic Size/Price Switching

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Global variables for current selection
let currentProductId = null;
let selectedSize = '30ml'; // Default size
let selectedPrice = 0;
let selectedOriginalPrice = 0;
let selectedDiscount = 0;

// Initialize product detail page
document.addEventListener('DOMContentLoaded', function() {
    currentProductId = getProductIdFromURL();
    
    if (currentProductId && products[currentProductId]) {
        loadProductDetails(currentProductId);
        loadRelatedProducts(currentProductId);
    } else {
        // Product not found
        document.getElementById('productTitle').textContent = 'Produit non trouvé';
        document.body.innerHTML = '<div style="text-align:center; padding:100px;"><h1>Produit non trouvé</h1><a href="catalog.html">Retour au catalogue</a></div>';
    }
});

// Load product details
function loadProductDetails(productId) {
    const product = products[productId];
    
    if (!product) return;
    
    
    // Set default values (30ml)
    selectedSize = '30ml';
    selectedPrice = product.price;
    selectedOriginalPrice = product.originalPrice || 0;
    selectedDiscount = product.discount || 0;
    
    // Update page title
    document.title = product.name + ' - MIYABI';
    
    // Update breadcrumb
    document.getElementById('breadcrumbProduct').textContent = product.name;
    
    // Update product info
        // Update product info
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productSku').textContent = product.id.toUpperCase();
    
    // === ADD THIS CODE RIGHT HERE ===
    // UPDATE DESCRIPTION AND NOTES
    document.getElementById('productDescription').innerHTML = `<p>${product.description}</p>`;
    document.getElementById('fullDescription').innerHTML = `<p>${detailedProducts[product.id].fullDescription}</p>`;   
    document.getElementById('topNotes').textContent = product.topNotes || 'Non spécifié';
    document.getElementById('heartNotes').textContent = product.heartNotes || 'Non spécifié';
    document.getElementById('baseNotes').textContent = product.baseNotes || 'Non spécifié';
    // === END OF ADDED CODE ===
    
    // Update price (30ml by default)
    updatePriceDisplay();
    
    // Update main image
    document.getElementById('mainImage').src = product.image;
    document.getElementById('mainImage').alt = product.name;
    
    // Generate size buttons
    generateSizeButtons(product);
    
    // Load thumbnails (if you have multiple images)
    loadThumbnails(product);
}

// Generate size buttons
function generateSizeButtons(product) {
    const sizeOptionsContainer = document.getElementById('sizeOptions');
    
    if (!sizeOptionsContainer) return;
    
    let html = '';
    
    // 30ml button (always exists)
    html += `
        <button class="size-btn active" onclick="selectSize('30ml', '${product.id}')">
            30ML
        </button>
    `;
    
    // 50ml button (check if price exists)
    if (product.price50ml) {
        html += `
            <button class="size-btn" onclick="selectSize('50ml', '${product.id}')">
                50ML
            </button>
        `;
    }
    
    sizeOptionsContainer.innerHTML = html;
}

// Select size and update price
function selectSize(size, productId) {
    const product = products[productId];
    
    if (!product) return;
    
    // Update selected size
    selectedSize = size;
    
    // Get price based on size
    if (size === '30ml') {
        selectedPrice = product.price;
        selectedOriginalPrice = product.originalPrice || 0;
        selectedDiscount = product.discount || 0;
    } else if (size === '50ml' && product.price50ml) {
        selectedPrice = product.price50ml;
        selectedOriginalPrice = product.originalPrice50ml || 0;
        selectedDiscount = product.discount50ml || 0;
    }
    
    // Update button styling
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update price display
    updatePriceDisplay();
}

// Update price display
function updatePriceDisplay() {
    const priceElement = document.getElementById('productPrice');
    const originalPriceElement = document.getElementById('originalPrice');
    const discountBadgeElement = document.getElementById('discountBadge');
    
    // Update current price
    if (priceElement) {
        priceElement.textContent = selectedPrice.toFixed(2) + ' dh';
    }
    
    // Update original price (strikethrough)
    if (originalPriceElement) {
        if (selectedOriginalPrice > 0) {
            originalPriceElement.textContent = selectedOriginalPrice.toFixed(2) + ' dh';
            originalPriceElement.style.display = 'inline';
        } else {
            originalPriceElement.style.display = 'none';
        }
    }
    
    // Update discount badge
    if (discountBadgeElement) {
        if (selectedDiscount > 0) {
            discountBadgeElement.textContent = '-' + selectedDiscount + '%';
            discountBadgeElement.style.display = 'inline-block';
        } else {
            discountBadgeElement.style.display = 'none';
        }
    }
}

// Add to cart from product detail page
function addToCartFromDetail() {
    const product = products[currentProductId];
    
    if (!product) {
        console.error('Product not found');
        return;
    }
    
    // Get quantity
    const qtyInput = document.getElementById('productQty');
    const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
    
    // Create cart item with selected size and price
    const cartItem = {
        id: product.id,
        name: product.name + ' (' + selectedSize + ')', // Add size to name
        price: selectedPrice,
        image: product.image,
        quantity: quantity,
        size: selectedSize // Store size separately
    };
    
    // Check if same product + size already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.id === product.id && item.size === selectedSize
    );
    
    if (existingItemIndex > -1) {
        // Update quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item
        cart.push(cartItem);
    }
    
    // Save cart
    saveCart();
    
    // Update displays
    updateCartDisplay();
    updateCartCount();
    
    // Show cart sidebar
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('active');
    }
    
    // Show notification
    if (typeof showNotification === 'function') {
        showNotification('Produit ajouté au panier');
    }
}

// Load thumbnails (if you have multiple images per product)
function loadThumbnails(product) {
    const thumbnailsContainer = document.getElementById('thumbnailImages');
    
    if (!thumbnailsContainer) return;
    
    // For now, just show the main image as thumbnail
    // You can expand this if you have multiple images per product
    thumbnailsContainer.innerHTML = `
        <div class="thumbnail active">
            <img src="${product.image}" alt="${product.name}">
        </div>
    `;
}

// Load related products (same category)
function loadRelatedProducts(productId) {
    const currentProduct = products[productId];
    const relatedGrid = document.getElementById('relatedProductsGrid');
    
    if (!relatedGrid || !currentProduct) return;
    
    // Get products from same category (max 4)
    const relatedProducts = Object.values(products)
        .filter(p => p.category === currentProduct.category && p.id !== productId)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        relatedGrid.innerHTML = '<p>Aucun produit similaire trouvé.</p>';
        return;
    }
    
    // Generate HTML
    let html = '';
    relatedProducts.forEach(product => {
        html += `
            <div class="product-card">
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
            </div>
        `;
    });
    
    relatedGrid.innerHTML = html;
}

// Tab switching
function switchTab(tabName) {
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Remove active class from all panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Show corresponding panel
    const panel = document.getElementById(tabName + 'Tab');
    if (panel) {
        panel.classList.add('active');
    }
}

// Share product
function shareProduct(platform) {
    const product = products[currentProductId];
    if (!product) return;
    
    const url = window.location.href;
    const text = `Découvrez ${product.name} sur MIYABI`;
    
    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(url).then(() => {
                alert('Lien copié!');
            });
            break;
    }
}

// Make functions globally available
window.selectSize = selectSize;
window.addToCartFromDetail = addToCartFromDetail;
window.switchTab = switchTab;
window.shareProduct = shareProduct;
