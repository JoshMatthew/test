import {ProductCard} from '~/components';

export function Products({products}) {
  return (
    <div className="grid grid-cols-1 gap-5 mx-auto md:flex md:flex-wrap md:justify-center">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} image={product.image} />;
        })}
    </div>
  );
}
