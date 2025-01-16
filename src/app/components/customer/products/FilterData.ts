export const material = [
    "Gold",
    "Diamond",
    "Platinum",
    "Oxidised",
    "Silver",
    "Titanium",
  ];
  
  export const filters = [
    {
      id: "material",
      name: "Material",
      options: [
        { value: "gold", label: "Gold" },
        { value: "diamond", label: "Diamond" },
        { value: "platinum", label: "Platinum" },
        { value: "oxidised", label: "Oxidised" },
        { value: "silver", label: "Silver" },
        { value: "titanium", label: "Titanium" },
      ],
    },
  
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
      ],
    },
    
  ];
  
  export const singleFilter=[
    {
      id: "price",
      name: "Price",
      options: [
        { value: "5000-10000", label: "₹5000 To ₹10000" },
        { value: "10000-20000", label: "₹10000 To ₹20000" },
        { value: "20000-50000", label: "₹20000 To ₹50000" },
        { value: "50000-100000", label: "₹50000 To ₹100000" },
        { value: "100000-500000", label: "₹100000 To ₹500000" },
      ],
    },
    {
      id: "disccout",
      name: "DISCOUNT RANGE",
      options: [
        {
          value: "10",
          label: "10% And Above",
        },
        { value: "20", label: "20% And Above" },
        { value: "30", label: "30% And Above" },
        { value: "40", label: "40% And Above" },
        { value: "50", label: "50% And Above" },
        { value: "60", label: "60% And Above" },
        { value: "70", label: "70% And Above" },
        { value: "80", label: "80% And Above" },
      ],
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: "in_stock", label: "In Stock" },
        { value: "out_of_stock", label: "Out Of Stock" },
        
      ],
    },
  ]
  
  export const sortOptions = [
    
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
  ];
  