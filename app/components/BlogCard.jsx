export function BlogCard({blog}) {
  return (
    <div className="max-w-[350px] max-h-[320px] h-[320px] min-w-[350px] product-card overflow-hidden flex md:max-w-[60%] md:max-h-[500px] md:min-h-[500px] md:min-w-[95%] mx-auto">
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="object-cover absolute top-0 bottom-0 left-0"
      />
      <div className="relative z-10 mt-auto mx-auto pb-6 text-center">
        <h2 className="font-inter text-sm font-normal mb-2 lg:text-base">
          {blog.category}
        </h2>
        <h1 className="font-inria-serif text-xl font-bold max-w-[13ch] leading-[115%] lg:text-3xl lg:max-w-[16ch]">
          {blog.title}
        </h1>
      </div>
    </div>
  );
}
