import {useLoaderData} from '@remix-run/react';

import {
  ProductSwimlane,
  Products,
  Testimonials,
  Accordion,
  AccordionItem,
  Blogs,
  BlogCard,
} from '~/components';

// public assets (will eventually come from backend)
import grace9 from '../../public/images/Grace9.png';
import grace15 from '../../public/images/Grace15.png';

import * as dummyData from '~/data/dummydata';

//#region FRONTEND
export default function HomePage() {
  const {products, swimlaneImages, testimonials, faqs, blogs} = useLoaderData();

  return (
    <>
      <section className="min-w-full -bg-main-bg lg:px-[60px] snap-start">
        <main className="-text-main-fg mx-5 pt-28 relative pb-[13rem] md:pb-[16rem] lg:pt-48">
          <div className="flex flex-col justify-center items-center relative z-10 mx-auto">
            <h1 className="font-inria-serif text-3xl text-center mb-3 lg:text-5xl max-w-[19ch] lg:leading-[60px]">
              Luxurious and high-quality hair extensions.
            </h1>
            <p className="font-inter text-center text-sm mb-10 lg:text-base max-w-[51ch] lg:max-w-[51ch]">
              Our extensions are made with 100% real human hair, so you can
              style them just like your natural hair. We offer a variety of
              lengths, colors, and textures to suit any style or occasion.
            </p>
            <span className="-text-main-fg -bg-main-fg bg-opacity-5 py-2 px-6 items-center rounded-full cursor-pointer lg:px-8 lg:py-4 lg:-bg-accent-rose">
              <span className="font-inter text-base">Check product</span>
            </span>
          </div>

          <div className="absolute -z-0 top-0 translate-y-[5%] right-0 left-0 lg:flex lg:items-center lg:translate-y-[14%]">
            <div className="-bg-accent-beige w-fit overflow-hidden rounded-[200px] -ml-[5.5rem] lg:m-0">
              <Image src={grace15} />
            </div>
            <div className="-bg-accent-beige overflow-hidden rounded-[200px] ml-auto -mr-[5.5rem] -mt-[7.5rem] w-fit lg:m-0 lg:ml-auto">
              <Image src={grace9} />
            </div>
          </div>
        </main>
      </section>

      <section className="-bg-secondary-bg py-7 lg:min-h-screen lg:py-12 snap-start">
        <div className="-text-secondary-fg flex flex-col items-center mb-7">
          <h1 className="font-inria-serif font-light text-3xl lg:text-4xl">
            Before / <span className="font-bold">After</span>
          </h1>
          <p className="font-inter text-sm mt-1 max-w-[33ch] text-center lg:text-base lg:max-w-[100ch]">
            Take a look at our result before and after use our product
          </p>
        </div>
        <ProductSwimlane products={swimlaneImages} />
      </section>

      <section className="min-h-screen -bg-main-bg py-14 px-5 grid lg:pt-24 snap-start">
        <div className="-text-main-fg flex flex-col items-center">
          <h1 className="font-inria-serif text-3xl mb-1 font-normal lg:text-4xl lg:mb-2">
            CleoHair Product
          </h1>
          <p className="text-sm font-inter text-center max-w-[25ch] mb-6 lg:text-base lg:max-w-[95ch] lg:mb-8">
            Get know the product that can make you more beauty
          </p>
          <span className="-text-main-fg -bg-main-fg bg-opacity-5 py-2 px-6 pr-0 items-center rounded-full text-sm lg:text-base mb-8 lg:mb-12">
            <span className="mr-5">Hair extension</span>
            <span className="-text-main-bg -bg-main-fg py-2 px-5 items-center rounded-full w-fit">
              Wigs
            </span>
          </span>
          <Products products={products} />
        </div>
      </section>

      <section className="-bg-secondary-bg px-5 py-8 snap-start lg:min-h-screen lg:py-14">
        <div className="-text-secondary-fg mb-8 lg:mb-12">
          <h1 className="text-center text-3xl font-inria-serif mb-2 lg:text-4xl">
            What are people saying about us
          </h1>
          <p className="text-sm font-inter text-center lg:text-base">
            see what our satisfied customers have to say about their experience
            with CleoHair hair extensions
          </p>
        </div>
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="-bg-main-bg -text-main-fg py-7 px-5 grid lg:pt-36 md:px-24 md:grid-cols-2 lg:gap-10 lg:min-h-screen md:pb-0">
        <h1 className="font-inria-serif font-bold text-2xl mb-5 lg:text-4xl lg:col-end-1 md:max-w-[14ch]">
          Frequently Asked Questions
        </h1>
        <div className="lg:col-start-1 lg:col-end-3">
          <Accordion>
            {faqs &&
              faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.id}
                  number={i + 1}
                  title={faq.title}
                  content={faq.content}
                />
              ))}
          </Accordion>
        </div>
      </section>

      <section
        id="_section_blogs"
        className="-bg-main-bg -text-main-fg py-7 px-5"
      >
        <div className="-text-main-fg grid gap-2 text-center mb-8 lg:mb-16">
          <h1 className="text-3xl font-inria-serif lg:text-4xl">
            Check our blog
          </h1>
          <p className="font-inter text-sm lg:text-base">
            Get update from our news and blog
          </p>
        </div>
        <Blogs>
          {blogs &&
            blogs.map((blog) => (
              <div key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            ))}
        </Blogs>
      </section>
    </>
  );
}

// backend
export function loader() {
  // will eventually pull this from backend.
  // for now, we'll use a loader to load static assets in
  // ./public folder
  const {swimlaneImages, products, testimonials, faqs, blogs} = dummyData;

  return {
    swimlaneImages,
    products,
    testimonials,
    faqs,
    blogs,
  };
}

function Image({src = '#'}) {
  return (
    <img
      src={src}
      alt="face"
      className="object-cover overflow-hidden w-[200px] h-[300px] lg:min-w-[360px] lg:min-h-[500px]"
    />
  );
}

//#endregion FRONTEND
