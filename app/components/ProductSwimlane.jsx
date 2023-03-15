const mockProducts = new Array(12).fill({id: Math.random()});

export function ProductSwimlane({products = mockProducts}) {
  return (
    <section className="flex flex-nowrap w-full gap-4 overflow-x-scroll hiddenScroll swimlane lg:gap-[10%]">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="max-w-[260px] max-h-[220px] min-w-[260px] min-h-[220px] overflow-hidden snap-center lg:max-w-[690px] lg:max-h-[460px] lg:min-w-[690px] lg:min-h-[460px] lg:-translate-x-[75%]"
          >
            <img
              src={product.image}
              alt={product.image}
              className="min-w-full min-h-full swimlanecard-img object-cover"
            />
          </div>
        ))}
    </section>
  );
}
