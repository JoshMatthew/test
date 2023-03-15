export function ProductCard({image}) {
  return (
    <div className="max-w-[350px] max-h-[250px] min-h-[250px] min-w-[350px] rounded-2xl relative product-card overflow-hidden px-5 py-5 flex lg:max-w-[400px] lg:max-h-[294px] lg:min-h-[294px] lg:min-w-[400px]">
      <img
        src={image}
        alt=""
        className="object-cover absolute top-0 bottom-0 left-0"
      />

      <button className="py-4 rounded-full bg-[#ffffff30] backdrop-blur w-full mt-auto">
        <span className="-text-main-fg text-sm font-inter lg:text-base opacity-100">
          Show now
        </span>
      </button>
    </div>
  );
}
