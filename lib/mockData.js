// Mock data for VoiceForge AI frontend shell.
// Replace with real API calls (ElevenLabs / OpenAI TTS / Azure / Google Cloud) when wiring up the backend.

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    period: '/month',
    tagline: 'For trying out AI voice',
    features: [
      '10,000 characters / month',
      'Standard voice library',
      'MP3 downloads',
      '10 generations / day',
      'Community support',
    ],
    cta: 'Start Starter Plan',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 499,
    period: '/month',
    tagline: 'For creators & podcasters',
    features: [
      '100,000 characters / month',
      'Premium voice library',
      'Faster generation queue',
      'Commercial usage rights',
      'Unlimited downloads',
      'Email support',
    ],
    cta: 'Start Pro Plan',
    highlight: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 999,
    period: '/month',
    tagline: 'For teams & agencies',
    features: [
      'Unlimited characters',
      'Voice cloning studio',
      'API access',
      'Team seats',
      'Priority support',
      'White-label exports',
    ],
    cta: 'Start Business Plan',
    highlight: false,
  },
]

export const voiceCategories = ['Male', 'Female', 'Character', 'Regional']

export const voices = [
  // Male
  { id: 'v01', name: 'Arjun', category: 'Male', style: 'Professional Male', language: 'English (US)', tags: ['Corporate', 'Clear'], color: 'violet' },
  { id: 'v02', name: 'Marcus', category: 'Male', style: 'Deep Male', language: 'English (UK)', tags: ['Trailer', 'Cinematic'], color: 'coral' },
  { id: 'v03', name: 'Devraj', category: 'Male', style: 'Narrator Male', language: 'English (IN)', tags: ['Audiobook', 'Calm'], color: 'cyan' },
  { id: 'v04', name: 'Walter', category: 'Male', style: 'News Anchor', language: 'English (US)', tags: ['Broadcast', 'Crisp'], color: 'amber' },
  // Female
  { id: 'v05', name: 'Anaya', category: 'Female', style: 'Professional Female', language: 'English (IN)', tags: ['Corporate', 'Friendly'], color: 'violet' },
  { id: 'v06', name: 'Sophie', category: 'Female', style: 'Warm Female', language: 'English (US)', tags: ['Conversational'], color: 'cyan' },
  { id: 'v07', name: 'Meera', category: 'Female', style: 'Storytelling Female', language: 'English (IN)', tags: ['Audiobook', 'Expressive'], color: 'coral' },
  { id: 'v08', name: 'Zara', category: 'Female', style: 'Podcast Female', language: 'English (US)', tags: ['Podcast', 'Energetic'], color: 'amber' },
  // Character
  { id: 'v09', name: 'Pip', category: 'Character', style: 'Child', language: 'English (US)', tags: ['Playful'], color: 'cyan' },
  { id: 'v10', name: 'Boomer', category: 'Character', style: 'Cartoon', language: 'English (US)', tags: ['Animated', 'Fun'], color: 'amber' },
  { id: 'v11', name: 'Nova', category: 'Character', style: 'Documentary', language: 'English (UK)', tags: ['Informative'], color: 'violet' },
  { id: 'v12', name: 'Priya Ma\u2019am', category: 'Character', style: 'Teacher', language: 'English (IN)', tags: ['Educational', 'Patient'], color: 'coral' },
  // Regional
  { id: 'v13', name: 'Rohan', category: 'Regional', style: 'Hindi Narrator', language: 'Hindi', tags: ['\u0939\u093f\u0902\u0926\u0940', 'Narration'], color: 'violet' },
  { id: 'v14', name: 'Aisha', category: 'Regional', style: 'Urdu Storyteller', language: 'Urdu', tags: ['\u0627\u0631\u062f\u0648', 'Expressive'], color: 'coral' },
  { id: 'v15', name: 'Reema', category: 'Regional', style: 'Bengali Voice', language: 'Bengali', tags: ['\u09ac\u09be\u0982\u09b2\u09be'], color: 'cyan' },
  { id: 'v16', name: 'Karthik', category: 'Regional', style: 'Tamil Voice', language: 'Tamil', tags: ['\u0ba4\u0bae\u0bbf\u0bb4\u0bcd'], color: 'amber' },
  { id: 'v17', name: 'Sandhya', category: 'Regional', style: 'Telugu Voice', language: 'Telugu', tags: ['\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41'], color: 'violet' },
  { id: 'v18', name: 'Sai', category: 'Regional', style: 'Marathi Voice', language: 'Marathi', tags: ['\u092e\u0930\u0954\u0940'], color: 'coral' },
  { id: 'v19', name: 'Heer', category: 'Regional', style: 'Gujarati Voice', language: 'Gujarati', tags: ['\u0a97\u0ac1\u0a9c\u0AB0\u0aBE\u0aA4\u0AC0'], color: 'cyan' },
  { id: 'v20', name: 'Gurpreet', category: 'Regional', style: 'Punjabi Voice', language: 'Punjabi', tags: ['\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40'], color: 'amber' },
]

