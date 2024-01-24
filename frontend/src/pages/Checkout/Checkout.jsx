import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="my-5 checkout">
      <div className="container px-5">
        <div className="flex flex-col gap-5 cheakout-wrap md:flex-row">
          {/* Left */}
          <div className="basis-full md:basis-3/4 ">
            <h1 className="mb-10 text-3xl title">Shipping Address</h1>
            <div className="w-full shadow-2xl card shrink-0 bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Address 1"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Address 2"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Zip"
                    className="input input-bordered"
                  />
                </div>
                <div className="flex gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <input
                    type="number"
                    placeholder="Phone"
                    className="input input-bordered"
                  />
                </div>
                {/* <div className="mt-6 form-control">
                  <button className="btn btn-primary">Login</button>
                </div> */}
              </form>
            </div>
          </div>
          {/* Right */}
          <div className="basis-full md:basis-1/4">
            <div className="w-full max-w-sm shadow-2xl mt-[75px] card shrink-0 bg-base-100">
              <div className="card-body">
                <h1 className="mb-10 text-3xl title">Order Summary</h1>
                <p>
                  Subtotal: <span className="mb-10 font-bold">$80</span>
                </p>
                <p>
                  Total: <span className="font-bold">$80</span>
                </p>
                <div className="mt-6 form-control">
                  <button className="btn btn-primary">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
