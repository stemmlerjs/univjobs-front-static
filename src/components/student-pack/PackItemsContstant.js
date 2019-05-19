
import reebok from '../../img/pack/companies/reebok.png'
import scholarshipsCanada from '../../img/pack/companies/scholarshipscanada.png'
import isic from '../../img/pack/companies/isic.png'
import clubmonaco from '../../img/pack/companies/club-monaco.png'
import nike from '../../img/pack/companies/nike.png'
import amazon from '../../img/pack/companies/amazon.png'
import aircanada from '../../img/pack/companies/aircanada.png'
import contiki from '../../img/pack/companies/contiki.jpg'
import skillshare from '../../img/pack/companies/skillshare.png'
import audible from '../../img/pack/companies/audible.png'
import adidas from '../../img/pack/companies/adidas.png'
import microsoft from '../../img/pack/companies/microsoft.png'
import spotify from '../../img/pack/companies/spotify.png'
import jcrew from '../../img/pack/companies/jcrew.png'
import applemusic from '../../img/pack/companies/applemusic.svg'
import puma from '../../img/pack/companies/puma.png'
import onthehub from '../../img/pack/companies/onthehub.png'


const PackItemsContstant = [
  { 
    companyDescription: `An English footwear and apparel company, 
      producing and distributes fitness, running and CrossFit sportswear 
      including clothing and footwear.`,
    offering: '45% Off Online Store',
    link: 'https://www.reebok.ca/en/student-purchase-program',
    logo: reebok
  },
  { 
    companyDescription: `Canada's foremost web site for scholarships, student awards and bursaries.`,
    offering: 'Gen Link to Scholarships',
    link: 'https://www.scholarshipscanada.com/',
    logo: scholarshipsCanada
  },
  { 
    companyDescription: `The International Student Identity Card is the only 
      globally accepted and verified student ID. Issued in nearly 130 
      countries with over 150000 benefits.`,
    offering: 'Free cards',
    link: 'https://www.isic.org/get-your-card/',
    logo: isic
  },
  {
    companyDescription: 'Club Monaco a Canadian-founded American high-end casual clothing retailer',
    offering: 'Both full-priced and sale items are 20 per cent off with your valid post-secondary ID. If you’re shopping online.',
    link: 'http://www.clubmonaco.ca/category/index.jsp?categoryId=12724042&ab=footer_student',
    logo: clubmonaco
  },
  {
    companyDescription: 'Nike is a company engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services',
    offering: 'Get 10% OFF Online Only',
    link: 'https://www.myunidays.com/GB/en-GB/partners/nike/micro/online',
    logo: nike
  },
  {
    companyDescription: 'Amazon.com, Inc., is a technology company that focuses on e-commerce, cloud computing, and artificial intelligence',
    offering: 'Get 50% OFF Prime',
    link: 'https://www.amazon.ca/b?ie=UTF8&node=9648404011&_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0',
    logo: amazon
  },
  {
    companyDescription: 'Air Canada is the flag carrier and the largest airline of Canada that provides scheduled and charter air transport for passengers and cargo to 207 destinations worldwide.',
    offering: 'Student Pass: prepaid package of four or six one-way flight credits for one student. You can fly anywhere within Canada or between Canada and the U.S., starting at $134 per flight credit.',
    link: 'https://www.aircanada.com/ca/en/aco/home/book/special-offers/flight-pass/student-pass.html',
    logo: aircanada
  },
  {
    companyDescription: 'Contiki is a Travel Corporation-operated coach tour company operating in Europe, Russia, Egypt, Japan, Australia, New Zealand, North America, South America, and Asia',
    offering: 'Save 25% on Last Min Travel Deals',
    link: 'https://www.contiki.com/ca/en/deals?ExternalRef=COMMJUNCT&Source=AFF&utm_source=cj&utm_medium=affiliate',
    logo: contiki
  },
  {
    companyDescription: 'Skillshare is an online learning community for people who want to learn from educational videos',
    offering: '2 months Free Access',
    link: 'https://join.skillshare.com/get2monthsfree/?clickid=0jRTvG3mjxyJR2n08T289QkFUkl1czzmXzA0040&irgwc=1&utm_content=4650&utm_term=Online%20Tracking%20Link&utm_campaign=Student%20Life%20Network_&affiliateRef=6595003&utm_medium=affiliate-referral&utm_source=IR',
    logo: skillshare
  },
  {
    companyDescription: 'Audible is a seller and producer of spoken audio entertainment, information, and educational programming on the Internet',
    offering: 'Free for first 3 months and 3 free audio books',
    link: 'https://www.amazon.ca/gp/product/B074QG87MH/ref=as_li_ss_tl?&_encoding=UTF8&linkCode=sl1&tag=slnsocial-20&linkId=1184a82ecffbfb6787ef0506f2cdce8c',
    logo: audible
  },
  {
    companyDescription: 'Adidas AG is a multinational corporation that designs and manufactures shoes, clothing and accessories.',
    offering: 'Adidas Canada online store a 30% discount on regular price items and 15% off outlet items',
    link: 'https://www.adidas.ca/en/student-purchase-program',
    logo: adidas
  },
  {
    companyDescription: 'Microsoft Corporation is a technology company that develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and related services',
    offering: 'Microsoft offers a 10% discount on select devices and free Office 365 Education to Canadian students.',
    link: 'https://www.microsoft.com/en-ca/education/students/default.aspx',
    logo: microsoft
  },
  {
    companyDescription: 'Spotify is a audio streaming platform that provides DRM-protected music and podcasts from record labels and media companies.',
    offering: 'Reduced rated for Students',
    link: 'https://www.spotify.com/ca-en/student/',
    logo: spotify
  },
  {
    companyDescription: `J Crew is a multi-brand, multi-channel, specialty retailer offering an assortment of women's, men's and children's apparel and accessories, including swimwear, outerwear, lounge-wear, bags, sweaters, denim, dresses, suiting, jewelry, and shoes`,
    offering: '15% discount to all teachers and college students when they shop with us in our stores and show a valid school ID at checkout.*',
    link: 'https://www.jcrew.com/help/teacher_student_discount.jsp?sidecar=true',
    logo: jcrew
  },
  {
    companyDescription: `Apple Music is a music and video streaming service developed by Apple Inc. Users select music to stream to their device on-demand, or they can listen to existing, curated playlists`,
    offering: 'First 3 months free',
    link: 'https://itunes.apple.com/deeplink?p=subscribe&app=music',
    logo: applemusic
  },
  {
    companyDescription: `Puma SE, branded as Puma, is a company that designs and manufactures athletic and casual footwear, apparel and accessories`,
    offering: 'Save 10% off your purchase at ca.puma.com with this exclusive offer.',
    link: 'https://ca.puma.com/en/ca/student-program-unidays.html',
    logo: puma
  },
  {
    companyDescription: `OnTheHub is dedicated to removing the barriers to education by providing students and faculty with free and discounted software from the world’s leading publishers`,
    offering: 'Discounted software (up to 90 per cent off) or free software for eligible students including titles from Microsoft, Adobe, IBM, VMware, Norton, etc.',
    link: 'https://onthehub.com/',
    logo: onthehub
  }
]

export default PackItemsContstant;