export const emotions = [
  { id: 'happy', label: 'Happy' },
  { id: 'sad', label: 'Sad' },
  { id: 'motivational', label: 'Motivational' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'excited', label: 'Excited' },
  { id: 'serious', label: 'Serious' },
  { id: 'storytelling', label: 'Storytelling' },
  { id: 'inspirational', label: 'Inspirational' },
]

export const dashboardStats = {
  creditsRemaining: 64200,
  creditsTotal: 100000,
  charactersUsed: 35800,
  audioFilesGenerated: 142,
  downloads: 118,
  subscription: {
    plan: 'Pro',
    renews: 'July 14, 2026',
    status: 'Active',
  },
}

export const recentActivity = [
  { id: 'a1', name: 'YouTube_Intro_Final.mp3', voice: 'Anaya \u2014 Professional Female', date: 'Jun 13, 2026', characters: 420, status: 'Downloaded' },
  { id: 'a2', name: 'Podcast_Ep12_Narration.mp3', voice: 'Devraj \u2014 Narrator Male', date: 'Jun 12, 2026', characters: 3120, status: 'Generated' },
  { id: 'a3', name: 'Product_Explainer_HI.mp3', voice: 'Rohan \u2014 Hindi Narrator', date: 'Jun 11, 2026', characters: 980, status: 'Downloaded' },
  { id: 'a4', name: 'Audiobook_Ch4.mp3', voice: 'Meera \u2014 Storytelling Female', date: 'Jun 10, 2026', characters: 5400, status: 'Downloaded' },
  { id: 'a5', name: 'Ad_Script_Promo.mp3', voice: 'Marcus \u2014 Deep Male', date: 'Jun 09, 2026', characters: 210, status: 'Generated' },
]

export const billingHistory = [
  { id: 'INV-1042', date: 'Jun 01, 2026', plan: 'Pro Plan', amount: 499, status: 'Paid', method: 'UPI' },
  { id: 'INV-1031', date: 'May 01, 2026', plan: 'Pro Plan', amount: 499, status: 'Paid', method: 'Razorpay Card' },
  { id: 'INV-1019', date: 'Apr 01, 2026', plan: 'Pro Plan', amount: 499, status: 'Paid', method: 'UPI' },
  { id: 'INV-1005', date: 'Mar 01, 2026', plan: 'Starter Plan', amount: 99, status: 'Paid', method: 'PhonePe' },
]

export const referralStats = {
  link: 'https://voiceforge.ai/r/SHREYA42',
  totalReferrals: 7,
  earnings: 150,
  availableCredits: 11400,
  tiers: [
    { count: 1, reward: '\u20b920 credit', achieved: true },
    { count: 5, reward: '\u20b9150 credit', achieved: true },
    { count: 20, reward: '1 month free', achieved: false },
  ],
}

