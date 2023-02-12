import React from "react";
import WikiPage from "../components/WikiPage";

const Diseases = () => {
  return (
    <>
    <WikiPage
      title="SUMMARY OF COMMON CATTLE DISEASES"
      description="Controlling and preventing common diseases is important to raising healthy cattle. Some diseases affect just one animal, but others can take down an entire herd. Knowledge is crucial for proper maintenance of the herd. Some common diseases include wooden tongue, blackleg, pinkeye and foot rot."
      image="https://img-aws.ehowcdn.com/877x500/photos.demandstudios.com/getty/article/56/139/80408383.jpg?type=webp"
    />
    <hr />
    <WikiPage
      title="Wooden Tongue"
      description="Wooden tongue occurs in the mouths of cattle. This bacterial infection invades the skin through wounds, caused usually by sticks or straw. Its symptoms include a painful and swollen tongue, inability to eat or drink, tongue ulcers and drooling. There are no vaccinations for this disease, so early recognition and veterinary treatment is vital. Wooden tongue is contagious, so the animal should be isolated from the herd until cured."
      image="https://img-aws.ehowcdn.com/877x500/photos.demandstudios.com/getty/article/110/61/78036634.jpg?type=webp"
    />
    <hr />
    <WikiPage
      title="Blackleg"
      description="Blackleg, a disease in cattle who are between 10 months old and 2, is caused by the bacteria Clostridium chauvoei. This bacterium's spores can live in soil for years. Once ingested, it seeps into the digestive tract causing loss of appetite, lameness, fever, rapid breathing and lethargy. This disease can be prevented through vaccinations, and it's not transmitted from animal to animal."
      image="https://img-aws.ehowcdn.com/877x500/photos.demandstudios.com/getty/article/197/119/89675499.jpg?type=webp"
    />
    <hr />
    <WikiPage
      title="Pinkeye"
      description="As the name suggests, pinkeye affects the eyes. Cattle are among the many animals susceptible. Controlling flies and cutting grass and weeds might help protect livestock from this highly contagious condition. Although pinkeye isn't fatal, it can cause blindness if left untreated. Symptoms include redness, inflammation and extreme weeping. Pinkeye can be cured if treated promptly with antibiotics, usually as eye sprays."
      image="https://img-aws.ehowcdn.com/877x500/photos.demandstudios.com/getty/article/153/41/dv191003.jpg?type=webp"
    />
    <hr />
    <WikiPage
      title="Foot Rot"
      description="Foot rot, a common cattle disease, is caused when bacteria enters through a wound or lesion in the foot. The first symptom is lameness, as the cow will put little weight on the affected foot. A slight fever, swollen foot and pain are additional symptoms. Foot rot can be treated with antibiotics; recent research suggests that adding zinc to the animal's diet helps prevent and treat it. The animal should be isolated from the herd, preferably on a dry surface, until completely healed."
      image="https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/34/39/88011922.jpg?type=webp"
    />
    </>
  );
};

export default Diseases;
