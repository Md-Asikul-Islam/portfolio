import { Blog } from "../types/index";
import blogImg_1 from "../assests/blog/one.png"
import blogImg_2 from "../assests/blog/two.png"
import blogImg_3 from "../assests/blog/three.png"
import blogImg_4 from "../assests/blog/four.png"
import blogImg_5 from "../assests/blog/five.png"
import blogImg_6 from "../assests/blog/six.png"
export const blogs: Blog[] = [
  {
    title: 'Why props are Imutalble ',
    image : blogImg_1,
    excerpt: 'Props are read-only. Child components cannot directly modify them. To change data, the parent must send a new object or value.',
    date: '2024-03-15',
    readTime: '5 min read',
    slug: 'https://medium.com/@mdasikuli48/why-props-are-imutalble-dc72484ef9e8?postPublishedType=repub',
  },
  {
    title: 'why should I use React',
    excerpt: "React makes it easier to build fast and scalable web applications through a component-based architecture.",
    image : blogImg_2,
    date: '2024-03-10',
    readTime: '8 min read',
    slug: 'https://medium.com/@mdasikuli48/why-should-i-use-react-53e12fd2cb37',
  },
  {
    title: 'Building Grid Layouts with vanila CSS',
    image : blogImg_3,
    excerpt: 'Tips and tricks for creating responsive designs using Vanila CSS.',
    date: '2024-03-05',
    readTime: '6 min read',
    slug: 'https://medium.com/@mdasikuli48/grid-container-50037f4644ad?postPublishedType=initial',
  },
  {
    title: 'Understanding Event Loop',
    image : blogImg_4,
    excerpt: 'A deep dive into Javascript Event Loop and how to use them effectively.',
    date: '2024-03-01',
    readTime: '7 min read',
    slug: 'https://medium.com/@mdasikuli48/event-loop-75e8b00c87c1?postPublishedType=initial',
  },
  {
    title: 'Prototype inheritance',
     image : blogImg_5,
    excerpt: 'Here, the function acts like a blueprint for creating objects, so it is considered a constructor function.',
    date: '2024-02-25',
    readTime: '4 min read',
    slug: 'deploying-nextjs-applications-on-vercel',
  },
  {
    title: 'Building a RESTful API with Node.js and Express',
    image : blogImg_6,
    excerpt: 'Learn how to create a RESTful API using Node.js and Express.',
    date: '2024-02-20',
    readTime: '10 min read',
    slug: 'building-a-restful-api-with-nodejs-and-express',
  },
];
