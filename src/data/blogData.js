const blogData = [
  {
    title: "Science in action: Khet se thali tak - surakshit bhojan, har kadam",
    description: "One who is regulated in eating, recreation, action, sleep and wakefulness, can mitigate all sorrows by practicing yoga....",
    date: "July 1, 2025",
    author: " By Shri G. Kamala Vardhana Rao",
    comments: 136,
    image: "/assets/images/Safe_Nutr_CEO.png"
  },
  {
    title: "How to have a Vigil on Ultra Processed Foods",
    description: "Glad to share my views about the Ultra Processed Foods – the issue of recent times cropping up and capturing the attention of the consumers....",
    date: "July 1, 2025",
    author: " By Dr. Kavitha Ramasamy · Joint Director, FSSAI",
    comments: 102,
    image: "/assets/images/vigilfood.jpg"
  },
  {
    title: "The Role of Forensic Serology in Food Forensics and Street Food Safety",
    description: "Food forensics is an evolving discipline that applies scientific methods to ensure the authenticity, safety, and quality of food products....",
    date: "July 1, 2025",
    author: "By Dr. Nilanjan Chattopadhyay · Serologist & CE, Senior CMO(SAG)",
    comments: 88,
    image: "/assets/images/Food-Forensics-Front-Cover.jpg"
  },
  {
    title: "Revolutionizing Food Safety in India with Smart NIR-Based Sensors",
    description: "Near-Infrared (NIR) spectroscopy-based sensors are poised to revolutionize how India approaches food safety and quality assurance. These cutting-edge tools allow for rapid, non-destructive analysis of food, delivering near-instantaneous results—whether in laboratories or directly in the field.",
    date: "July 1, 2025",
    author: "By Prof. Rajib Bandyopadhyay · President, Institute Innovation Council (IIC)",
    comments: 54,
    image: "/assets/images/Revolutionizingimg.jpg"
  },
  {
    title: "AYURVEDA AAHARA",
    description: "Ayurveda, the ancient system of medicine, emphasizes the integral relationship between Aahara (food) and Swasthaya (overall health). . It is important to introduce the concept of Ayurveda Aahara to align the traditional knowledge with modern aspect to the improve health status of the people.",
    date: "Feb 18, 2025",
    author: "By Dr. Komal Sehrawat · Consultant - Ayurveda",
    comments: 54,
    image: "/assets/images/AYURVEDA_AAHARA.jpg"
  },
  {
    title: "Fortified Foods: Enhancing Nutritional Value",
    description: "Fortified foods are those that have been enhanced with additional nutrients, either to replace nutrients lost during processing or to add nutrients that may not be naturally present in significant amounts. This practice aims to improve public health by addressing common nutritional deficiencies.",
    date: "Jan 2, 2025",
    author: " By Dr. Sirimavo Nair",
    comments: 54,
    image: "/assets/images/dietary_guidelines.jpg"
  },
  {
    title: "CHANGING SCENARIO OF ARTIFICIAL RIPENING OF FRUITS",
    description: "Mango fruits are abundantly available in the fruit markets nowadays. Some traders are using calcium carbide to ripen the mangoes, which is banned under the Food Safety and Standards Act of the Government of India. Generally, fruit traders/growers harvest immature/ mature but unripe fruits from the orchards, pack them in boxes or plastic crates, and place 2-3 paper sachets of 5-10g calcium carbide in each layer in the box/crate.",
    date: "Jan 2, 2025",
    author: "By Prof. Dr. PC Sharma",
    comments: 54,
    image: "/assets/images/Chrono.jpg"
  },
  {
    title: "Carbohydrates are not to be blamed for the occurrence of Obesity - Let's get the right perspective",
    description: "Let’s us understand carbohydrates, its role in the body, what happens when it is consumed more or less and the right way of consuming carbohydrates",
    date: "Jan 2, 2025",
    author: " By Dr Kavitha Ramasamy · Joint Director, FSSAI",
    comments: 54,
    image: "/assets/images/img-1.png"
  },
  {
    title: "Calcium Carbide or Ripening Masala used in fruits is Toxic",
    description: "Calcium Carbide (CaC2) or Calcium acetylide is a grey or brown powder or solid widely used for generating acetylene gas or welding gas by small welders. Acetylene is a flammable gas and should be handled with care. Unfortunately, the same is used as an artificial ripening agent by many traders and few farmers for ripening of climacteric fruits like mango and banana. It is either put as small packets inside the packed fruit boxes or sprinkled on heaps of fruit in secluded areas away from the sight of consumers.",
    date: "August 1, 2024",
    author: "By Dr. C.K.Narayana",
    comments: 54,
    image: "/assets/images/artificial_ripening.jpg"
  },
  {
    title: "Eating healthy is a balancing act - Key take-aways from the Dietary Guidelines for Indians",
    description: "Children and adults in our country suffer from deficiencies of several vitamins and minerals. They are simultaneously plagued by problems of excess. Obesity is on the rise along with problems of high blood pressure, elevated blood sugar and blood lipid levels. The new Dietary Guidelines are extremely helpful as they provide rich sources of each vitamin and mineral enabling better food selection. Healthy meal and snack ideas for different age groups have also been provided. Here are some key points from the guidelines which need to be highlighted.",
    date: "August 1, 2024",
    author: " By Prof. Pulkit Mathur",
    comments: 54,
    image: "/assets/images/dietary_guidelines.jpg"
  },
  {
    title: "Are you eating ice cream or frozen dessert?",
    description: "There are two frozen delicacies available in the market, termed as “Ice cream” and “Frozen Dessert”. Both appear to be exactly similar in taste, appearance and other properties, but there is a significant difference. You will not know it until you read the label and see the list of ingredients.",
    date: "August 1, 2024",
    author: "By Prof. (Dr.) J. B. Prajapati",
    comments: 54,
    image: "/assets/images/icecream.jpg"
  },
  {
    title: "Ensuring Safe and Nutritious Food: The Vital Role of FSSAI in India",
    description: "In today's health-conscious world, the significance of access to safe and nutritious food cannot be overstated. As consumers become increasingly aware of the link between diet and overall well-being, the responsibility falls on regulatory bodies to uphold food safety standards. In India, the Food Safety and Standards Authority of India (FSSAI) stands as a cornerstone of assurance, ensuring the safety of the food supply chain across the nation for protecting public health and maintaining consumer confidence.",
    date: "June 7, 2024",
    author: " By Shri G. Kamala Vardhana Rao",
    comments: 54,
    image: "/assets/images/Safe_Nutr_CEO.png"
  },
  {
    title: "Eat Right India: Transforming India's Food Landscape",
    description: "As the world advances and systems become more complex, food choices are changing drastically across the globe. Today, with rapid urbanization and changing lifestyles, dietary patterns have shifted towards pre-packaged foods, frozen foods, and fast food, including fried foods and desserts. This shift is increasing the burden of diet-related diseases such as diabetes, hypertension, and obesity. India faces a silent epidemic today of rising childhood obesity coupled with under-nutrition and micronutrient deficiencies.",
    date: "June 7, 2024",
    author: "By Shri Uma Shankar Dhyani",
    comments: 54,
    image: "/assets/images/2024-06-06.jpeg"
  },
  {
    title: "HOW TO READ FOOD LABELS: “CHOOSE HEALTHY AND STAY HEALTHY”",
    description: "All of us want to eat healthy and stay healthy. For that, we need to choose healthy food. Do you find it challenging when it comes to making healthy food choices? Do not worry. The food label is a simple and quick tool to help you make healthy food choices.",
    date: "June 7, 2024",
    author: "By DR. SUNEETA CHANDORKAR",
    comments: 54,
    image: "/assets/images/HowToReadFoodLabels.jpg"
  },
  {
    title: "Rhodamine B and Associated Food Safety Issues",
    description: "“Whatever may be the father of a disease, all ill-diet is the mother” as was rightly pronounced by Dr. George Herbert. Unhealthy processed foods have become a part of our daily diet. Such foods are often added with illegal food dyes specifically synthetic ones as coloring agents having genotoxic or carcinogenic properties and thus is a matter of public health concern. Consumption of artificial food dye has increased many folds in the last 50 years, and children are the biggest consumers.",
    date: "June 7, 2024",
    author: " By Dr. Debadutta Mishra",
    comments: 54,
    image: "/assets/images/Dye.png"
  },
  {
    title: "Dietary Diversity for a Healthy Lifestyle",
    description: "Dietary diversity refers to the variety of different foods or food groups consumed over a specific period, typically in a day or a week. It is a key component of a healthy diet, emphasizing the consumption of a broad range of nutrients necessary for maintaining health and preventing disease.",
    date: "June 7, 2024",
    author: "By Ms. Rima Rao, RD",
    comments: 54,
    image: "/assets/images/SafeFood.jpg"
  },
  {
    title: "Fortified Foods",
    description: "Maternal and child undernutrition is very common in low and middle-income countries (LMICs). A particularly widespread problem in LMICs is “hidden hunger”, or a chronic lack of essential vitamins and minerals such as iron, zinc, iodine, vitamin A and folic acid in the diet.",
    date: "June 7, 2024",
    author: "By Dr Asna Urooj",
    comments: 54,
    image: "/assets/images/fortified.png"
  },
  {
    title: "Chrono Nutrition",
    description: "Chrono nutrition is a concept that aligns eating patterns with the body's natural circadian rhythms that regulates the wake and sleep cycle in response to changes in light. Chrono nutrition is a holistic approach to eating that considers the impact of meal timings on body's natural circadian rhythms and metabolic patterns.",
    date: "June 7, 2024",
    author: "By Dr Meenakshi Bajaj MSc, RD, CDE, CCN (U.S) PhD.",
    comments: 54,
    image: "/assets/images/Chrono1.jpg"
  },
  {
    title: "Heavy Metals and Food Safety",
    description: "All living organisms are made up of macro elements viz. Carbon, Nitrogen, Phosphorous etc. as body constituents and micro elements viz. Iron, Cobalt and Zink which are constituents of body metabolism. Heavy metals are micro elements and are so called because of their high density and also biological importance in trace amounts; the term heaviness is also linked to their toxicity.",
    date: "June 7, 2024",
    author: "By Dr. Debadutta Mishra",
    comments: 54,
    image: "/assets/images/Heavy_Metals.png"
  },
  
];

export default blogData;
