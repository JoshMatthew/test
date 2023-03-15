// swimlane
import ada1 from '../../public/images/swimlane/ada1.png';
import ada2 from '../../public/images/swimlane/ada2.png';
import ada3 from '../../public/images/swimlane/ada3.png';
import ada4 from '../../public/images/swimlane/ada4.png';
import ada5 from '../../public/images/swimlane/ada5.png';
import ada6 from '../../public/images/swimlane/ada6.png';
import ada7 from '../../public/images/swimlane/ada7.png';
import ada8 from '../../public/images/swimlane/ada8.png';
import ada9 from '../../public/images/swimlane/ada9.png';
import ada10 from '../../public/images/swimlane/ada10.png';
import ada11 from '../../public/images/swimlane/ada11.png';

// product
import ada8wig from '../../public/images/ada8wig.png';

//testimonial thumbnails
import ocean from '../../public/images/testimonials/ocean.jpg';
import field from '../../public/images/testimonials/field.jpg';
import mountains from '../../public/images/testimonials/mountains.jpg';
import pp1 from '../../public/images/testimonials/pp1.jpg';
import pp2 from '../../public/images/testimonials/pp2.jpg';
import pp3 from '../../public/images/testimonials/pp3.jpg';

//blogs
import blog1 from '../../public/images/blogs/blog1.jpg';
import blog2 from '../../public/images/blogs/blog2.jpg';
import blog3 from '../../public/images/blogs/blog3.jpg';

function getId() {
  return Math.random() * 10 + new Date().getMilliseconds();
}

export const swimlaneImages = [
  {
    id: getId(),
    image: ada1,
  },
  {
    id: getId(),
    image: ada2,
  },
  {
    id: getId(),
    image: ada3,
  },
  {
    id: getId(),
    image: ada4,
  },
  {
    id: getId(),
    image: ada5,
  },
  {
    id: getId(),
    image: ada6,
  },
  {
    id: getId(),
    image: ada7,
  },
  {
    id: getId(),
    image: ada8,
  },
  {
    id: getId(),
    image: ada9,
  },
  {
    id: getId(),
    image: ada10,
  },
  {
    id: getId(),
    image: ada11,
  },
];

export const products = [
  {
    id: getId(),
    image: ada8wig,
  },
  {
    id: getId(),
    image: ada8wig,
  },
  {
    id: getId(),
    image: ada8wig,
  },
];

export const testimonials = [
  {
    id: getId(),
    uploaderImage: pp1,
    thumbnail: ocean,
    name: 'stuart',
    position: 'model',
    content:
      'Elit suspendisse quam diam vitae, blandit sed vel. Metus feugiat in sed nibh a facilisi amet sed.',
  },
  {
    id: getId(),
    uploaderImage: pp2,
    thumbnail: mountains,
    name: 'david',
    position: 'head of saloon',
    content:
      'Egestas suspendisse vitae lectus eleifend. Magna dignissim ipsum, eget aliquam erat pharetra, sociis porttitor. Consectetur scelerisque mauris ullamcorper aenean est mauris dis donec. Ornare ac amet condimentum morbi. Pellentesque sit sed ultrices purus amet pellentesque.',
  },
  {
    id: getId(),
    uploaderImage: pp3,
    thumbnail: field,
    name: 'ross',
    position: 'artist',
    content:
      'Mauris, quis dui ornare libero eget. Ultrices semper cursus ut sagittis at mattis scelerisque diam.',
  },
];

export const faqs = [
  {
    id: getId(),
    title: 'What payment methods do you accept?',
    content: 'We accept payments through credit cards, PayPal, and bank',
  },
  {
    id: getId(),
    title: 'What is your return policy?',
    content:
      'Our return policy allows for returns within 30 days of purchase, as long as the item is in its original condition.',
  },
  {
    id: getId(),
    title: 'Do you offer international shipping?',
    content:
      'Yes, we offer international shipping. Shipping rates vary depending on the destination.',
  },
  {
    id: getId(),
    title: 'How do I track my order?',
    content:
      'You can track your order by logging into your account and viewing the order status, or by using the tracking number provided in your order confirmation email.',
  },
  {
    id: getId(),
    title: 'What is your customer service contact information?',
    content:
      'You can reach our customer service team by phone at 1-800-555-1234, or by email at customerservice@company.com.',
  },
];

export const blogs = [
  {
    id: getId(),
    thumbnail: blog1,
    title: '5 Tips for Glowing Skin',
    category: 'Beauty',
  },
  {
    id: getId(),
    thumbnail: blog2,
    title: '10 Healthy Eating Habits for a Better You',
    category: 'Beauty',
  },
  {
    id: getId(),
    thumbnail: blog3,
    title: 'The Importance of Sleep for Productivity',
    category: 'Beauty',
  },
];
