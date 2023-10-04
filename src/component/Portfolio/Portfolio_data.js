import CCC from "./image/child-cry-classification.png";
import BSC from "./image/bird-song-classification.png";
import CV19 from "./image/Covid-19.png"
import X from "./image/x.png"
import port from "./image/Portfolio.png"
import CCFD from "./image/CCFD.png"
import CED from "./image/CED.png"
import CT from "./image/CT.png"
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
    image: CCC,
    desc:"Classified child cries into 5 categories namely burping, tiredness, hungry, belly pain and discomfort by extracting various features (MFCC, Loudness, Spectral Flux, GFCC, LPC) through auditory and speech processing.",
    desc2:"Trained Machine Learning models (SVM, Logistic Regression, Random Forest, KNN) using individual features; and then with the combination of best-performing features. Obtained an accuracy of 80% through Random Forest and KNN models.",
    desc3:"TechStack - Machine Learning, Speech Processing, Audio Processing",
    link:"https://github.com/Sarthug99/Child-Cry-Classification"
  },
  {
    id: 2,
    category: "Deep Learning",
    title: "Bird Song Classification",
    image: BSC,
    desc:"Trained a Convolutional Neural Network (EfficientNet architecture) on Mel Spectrogram images extracted from bird songs, securing an accuracy of 97%. Further improved accuracy by 2% through optimization of CNN hyper-parameters using Taguchi methodology.",
    desc2:"TechStack - Machine Learning, Deep Learning, Audio and Speech Processing",
    desc3:"",
    link:"https://github.com/Sarthug99/Bird-Song-Classification",
  },
  {
    id: 3,
    category: "Deep Learning",
    title: "Covid-19 Detection",
    image: CV19,
    desc:"Trained a CNN for the classification of Chest X-Ray Images into Covid-positive or negative categories, achieving an accuracy of approximately 98%.",
    desc2:"TechStack - Deep Learning, Keras",
    desc3:"",
    link:"https://github.com/Sarthug99/Covid-19-Detection-Using-Chest-X-Ray-Images",
  },
  {
    id: 4,
    category: "Machine Learning",
    title: "Twitter Sentiment Analysis",
    image: X,
    desc:"Utilized Naïve-Bayes, Logistic Regression, AdaBoost, Decision Tree, Random Forest classifier models to classify tweets as positive, negative, and neutral with the best F-score of 0.814.",
    desc2:"Tuned hyper-parameters to increase accuracy from 0.782 to 0.814, and compared models for performance, scalability, and computational cost.",
    desc3:"TechStack - NLTK, Machine Learning",
    link:"https://github.com/Sarthug99/Twitter-Sentiment-Analyzer",

  },

  {
    id: 5,
    category: "Web Development",
    title: "Personal Portfolio",
    image: port,
    desc:"Created a personalized website using React.js, featuring a curated portfolio of projects, expertise, and professional background. Designed a responsive user interface for seamless accessibility across various devices. Incorporated links to social media profiles and contact details for enhanced engagement.",
    desc2:"TechStack - ReactJS,ReactHooks,CSS,Material UI, NPM packages,animations",
    desc3:"",
    link:"https://sarthug99.github.io/Portfolio/",
  },

  {
    id: 6,
    category: "Machine Learning",
    title: "Credit Card Fraud Detection",
    image: CCFD,
    desc:"Predicted fraudulent credit card transactions using Support Vector Classification.",
    desc2:"The model achieved an accuracy of around 98%.",
    desc3:"TechStack - Machine Learning",
    link:"https://github.com/Sarthug99/Credit-Card-Fraud-Detector",
  },


  {
    id: 7,
    category: "Image Processing",
    title: "Canny Edge Detector",
    image: CED,
    desc: "Executed Canny Edge Detection with MATLAB, achieving enhanced edge detection quality and refining image processing capabilities.",
    desc2: "TechStack - MATLAB",
    desc3: "",
    link:"https://github.com/Sarthug99/Canny-Edge-Detector",
  },
  {
    id: 8,
    category: "Image Processing",
    title: "Coin Tracer",
    image: CT,
    desc:"Developed a MATLAB script to accurately detect and quantify the number of coins in images, including their pixel size.",
    desc2:"TechStack - MATLAB",
    link:"https://github.com/Sarthug99/coin-detection",
  },
]
export default Portfolio_data
