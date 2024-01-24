/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Link, useParams } from "react-router-dom";
import all_product from "../../components/Assets/all_product";
import "./SingleProduct.scss";

const SingleProduct = ({ addToCart }) => {
  const { id } = useParams();

  const productId = parseInt(id, 10);

  const product = all_product?.find((product) => product?.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, category, image, new_price, old_price } = product;

  return (
    <div className="single-product">
      <div className="container p-5">
        <div className="flex flex-col gap-4 my-10 md:flex-row shop-wrap ">
          {/* Left */}
          <div className="left basis-full md:basis-2/4">
            <div className="left-wrap">
              <div className="main-img">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="right basis-full md:basis-2/4">
            <h2 className="mb-5 text-2xl">{name}</h2>
            <p className="mb-5 font-bold">New Price: ${new_price}</p>
            <p className="mb-5 font-bold">Old Price: ${old_price}</p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              repellat eius dignissimos deserunt aperiam sunt culpa. Quis
              officia recusandae, similique eos magnam pariatur, odio architecto
              alias distinctio perferendis corrupti quia.
            </p>
            <div className="flex gap-3 mb-5">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
            <p className="mb-5">
              Category:<span className="font-bold"> {category} </span>
            </p>
          </div>
        </div>

        {/* Product info */}
        {/* <div className="product-info">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="w-20 tab"
              aria-label="DESCRIPTION"
            />
            <div
              role="tabpanel"
              className="p-6 tab-content bg-base-100 border-base-300 rounded-box"
            >
              <p>
                Cubilia vestibulum interdum nisl a parturient a auctor
                vestibulum taciti vel bibendum tempor adipiscing suspendisse
                posuere libero penatibus lorem at interdum tristique iaculis
                redosan condimentum a ac rutrum mollis consectetur. Aenean
                nascetur vehicula egestas a adipiscing a est egestas suspendisse
                parturient diam adipiscing mattis elementum velit pulvinar
                suscipit sagittis facilisis facilisi tortor morbi at aliquam.
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="w-20 tab"
              aria-label="ADDITIONAL INFORMATION"
            />
            <div
              role="tabpanel"
              className="p-6 tab-content bg-base-100 border-base-300 rounded-box"
            >
              <p>
                Cubilia vestibulum interdum nisl a parturient a auctor
                vestibulum taciti vel bibendum tempor adipiscing suspendisse
                posuere libero penatibus lorem at interdum tristique iaculis
                redosan condimentum a ac rutrum mollis consectetur. Aenean
                nascetur vehicula egestas a adipiscing a est egestas suspendisse
                parturient diam adipiscing mattis elementum velit pulvinar
                suscipit sagittis facilisis facilisi tortor morbi at aliquam.
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="REVIEWS (0)"
            />
            <div
              role="tabpanel"
              className="p-6 tab-content bg-base-100 border-base-300 rounded-box"
            >
              *****
            </div>
          </div>
        </div> */}

        {/* Recent Product */}
        <div className="mt-20 new-collection">
          <h1 className="mb-5 text-5xl font-bold text-center">
            Recent Products
          </h1>
          <div className="all-products">
            <div className="grid grid-cols-1 gap-4 px-4 product-wrap md:grid-cols-2 lg:grid-cols-4">
              {all_product.slice(0, 8).map((product) => (
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
                      <button className="mt-3 btn btn-primary">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
