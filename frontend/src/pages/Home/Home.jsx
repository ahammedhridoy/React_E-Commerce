/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Home.scss";
import all_product from "../../components/Assets/all_product";
import { useState } from "react";

const Home = ({ addToCart }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };
  return (
    <div className="home">
      <div className="container">
        {/* Hero */}
        <div className="hero-wrap">
          <div
            className="min-h-[70vh] hero"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Our Shop</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  rem nam temporibus magnam necessitatibus illum unde, minima
                  saepe culpa ex autem consequatur cumque quasi numquam animi,
                  dolorem iusto accusantium odio?
                </p>
                <Link className="btn btn-primary" to={"/shop"}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* New Collection */}
        <div className="mt-40 new-collection">
          <h1 className="mb-5 text-5xl font-bold text-center">
            New Collections
          </h1>
          <div className="all-products">
            <div className="grid grid-cols-1 gap-4 px-4 product-wrap md:grid-cols-2 lg:grid-cols-4">
              {all_product.slice(0, visibleProducts).map((product) => (
                <div
                  className="shadow-xl w-100 card bg-base-100"
                  key={product.id}
                >
                  <Link to={`/products/${product?.id}`}>
                    <figure>
                      <img src={product.image} alt="Shoes" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="p-3">{product.category}</p>
                    <div className="flex justify-start gap-2 price">
                      <p>{product.old_price}</p>
                      <p>{product.new_price}</p>
                    </div>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="justify-end card-actions">
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-3 btn btn-primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={loadMore} className="mt-5 btn btn-primary">
                Load More
              </button>
            </div>
          </div>
        </div>

        {/* offers */}
        <div className="mt-40 bg-white offer">
          <div className="min-h-50 hero ">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <img
                src="https://cdn.pixabay.com/photo/2016/09/30/19/10/ecommerce-1706105_1280.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">50% OFF!</h1>
                <p className="py-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, laboriosam rem! Mollitia quod error nostrum illum ipsa
                  a vitae maxime non excepturi accusamus perferendis, ut quas!
                  Totam tempore officiis cum.
                </p>
                <Link className="btn btn-primary" to={"/shop"}>
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Women Collection */}
        <div className="mt-40 women-collection">
          <h1 className="mb-5 text-5xl font-bold text-center">
            Women Collections
          </h1>
          <div className="all-products">
            <div className="grid grid-cols-1 gap-4 px-4 product-wrap md:grid-cols-2 lg:grid-cols-4">
              {all_product.slice(0, visibleProducts).map((product) => (
                <div
                  className="shadow-xl w-100 card bg-base-100"
                  key={product.id}
                >
                  <Link to={"/product/:slug"}>
                    <figure>
                      <img src={`/products/${product?.id}`} alt="Shoes" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="p-3">{product.category}</p>
                    <div className="flex justify-start gap-2 price">
                      <p>{product.old_price}</p>
                      <p>{product.new_price}</p>
                    </div>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="justify-end card-actions">
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-3 btn btn-primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={loadMore} className="mt-5 btn btn-primary">
                Load More
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-40 newsletter">
          <div
            className="min-h-[30vh] hero"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2018/07/18/13/05/ecommerce-3546296_1280.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-center">
                  Newsletter
                </h1>
                <form>
                  <fieldset className="flex flex-row justify-center text-center w-100">
                    <div className="mt-5 join">
                      <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item"
                      />
                      <button className="btn btn-primary join-item">
                        Subscribe
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
