import "./Contact.scss";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div
          className="min-h-[300px] hero"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2017/05/30/01/36/contact-us-2355449_1280.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-main-sec my-[100px] ">
        <div className="container flex flex-col items-center content-center justify-center">
          <div className="text-3xl text-center title">
            CONTACT US FOR ANY QUESTIONS
          </div>
          <div className="mt-10 hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="py-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  magni animi quibusdam consequuntur, aliquam enim pariatur
                  saepe similique quod, magnam cum minus harum ullam consectetur
                  fugiat vitae nihil doloremque eum.
                </p>
              </div>
              <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      placeholder="phone"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="company"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <textarea
                      name=""
                      id=""
                      cols="40"
                      rows="5"
                      className="textarea textarea-bordered"
                    ></textarea>
                  </div>
                  <div className="mt-6 form-control">
                    <button className="btn btn-primary">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
