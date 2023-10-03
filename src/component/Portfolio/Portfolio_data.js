import port from "./image/port.png";
import weather from "./image/weather.png"
import amazon from "./image/amazon.png";
import discord from "./image/discord.png"
import devdetect from "./image/devdetectdark.png";
import crowdfund from "./image/crowdfund.png";
import vl from "./image/VL.png"



const Portfolio_data = [
  {
    id: 1,
    category: "Machine Learning",
    title: "Child Cry Classification",
    image: vl,

    desc:"Classified child cries into 5 categories namely burping, tiredness, hungry, belly pain and discomfort by extracting various features (MFCC, Loudness, Spectral Flux, GFCC, LPC) through auditory and speech processing.",
    desc2:"Trained Machine Learning models (SVM, Logistic Regression, Random Forest, KNN) using individual features; and then with the combination of best-performing features. Obtained an accuracy of 80% through Random Forest and KNN models.",
    desc3:"TechStack: Machine Learning, Speech Processing, Audio Processing",
    link:"https://github.com/Sarthug99/Child-Cry-Classification"
  },
  {
    id: 2,
    category: "Deep Learning",
    title: "Bird Song Classification",
    image: amazon,
    desc:"Trained a Convolutional Neural Network (EfficientNet architecture) on Mel Spectrogram images extracted from bird songs, securing an accuracy of 97%. Further improved accuracy by 2% through optimization of CNN hyper-parameters using Taguchi methodology.",
    desc2:"TechStack: Machine Learning, Deep Learning, Audio and Speech Processing",
    desc3:"",
    link:"https://github.com/Sarthug99/Bird-Song-Classification",
  },
  {
    id: 3,
    category: "Deep Learning",
    title: "Covid-19 Detection",
    image: devdetect,
    desc:"Trained a CNN for the classification of Chest X-Ray Images into Covid-positive or negative categories, achieving an accuracy of approximately 98%.",
    desc2:"Deep Learning, Keras",
    desc3:"",
    link:"https://github.com/Sarthug99/Covid-19-Detection-Using-Chest-X-Ray-Images",
  },
  {
    id: 4,
    category: "Machine Learning",
    title: "Twitter Sentiment Analysis",
    image: weather,
    desc:"The React WeatherApp is a web application that uses OpenWeatherMap API to fetch weather data and displays it on the screen. It allows users to search for the current weather of any location by entering its name or zip code, and displays relevant weather information such as temperature, humidity, and wind speed.",
    desc2:"Tech:ReactJS,Redux toolkit,Material UI, NPM packages, Api handling,Axios",
    link:"https://github.com/ChandanGunaga/Weather-apa",

  },

  {
    id: 5,
    category: "Machine Learning",
    title: "Credit Card Fraud Detection",
    image: port,
    desc:"The React Portfolio is a personal website built using React, showcasing a collection of a person's projects, skills, and experience. It provides a responsive user interface, allowing visitors to view the portfolio on different devices. The website also includes links to the person's social media accounts and contact information.",
    desc2:"Tech:ReactJS,ReactHooks,CSS,Material UI, NPM packages,animations",
    link:"https://chandangunaga.netlify.app/",
  },


  {
    id: 6,
    category: "Image Processing",
    title: "Canny Edge Detector",
    image: discord,
    desc:" Discord UI Clone is a web application that replicates the user interface of the popular chat application Discord. It includes features such as text and voice channels, direct messaging, and user profiles UI. The clone provides a responsive and customizable user interface.",
    desc2:"Tech:HTML,Tailwind CSS",
    link:"https://github.com/ChandanGunaga/Discord-clone-UI",
  },
  {
    id: 7,
    category: "Image Processing",
    title: "Coin Tracer",
    image: crowdfund,
    desc:"A web-app built to solve major problems relating to issues in online fund transfer providing a grad-up of security and Transparency to the users.",
    desc2:"Tech: Blockchain,ReactJS,Ethereum,Solidity,Smart Contracts",
    link:"https://github.com/ChandanGunaga/CrowdFunding-Blockchain",
  },
]
export default Portfolio_data
