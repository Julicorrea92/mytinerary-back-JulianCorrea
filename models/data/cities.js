import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

const cities = [{
        country: "Cambodia",
        fundation: "1113-01-01",
        population: 120000,
        photo: "https://i.im.ge/2022/08/31/OE8zGY.cambodia.png",
        city: "Siem Reap",
        smalldescription: "Cambodia is a small country that offers various delights, from cuisine to sights, you can't never get enough..  In the photo Angkor Wats temple complex.",
        admin_id: "igna@mh.com"
    },{
        country: "Indonesia",
        fundation: "1945-08-17",
        population: 4230051,
        photo: "https://i.im.ge/2022/08/31/OE8kcM.baliTemple.png",
        city: "Bali",
        smalldescription: "Famous for its volcanic mountains, iconic beaches and coral reefs, Indonesia's resort island of Bali is a must visit place. The Water Temple is featured.",
        admin_id: "igna@mh.com"
    },{
        country: "Tahiti",
        fundation: "1722-01-01",
        population: 10605,
        photo: "https://i.im.ge/2022/08/31/OE8fih.boraBora.png",
        city: "Bora Bora Island",
        smalldescription: "This south pacific island could easily be defined as the center of the romantic universe, where luxury, beach resorts, and spas dot the island with overwater bungalows, thatched-roof villas, and a fabled ambiance. Simply put, Bora Bora is one of the most beautiful islands in the world.",
        admin_id: "igna@mh.com"
    },{
        country: "Venezuela",
        fundation: "1764-05-22",
        population: 407452,
        photo: "https://i.im.ge/2022/08/31/OE8VX8.canaimaBolivar.png",
        city: "Bolívar",
        smalldescription: "Canaima National Park is the gateway to Angel Falls. Although other waterfalls and lagoons can be visited from Canaima camp, the main reason tourists fly here is for the trips to the base of Angel Falls, which are featured in the photo above.",
        admin_id: "cin@mh.com"
    },{
        country: "Japan",
        fundation: "1952-01-01",
        population: 104000000,
        photo: "https://i.im.ge/2022/08/31/OE8ZKX.japanHonshuIsland.png",
        city: "Honshu Island",
        smalldescription: "Mount Fuji is open for climbing only in summer, the climb is a easy hike up, so you only need good shoes, water, and warm clothes (even in summer it gets very cold at the summit at sunrise).",
        admin_id: "cin@mh.com"
    },{
        country: "Maldives Republic",
        fundation: "1965-07-26",
        population: 540542,
        photo: "https://i.im.ge/2022/08/31/OE8p7D.maldives.png",
        city: "Maldives Islands",
        smalldescription: "The Maldives has one of the most delicate environments anywhere on the planet. Coral reefs are the foundation of the islands. While several marine species and birds are protected by law, protected areas have been designated to ensure the conservation of specific ecosystems and the rich biodiversity of the country.",
        admin_id: "cin@mh.com"
    },{
        country: "Argentina",
        fundation: "1927-12-07",
        population: 6143,
        photo: "https://i.im.ge/2022/08/31/OE8vA4.peritoMorenoCalafate.png",
        city: "El Calafate",
        smalldescription: "The beautiful City of El Calafate is the access to the fascinating world of Los Glaciares National Park. The calving of the Perito Moreno and the possibility to sail close to it in order to watch its walls from a close distance, or walk on it by hiring a hiking tour have lured visitors from all over the world.",
        admin_id: "cin@mh.com"
    },{
        country: "Australia",
        fundation: "1788-01-26",
        population: 5312000,
        photo: "https://i.im.ge/2022/08/31/OE8JpC.sidney.png",
        city: "Sydney",
        smalldescription: "The Sydney Opera House is one of the most distinctive and famous 20th-century buildings, and one of the most famous performing arts venues in the world. Situated on Bennelong Point in Sydney Harbour, with parkland to its south and close to the equally famous Sydney Harbour Bridge, the building and its surroundings form an iconic Australian image.",
        admin_id: "fran@mh.com"
    },{
        country: "Mexico",
        fundation: "1325-06-20",
        population: 212500,
        photo: "https://i.im.ge/2022/08/31/OE842q.tenochtitlan.png",
        city: "Tenochtitlan",
        smalldescription: "Modern Mexico City is built atop the sinking lake and ruins that once formed part of the Aztec Empire's principal city; Tenochtitlán.",
        admin_id: "fran@mh.com"
    },{
        country: "Chile",
        fundation: "1928-01-01",
        population: 165593,
        photo: "https://i.im.ge/2022/08/31/OE8Bwp.torresDelPaineMagallanesRegion.png",
        city: "Magallanes Region",
        smalldescription: "Torres del Paine National Park is a large park in the Magallanes province of in Chile that encompasses glaciers, rivers, and lakes in the southern part of the Chilean Patagonia.",
        admin_id: "fran@mh.com"
    },{
        country: "Africa",
        fundation: "1964-10-24",
        population: 19473125,
        photo: "https://i.im.ge/2022/08/31/OE8GKP.victoriaFallsZambia.png",
        city: "Zambia",
        smalldescription: "The Victoria falls are considered one of the top ten wonders of the world and are a UNESCO World Heritage Site. They act as a barrier that divides the upper and lower sections of river Zambezi which itself remains in a 'no man's land'.",
        admin_id: "cin@mh.com"
    },{
        country: "Egypt",
        fundation: "0969-01-01",
        population: 9540000,
        photo: "https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png",
        city: "Cairo Citadel",
        smalldescription: "Visiting the Cairo Citadel is one of the best things to do around the area of Islamic Cairo",
        admin_id: "cin@mh.com"
    }]

City.insertMany(cities);
