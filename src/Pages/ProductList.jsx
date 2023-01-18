import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";
import SideBar from "./SideBar";
import { store } from "../Redux/store";
import ProductItem from "../Components/ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts("men"));
  }, []);

  //console.log(store.getState())
  console.log(products);

  // ..........................................
  return (
    <>
      <div>
        <div>ProductLIst</div>
        {/* <SideBar /> */}
        {products.map((el) => {
          return (
            <div>
              <ProductItem {...el} />
            </div>
          );
        })}
      </div>

      <div>
        <div className="buy-men-tshrt">
          <p>
            T-shirts are without a doubt every mans favourite garment. They are
            versatile, stylish and can be worn in a million different ways. In
            fact, there are so many varieties when it comes to t-shirts for men
            that it could be difficult to settle on a particular kind while
            shopping. A t-shirt can be styled even with shirts for men to create
            fun ensembles that are semi-formal or smart casual. There is a
            t-shirt for men that can complement any kind of lowers that you
            might have in mind, be it,
            <b>track pants, lounge shorts or innerwear</b>.
            <br />
            You can also select and style a t-shirt for men according to the
            season and occasion, which means that the same garment could be used
            to create completely different looks entirely depending on the
            scenario and weather. However, to be able to do this successfully,
            you must first have an understanding of styling t-shirts and your
            personal preference; this includes how you would like to project
            yourself. Read on to find out more.
          </p>
          <br />
          <h3>STYLING A T-SHIRT FOR MEN</h3>
          <p>
            We have covered the basics and thrown in a couple of tricks to style
            a t-shirt for men in the best way, so read on and take notes.
          </p>
          <br />
          <p>Colors</p>
          <p>
            When it comes to a t-shirt for men, there are a few colours which
            are essential in any wardrobe. These are the most basic colours
            which will set the tone for your collection; they are white, black,
            navy blue and grey. Apart from this, you can also add on dark shades
            of maroon, green and brown to mix and match with your joggers or
            tracksuits.
          </p>
          <br />
          <p>Fits</p>
          <br />
          <p>
            Generally speaking, the fits of t-shirts for men range from
            long-line, regular, slim, fitted and loose. There is no set rule in
            particular when it comes to choosing one over the other. Having said
            that, you must take time to know what works best with your body type
            and fashion sensibilities. For instance, a fitted t-shirt for men
            would flatter a fit physique or can work to be an inner layer, for a
            winter look.
          </p>
          <br />
          <p>Necklines</p>
          <br />
          <p>
            The three most common necklines are crew, scoop and V-neck but there
            are combinations and variations of these too. You are likely to
            notice that the crew neckline is the most versatile style and is
            worn widely. To start off your collection, you can work with an
            understanding of the above-mentioned options and choose accordingly.
          </p>
          <br />
          <h2>SELECT A T-SHIRT FOR MEN ONLINE</h2>
          <p>
            We have an absolutely wide variety of t-shirts for men on Myntra and
            here are a few of our favourites to start you off in the right
            direction.
          </p>
          <p>GAS Men Black Printed Round Neck T-shirt</p>
          <p>
            If you are all about that rocker chic look, then this t-shirt for
            men is surely up your alley. It has a round neckline, short sleeves
            and a graphic print in front. This can be paired with tapering
            jeans, sneakers and a leather strap watch.
          </p>
          <p>
            Whether you enjoy playing cricket or are a fan of the game, you
            should definitely have this piece in your collection. It is made of
            light-weight polyester and boasts Nikes DRI-FIT technology. Polo
            Ralph Lauren Cotton Blend Fleece Pullover
          </p>
          <p>
            This t-shirt is inspired by old-school baseball tees and is washed
            to have a vintage look. The grey melange and navy colours complement
            cargo pants or lounge shorts and will look great paired with white
            sneakers. <b> GET YOUR SHOPPING ON!</b> Visit Myntra and transform
            your closet with garments for every occasion. We bring you all the
            top brands at your fingertips, with the best discounts and a wide
            selection to pick from. So log in to Myntra today and get shopping
            on-the-go!
          </p>
        </div>
        <div className="men pricelist">
          <h2>MEN T-SHIRTS PRICE LIST</h2>
          <div className="menTshrt">
            <h3>Men T-shirt</h3>
            <p>
              Huetrap Men Beige & Black Typography Printed Sustainable T-shirt
            </p>
            <p>
              HRX by Hrithik Roshan Men Teal Blue Printed Pure Cotton T-shirt
            </p>
            <p>Louis Philippe Sport Men Black Polo Collar T-shirt</p>
            <p>Allen Solly Men Black Solid Polo Collar Regular Fit T-shirt</p>
            <p>
              Difference of Opinion Men Mint Green Round Neck Drop-Shoulder
              Sleeves Cotton Loose T-shirt
            </p>
            <p>
              Tommy Hilfiger Men Navy Blue Relaxed Fit Brand Logo Embroidered
              Organic Cotton T-shirt
            </p>
            <p>HM Men White Solid Cotton Pure Cotton T-shirt Regular Fit</p>
            <p>
              HRX by Hrithik Roshan Men Yellow Printed Cotton Pure Cotton
              T-shirt
            </p>
            <p>Louis Philippe Sport Men Brown Polo Collar T-shirt</p>
            <p>Roadster Men Grey Melange Longline T-shirt with Raw Edges</p>
          </div>
          <div className="menPrice">
            <h3>PRICE</h3>

            <p>Rs.296</p>
            <p>Rs.349</p>
            <p>Rs.766</p>
            <p>Rs.404</p>
            <p>Rs.467</p>
            <p>Rs.3999</p>
            <p>Rs.399</p>
            <p>Rs.279</p>
            <p>Rs.766</p>
            <p>Rs.359</p>
          </div>
        </div>
        <div className="bestSell">
          <h3>
            <b>BESTSELLER:</b>
          </h3>
          <b>
            Roadster Men White Pure Cotton T-shirt | HRX by Hrithik Roshan Men
            Yellow Printed Cotton Pure Cotton T-shirt | Urbano Fashion Men Teal
            Green Slim Fit Tropical Printed Pure Cotton T-shirt | Huetrap Men
            Beige & Black Typography Printed Sustainable T-shirt | Roadster Men
            Black Cotton Pure Cotton T-shirt | Louis Philippe Jeans Men Black
            Graphic Printed Pure Cotton Slim Fit Casual T-shirt | HRX by Hrithik
            Roshan Men Olive Green Solid Bio-Wash Running Tshirt.
          </b>
        </div>
      </div>
    </>
  );
};

export default ProductList;
