// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";


const carData = [
  
   

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Deluxe",
    imgUrl: img07,
    model: "Model-2022",
    price: 5200,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Toyota Motor Corp (Toyota) is an automobile manufacturer. The company designs, manufactures and sells passenger cars, buses, minivans, trucks, specialty cars, recreational and sport-utility vehicles. It provides financing to dealers and customers for the purchase or lease of vehicles.",
    carRentalService: "AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental",
    features: [
      "AC/Non-AC options",
      "Spacious seating for up to 8 passengers",
      "Ample luggage space",
      "Hybrid powertrain option available",
      "Suitable for group travel and family trips",
    ],
  },

  {
    id: 3,
    brand: "Toyota",
    rating: 118,
    carName: "Toyota X-Noah",
    imgUrl: img03,
    model: "X-Noah Hybrid",
    price: 6800,
    speed: "22 mpg",
    gps: "GPS Navigation",
    seatType: "Heated and ventilated seats",
    automatic: "Automatic",
    description:
      "The Toyota X-Noah is a spacious and comfortable minivan ideal for group travel and family trips. It offers ample seating and luggage space, with the option of a hybrid powertrain for improved fuel efficiency and reduced emissions.",
    carRentalService: "AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental",
    features: [
      "AC/Non-AC options",
      "Spacious seating for up to 8 passengers",
      "Ample luggage space",
      "Hybrid powertrain option available",
      "Suitable for group travel and family trips",
    ],
  },

  {
    id: 4,
    brand: "Toyota",
    rating: 125,
    carName: "Toyota Hi-Ace Super GL",
    imgUrl:img02,
    model: "Hi-Ace Super GL",
    price: 6200,
    speed: "20 mpg",
    gps: "GPS Navigation",
    seatType: "Cloth seats",
    automatic: "Automatic",
    description:
      "The Toyota Hi-Ace Super GL is a versatile and reliable van suitable for group transportation, cargo hauling, and long-distance travel. It offers a spacious interior, comfortable seating, and ample cargo space.",
    carRentalService: "AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental",
    features: [
      "AC/Non-AC options",
      "Spacious interior for up to 15 passengers",
      "Ample cargo space",
      "Suitable for group transportation and cargo hauling",
      "Reliable and durable for long-distance travel",
    ],
  },
];

export default carData;