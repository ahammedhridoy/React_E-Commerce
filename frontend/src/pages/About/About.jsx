import "./About.scss";

const About = () => {
  return (
    <div className="contact">
      <div className="container">
        <div
          className="min-h-[300px] hero"
          style={{
            backgroundImage:
              "url(https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-main-sec my-[100px] ">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex-1 p-5 left-sec">
              <img
                src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-img-1-opt.jpg.webp"
                alt=""
              />
            </div>
            <div className="flex-1 p-5 right-sec">
              <h1 className="mb-5 text-3xl font-bold">
                About our online store
              </h1>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff. Dictumst per ante cras suscipit nascetur
                ullamcorper in nullam fermentum condimentum torquent iaculis
                reden posuere potenti viverra condimentum dictumst id tellus
                suspendisse convallis condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
