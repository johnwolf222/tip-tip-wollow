/*
  Tip Top Willow's site data
  File: data.js

  Edit this file when menu items, prices, hours, photos, order links,
  social links, specials, or restaurant details change.
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
    {
      day: "Monday",
      time: "Closed"
    },
    {
      day: "Tuesday",
      time: "11:00 AM – 8:00 PM"
    },
    {
      day: "Wednesday",
      time: "11:00 AM – 8:00 PM"
    },
    {
      day: "Thursday",
      time: "11:00 AM – 8:00 PM"
    },
    {
      day: "Friday",
      time: "11:00 AM – 8:00 PM"
    },
    {
      day: "Saturday",
      time: "11:00 AM – 8:00 PM"
    },
    {
      day: "Sunday",
      time: "11:00 AM – 7:00 PM"
    }
  ],

  hoursNote:
    "Hours may change around holidays, events, or sell-out days. Call ahead to confirm availability.",

  social: {
    instagram: "https://www.instagram.com/tiptopwillows",
    facebook: "https://www.facebook.com/tiptop.willows"
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

  heroBadges: [
    "Family-Owned",
    "Jamaican & Guyanese-Inspired",
    "Made Fresh Daily"
  ],

  featureSpecial: {
    eyebrow: "Today’s Special",
    title: "Chef’s Jerk Combo",
    price: "$18",
    description:
      "Jerk chicken served with oxtail gravy, rice & peas, and steamed cabbage."
  },

  optionalPromo: {
    enabled: true,
    eyebrow: "Lunch Special",
    title: "1 Meat + 2 Sides",
    price: "$8.99",
    description:
      "A quick, flavorful lunch plate built for the middle of the day. Call ahead to confirm today’s meats and sides."
  },

  story:
    "Tip Top Willow’s began with family and the rich culinary traditions of Jamaica and Guyana. Guided by generations of recipes and authentic spices, every dish is made with care, pride, and bold Caribbean flavor. We believe great food brings people together, creating moments of connection, comfort, and joy.",

  favorites: [
    {
      name: "Oxtails",
      description:
        "Slow-braised oxtails cooked low and slow in deep, savory gravy with classic Caribbean flavor.",
      imageKey: "oxtails"
    },
    {
      name: "Curry Goat",
      description:
        "Tender goat simmered in rich Caribbean curry, herbs, and spices until bold and comforting.",
      imageKey: "curryGoat"
    },
    {
      name: "Jerk Chicken",
      description:
        "Chicken seasoned with bold island spices and finished with smoky, spicy jerk flavor.",
      imageKey: "jerkChicken"
    }
  ],

  menu: [
    {
      category: "Lunch Special",
      note: "Call ahead to confirm daily availability.",
      items: [
        {
          name: "Lunch Special",
          price: "$8.99",
          description:
            "1 meat + 2 sides. Built for a fast, filling Caribbean lunch."
        },
        {
          name: "Chef’s Jerk Combo",
          price: "$18",
          description:
            "Jerk chicken served with oxtail gravy, rice & peas, and steamed cabbage."
        }
      ]
    },

    {
      category: "Chicken Plates",
      note: "Small • Medium • Large where available.",
      items: [
        {
          name: "Jerk Chicken",
          price: "$14.75 • $16.75 • $18.75",
          description:
            "Chicken marinated in Caribbean jerk seasoning with bold island heat and flavor."
        },
        {
          name: "Brown Stew Chicken",
          price: "$14.75 • $16.75 • $18.75",
          description:
            "Chicken slow-braised in rich brown stew gravy with onions, peppers, herbs, and spices."
        },
        {
          name: "Curry Chicken",
          price: "$14.75 • $16.75 • $18.75",
          description:
            "Tender chicken simmered in warm Caribbean curry sauce with comforting island flavor."
        }
      ]
    },

    {
      category: "Big Flavor Plates",
      note: "Customer favorites with rich gravy, curry, and Caribbean seasoning.",
      items: [
        {
          name: "Curry Goat",
          price: "$23.50 • $27.50",
          description:
            "Slow-cooked goat simmered with bold curry spices, herbs, and island seasoning."
        },
        {
          name: "Oxtail",
          price: "$25.50 • $30.00",
          description:
            "Tender braised oxtail cooked low and slow in savory gravy with butter beans."
        },
        {
          name: "Escovitch Fish",
          price: "$30.00",
          description:
            "Whole fried fish topped with pickled vegetables and Caribbean spices."
        }
      ]
    },

    {
      category: "Vegetables",
      note: "Fresh plant-based Caribbean favorites.",
      items: [
        {
          name: "Callaloo",
          price: "$13.75 • $15.75 • $17.75",
          description:
            "Tender leafy greens sautéed with garlic, peppers, herbs, and island spices."
        },
        {
          name: "Steam Cabbage",
          price: "$12.75 • $14.75 • $16.75",
          description:
            "Lightly sautéed cabbage with carrots, herbs, and Caribbean seasoning."
        },
        {
          name: "Veggie Chunks",
          price: "$12.75 • $14.75 • $16.75",
          description:
            "Seasoned veggie chunks cooked down with rich island flavor."
        },
        {
          name: "Chickpeas & Potatoes",
          price: "$12.75 • $14.75 • $16.75",
          description:
            "Hearty chickpeas and potatoes simmered in savory Caribbean spices."
        },
        {
          name: "Pumpkin",
          price: "$13.75 • $15.75 • $17.75",
          description:
            "Soft, flavorful pumpkin cooked with herbs and Caribbean seasoning."
        },
        {
          name: "Eggplant",
          price: "$13.75 • $15.75 • $17.75",
          description:
            "Tender eggplant sautéed and seasoned with bold island flavor."
        }
      ]
    },

    {
      category: "Sides",
      note: "Add extra island flavor to any plate.",
      items: [
        {
          name: "White Rice",
          price: "$6.00",
          description:
            "Simple, fluffy steamed white rice."
        },
        {
          name: "Rice & Peas",
          price: "$6.00",
          description:
            "Traditional rice cooked with coconut milk, thyme, and kidney beans."
        },
        {
          name: "Steam Cabbage",
          price: "$6.50",
          description:
            "Lightly sautéed cabbage with carrots, herbs, and island seasoning."
        },
        {
          name: "Callaloo",
          price: "$6.50",
          description:
            "Leafy greens sautéed with garlic, peppers, herbs, and island spices."
        },
        {
          name: "Mac & Cheese",
          price: "$6.00",
          description:
            "Creamy baked macaroni and cheese."
        },
        {
          name: "Plantains",
          price: "$6.50",
          description:
            "Sweet fried plantains."
        },
        {
          name: "Roti",
          price: "$5.50",
          description:
            "Soft Caribbean flatbread."
        },
        {
          name: "Coco Bread",
          price: "$8.75",
          description:
            "Soft, slightly sweet Caribbean bread."
        },
        {
          name: "Green Beans",
          price: "$6.50",
          description:
            "Seasoned green beans."
        },
        {
          name: "Stew Peas Side",
          price: "$8.00",
          description:
            "Rich, hearty stewed peas."
        }
      ]
    },

    {
      category: "Drinks",
      note: "Caribbean sodas and homemade-style drinks.",
      items: [
        {
          name: "D&G Sodas",
          price: "$4.00",
          description:
            "Assorted Caribbean sodas."
        },
        {
          name: "Pineapple",
          price: "$4.00",
          description:
            "Refreshing pineapple drink."
        },
        {
          name: "Ginger Beer",
          price: "$4.00",
          description:
            "Bold ginger drink with Caribbean bite."
        },
        {
          name: "Kola Champagne",
          price: "$4.00",
          description:
            "Classic Caribbean soda."
        },
        {
          name: "Cream Soda",
          price: "$4.00",
          description:
            "Sweet vanilla soda."
        },
        {
          name: "Homemade Drinks",
          price: "$10.00",
          description:
            "Pineapple • Ginger • Sorrel • Sea Moss"
        }
      ]
    },

    {
      category: "Catering",
      note: "For parties, business lunches, family events, and special gatherings.",
      items: [
        {
          name: "Event Catering",
          price: "Call for quote",
          description:
            "Custom Caribbean catering for small gatherings, family events, office lunches, and celebrations."
        },
        {
          name: "Party Trays",
          price: "Call for quote",
          description:
            "Ask about tray options for jerk chicken, curry goat, oxtails, rice & peas, cabbage, plantains, and more."
        },
        {
          name: "Catering Help",
          price: "Call ahead",
          description:
            "Tell us your guest count, event date, and favorite dishes so we can help build the right food plan."
        }
      ]
    }
  ],

  reviews: [
    {
      quote:
        "Reviews coming soon. Add a real customer review here once the restaurant confirms it.",
      name: "Tip Top Willow’s"
    },
    {
      quote:
        "Customer photos and verified feedback can be added here after launch.",
      name: "Coming Soon"
    },
    {
      quote:
        "Use this section for real Google, DoorDash, Uber Eats, or direct customer feedback.",
      name: "Coming Soon"
    }
  ],

  faqs: [
    {
      q: "Do you use MSG in your food?",
      a: "No, dishes are prepared using natural herbs, spices, and traditional Caribbean seasoning — no added MSG."
    },
    {
      q: "What are your most popular dishes?",
      a: "Fan favorites include oxtails, curry goat, jerk chicken, curry chicken, and brown stew chicken."
    },
    {
      q: "Do you offer vegetarian options?",
      a: "Yes. Vegetable options include callaloo, steamed cabbage, pumpkin, eggplant, chickpeas & potatoes, veggie chunks, and other island favorites."
    },
    {
      q: "What comes with your meals?",
      a: "Most plates are served with traditional sides such as rice & peas, white rice, steamed cabbage, or sweet plantains. Call ahead for the day’s exact options."
    },
    {
      q: "Do you offer catering?",
      a: "Yes. Catering is available for events, gatherings, business lunches, family meals, and special occasions. Call ahead to customize your menu."
    },
    {
      q: "Can I order online?",
      a: "Yes. Use the Order Now buttons for delivery app options, or call the restaurant directly for pickup and availability."
    }
  ]
};
