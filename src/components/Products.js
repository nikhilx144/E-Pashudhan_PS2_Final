import React from "react";
import "../styles/Products.css";
import Butter from "../assets/butter.jpeg";
import Yogurt from "../assets/curd.jpg";
import Ghee from "../assets/ghee.jpg";
import Cheese from "../assets/cheese.jpg";
import ButterMilk from "../assets/buttermilk.jpg";
import Cream from "../assets/cream.jpg";
import ReadMore from "./ReadMore";

const Products = () => {
  return (
    <>
      <title>Products</title>
      <section className="card-section">
        <div className="container">
          <center>
            <h1>Products</h1>
          </center>
          <div className="cardBbox">
            <div className="card">
              <img src={Ghee} alt="" />
              <div className="content">
                <h3>Ghee</h3>
                <ReadMore limit={234}>
                  Ghee is typically prepared by simmering butter, which is
                  churned from cream, skimming any impurities from the surface,
                  then pouring and retaining the clear liquid fat while
                  discarding the solid residue that has settled to the bottom.
                  Spices can be added for flavor. The texture, color, and taste
                  of ghee depend on the quality of the butter, the milk source
                  used in the process, and the duration of boiling time.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Yogurt} alt="" />
              <div className="content">
                <h3>Yogurt</h3>
                <ReadMore limit={228}>
                  Yogurt is produced using a culture of Lactobacillus
                  delbrueckii subsp. bulgaricus and Streptococcus thermophilus
                  bacteria. In addition, other lactobacilli and bifidobacteria
                  are sometimes added during or after culturing yogurt. Some
                  countries require yogurt to contain a specific amount of
                  colony-forming units (CFU) of bacteria; in China, for example,
                  the requirement for the number of lactobacillus bacteria is at
                  least 1 million CFU per milliliter.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Cheese} alt="" />
              <div className="content">
                <h3>Cheese</h3>
                <ReadMore limit={188}>
                  A food derived form milk which is produced in wide range of
                  flavors , textures , and forms of coagulation of milk protein
                  casein. Cheese is valued for its portability and long shelf
                  life. The nutritional composition of cheese depends upon the
                  type of cheese. However, we have taken the examples of cheddar
                  and mozzarella to mention the base components of cheese.For
                  healthy brain activity, our body uses the fats it derives from
                  the food we eat.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={ButterMilk} alt="" />
              <div className="content">
                <h3>Buttermilk</h3>
                <ReadMore limit={270}>
                  Originally, buttermilk was the liquid left behind after
                  churning butter out of cream. This type of buttermilk is
                  called traditional buttermilk. When butter is made from
                  fermented cream, the residual is a low-fat, flavorful milk
                  with a viscosity greater than fresh milk. Commercially
                  produced buttermilk is comparable to regular milk in terms of
                  food energy and fat. One cup (237 mL) of whole milk contains
                  660 kilojoules (157 kilocalories) and 8.9 grams of fat. One
                  cup of whole buttermilk contains 640 kJ (152 kcal) and 8.1
                  grams of total fat.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Cream} alt="" />
              <div className="content">
                <h3>Cream</h3>
                <ReadMore limit={169}>
                  Composed of higher butterfat layer skimmed from top of milk
                  before homogenisation. In un homogenised milk, the fat, which
                  id less dense will eventually rise to the top. Heavy whipping
                  cream is high in calories but also rich in healthy fat and
                  several vitamins and minerals. It's generally used in small
                  amounts, such as in coffee or recipes that need a bit of
                  creaminess, so it's unlikely to add significant calories to
                  your diet.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Butter} alt="" />
              <div className="content">
                <h3>Butter</h3>
                <ReadMore limit={171}>
                  Made by churning fresh and fermented cream and milk. It is
                  generally used as a spread and a condiment, as well as in
                  cooking, such as baking, sauce making, and pan frying.
                  Commercial butter is about 80% butterfat and 15% water;
                  traditionally made butter may have as little as 65% fat and
                  30% water. As butter is essentially just the milk fat, so
                  moderate consumption of butter is not a problem for lactose
                  intolerant people. People with milk allergies may still need
                  to avoid butter, which contains enough of the allergy-causing
                  proteins to cause reactions.
                </ReadMore>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
