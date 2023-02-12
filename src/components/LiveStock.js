import React from "react";
import Murrah from "../assets/murrah.jpg";
import Nili_Ravi from "../assets/nili-ravi.jpg";
import Mehsana from "../assets/mehsana.jpg";
import Nagpuri from "../assets/nagpuri.jpg";
import Jaffarabadi from "../assets/jbuffalo.jpg";
import Bhadawari from "../assets/bhadarwari.jpg";
import Surti from "../assets/surti.jpg";
import Toda from '../assets/toda.jpg'
import "../styles/Livestock.css";
import ReadMore from "./ReadMore";

function Livestock() {
  return (
    <>
      <section className="card-section">
        <div className="cantainer">
          <center>
            <h1>Livestock</h1>
          </center>
          <h1 style={{ fontWeight: `lighter`, fontSize: `xx-large` }}>
            Types of Buffaloes
          </h1>
          <div className="cardBox">
            <div className="card">
              <img src={Murrah} alt="" />
              <div className="content">
                <h3>Murrah Buffalo</h3>
                <ReadMore limit={155}>
                  Murrah buffalo is the highest milk yielding Buffalo. It
                  produces on an average 15 liters of milk a day. This is more
                  than most of the cow breeds in India. Murrah is called by many
                  names Kali, Kundi and Delhi. The breed is primarily from
                  Haryana, India. The breed is jet black in color that has short
                  horn and tightly coiled. Advantage of their well-developed
                  udder, Murrah yields around 1000 liters to 2000 liters of milk
                  per lactation. The fat percentage is around 6.9 % to 8.3 % in
                  Murrah’s milk.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Nili_Ravi} alt="" />
              <div className="content">
                <h3>Nili Ravi Buffalo</h3>
                <ReadMore limit={120}>
                  Nili Ravi buffalo breed is the second most milk yield buffalo.
                  On average it produces around 10 liters of milk per day. The
                  Nili ravi is from Punjab province. The breed is also called as
                  Panch Kalyani. The unique walled years and white markings on
                  their forehead, face, legs and tail can be seen in Nili Ravi.
                  Average production of 1500 liters to 1900 liters of milk per
                  lactation. The period lasts for 300 days. The average calving
                  interval is 15 months.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Mehsana} alt="" />
              <div className="content">
                <h3>Mehsana Buffalo</h3>
                <ReadMore limit={142}>
                  Mehsana is a cross between two of the best milking buffaloes
                  Murrah and Surti breeds. Mehsana buffalo is from the Mehsana
                  district of Gujarat. Mehsana is called by several alternate
                  names Mahesani and Mehsani. The unique sickle-shaped horns
                  that are curved can be seen on Mehsana. Also, the body color
                  is blackish brown or brown. Average milk production of Mehsana
                  buffalo is 1200 to 1500 liters per lactation. The fat
                  percentage is 5 to 9.5 percentage.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Nagpuri} alt="" />
              <div className="content">
                <h3>Nagpuri Buffalo</h3>
                <ReadMore limit={138}>
                  Nagpuri Buffalo is from the Vidarbha region of Maharashtra. A
                  dual-purpose breed that is suitable for milk production and
                  drought regions. The breed is called by several names
                  Puranthadi, Gaolavi, Chanda, Shahi, Gaolaogan, Gangauri,
                  Berari and Arvi. The unique horn of Nagpuri buffalo can easily
                  protect them from wild animals. The horns are flat, curved and
                  so long that reaches till shoulders. The average milk
                  production is 1030 liters per lactation period with a fat
                  percentage of 7 percentage.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Jaffarabadi} alt="" />
              <div className="content">
                <h3>Jaffarabadi Buffalo</h3>
                <ReadMore limit={179}>
                  Jaffarabadi buffalo is the heaviest buffalo breed, that weighs
                  around 800 to 1000 kg. The breed is from Gujarat are of
                  Amreli, Bhavnagar, Jamnagar, Porbandar and Rajkot districts.
                  The Buffalo looks pretty unique, with a curved downward horns
                  that is compressing the head. The body is black in color. On
                  average 1800 liters of milk is produced by Jaffarabadi buffalo
                  during a lactation period of 305 days. The average
                  intercalving period is 440 days.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Bhadawari} alt="" />
              <div className="content">
                <h3>Bhadawari Buffalo</h3>
                <ReadMore limit={124}>
                  The Bhadawari breed is from Madhya Pradesh and Uttar Pradesh,
                  a dual-purpose breed suitable for milk and drought situations.
                  The buffalo breed is also known as “Etawah”. The body color of
                  Bhadawari is blackish copper to light copper. On the lower
                  side of neck, there are two white lines “Chevron” called as
                  Kanthy(locally). The average milk yield is 1200 liters per
                  lactation. The fat percentage in the milk is around 7.88
                  percentage, highest among buffaloes.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={ Toda } alt="" />
              <div className="content">
                <h3>Toda Buffalo</h3>
                <ReadMore limit={131}>
                  Toda buffaloes are ash grey coloured.Color of the calf is
                  generally fawn at birth which varies from grey, light grey and
                  dark grey. In growing calves, at about 2-3 months, the fawn
                  color changes to ash grey.The husbandry practices of Toda are
                  of primitive in nature; the calf pen and houses are made of
                  locally available wooden stakes, mud and stones. The buffaloes
                  are housed in a circular enclosure without roof.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Surti} alt="" />
              <div className="content">
                <h3>Surti Buffalo</h3>
                <ReadMore limit={167}>
                  Surti is from Baroda and Kaira of Gujarat. Also famous for
                  their milk production abilities. Surti buffalo breed is called
                  by several names Deccani, Gujarati, Charotari, Nadiadi, and
                  talabda. The breed comes in black or brown color body with two
                  white collars – one around the jaw and other at the brisket.
                  Surti produces on an average 5 to 7 liters of milk. On average
                  900 to 1300 liters of milk are produced during a lactation
                  period of 290 days.
                </ReadMore>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
      <div className='card1'>
        <div className='title' >Murrah Buffalo</div>
        <div>
          <img src={ Murrah } alt="" style={{width: `20rem`, margin: `20px 20px`}}/>
        </div>
        <div className='info' >
        <p> 
          Murrah buffalo is the highest milk yielding Buffalo. It produces on an average 15 liters of milk a day. This is more than most of the cow breeds in India.
          Murrah is called by many names Kali, Kundi and Delhi.
          The breed is primarily from Haryana, India.
          The breed is jet black in color that has short horn and tightly coiled.
          Advantage of their well-developed udder, Murrah yields around 1000 liters to 2000 liters of milk per lactation.
          The fat percentage is around 6.9 % to 8.3 % in Murrah’s milk.
          The lactation period lasts for 300 days.
          In the rare instances, few of the Murrah cows yield around 18 liters of milk.
          Usually in India, the buffaloes are culled after two lactations. This has caused huge losses in the best buffaloes.
          The average life span of Murrah buffaloes is 12 years.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card2'>
        <div className='title' >Nili Ravi Buffalo</div>
        <div className='info' >
        <p> 
          Nili Ravi Buffalo
          Nili Ravi buffalo breed is the second most milk yield buffalo. On average it produces around 10 liters of milk per day.
          The Nili ravi is from Punjab province. The breed is also called as Panch Kalyani.
          The unique walled years and white markings on their forehead, face, legs and tail can be seen in Nili Ravi.
          Average production of 1500 liters to 1900 liters of milk per lactation. The period lasts for 300 days.
          The average calving interval is 15 months.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card3'>
        <div className='title' >Mehsana Buffalo</div>
        <div className='info' >
        <p> 
          Mehsana is a cross between two of the best milking buffaloes Murrah and Surti breeds.
          Mehsana buffalo is from the Mehsana district of Gujarat.
          Mehsana is called by several alternate names Mahesani and Mehsani.
          The unique sickle-shaped horns that are curved can be seen on Mehsana. Also, the body color is blackish brown or brown.
          Average milk production of Mehsana buffalo is 1200 to 1500 liters per lactation.
          The fat percentage is 5 to 9.5 percentage.
          The average intercalving period is between 450 to 550 days.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card4'>
        <div className='title' >Surti Buffalo</div>
        <div className='info' >
        <p> 
          Surti is from Baroda and Kaira of Gujarat. Also famous for their milk production abilities.
          Surti buffalo breed is called by several names Deccani, Gujarati, Charotari, Nadiadi, and talabda.
          The breed comes in black or brown color body with two white collars – one around the jaw and other at the brisket.
          Surti produces on an average 5 to 7 liters of milk.
          On average 900 to 1300 liters of milk are produced during a lactation period of 290 days.
          The average intercalving period is between 400-500 days.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card5'>
        <div className='title' >Jaffarabadi  Buffalo</div>
        <div className='info' >
        <p> 
          Jaffarabadi buffalo is the heaviest buffalo breed, that weighs around 800 to 1000 kg.
          The breed is from Gujarat are of Amreli, Bhavnagar, Jamnagar, Porbandar and Rajkot districts.
          The Buffalo looks pretty unique, with a curved downward horns that is compressing the head. The body is black in color.
          On average 1800 liters of milk is produced by Jaffarabadi buffalo during a lactation period of 305 days.
          The average intercalving period is 440 days.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card6'>
        <div className='title' >Bhadawari Buffalo</div>
        <div className='info' >
        <p> 
          The Bhadawari breed is from Madhya Pradesh and Uttar Pradesh, a dual-purpose breed suitable for milk and drought situations.
          The buffalo breed is also known as “Etawah”.
          The body color of Bhadawari is blackish copper to light copper. On the lower side of neck, there are two white lines “Chevron” called as Kanthy(locally).
          The average milk yield is 1200 liters per lactation.
          The fat percentage in the milk is around 7.88 percentage, highest among buffaloes.
          Bhadawari breed can sustain low-quality fodder and yet produce a good amount of milk. A perfect draught buffalo.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card7'>
        <div className='title' >Nagpuri Buffalo</div>
        <div className='info' >
        <p> 
          Nagpuri Buffalo is from the Vidarbha region of Maharashtra. A dual-purpose breed that is suitable for milk production and drought regions.
          The breed is called by several names Puranthadi, Gaolavi, Chanda, Shahi, Gaolaogan, Gangauri, Berari and Arvi.
          The unique horn of Nagpuri buffalo can easily protect them from wild animals. The horns are flat, curved and so long that reaches till shoulders.
          The average milk production is 1030 liters per lactation period with a fat percentage of 7 percentage.
          The average intercalving period is 500 days.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card8'>
        <div className='title' >Godavari Buffalo</div>
        <div className='info' >
        <p> 
          Godavari buffalo is developed by crossing Murrah bulls with native buffaloes.
          Jet black in color with brown hair, predominantly seen in Krishna and Godavari belts.
          The average milk production Godavari is around 1300 liters in lactation period.
          The average intercalving period is 570 days.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card9'>
        <div className='title' >Pandharpuri Buffalo</div>
        <div className='info' >
        <p> 
          Pandharpuri is the native breed of Solapur, Sangli and Kolhapur of Maharashtra.
          They have twisted horns of length of 45 to 50 cm long horns. The body color is black.
          The average milk production is around 1400 liters of lactation period of 305 days. The average intercalving period is 465 days.
        </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className='card10'>
        <div className='title' >Toda Buffalo</div>
        <div className='info' >
        <p> 
          The Toda tribe of Nilgiris have maintained the Toda buffalo breed.
          The buffalo thrives well in the heavy rainfall of Nilgiris.
          Toda Buffalo. They have longhorns that are set wide apart and pointing recurved inward with ash- grey body color.
          There is dense hair covering the top line from the crest of the neck with two chevron markings – one around the jowl and another at the anterior.
          The average milk production is around 500 liters of lactation period.
        </p>
        </div>
      </div>
      </div> */}
    </>
  );
}

export default Livestock;