export const blogPosts = [
  {
    slug: 'best-ai-voice-generators',
    title: 'The Best AI Voice Generators in 2026, Compared',
    category: 'Guides',
    excerpt: 'A practical look at how modern AI voice tools stack up for creators, and what actually matters when picking one.',
    date: 'Jun 02, 2026',
    readTime: '7 min read',
    content: [
      'Choosing an AI voice generator usually comes down to three things: how natural the voices sound, how much control you get over delivery, and whether the pricing fits how much you actually produce.',
      'Most platforms now offer a free tier to test voice quality before committing. Use it to test the exact kind of content you make \u2014 a narrator voice that sounds great reading a script can sound flat reading a list of product specs.',
      'Pay attention to language coverage if you create content for Indian audiences. Support for Hindi, Tamil, Bengali, and other regional languages varies a lot between platforms, and quality in these languages often lags behind English.',
      'Finally, check the commercial usage terms. Some plans restrict monetized use of generated audio unless you\u2019re on a paid tier \u2014 important if you\u2019re narrating YouTube videos or ads.',
    ],
  },
  {
    slug: 'how-ai-voice-cloning-works',
    title: 'How AI Voice Cloning Actually Works',
    category: 'Explainers',
    excerpt: 'A simple breakdown of the technology behind voice cloning, from short voice samples to a fully trained voice model.',
    date: 'May 26, 2026',
    readTime: '6 min read',
    content: [
      'Voice cloning works by analyzing a recording of someone\u2019s voice and learning the patterns that make it recognizable \u2014 tone, pacing, pitch, and pronunciation quirks.',
      'Instant cloning typically needs under a minute of clean audio and produces a usable voice model in seconds, while professional cloning uses longer, higher-quality samples for a closer match.',
      'The output is a voice model that can read new text it has never \u201cheard\u201d before, while keeping the character of the original voice.',
      'Always get consent before cloning someone\u2019s voice, and check the platform\u2019s policy on commercial use of cloned voices.',
    ],
  },
  {
    slug: 'ai-voice-for-youtube',
    title: 'Using AI Voiceovers for YouTube Videos',
    category: 'Use Cases',
    excerpt: 'How creators are using AI narration to publish more videos without burning out on recording.',
    date: 'May 18, 2026',
    readTime: '5 min read',
    content: [
      'For faceless channels and explainer content, AI narration lets a single creator script, generate, and edit a video in a fraction of the time a recorded voiceover would take.',
      'A narrator-style voice with a slightly slower pace tends to work best for tutorials, while podcast-style voices suit commentary and reaction content.',
      'Re-recording a line is as simple as editing the script and regenerating that sentence \u2014 no studio, no retakes.',
    ],
  },
  {
    slug: 'ai-voice-for-podcasts',
    title: 'AI Voices for Podcast Intros, Ads, and Narration',
    category: 'Use Cases',
    excerpt: 'Where AI voice fits naturally into a podcast workflow \u2014 and where a human host still matters most.',
    date: 'May 10, 2026',
    readTime: '5 min read',
    content: [
      'AI voices are a natural fit for the parts of a podcast that repeat every episode: intros, outros, sponsor reads, and disclaimers.',
      'For narrative or documentary-style podcasts, AI narration can carry entire segments, with the host\u2019s real voice reserved for interviews and commentary.',
      'Keeping a consistent voice across episodes helps build a recognizable show identity, even as scripts change week to week.',
    ],
  },
  {
    slug: 'ai-voice-for-business',
    title: 'Practical Ways Businesses Use AI Voice',
    category: 'Business',
    excerpt: 'From IVR systems to training videos, here\u2019s where AI-generated voice quietly saves teams time.',
    date: 'Apr 30, 2026',
    readTime: '6 min read',
    content: [
      'Internal training videos are one of the most common business use cases \u2014 scripts change often, and re-recording with a human voice every time is slow.',
      'Customer-facing use, like IVR menus or product explainer videos, benefits from a consistent brand voice across every script, region, and language.',
      'Teams on higher-tier plans often standardize on one or two brand voices so all generated audio sounds consistent, regardless of who on the team creates it.',
    ],
  },
  {
    slug: 'text-to-speech-guide',
    title: 'Text-to-Speech: A Beginner\u2019s Guide',
    category: 'Guides',
    excerpt: 'What text-to-speech is, how it\u2019s different from voice cloning, and how to get natural-sounding results.',
    date: 'Apr 22, 2026',
    readTime: '4 min read',
    content: [
      'Text-to-speech (TTS) converts written text into spoken audio using a voice model trained on recordings of human speech.',
      'Punctuation matters more than most people expect \u2014 commas, periods, and line breaks all influence pacing and pauses in the output.',
      'Most modern TTS tools let you adjust speed, pitch, and emotional tone, so the same script can sound calm, urgent, or upbeat depending on the settings.',
    ],
  },
  {
    slug: 'ai-narration-guide',
    title: 'Writing Scripts That Sound Great in AI Narration',
    category: 'Guides',
    excerpt: 'Small changes to how you write a script can make a big difference in how natural the AI narration sounds.',
    date: 'Apr 12, 2026',
    readTime: '5 min read',
    content: [
      'Short sentences generally sound more natural than long, comma-heavy ones \u2014 AI voices handle pacing better when they don\u2019t have to guess where a thought ends.',
      'Spell out numbers, abbreviations, and units the way you\u2019d want them read aloud (\u201ctwenty twenty-six\u201d instead of \u201c2026\u201d, for example).',
      'Read your script aloud before generating audio. If it\u2019s awkward to say, it\u2019ll usually sound awkward in AI narration too.',
    ],
  },
]

