/*
  Tip Top Willow's site data
  Edit this file first when menu, hours, prices, photos, or ordering links change.
*/

window.RESTAURANT_DATA = {
  name: "Tip Top Willow’s",
  legalName: "Tip Top Willow’s Restaurant",
  tagline: "Authentic Caribbean Flavor • Made Fresh Daily",
  shortPitch:
    "Jamaican and Guyanese-inspired plates made fresh daily in Jonesboro, GA — oxtails, curry goat, jerk chicken, rice & peas, plantains, and more.",
  phoneDisplay: "(470) 478-7579",
  phoneHref: "tel:+14704787579",
  address: "8514 GA-85, Jonesboro, GA 30238",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Tip+Top+Willows+8514+GA-85+Jonesboro+GA+30238",
  email: "",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "11:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 8:00 PM" },
    { day: "Thursday", time: "11:00 AM – 8:00 PM" },
    { day: "Friday", time: "11:00 AM – 8:00 PM" },
    { day: "Saturday", time: "11:00 AM – 8:00 PM" },
    { day: "Sunday", time: "11:00 AM – 8:00 PM" }
  ],
  hoursNote:
    "Confirm Sunday closing before launch. Uber Eats currently shows Sunday as 11:00 AM – 7:00 PM while the existing site footer says 11:00 AM – 8:00 PM.",
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/"
  },
  orderLinks: {
    uberEats:
      "https://www.ubereats.com/store/tip-top-willows/LrGp_W-ySnG0xHaSAXHyNQ",
    doorDash:
      "https://www.doordash.com/store/tip-top-willows-jonesboro-24079370/16401975/"
  },
  images: {
    hero:
      "https://images.squarespace-cdn.com/content/v1/69b6f4cfec213049fe2f19e8/9ee262c2-6c73-48e9-9e89-43e153d3b84a/1.jpg",
    storefront:
      "https://images.squarespace-cdn.com/content/v1/69b6f4cfec213049fe2f19e8/a713f513-992e-41a4-bafe-68dea046afb9/5D6145BD-183B-41C8-AE5C-89B3E0A63BAA.jpeg",
    curryGoat:
      "https://images.squarespace-cdn.com/content/v1/69b6f4cfec213049fe2f19e8/e522f1ad-c48a-457d-aba4-df76e68b11c4/Firefly_GeminiFlash_replace%2Bthe%2Bfood%2Bon%2Bthe%2Bplate%2Bto%2Bcurry%2Bgoat%2C%2Brice%2Band%2Bbeans%2C%2Bcabbage%2C%2B2%2Bplantains%2C%2Bfu%2B890270.png",
    oxtails:
      "https://images.squarespace-cdn.com/content/v1/69b6f4cfec213049fe2f19e8/8fd29bf1-1a20-4c07-a530-2a20d5e8a3b2/Firefly_GeminiFlash_change%2Bthe%2Bfood%2Bon%2Bthe%2Bplate%2Bto%2Boxtails%2C%2Brice%2Band%2Bbeans%2C%2Bplantains%2B486018.png",
    jerkChicken:
      "https://images.squarespace-cdn.com/content/v1/69b6f4cfec213049fe2f19e8/1e69d8bf-5ccc-4feb-8209-2d7cb1628210/Firefly_GeminiFlash_add%2Bjerk%2Bsauce%2Bevenly%2Bto%2Bthe%2Bchicken%2B486018.png"
  },
  heroBadges: ["Family-Owned", "Authentic Caribbean", "Made Fresh"],
  featureSpecial: {
    eyebrow: "Today’s Special",
    title: "Chef’s Jerk Combo",
    price: "$18",
    description:
      "Jerk chicken served with oxtail gravy, rice & peas, and steamed cabbage."
  },
  optionalPromo: {
    enabled: false,
    title: "Lunch Special",
    price: "$8.99",
    description: "1 meat + 2 sides. Turn this on only if the restaurant confirms it is active."
  },
  story:
    "Tip Top Willow’s began with family and the rich culinary traditions of Jamaica and Guyana. Guided by generations of recipes and authentic spices, every dish is made with care, pride, and bold Caribbean flavor. We believe great food brings people together, creating moments of connection, comfort, and joy.",
  favorites: [
    {
      name: "Curry Goat",
      description: "Rich, aromatic curry simmered with tender goat and island spices.",
      imageKey: "curryGoat"
    },
    {
      name: "Oxtails",
      description: "Slow-braised oxtails in deep, savory gravy with butter beans.",
      imageKey: "oxtails"
    },
    {
      name: "Jerk Chicken",
      description: "Grilled with bold Caribbean jerk seasoning and smoky flavor.",
      imageKey: "jerkChicken"
    }
  ],
  menu: [
    {
      category: "Lunch Favorites",
      note: "Small • Medium • Large where available",
      items: [
        {
          name: "Jerk Chicken",
          price: "$14.75 • $16.75 • $18.75",
          description: "Grilled chicken marinated in traditional Caribbean jerk spices."
        },
        {
          name: "Brown Stew Chicken",
          price: "$14.75 • $16.75 • $18.75",
          description: "Slow-braised chicken in rich island gravy with onions and peppers."
        },
        {
          name: "Curry Chicken",
          price: "$14.75 • $16.75 • $18.75",
          description: "Tender chicken simmered in a warm Caribbean curry sauce."
        },
        {
          name: "Curry Goat",
          price: "$23.50 • $27.50",
          description: "Slow-cooked goat in bold Caribbean curry spices and herbs."
        },
        {
          name: "Oxtail",
          price: "$25.50 • $30.00",
          description: "Braised oxtail cooked low and slow in savory gravy with butter beans."
        }
      ]
    },
    {
      category: "Dinner",
      note: "Served with classic Caribbean sides",
      items: [
        {
          name: "Jerk Chicken Dinner",
          price: "$14.75 • $16.75 • $18.75",
          description: "Grilled jerk chicken served with rice & peas and steamed cabbage."
        },
        {
          name: "Brown Stew Chicken Dinner",
          price: "$14.75 • $16.75 • $18.75",
          description: "Slow-braised chicken in island gravy served with traditional sides."
        },
        {
          name: "Curry Goat Dinner",
          price: "$23.50 • $27.50",
          description: "Flavorful Caribbean curry goat served with rice and cabbage."
        },
        {
          name: "Oxtail Dinner",
          price: "$25.50 • $30.00",
          description: "Tender braised oxtail with butter beans served with rice & peas."
        },
        {
          name: "Escovitch Fish Dinner",
          price: "$30.00",
          description: "Whole fried fish topped with pickled vegetables and Caribbean spices."
        }
      ]
    },
    {
      category: "Vegetables",
      note: "Fresh, plant-based Caribbean favorites",
      items: [
        {
          name: "Callaloo",
          price: "$13.75 • $15.75 • $17.75",
          description: "Tender leafy greens sautéed with garlic, peppers, and island spices."
        },
        {
          name: "Steam Cabbage",
          price: "$12.75 • $14.75 • $16.75",
          description: "Lightly sautéed cabbage with carrots, herbs, and island seasoning."
        },
        {
          name: "Veggie Chunks",
          price: "$12.75 • $14.75 • $16.75",
          description: "Seasoned mixed vegetables cooked down in rich island spices."
        },
        {
          name: "Chickpeas & Potatoes",
          price: "$12.75 • $14.75 • $16.75",
          description: "Hearty chickpeas and potatoes simmered in savory Caribbean spices."
        },
        {
          name: "Pumpkin",
          price: "$13.75 • $15.75 • $17.75",
          description: "Soft, flavorful pumpkin cooked with herbs and Caribbean seasoning."
        },
        {
          name: "Eggplant",
          price: "$13.75 • $15.75 • $17.75",
          description: "Tender eggplant sautéed and seasoned with bold island flavor."
        }
      ]
    },
    {
      category: "Sides",
      note: "Add extra island flavor to any plate",
      items: [
        { name: "Rice", price: "$6.00", description: "Fluffy steamed white rice." },
        {
          name: "Rice & Peas",
          price: "$6.00",
          description: "Traditional Jamaican rice cooked with coconut milk, thyme, and kidney beans."
        },
        {
          name: "Steam Cabbage",
          price: "$6.50",
          description: "Lightly sautéed cabbage with carrots, herbs, and island seasoning."
        },
        {
          name: "Callaloo",
          price: "$6.50",
          description: "Tender leafy greens sautéed with garlic, peppers, and island spices."
        },
        {
          name: "Mac & Cheese",
          price: "$6.00",
          description: "Creamy baked macaroni and cheese."
        },
        { name: "Plantains", price: "$6.50", description: "Sweet fried plantains." },
        { name: "Roti", price: "$5.50", description: "Soft Caribbean flatbread." },
        { name: "Coco Bread", price: "$8.75", description: "Soft, slightly sweet Caribbean bread." },
        { name: "Green Beans", price: "$6.50", description: "Seasoned green beans." },
        { name: "Stew Peas Side", price: "$8.00", description: "Rich, hearty stewed peas." }
      ]
    },
    {
      category: "Drinks",
      note: "Caribbean sodas and homemade-style drinks",
      items: [
        { name: "D&G Sodas", price: "$4.00", description: "Assorted Caribbean sodas." },
        { name: "Pineapple", price: "$4.00", description: "Refreshing pineapple drink." },
        { name: "Ginger Beer", price: "$4.00", description: "Bold homemade-style ginger drink." },
        { name: "Kola Champagne", price: "$4.00", description: "Classic Caribbean soda." },
        { name: "Cream Soda", price: "$4.00", description: "Sweet vanilla soda." },
        {
          name: "Homemade Drinks",
          price: "$10.00",
          description: "Pineapple • Ginger • Sorrel • Sea Moss"
        }
      ]
    },
    {
      category: "Specials",
      note: "Ask about today’s availability",
      items: [
        {
          name: "Chef’s Jerk Combo",
          price: "$18",
          description: "Jerk chicken served with oxtail gravy, rice & peas, and steamed cabbage."
        }
      ]
    }
  ],
  reviews: [
    {
      quote:
        "The oxtails were fall off the bone tender and the gravy was incredible. You can taste the authenticity in every bite. This place is the real deal.",
      name: "Marcus L."
    },
    {
      quote:
        "I ordered jerk chicken with rice and peas, and it was perfectly seasoned with just the right heat. You can tell they take pride in their food.",
      name: "Danielle R."
    },
    {
      quote:
        "This is the kind of spot you keep coming back to. The portions are generous, the flavors are bold, and the service is always welcoming.",
      name: "Andre W."
    }
  ],
  faqs: [
    {
      q: "Do you use MSG in your food?",
      a: "No, dishes are prepared using natural herbs, spices, and traditional Caribbean seasoning — no added MSG."
    },
    {
      q: "What are your most popular dishes?",
      a: "Fan favorites include jerk chicken, oxtails, curry goat, and brown stew chicken."
    },
    {
      q: "Do you offer vegetarian options?",
      a: "Yes. Vegetable options include callaloo, steamed cabbage, pumpkin, eggplant, chickpeas & potatoes, and other island favorites."
    },
    {
      q: "What comes with your meals?",
      a: "Most meals are served with traditional sides such as rice & peas, white rice, steamed cabbage, or sweet plantains."
    },
    {
      q: "Do you offer catering?",
      a: "Yes. Catering is available for events, gatherings, and special occasions. Call ahead to customize your menu."
    }
  ]
};
