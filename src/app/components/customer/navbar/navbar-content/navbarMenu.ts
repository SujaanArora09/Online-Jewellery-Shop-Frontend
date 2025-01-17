export const navigation = {
  women: {
    id: 'women',
    name: 'Women',
    featured: [
      {
        name: 'New Arrivals',
        href: '/women/new-arrivals',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        name: 'Basic Tees',
        href: '/women/basic-tees',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      },
    ],
    sections: [
      {
        id: 'jewellery',
        name: 'Jewellery Type',
        items: [
          { name: 'Earrings', id: 'earrings', href: '/women/jewellery/earrings' },
          { name: 'Bangles', id: 'bangles', href: '/women/jewellery/bangles' },
          { name: 'Necklace', id: 'necklace', href: '/women/jewellery/necklace' },
          { name: 'Nose Pin', id: 'nosepin', href: '/women/jewellery/nosepin' },
          { name: 'Bracelet', id: 'bracelet', href: '/women/jewellery/bracelet' },
          { name: 'Ring', id: 'ring', href: '/women/jewellery/ring' },
          { name: 'Pendant', id: 'pendant', href: '/women/jewellery/pendant' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Tanishq', id: 'tanishq', href: '/women/brand/tanishq' },
          { name: 'Giva', id: 'giva', href: '/women/brand/giva' },
          { name: 'Senco', id: 'senco', href: '/women/brand/senco' },
          { name: 'Carat Lane', id: 'caratlane', href: '/women/brand/caratlane' },
        ],
      },
    ],
  },
  men: {
    id: 'men',
    name: 'Men',
    featured: [
      {
        name: 'New Arrivals',
        href: '/men/new-arrivals',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
      },
      {
        name: 'Artwork Tees',
        href: '/men/artwork-tees',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        imageAlt:
          'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
      },
    ],
    sections: [
      {
        id: 'jewellery',
        name: 'Jewellery Type',
        items: [
          { name: 'Chains', id: 'chains', href: '/men/jewellery/chains' },
          { name: 'Bracelet', id: 'bracelet', href: '/men/jewellery/bracelet' },
          { name: 'Ring', id: 'ring', href: '/men/jewellery/ring' },
          { name: 'Stud', id: 'stud', href: '/men/jewellery/stud' },
          { name: 'Kada', id: 'kada', href: '/men/jewellery/kada' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Tanishq', id: 'tanishq', href: '/men/brand/tanishq' },
          { name: 'Giva', id: 'giva', href: '/men/brand/giva' },
          { name: 'Senco', id: 'senco', href: '/men/brand/senco' },
          { name: 'Carat Lane', id: 'caratlane', href: '/men/brand/caratlane' },
        ],
      },
    ],
  },
};

const categories = [
  {
    id: 'women',
    name: 'Women',
    featured: [
      {
        name: 'New Arrivals',
        href: '/women/new-arrivals',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        name: 'Basic Tees',
        href: '/women/basic-tees',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      },
    ],
    sections: [
      {
        id: 'jewellery',
        name: 'Jewellery Type',
        items: [
          { name: 'Earrings', id: 'earrings', href: '/women/jewellery/earrings' },
          { name: 'Bangles', id: 'bangles', href: '/women/jewellery/bangles' },
          { name: 'Necklace', id: 'necklace', href: '/women/jewellery/necklace' },
          { name: 'Nose Pin', id: 'nosepin', href: '/women/jewellery/nosepin' },
          { name: 'Bracelet', id: 'bracelet', href: '/women/jewellery/bracelet' },
          { name: 'Ring', id: 'ring', href: '/women/jewellery/ring' },
          { name: 'Pendant', id: 'pendant', href: '/women/jewellery/pendant' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Tanishq', id: 'tanishq', href: '/women/brand/tanishq' },
          { name: 'Giva', id: 'giva', href: '/women/brand/giva' },
          { name: 'Senco', id: 'senco', href: '/women/brand/senco' },
          { name: 'Carat Lane', id: 'caratlane', href: '/women/brand/caratlane' },
        ],
      },
    ],
  },
  {
    id: 'men',
    name: 'Men',
    featured: [
      {
        name: 'New Arrivals',
        href: '/men/new-arrivals',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
      },
      {
        name: 'Artwork Tees',
        href: '/men/artwork-tees',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        imageAlt:
          'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
      },
    ],
    sections: [
      {
        id: 'jewellery',
        name: 'Jewellery Type',
        items: [
          { name: 'Chains', id: 'chains', href: '/men/jewellery/chains' },
          { name: 'Bracelet', id: 'bracelet', href: '/men/jewellery/bracelet' },
          { name: 'Ring', id: 'ring', href: '/men/jewellery/ring' },
          { name: 'Stud', id: 'stud', href: '/men/jewellery/stud' },
          { name: 'Kada', id: 'kada', href: '/men/jewellery/kada' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Tanishq', id: 'tanishq', href: '/men/brand/tanishq' },
          { name: 'Giva', id: 'giva', href: '/men/brand/giva' },
          { name: 'Senco', id: 'senco', href: '/men/brand/senco' },
          { name: 'Carat Lane', id: 'caratlane', href: '/men/brand/caratlane' },
        ],
      },
    ],
  },
];