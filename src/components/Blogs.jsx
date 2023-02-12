import React from "react";
import "../styles/Blogs.css";
import Blog1 from "../assets/blog-1.jpg";
import Blog2 from "../assets/blog-2.jpg";
import Blog3 from "../assets/blog-3.jpg";
import Blog4 from "../assets/blog-4.jpg";
import Blog5 from "../assets/blog-5.jpg";
import Blog6 from "../assets/blog-6.jpg";
import ReadMore from "./ReadMore";

const Title = "Blogs";

function Blogs() {
  return (
    <div>
      <title>{Title}</title>
      <section id="blog">
        <div className="blog-heading">
          <span>Recent Posts</span>
          <h3>Blogs</h3>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={Blog1} alt="" />
            </div>
            <div className="blog-text">
              <span>1st April 2021/Blogs</span>
              <a href="#" className="blog-title">
                Stay ahead of disease and keep dairy cows healthy
              </a>
              <br />
              {/* <p>
                We wish it wasn’t true, but mastitis and reproductive issues
                aren’t the only challenges you face. Health problems such as
                displaced abomasums, lameness and even indigestion can
                negatively impact your farm’s finances. In fact, displaced
                abomasums can cost $250 per sick cow and take up to two weeks
                for the cow to resume normal milk production. We want to help
                you keep your cows healthy so you can stay one step ahead of
                disease.
              </p> */}
              <ReadMore limit={141}>
                We wish it wasn’t true, but mastitis and reproductive issues
                aren’t the only challenges you face. Health problems such as
                displaced abomasums, lameness and even indigestion can
                negatively impact your farm’s finances. In fact, displaced
                abomasums can cost $250 per sick cow and take up to two weeks
                for the cow to resume normal milk production. We want to help
                you keep your cows healthy so you can stay one step ahead of
                disease.
              </ReadMore>
              {/* <p>
                We wish it wasn’t true, but mastitis and reproductive issues
                aren’t the only challenges you face. Health problems such as
                displaced abomasums
              </p> */}
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Blog2} alt="" />
            </div>
            <div className="blog-text">
              <span>1st April 2021/Blogs</span>
              <a href="#" className="blog-title">
                Reduce impacts of mastitis in cows
              </a>
              <br />
              {/* <p>
                Mastitis costs the dairy industry nearly $2 billion annually.
                Roughly two-thirds of that cost is the result of reduced milk
                production in cows affected with subclinical mastitis. Reducing
                the incidence of mastitis and treating it sooner gives you the
                opportunity to save money with the following:
                <br />
                • Avoiding discarded abnormal milk or milk withheld from treated
                cows
                <br />
                • Having to replace affected cows early in lactation
                <br />
                • Decreasing costs of drugs and veterinary services
                <br />• Eliminating increased labour costs
              </p> */}
              <ReadMore limit={141}>
                Mastitis costs the dairy industry nearly $2 billion annually.
                Roughly two-thirds of that cost is the result of reduced milk
                production in cows affected with subclinical mastitis.Reducing
                the incidence of mastitis and treating it sooner gives you the
                opportunity to save money by avoiding discarded abnormal milk or
                milk withheld from treated cows, having to replace affected cows
                early in lactation, descreasing costs of drugs and veterinary
                services, and eliminating increased labor costs.
              </ReadMore>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Blog3} alt="" />
            </div>
            <div className="blog-text">
              <span>1st April 2021/Blogs</span>
              <a href="#" className="blog-title">
                Maximize dairy cow reproduction
              </a>
              <br />
              <ReadMore limit={141}>
                Maximizing dairy cow reproduction can be an expensive and
                time-consuming management area on today’s dairy farms. Each day
                a cow remains open can cost you $2, and each missed heat can
                cost an upwards of $42. One case of metritis can cost you
                between $300-$350 *. On top of that, the Dairy Cattle
                Reproductive Council estimates 26% of total dairy cattle culled
                on a farm are due to reproductive issues. But you don’t have to
                fear those numbers – Nedap is here to help.
              </ReadMore>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Blog4} alt="" />
            </div>
            <div className="blog-text">
              <span>1st April 2021/Blogs</span>
              <a href="#" className="blog-title">
                Tracking and knowing every detail of your cow’s nutrition has
                never been so easy
              </a>
              <br />
              <ReadMore limit={141}>
                Your dairy cow nutrition program affects the productivity of
                your cows and the overall success of your dairy. When the
                average case of ketosis costs you $289, and as much as $375 for
                first calf heifers *, keeping all cows healthy from any disease
                matters. If you could identify sick cows before a decrease in
                production, would you?
              </ReadMore>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Blog5} alt="" />
            </div>
            <div className="blog-text">
              <span>1st April 2021/Blogs</span>
              <a href="#" className="blog-title">
                Identify sick cows early to keep more milk in the tank
              </a>
              <br />
              <ReadMore limit={155}>
                Accurately identifying individual-cow milk production and
                components can help you better understand the performance of
                your herd and identify opportunities to adjust management areas
                on your farm. Nedap understands farmers are faced with the
                struggle of mastitis incidences and continuously looking for
                ways to improve cow milk production. We want you to win at both.
              </ReadMore>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Blog6} alt="" />
            </div>
            <div className="blog-text">
              <span>1st April 2021/Blogs</span>
              <a href="#" className="blog-title">
                We have what you need to make your dairy farm better without
                boundaries
              </a>
              <br />
              <ReadMore limit={141}>
                Each day, a cow can reach peak performance by producing about
                10% of her bodyweight in milk. To consistently deliver that
                level of performance, cows must be in top condition. Excellent
                dairy cattle management is the responsibility of every dairy
                farmer, herd manager and employee. As farms become larger and
                labor needs increase, the efficiency and effectiveness of your
                farm becomes more important.
              </ReadMore>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