export const faqs = [
  {
    q: 'How many characters can I generate per month?',
    a: 'It depends on your plan. Starter includes 10,000 characters/month, Pro includes 100,000, and Business includes unlimited characters.',
  },
  {
    q: 'Can I use generated audio commercially, on YouTube or in ads?',
    a: 'Yes, on Pro and Business plans. The Starter plan is intended for personal and testing use only.',
  },
  {
    q: 'How does voice cloning work?',
    a: 'Upload a short MP3 or WAV sample of a voice. Instant cloning produces a usable voice model in seconds; professional cloning uses longer samples for higher accuracy and is available on the Business plan.',
  },
  {
    q: 'What happens when I run out of credits?',
    a: 'Generation pauses automatically once your character credits run out. You can upgrade your plan or wait for your monthly credits to renew.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'We support UPI, Google Pay, PhonePe, Paytm, and all major debit and credit cards via Razorpay.',
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Yes. You can upgrade, downgrade, or cancel from your dashboard billing page at any time. Changes apply from your next billing cycle.',
  },
  {
    q: 'Do you offer an API for developers?',
    a: 'Yes, API access is included on the Business plan, with documentation for integrating VoiceForge into your own apps and workflows.',
  },
]

export const testimonials = [
  {
    name: 'Ritika Sharma',
    role: 'YouTube Creator, 240K subscribers',
    quote: 'I went from spending a full day recording voiceovers to generating a week of videos in one sitting. The Hindi voices finally sound natural.',
  },
  {
    name: 'Daniel Cho',
    role: 'Podcast Producer',
    quote: 'We use it for every intro and sponsor read across six shows. Consistent, fast, and the emotion controls actually make a difference.',
  },
  {
    name: 'Aman Verma',
    role: 'Founder, EdTech Startup',
    quote: 'Voice cloning let us keep our instructor\u2019s voice across hundreds of course videos without booking studio time for every update.',
  },
]

// Admin panel mock data
export const adminStats = {
  dailyRevenue: 18420,
  monthlyRevenue: 412600,
  totalUsers: 8214,
  activeUsers: 5390,
  conversionRate: 4.8,
  subscriptionGrowth: 12.3,
}

export const adminRevenueSeries = [
  { month: 'Jan', revenue: 248000 },
  { month: 'Feb', revenue: 271000 },
  { month: 'Mar', revenue: 305000 },
  { month: 'Apr', revenue: 338000 },
  { month: 'May', revenue: 379000 },
  { month: 'Jun', revenue: 412600 },
]

export const adminUsers = [
  { id: 'U-1001', name: 'Ritika Sharma', email: 'ritika@example.com', plan: 'Pro', status: 'Active', joined: 'Jan 12, 2026' },
  { id: 'U-1002', name: 'Daniel Cho', email: 'daniel@example.com', plan: 'Business', status: 'Active', joined: 'Feb 03, 2026' },
  { id: 'U-1003', name: 'Aman Verma', email: 'aman@example.com', plan: 'Business', status: 'Active', joined: 'Feb 21, 2026' },
  { id: 'U-1004', name: 'Sneha Patil', email: 'sneha@example.com', plan: 'Starter', status: 'Past Due', joined: 'Mar 14, 2026' },
  { id: 'U-1005', name: 'Imran Khan', email: 'imran@example.com', plan: 'Pro', status: 'Active', joined: 'Mar 30, 2026' },
  { id: 'U-1006', name: 'Olivia Brown', email: 'olivia@example.com', plan: 'Starter', status: 'Suspended', joined: 'Apr 09, 2026' },
  { id: 'U-1007', name: 'Karthik Raman', email: 'karthik@example.com', plan: 'Pro', status: 'Active', joined: 'Apr 28, 2026' },
]

