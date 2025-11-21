// ============================================
// src/data/newsData.js
// ============================================
// 📰 TO ADD A NEW ARTICLE: Just copy a block and paste at the TOP!
// The newest article should be FIRST in the array

export const newsArticles = [
  // 🆕 NEWEST ARTICLES GO HERE (at the top)
  {
    id: 1,
    title: 'SMARTAN HOUSE APPOINTS NEW EXECUTIVE DIRECTOR.',
    slug: 'smartan-house-new-director',
    excerpt: 'The Smartan House has unveiled its new leadership team led by the Executive Director Ms Temitope Abere.',
    content: `
      <p>Smartan House is thrilled to announce the launch of our groundbreaking 2025 campaign, "The Age of Transformers." This ambitious initiative aims to reach and transform 2,500 young people across Nigeria.</p>
      
      <p>Temitope Abere is a versatile and results-oriented professional from Lagos, Nigeria, with expertise in human resources, inventory management, design, and event coordination. Known for her strategic vision and commitment to operational excellence, Temitope brings valuable experience to her role as Executive Director at Smartan House.</p>
      
     <p>In her previous position as Assistant Human Resources Manager at Ijitek Power Solution, she led initiatives in recruitment, employee advocacy, and policy development, strengthening the company’s culture. “The new leadership will bring fresh energy, strong dedication, and new hope to the mission of Smartan House,” says the out-going chairman of the Smartan House caretaker committee Mr Tobe Akaogu.</p>
      
      <p>The Smartan House, as part of activity unveiling the new era is launching a campaign called "Age of Transformers". Ms Abere in a recent interview shared her optimism about the Smartan House's vision to raise 2500 young transformers across communities in the nation in 2025 and help shape youth culture.</p>
    `,
    image: '/images/news/temi.jpg',
    category: 'Announcement',
    author: 'Esther Opebiyi',
    date: '',
    readTime: '2 min read',
    featured: true, // Show as hero article
    tags: [ 'Youth', 'Transformation']
  },
  
  {
    id: 2,
    title: 'Victony,Nigerian musician and Celebrity Visits Smartan House',
    slug: 'smaOn the 20th of June 2024, Smartan House welcomed Victony, a celebrated figure in the Nigerian music industry, accompanied by his manager, Alhaji Poppin.',
    content: `
      <p>Last week, we witnessed something truly special - the graduation of Crucible Cohort 3. Thirty-six incredible young people completed our intensive 8-week residential program, emerging as confident leaders ready to transform their communities.</p>
    `,
    image: '/images/news/victony.jpg',
    category: 'Success Stories',
    author: 'Esther Opebiyi',
    date: '2024-06-20',
    readTime: '1 min read',
    featured: false,
    tags: ['Success', 'Entertainment']
  },
  
  {
    id: 3,
    title: 'Smartan House was at TEDx Lagos 2024',
    slug: 'smartans-at-tedx-lagos-2024',
    excerpt: 'Smartan House was at TEDx Lagos, an event that brought together some of the brightest minds and change-makers in the city.',
    content: `
      <p>The atmosphere was electric, filled with innovators, creatives, and entrepreneurs eager to share and learn from each other. As they stepped into this space, it was clear they were part of something large,a program dedicated to making meaningful impact. Each speaker brought fresh perspectives and inspiring stories, showing the power of ideas to transform society and push youths beyond limits.</p>

      
      <p>For the Smartans present, this was not just an event it was a time for Smartans to make news,connect,network with like minds. One of the highlights of the day was connecting with industry leaders,individuals who believe in the transformative potential of collaboration and creativity. Being at TEDx Lagos reminded them of the importance of the work and the journey ahead.</p>

      <i> The journey of Transformation and impact. </i>

    `,
    image: '/images/news/tedx.jpg',
    category: 'Events',
    author: 'Esther Opebiyi',
    date: '',
    readTime: '1 min read',
    featured: false,
    tags: [ 'Techy', 'Growth', ]
  },
  
  {
    id: 4,
    title: 'The Smartan house Host Renowned Movie Director, Mr Editi Effiong.',
    slug: 'cng-champions-spotlight',
    excerpt: 'Smartan House Hosted Mr. Editi Effiong, a talented Movie Director and Producer behind the acclaimed film The Black Book. The movie that smashed Netflix across different countries in 2023.',
    content: `
      <p>The event was filled with excitement as Smartans gathered to engage in a thought- taking discussion, diving deep into the movie’s themes., Mr. Effiong was captivated by the unique perspectives the Smartan House team brought to the table, analyzing the film through various lenses, including biblical symbolism, personality analysis, and data-driven insights.</p>

       <br />
      
      <p>Each interpretation revealed a new dimension of the story, bringing out layers that resonated deeply with both the film’s message and the Smartan community's analytical spirit. One of the standout moments for Mr. Effiong was the Smartans’ comparison of The Black Book to the game of chess—a parallel that highlighted the strategic intricate the characters' decisions and the overarching plot.</p>
      
      <br />

      <p>This perspective offered a fresh and captivating way to appreciate the film, blending strategy and storytelling in a way that fascinated the filmmaker. Hosting Mr. Effiong was an unforgettable experience that showed the Smartan House’s commitment to cultivating critical thinking and meaningful discussions. It was a proud moment for our community, one that inspired us to continue exploring storytelling through diverse and thought-provoking lenses.</p>
    `,
    image: '/images/news/editi.jpg',
    category: 'Community',
    author: 'Esther Opebiyi',
    date: '',
    readTime: '1 min read',
    featured: false,
    tags: ['Entertainment']
  },
  
  {
    id: 5,
    title: 'Honorable Minister for Youth and Development, Nigeria, Visits Smartan House',
    slug: '',
    excerpt: 'On 18th of April 2024, Smartan House welcomed Nigeria’s Federal Minister for Youth, Honorable Ayodele Olawande, for a visit focused on youth development, empowerment, and changemaking',
    content: `
      <p>The visit underscored a shared commitment between Smartan House and the ministry to equip young Nigerians with the skills and vision necessary to lead future progress. During the session, Honorable Ayodele Olawande spoke passionately about youth resilience, leadership, and national development, highlighting Nigeria’s potential with young people ready to move the country forward</p>

      <br />
      
      <p>He urged Smartans to actively contribute to Nigeria’s transformation. Reflecting on the visit, Mr. Johnson Abbaly, President of Smartan House, remarked, “The Smartans are young leaders,” and shared a popular Smartan House quote: “If we can't give this generation a better nation, then we'll raise a better generation for the nation.” The event left Smartans inspired and motivated to drive positive change for Nigeria and Africa.</p>
    `,
    image: '/images/news/minister.jpg',
    category: 'Programs',
    author: 'Esther Opebiyi',
    date: '',
    readTime: '3 min read',
    featured: false,
    tags: ['Tech', 'Skills']
  },

  {
    id: 6,
    title: 'Financial Times London Publishes the Story of Smartan House',
    slug: '',
    excerpt: 'Recently, Financial Times London featured Smartan House in their news update, bringing attention to the inspiring story of young leadership in Nigeria. ',
    content: `
      <p>The Financial Times (FT) is a London-based newspaper known for covering business, politics, and world affairs, making it significant that the story of youth initiatives in Africa is being told by such a prominent publication. This piece was not just an ordinary report; it highlighted the importance of young leaders and initiatives across Africa, showcasing Smartan House’s commitment to empowering youth and promoting innovation. </p>
      
      <br />
      
      <p>Reflecting on this milestone, Mr. Johnson Abbaly, President of Smartan House, expressed the organization’s hope to demonstrate that there is a second chance for many young Nigerians. “If we are able to scale this sufficiently,” says Mr. Abbaly, “we will be able to put a message out on pretty strong cultural levels that there is an alternative path to growth and success — and it works.” This recognition by Financial Times London underscores our mission to inspire and equip young leaders with the skills needed to create lasting change in their communities and across the continent.</p>
    `,
    image: '/images/news/finance.jpg',
    category: 'Impact Stories',
    author: 'Esther Opebiyi',
    date: '',
    readTime: '1 min read',
    featured: false,
    tags: ['Impact', 'Community', 'Trendy']
  },

  {
    id: 7,
    title: 'LEAP Africa visits the Smartan House',
    slug: 'tech-announcement',
    excerpt: 'On the 25th of October 2024, Smartan House welcomed the LEAP Africa team',
    content: `
      <p>LEAP Africa is a youth-focused leadership development organization committed to empowering the next generation of leaders. The visit brought together Smartans eager to learn from the team members and connect with them.</p>

      <br />
      
      <p>Miss Amabbel shared experiences and practical advice, encouraging Smartans not to give up on their dreams and to pursue their ambitions boldly, as they are the hope of the nation. The impactful session included engaging discussions, with Smartans presenting some of their ideas and projects.</p>

      <br/>

      <p>According to Mr. Johnson Abbaly, President of Smartan House, “This visit reinforces our commitment to providing transformational experiences for our nation and continent.” The visit was indeed remarkable and an unforgettable experience</p>


    `,
    image: '/images/news/leap.jpg',
    category: 'Partnerships',
    author: 'Esther Opebiyi',
    date: '2024-10-25',
    readTime: '2 min read',
    featured: false,
    tags: ['Partnerships', 'Tech', 'Opportunities']
  },

  {
    id: 8,
    title: 'CEO of Sterling Bank Visits Smartan House',
    slug: 'CEO-sterling-bank-visited',
    excerpt: 'On 18th of april 2024, Smartan House had the privilege of hosting Mr. Abubakar Suleiman, a respected leader in the banking and finance sector.',
    content: `
      <p>During the visit, Mr. Suleiman shared valuable insights on youth empowerment, resilience, and the role of young people in driving change across Africa.</p>

      <br />

      <p>The session allowed Smartans to connect directly with him, gaining advice and perspectives on navigating their personal and professional journeys. Reflecting on the event, Mr. Johnson Abbaly, President of Smartan House, noted, “The interaction between Smartans and the CEO of Sterling Bank deepens our mission to bring hope to our nation and Africa.” The visit left Smartans inspired and motivated to make an impact as young leaders.</p>
    `,
    image: '/images/news/sterling.jpg',
    category: 'Partnerships',
    author: 'Esther Opebiyi',
    date: '2024-06-018',
    readTime: '6 min read',
    featured: false,
    tags: ['Global', 'Relationships', 'Program', 'Experience']
  },

  // 📝 TO ADD MORE: Copy any block above, paste here, and update:
  // - id (make it unique)
  // - title
  // - slug (url-friendly version of title)
  // - excerpt (short description)
  // - content (full article in HTML)
  // - image
  // - category
  // - author
  // - date (YYYY-MM-DD format)
  // - readTime
  // - featured (true/false)
  // - tags (array of keywords)
];

// Categories for filtering
export const newsCategories = [
  'All',
  'Announcement',
  'Success Stories',
  'Programs',
  'Events',
  'Community',
  'Partnerships',
  'Impact Stories',
  'Inside Look',
  'Expansion'
];