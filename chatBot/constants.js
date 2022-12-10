const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["one"],
  ["two"],
  ["moderate adequate loamy soil", "modearte heavy clayey soil"],
  ["low sparse loamy soil", "low sparse clayey soil"],
  ["moderate sparse alluvial","moderate sparse clayey soil"],
  ["moderate sparse loamy soil"],
  ["moderate adequate black soil","moderate adequate alluvial soil"],
  ["moderate, heavy, loamy soil"],
  ["a"],
  ["b"],
  ["c"],
  ["d"],
  ["e"],
  ["f"],
  ["g"]
]

const replies = [
  ["Hello! Press one for general queries or Press two for crop suggestions", "Hi!  Press one for general queries or Press two for crop suggestions", "Hey!  Press one for general queries or Press one for crop suggestions", "Hi there!  Press one for general queries or Press two for crop suggestions","Howdy  Press one for general queries or Press two for crop suggestions"],
  ["You can choose your general queries about agriculture or farming here: \n a. What is modern agriculture? \n b. Modern agriculture equipments \n c. What percentage of India is farmers? \n d. How many crop seasons are there in India? \n e. What are the government initiatives in the agriculture sector? \n f. What are the 5 major problems faced by farmers? \n g. What percentage of GDP is taken up by agriculture?"],
  ["Enter the parameters Temperature,Rainfall,Soil in the format :\n low/moderate/high, sparse/adequate/heavy, loamy soil/red soil/clayed soil/alluvial soil/black soil/sandy soil"],
  [
    "Rice - 20-30 °C, 150-300cm, loamy soil || SugarCane - 20-30 °C, 75-150cm, loamy soil",
    "Rice - 25-35 °C , 200-300cm, clayey soil"
  ],
  [
    "Wheat - 10-20 °C, 75-100cm, loamy soil", 
    "Wheat - 10-20 °C , 75-100cm, clayey soil"
  ],
  [
    "Millets - 20-30 °C, 50-100cm, alluvial",
    "Millets - 10-20 °C , 75-100cm, clayey soil"
  ],
  ["Grams - 20-30 °C, 40-45cm, loamy soil"], 
  [
    "Cotton - 20-30 °C, 50-100cm, black soil",
    "Cotton - 20-30 °C , 50-100cm, alluvial soil"
  ],
  ["Tea - 20-30 °C, 150-300cm, loamy soil  || Coffee - 20-30 °C, 150-250cm, loamy soil"],
  ["Modern agriculture involves use of advanced agricultural technology and farming techniques that reduces costs, increases efficiency and crop yield."],
  ["Combine Harvester, Rotary Tilleror, Tractor Trailer, Leveler, water bowser, ripper machine, and disc harrow."],
  ["Around 70% of the Indian rural population is dependent on agriculture."],
  ["There are three season crops such as Zaid, Rabi, and Kharif in India."],
  ["The Indian Government started` the Pradhan Mantri Krishi Sinchai Yojana(PMKSY) and many other schemes for farmers."],
  ["The 5 major problems faced by farmers are climate change, soil erosion, biodiversity loss, adopting new techniques and rising food demand."],
  ["18 percent of India’s GDP is taken up by agriculture."]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

