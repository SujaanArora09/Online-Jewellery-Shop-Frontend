export const navigation = {
 
    women:{
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'jewellerytype',
          name: 'Jewellery Type',
          items: [
            { name: 'Earrings', id:"earrings", href: `{women/jewellerytype/earrings}` },
            { name: 'Bangles', id:"bangles", href: '#' },
            { name: 'Necklace', id: 'necklace' },
            { name: 'Nose Pin', id: 'nosepin' },
            { name: 'Bracelet', id: 'bracelet' },
            { name: 'Ring', id: 'ring' },
            { name: 'Pendant', id: 'pendant' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Tanishq', id: '#' },
            { name: 'Giva', id: '#' },
            { name: 'Senco', id: '#' },
            { name: 'Carat Lane', id: '#' },
          ],
        },
      ],
    },
    men:{
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'jewellerytype',
          name: 'Jewellery Type',
          items: [
            { name: 'Chains', id: 'chains' },
            { name: 'Bracelet', id: 'bracelet' },
            { name: 'Ring', id: 'ring' },
            { name: 'Stud', id: '#' },
            { name: 'Kada', id: 'kada' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Tanishq', id: '#' },
            { name: 'Giva', id: '#' },
            { name: 'Senco', id: '#' },
            { name: 'Carat Lane', id: '#' },
          ],
        },
      ],
    },

  
}

const categories = [
  {
    id: 'women',
    name: 'Women',
    featured: [
      {
        name: 'New Arrivals',
        href: '/',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        name: 'Basic Tees',
        href: '/',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      },
    ],
    sections: [
      {
        id: 'jewellerytype',
        name: 'Jewellery Type',
        items: [
          { name: 'Earrings', id:"earrings", href: `{women/jewellerytype/earrings}` },
            { name: 'Bangles', id:"bangles", href: '#' },
            { name: 'Necklace', id: 'necklace' },
            { name: 'Nose Pin', id: 'nosepin' },
            { name: 'Bracelet', id: 'bracelet' },
            { name: 'Ring', id: 'ring' },
            { name: 'Pendant', id: 'pendant' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Tanishq', id: '#' },
            { name: 'Giva', id: '#' },
            { name: 'Senco', id: '#' },
            { name: 'Carat Lane', id: '#' },
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
        id: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        },
      {
        name: 'Artwork Tees',
        id: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        },
    ],
    sections: [
      {
        id: 'jewellerytype',
        name: 'Jewellery Type',
        items: [
            { name: 'Chains', id: 'chains' },
            { name: 'Bracelet', id: 'bracelet' },
            { name: 'Ring', id: 'ring' },
            { name: 'Stud', id: '#' },
            { name: 'Kada', id: 'kada' },
          
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Tanishq', id: '#' },
            { name: 'Giva', id: '#' },
            { name: 'Senco', id: '#' },
            { name: 'Carat Lane', id: '#' },
        ],
      },
    ],
  },
]


export const womenCategory={
  id: 'women',
  name: 'Women',
  featured: [
    {
      name: 'New Arrivals',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
      imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    },
    {
      name: 'Basic Tees',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
      imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    },
  ],
  sections: [
    {
      id: 'jewellerytype',
      name: 'Jewellery Type',
      items: [
        { name: 'Earrings', id:"earrings", href: `{women/jewellerytype/earrings}` },
            { name: 'Bangles', id:"bangles", href: '#' },
            { name: 'Necklace', id: 'necklace' },
            { name: 'Nose Pin', id: 'nosepin' },
            { name: 'Bracelet', id: 'bracelet' },
            { name: 'Ring', id: 'ring' },
            { name: 'Pendant', id: 'pendant' },
      ],
    },
    {
      id: 'brands',
      name: 'Brands',
      items: [
        { name: 'Tanishq', id: '#' },
            { name: 'Giva', id: '#' },
            { name: 'Senco', id: '#' },
            { name: 'Carat Lane', id: '#' },
      ],
    },
  ],
}
export const menCategory={
  id: 'men',
  name: 'Men',
  featured: [
    {
      name: 'New Arrivals',
      id: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
      imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
    },
    {
      name: 'Artwork Tees',
      id: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
      imageAlt:
        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
    },
  ],
  sections: [
    {
      id: 'jewellerytype',
      name: 'Jewellery Type',
      items: [
        { name: 'Chains', id: 'chains' },
            { name: 'Bracelet', id: 'bracelet' },
            { name: 'Ring', id: 'ring' },
            { name: 'Stud', id: '#' },
            { name: 'Kada', id: 'kada' },
        
      ],
    },
    {
      id: 'brands',
      name: 'Brands',
      items: [
        { name: 'Tanishq', id: '#' },
            { name: 'Giva', id: '#' },
            { name: 'Senco', id: '#' },
            { name: 'Carat Lane', id: '#' },
      ],
    },
  ],
}

