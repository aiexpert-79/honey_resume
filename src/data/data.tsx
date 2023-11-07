import {AcademicCapIcon, ArrowDownTrayIcon, BuildingOffice2Icon, CalendarIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import portfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import avatar from '../images/Honey.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Honey Moharry',
  description: "Honey Moharry's site is built based on React",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Honey Moharry`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Hong Kong</strong> based <strong className="text-stone-100">Machine Learning & Quantum Computing Software Engineer</strong>
        <br></br> currently working at <strong className="text-stone-100">Silicon Quantum Computing (SQC)</strong>
        <br></br> building powerful quantum software and algorithms.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Self-motivated and team player</strong> with strong{' '}<br></br>
        <strong className="text-stone-100">organizational and interpersonal</strong>, skills.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: avatar,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Sydney, NSW', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Australian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Football, book', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Macquarie', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'SQC, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 5,
      },
    ],
  },
  {
    name: 'Artificial Intelligence',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'PyTorch',
        level: 7,
      },
      {
        name: 'Tensorflow',
        level: 8,
      },
    ],
  },
  {
    name: 'Deep Learning',
    skills: [
      {
        name: 'Machine Learning',
        level: 9,
      },
      {
        name: 'Neural Network',
        level: 7,
      },
      {
        name: 'API',
        level: 8,
      },
    ],
  },
  {
    name: 'Web & Mobile development',
    skills: [
      {
        name: 'Frontend Development',
        level: 8,
      },
      {
        name: 'Backend Development',
        level: 8,
      },
      {
        name: 'Mobile Development',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Multi media analysis',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/media.git',
    image: portfolioImage1,
  },
  {
    title: 'Stable Diffusion',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/diffusion_analysis.git',
    image: portfolioImage2,
  },
  {
    title: 'Bucket Brigade Quantify',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/bucket_bridge_qram_circuit.git',
    image: portfolioImage3,
  },
  {
    title: 'Quantum Computer',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/qc_computer.git',
    image: portfolioImage4,
  },
  {
    title: 'Traffic Surveillance',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/Traffic-Rule-Violation-Detection-System.git',
    image: portfolioImage5,
  },
  {
    title: 'Emotion Detection Bot',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/emotion_detection.git',
    image: portfolioImage6,
  },
  {
    title: 'Chat Bot',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/AI_Chatbot.git',
    image: portfolioImage7,
  },
  {
    title: 'Car recognition system',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/car_recognition.git',
    image: portfolioImage8,
  },
  {
    title: 'Stock Price Prediction',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/aiexpert-79/stock.git',
    image: portfolioImage9,
  },
  {
    title: 'My chair',
    description: 'Give a short description of your project here.',
    url: 'https://honey.me',
    image: portfolioImage10,
  },
  {
    title: 'Ny Workplace',
    description: 'Give a short description of your project here.',
    url: 'https://honey.me',
    image: portfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2011 - March 2013',
    location: 'Macquarie University',
    title: 'Bachelor degree on Computer Science',
    content: <p>Weller Scholarship, Achieved 4.3 GPA.</p>,
  },
  {
    date: 'March 2005 - June 2010',
    location: 'School of Business',
    title: 'Full marks',
    content: <p>Studied 20+ subjects, Top 1% among 2000+ pupils.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2018 - Present',
    location: 'SILICON QUANTUM COMPUTING, Sydney, NSW',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        • Worked closely with data scientists, testing algorithm prototypes at scale in production environments using terabytes of real-time data<br></br>
        • Employed a mastery of common programming languages, including Python and C++, to write software prototypes<br></br>
        • Leveraged programming frameworks and big data tools to ensure accurate use of raw data from data pipelines
      </p>
    ),
  },
  {
    date: '2015 - 2018',
    location: 'DIRAQ Sydney, NSW',
    title: 'Quantum software developer',
    content: (
      <p>
        • Consistently met my short and long-term targets.<br></br>
        • Handled customer complaints with empathy and composure.<br></br>
        • Leveraged programming frameworks and big data tools to ensure accurate use of raw data from data pipelines
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Max Sender',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Philip Michel',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'hmh19980907@gmail.com',
      href: 'mailto:hmh19980907@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sydney NSW, Australia',
      href: 'https://www.google.ca/maps/place/Sydney,+NSW/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@honey',
      href: 'https://www.instagram.com/honey/',
    },
    {
      type: ContactType.Github,
      text: 'honey',
      href: 'https://github.com/aiexpert-79',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/aiexpert-79'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/honey'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/au/honey/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/honey/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/honey'},
];
