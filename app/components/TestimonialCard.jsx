export function TestimonialCard({testimonial}) {
  return (
    <div className="-bg-main-bg my-auto px-6 py-6 rounded-2xl min-h-[277px] flex flex-col justify-center md:max-w-[520px] mx-auto">
      <div className="hidden md:block">
        <img
          src={testimonial.thumbnail}
          alt={testimonial.name + ' thumbnail'}
          className="min-h-[280px] min-w-full max-w-full max-w-full-[280px] bg-slate-500 rounded-2xl md:mb-5"
        />
      </div>
      <article className="-text-main-fg text-sm font-inter lg:text-base">
        {testimonial.content}
      </article>
      <div className="flex items-center gap-4 mt-8">
        <img
          src={testimonial.uploaderImage}
          alt={testimonial.name}
          className="max-w-[50px] max-h-[50px] h-[50px] w-[50px] rounded-full object-cover"
        />
        <span className="capitalize -text-main-fg font-inter text-sm lg:text-base">
          {testimonial.name} -{' '}
          <span className="font-bold">{testimonial.position}</span>
        </span>
      </div>
    </div>
  );
}