export const adminPayments = [
  { id: 'PAY-9931', user: 'Ritika Sharma', plan: 'Pro', amount: 499, method: 'UPI', status: 'Success', date: 'Jun 13, 2026' },
  { id: 'PAY-9930', user: 'Daniel Cho', plan: 'Business', amount: 999, method: 'Card', status: 'Success', date: 'Jun 13, 2026' },
  { id: 'PAY-9929', user: 'Sneha Patil', plan: 'Starter', amount: 99, method: 'UPI', status: 'Failed', date: 'Jun 12, 2026' },
  { id: 'PAY-9928', user: 'Imran Khan', plan: 'Pro', amount: 499, method: 'PhonePe', status: 'Success', date: 'Jun 12, 2026' },
  { id: 'PAY-9927', user: 'Karthik Raman', plan: 'Pro', amount: 499, method: 'Card', status: 'Success', date: 'Jun 11, 2026' },
]

export const adminCoupons = [
  { code: 'WELCOME20', discount: '20% off first month', uses: 412, status: 'Active' },
  { code: 'PODCAST50', discount: '\u20b950 off Pro plan', uses: 88, status: 'Active' },
  { code: 'DIWALI2025', discount: '30% off all plans', uses: 1204, status: 'Expired' },
]

// Account / profile
export const userProfile = {
  name: 'Shreya Kapoor',
  email: 'shreya@example.com',
  initials: 'SK',
  plan: 'Pro',
  joined: 'Jan 18, 2026',
  language: 'English (India)',
  timezone: 'Asia/Kolkata (GMT+5:30)',
}

// API access (Business plan)
export const apiKeys = [
  { id: 'key_live_1', label: 'Production', key: 'vf_live_4f9a\u2026e21c', created: 'Mar 02, 2026', lastUsed: 'Jun 13, 2026' },
  { id: 'key_test_1', label: 'Test / Sandbox', key: 'vf_test_8b21\u2026 90ad', created: 'Mar 02, 2026', lastUsed: 'Jun 10, 2026' },
]

// Favorited voices (subset of voice ids from `voices`)
export const favoriteVoiceIds = ['v05', 'v07', 'v13', 'v01', 'v16']

// Extended generation history (for pagination demos)
export const generationHistory = [
  ...recentActivity,
  { id: 'a6', name: 'Course_Module3_Intro.mp3', voice: 'Priya Ma\u2019am \u2014 Teacher', date: 'Jun 08, 2026', characters: 1280, status: 'Downloaded' },
  { id: 'a7', name: 'Ad_Diwali_Promo_HI.mp3', voice: 'Rohan \u2014 Hindi Narrator', date: 'Jun 07, 2026', characters: 340, status: 'Downloaded' },
  { id: 'a8', name: 'Podcast_Ep11_Outro.mp3', voice: 'Zara \u2014 Podcast Female', date: 'Jun 06, 2026', characters: 180, status: 'Generated' },
  { id: 'a9', name: 'Documentary_Segment2.mp3', voice: 'Nova \u2014 Documentary', date: 'Jun 05, 2026', characters: 2150, status: 'Downloaded' },
  { id: 'a10', name: 'IVR_Greeting_TA.mp3', voice: 'Karthik \u2014 Tamil Voice', date: 'Jun 04, 2026', characters: 95, status: 'Downloaded' },
  { id: 'a11', name: 'YouTube_Short_Hook.mp3', voice: 'Sophie \u2014 Warm Female', date: 'Jun 03, 2026', characters: 60, status: 'Generated' },
  { id: 'a12', name: 'Audiobook_Ch5.mp3', voice: 'Meera \u2014 Storytelling Female', date: 'Jun 02, 2026', characters: 4980, status: 'Downloaded' },
]
