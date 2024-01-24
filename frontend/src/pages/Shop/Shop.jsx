/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Shop.scss";
import all_product from "../../components/Assets/all_product";
import { useEffect, useState } from "react";

const Shop = ({ addToCart }) => {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    const categorySet = new Set(all_product.map((product) => product.category));
    const uniqueCategoriesArray = Array.from(categorySet);
    setUniqueCategories(uniqueCategoriesArray);
  }, []);

  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  // Filter

  useEffect(() => {
    // Filter products based on the selected category, price range, and search query
    let filtered = all_product;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (min !== "" && max !== "") {
      filtered = filtered.filter(
        (product) =>
          product.new_price >= parseFloat(min) &&
          product.new_price <= parseFloat(max)
      );
    }

    if (searchQuery.trim() !== "") {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(lowercaseQuery)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, min, max]);

  // clear Filter

  const clearFilter = () => {
    window.location.reload();
  };

  return (
    <div className=" shop">
      <div className="container">
        <div
          className="min-h-[300px] hero"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Shop</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-10 md:flex-row shop-wrap ">
          {/* Left */}
          <div className="px-4 left basis-full md:basis-1/4">
            <h1 className="mb-5 text-2xl font-bold">Filter By Category</h1>

            <div className="cat-wrap">
              {uniqueCategories.map((category) => (
                <div className="form-control" key={category}>
                  <label className="cursor-pointer label">
                    <span className="label-text">{category}</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      onChange={() => setSelectedCategory(category)}
                    />
                  </label>
                </div>
              ))}
            </div>

            {/* Price */}

            <h1 className="mt-10 mb-5 text-2xl font-bold">Filter By Price</h1>

            <div className="flex gap-5 price-wrap">
              <input
                type="number"
                placeholder="Min Price"
                className="w-full max-w-[150px] input input-bordered"
                onChange={(e) => setMin(e.target.value)}
                value={min}
              />
              <input
                type="number"
                placeholder="Max Price"
                className="w-full max-w-[150px] input input-bordered"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </div>

            {/* Clear Filter */}
            <div className="mt-10 card-actions">
              <button onClick={clearFilter} className="mt-3 btn btn-primary">
                Clear Filters
              </button>
            </div>
          </div>
          {/* Right */}
          <div className="right basis-full md:basis-3/4">
            {/* Filter */}
            <div className="filter-sec">
              {/* left */}
              <div className="flex justify-between gap-5">
                <h1 className="mb-5 text-2xl font-bold">Shop</h1>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-24 input input-bordered md:w-auto"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              {/* right */}
              <div></div>
            </div>

            {/* product */}
            <div className="mt-10 new-collection">
              <div className="all-products">
                <div className="grid grid-cols-1 gap-4 px-4 product-wrap md:grid-cols-2 lg:grid-cols-4">
                  {filteredProducts.slice(0, visibleProducts).map((product) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
