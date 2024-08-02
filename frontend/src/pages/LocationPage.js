import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import StarRating from './StarRating';
import { useAuth } from '../context/auth';

// bhubaneswar
import image from '../assets/Khandagiri.webp';
import deras from '../assets/deras.jpg';
import biju from '../assets/biju.jpg';
import Dhauli from '../assets/dhauli.jpg';
import Lingraj from '../assets/lingeaj.jpg';
import sana from '../assets/sanaghagara.jpg';
// lucknow
import bada from '../assets/lko/bada.jpg';
import ambedkar from '../assets/lko/ambedkar.jpg';
import janeswar from '../assets/lko/janeswar.jpg';
import residency from '../assets/lko/residency.jpg';
import zoo from '../assets/lko/zoo.jpg';
import rumi from '../assets/lko/rumi.jpg';

// agra
import agrafort from '../assets/agra/agrafort.jpg';
import akbarstomb from '../assets/agra/akbarstomb.jpg';
import fatehpur from '../assets/agra/fatehpur.jpg';
import itmad from '../assets/agra/itmad.jpg';
import mehtab from '../assets/agra/mehtab.jpg';
import tajmahal from '../assets/agra/tajmahal.jpg';
//Jaipur
import amberFort from '../assets/Jaipur/amberfort.jpg';
import citypalace from '../assets/Jaipur/citypalace.jpg';
import hawaMahal from '../assets/Jaipur/hawamahel.jpg';
import jalMahal from '../assets/Jaipur/jalmahal.jpg';
import jantarMantar from '../assets/Jaipur/jantarmantar.jpg';
import nahargarhfort from '../assets/Jaipur/nahargarhfort.jpg';
//Delhi
import akshardhamTemple from '../assets/Delhi/akshardhamtemple.jpg';
import humayunTomb from '../assets/Delhi/humayuTomb.jpg';
import indiaGate from '../assets/Delhi/indiaGate.jpg';
import lotusTemple from '../assets/Delhi/lotusTemple.jpg';
import qutubMinar from '../assets/Delhi/qutubMinar.jpeg';
import redFort from '../assets/Delhi/redFort.jpg';
//Mumbai
import bandra from '../assets/Mumbai/bandra.webp';
import cst from '../assets/Mumbai/cst.jpg';
import elephanta from '../assets/Mumbai/elephanta.jpg';
import gateway from '../assets/Mumbai/gateway.jpg';
import hajiAli from '../assets/Mumbai/hajiAli.jpg';
import juhu from '../assets/Mumbai/juhu.jpg';
import marine from '../assets/Mumbai/marine.jpg';
import sidhdhi from '../assets/Mumbai/sidhdhi.jpg';
//Kolkata
import birla from '../assets/Kolkata/birla.jpg';
import eden from '../assets/Kolkata/eden.jpg';
import howrah from '../assets/Kolkata/howrah.jpg';
import indian from '../assets/Kolkata/indian.jpg';
import kali from '../assets/Kolkata/kali.jpg';
import marbel from '../assets/Kolkata/marbel.jpg';
import mother from '../assets/Kolkata/mother.jpg';
import schence from '../assets/Kolkata/schence.jpg'
import victoria from '../assets/Kolkata/victoria.jpg'
// Hydrabad
import Golconda from '../assets/Hydrabad/Golconda.jpg';
import chomo from '../assets/Hydrabad/chomo.jpg'
import husain from '../assets/Hydrabad/husain.jpg';
import images from '../assets/Hydrabad/images.jpg';
import ramoji from '../assets/Hydrabad/ramoji.jpg';
import salar from '../assets/Hydrabad/salar.jpg'
// Bangaluru
import bann from '../assets/Bangaluru/bann.jpg';
import garden from '../assets/Bangaluru/garden.jpg'
import iskon from '../assets/Bangaluru/iskon.jpg';
import palace from '../assets/Bangaluru/palace.jpg';
import park from '../assets/Bangaluru/park.jpg';
import soudha from '../assets/Bangaluru/soudha.jpg'
// Amritsar
import akal from '../assets/Amritsar/akal.jpg';
import golden from '../assets/Amritsar/golden.jpg'
import jaliya from '../assets/Amritsar/jaliya.jpg';
import partition from '../assets/Amritsar/partition.jpg';
import ranjit from '../assets/Amritsar/ranjit.png';
import waga from '../assets/Amritsar/waga.jpg'


const locationData = {
  bhubaneswar: {
    name: "Bhubaneswar",
    description: "Bhubaneswar, the capital city of Odisha, is famously known as the 'City of Temples.' It boasts a rich historical and cultural heritage, with numerous ancient temples, monuments, and modern attractions.",
    places: [
      { name: "Khandagiri Caves", description: "Khandagiri Caves are ancient rock-cut caves that date back to the 2nd century BCE. These caves were carved by Jain monks and are known for their historical and archaeological significance.", image: image, Id: -1, category: "Historical" },
      { name: "Deras Dam", description: "Deras Dam is a serene picnic spot surrounded by lush greenery and tranquil waters. It is an ideal place for nature lovers and those looking to escape the hustle and bustle of the city.", image: deras, Id: 1, category: "Nature" },
      { name: "Biju Patnaik Park", description: "Named after the former Chief Minister of Odisha, Biju Patnaik Park is a popular urban park offering well-maintained gardens, walking paths, and recreational facilities.", image: biju, Id: 2, category: "Park" },
      { name: "Dhauli Stupa", description: "Dhauli Stupa, also known as Shanti Stupa, is a significant Buddhist monument located on the banks of the Daya River. It marks the site where Emperor Ashoka is believed to have embraced Buddhism after the Kalinga War.", image: Dhauli, Id: 3, category: "Historical" },
      { name: "Sanaghagra Waterfall", description: "Sanaghagra Waterfall is a picturesque waterfall located in the Keonjhar district, near Bhubaneswar. It is a popular destination for trekking, picnics, and nature photography.", image: sana, Id: 4, category: "Nature" },
      { name: "Lingaraj Temple", description: "Lingaraj Temple is one of the oldest and most revered temples in Bhubaneswar, dedicated to Lord Shiva. This architectural marvel attracts devotees and tourists alike for its intricate carvings and spiritual significance.", image: Lingraj, Id: 5, category: "Religious" }
    ]
  },
  lucknow: {
    name: "Lucknow",
    description: "Lucknow, the capital city of Uttar Pradesh, is renowned for its rich cultural heritage, historic monuments, and vibrant arts scene. Known as the 'City of Nawabs,' it offers a unique blend of traditional and modern influences.",
    places: [
      { name: "Bara Imambara", description: "Bara Imambara, an architectural marvel built in 1784, is known for its central hall which is one of the largest arched constructions without support beams in the world.", image: bada, Id: 6, category: "Historical" },
      { name: "Dr. Bhimrao Ambedkar Memorial Park", description: "This vast public park is dedicated to Dr. Bhimrao Ambedkar and other social reformers. It features grand statues, manicured lawns, and impressive architecture, making it a popular spot for visitors.", image: ambedkar, Id: 7, category: "Park" },
      { name: "The Residency", description: "The Residency is a historic landmark that served as a refuge for British inhabitants during the Siege of Lucknow in 1857. Today, it stands as a poignant reminder of the Indian Rebellion and features extensive ruins and a museum.", image: residency, Id: 8, category: "Historical" },
      { name: "Janeshwar Mishra Park", description: "One of the largest parks in Asia, Janeshwar Mishra Park offers lush green landscapes, lakes, and recreational facilities. It's an ideal spot for relaxation and outdoor activities.", image: janeswar, Id: 9, category: "Park" },
      { name: "Nawab Wajid Ali Shah Zoological Garden", description: "Commonly known as Lucknow Zoo, this zoological garden houses a wide variety of animals and birds. It also features a toy train, a vintage train exhibit, and a butterfly park.", image: zoo, Id: 10, category: "Zoo" },
      { name: "Rumi Darwaza", description: "An iconic symbol of Lucknow, the Rumi Darwaza is a magnificent gateway built in the 18th century. It stands 60 feet tall and exemplifies the Awadhi architectural style.", image: rumi, Id: 11, category: "Historical" }
    ]
  },
  agra: {
    name: "Agra",
    description: "Agra, located in Uttar Pradesh, is world-renowned for its iconic monuments and rich Mughal heritage. Known for the Taj Mahal, Agra is a city that blends history, architecture, and culture.",
    places: [
      { name: "Taj Mahal", description: "The Taj Mahal, a UNESCO World Heritage Site, is an ivory-white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is considered one of the most beautiful buildings in the world.", image: tajmahal, Id: 12, category: "Historical" },
      { name: "Agra Fort", description: "Agra Fort, also a UNESCO World Heritage Site, is a massive red sandstone fort that served as the main residence of the Mughal emperors. It houses several impressive buildings within its walls.", image: agrafort, Id: 13, category: "Historical" },
      { name: "Fatehpur Sikri", description: "Fatehpur Sikri is a historic city founded by Emperor Akbar in 1571. It is known for its stunning architecture and includes notable structures like Buland Darwaza and Jama Masjid.", image: fatehpur, Id: 14, category: "Historical" },
      { name: "Itmad-ud-Daula", description: "Often referred to as the 'Baby Taj,' Itmad-ud-Daula is a beautiful Mughal mausoleum built for Mirza Ghiyas Beg. Its intricate marble work is considered a precursor to the Taj Mahal.", image: itmad, Id: 15, category: "Historical" },
      { name: "Mehtab Bagh", description: "Mehtab Bagh is a charbagh complex located across the Yamuna River from the Taj Mahal. It offers a stunning view of the Taj and is known for its lush gardens and serene environment.", image: mehtab, Id: 16, category: "Nature" },
      { name: "Akbar's Tomb", description: "Akbar's Tomb is the resting place of the Mughal Emperor Akbar. Located in Sikandra, this architectural marvel blends Hindu and Muslim designs and is set within a large garden.", image: akbarstomb, Id: 17, category: "Historical" }
    ]
  },
  jaipur: {
    name: "Jaipur",
    description: "Jaipur, the capital city of Rajasthan, is known as the 'Pink City' due to its distinctly colored buildings. It is famous for its majestic palaces, forts, and vibrant culture.",
    places: [
      { name: "Hawa Mahal", description: "Hawa Mahal, also known as the Palace of Winds, is an iconic landmark in Jaipur. It features a unique five-story facade with 953 small windows, allowing breeze to pass through and keep the palace cool.", image: hawaMahal, Id: 18, category: "Historical" },
      { name: "Amber Fort", description: "Amber Fort is a magnificent fort located on a hilltop overlooking Jaipur. It is known for its artistic Hindu style elements, intricate mirror work, and stunning views.", image: amberFort, Id: 19, category: "Historical" },
      { name: "City Palace", description: "The City Palace is a grand complex in the heart of Jaipur, which includes the Chandra Mahal and Mubarak Mahal palaces. It is a blend of Mughal and Rajput architecture and houses a museum.", image: citypalace, Id: 20, category: "Historical" },
      { name: "Jantar Mantar", description: "Jantar Mantar in Jaipur is a UNESCO World Heritage Site and one of the largest observatories ever built. It features a collection of nineteen architectural astronomical instruments.", image: jantarMantar, Id: 21, category: "Historical" },
      { name: "Jal Mahal", description: "Jal Mahal, or the Water Palace, is a stunning palace located in the middle of the Man Sagar Lake. It is known for its exquisite architecture and scenic surroundings.", image: jalMahal, Id: 22, category: "Historical" },
      { name: "Nahargarh Fort", description: "Nahargarh Fort offers panoramic views of Jaipur and is part of the trio of forts along with Amber and Jaigarh. It was originally built as a retreat for the royal family.", image: nahargarhfort, Id: 23, category: "Historical" }
    ]
  },
    delhi: {
      name: "Delhi",
      description: "Delhi, the capital city of India, is a bustling metropolis that blends ancient history with modernity. It is known for its historic monuments, vibrant markets, and diverse culture.",
      places: [
        { name: "Red Fort", description: "Red Fort is a historic fort in Old Delhi that served as the main residence of the Mughal emperors. It is a UNESCO World Heritage Site known for its massive red sandstone walls.", image: redFort, Id: 24, category: "Historical" },
        { name: "India Gate", description: "India Gate is a war memorial located at the heart of New Delhi. It commemorates the soldiers of the Indian Army who died during World War I.", image: indiaGate, Id: 25, category: "Monument" },
        { name: "Qutub Minar", description: "Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world. It is an important example of Indo-Islamic architecture.", image: qutubMinar, Id: 26, category: "Historical" },
        { name: "Humayun's Tomb", description: "Humayun's Tomb is the tomb of the Mughal Emperor Humayun in Delhi. This UNESCO World Heritage Site is a fine example of Mughal architecture.", image: humayunTomb, Id: 27, category: "Historical" },
        { name: "Lotus Temple", description: "Lotus Temple is a Bahá'í House of Worship known for its flowerlike shape. It is a notable architectural landmark in Delhi.", image: lotusTemple, Id: 28, category: "Religious" },
        { name: "Akshardham Temple", description: "Akshardham Temple is a Hindu temple complex in Delhi, known for its stunning architecture, spiritual exhibits, and large gardens.", image: akshardhamTemple, Id: 29, category: "Religious" }
      ]
    },
    mumbai: {
      name: "Mumbai",
      description: "Mumbai, also known as Bombay, is the financial, commercial, and entertainment capital of India. It is known for its vibrant lifestyle, historic landmarks, and beautiful coastline.",
      places: [
        { name: "Gateway of India", description: "Gateway of India is an iconic arch-monument built in the early 20th century. It overlooks the Arabian Sea and is one of Mumbai's most famous landmarks.", image: gateway, Id: 30, category: "Monument" },
        { name: "Chhatrapati Shivaji Maharaj Terminus", description: "Chhatrapati Shivaji Maharaj Terminus is a historic railway station and UNESCO World Heritage Site. It is an excellent example of Victorian Gothic Revival architecture.", image: cst, Id: 31, category: "Historical" },
        { name: "Marine Drive", description: "Marine Drive is a picturesque boulevard along the coast, also known as the Queen's Necklace. It's a popular spot for evening walks and enjoying the sunset.", image: marine, Id: 32, category: "Scenic" },
        { name: "Elephanta Caves", description: "Elephanta Caves are ancient rock-cut temples located on Elephanta Island. These caves are a UNESCO World Heritage Site and feature intricate carvings.", image: elephanta, Id: 33, category: "Historical" },
        { name: "Haji Ali Dargah", description: "Haji Ali Dargah is a mosque and dargah located on an islet in the Arabian Sea. It is a renowned pilgrimage site and a fine example of Indo-Islamic architecture.", image: hajiAli, Id: 34, category: "Religious" },
        { name: "Siddhivinayak Temple", description: "Siddhivinayak Temple is a famous Hindu temple dedicated to Lord Ganesha. It is one of the richest and most visited temples in Mumbai.", image: sidhdhi, Id: 35, category: "Religious" },
        { name: "Juhu Beach", description: "Juhu Beach is one of Mumbai's most famous beaches, known for its lively atmosphere, street food, and stunning sunsets.", image: juhu, Id: 36, category: "Beach" },
        { name: "Bandra-Worli Sea Link", description: "Bandra-Worli Sea Link is a cable-stayed bridge that connects Bandra and Worli. It is an engineering marvel and offers spectacular views of the Mumbai skyline.", image: bandra, Id: 37, category: "Monument" }
      ]
    },
    kolkata: {
      name: "Kolkata",
      description: "Kolkata, formerly known as Calcutta, is the capital of the Indian state of West Bengal. It is known for its rich cultural heritage, historic landmarks, and literary traditions.",
      places: [
        { name: "Victoria Memorial", description: "Victoria Memorial is a large marble building and museum dedicated to the memory of Queen Victoria. It is one of the most famous landmarks in Kolkata.", image: victoria, Id: 38, category: "Monument" },
        { name: "Howrah Bridge", description: "Howrah Bridge is a cantilever bridge over the Hooghly River. It is an iconic symbol of Kolkata and one of the busiest bridges in the world.", image: howrah, Id: 39, category: "Monument" },
        { name: "Indian Museum", description: "Indian Museum is the oldest and largest museum in India. It houses a vast collection of artifacts, including ancient sculptures, paintings, and fossils.", image: indian, Id: 40, category: "Museum" },
        { name: "Dakshineswar Kali Temple", description: "Dakshineswar Kali Temple is a famous Hindu temple dedicated to Goddess Kali. It is located on the eastern bank of the Hooghly River.", image: kali, Id: 41, category: "Religious" },
        { name: "Mother House", description: "Mother House is the headquarters of the Missionaries of Charity, founded by Mother Teresa. It includes her tomb and a small museum.", image: mother, Id: 42, category: "Museum" },
        { name: "Science City", description: "Science City is a popular science center and amusement park in Kolkata. It offers interactive exhibits, a space theater, and various scientific displays.", image: schence, Id: 43, category: "Amusement" },
        { name: "Eden Gardens", description: "Eden Gardens is one of the oldest and most iconic cricket stadiums in India. It has hosted numerous historic matches and is a must-visit for cricket fans.", image: eden, Id: 44, category: "Stadium" },
        { name: "Birla Planetarium", description: "Birla Planetarium is one of the largest planetariums in Asia. It offers shows on astronomy and the universe, attracting science enthusiasts of all ages.", image: birla, Id: 45, category: "Science" },
        { name: "Marble Palace", description: "Marble Palace is a 19th-century mansion known for its marble floors, Western sculptures, Victorian furniture, and paintings by European and Indian artists.", image: marbel, Id: 46, category: "Historical" }
      ]
    },
    hyderabad: {
      name: "Hyderabad",
      description: "Hyderabad, the capital of Telangana, is a major center for the technology industry in India. It is known for its rich history, iconic landmarks, vibrant culture, and delicious cuisine.",
      places: [
        { name: "Charminar", description: "Charminar is a historic monument and mosque located in the heart of Hyderabad. It is an iconic symbol of the city, known for its stunning architecture.", image: images, Id: 30, category: "Historical" },
        { name: "Golconda Fort", description: "Golconda Fort is a historic citadel and fort in Hyderabad. It is renowned for its acoustics, palaces, and architectural grandeur.", image: Golconda, Id: 31, category: "Historical" },
        { name: "Hussain Sagar Lake", description: "Hussain Sagar Lake is an artificial lake in Hyderabad, famous for the large Buddha statue situated in the middle of the lake.", image: husain, Id: 32, category: "Scenic" },
        { name: "Salar Jung Museum", description: "Salar Jung Museum is one of the largest museums in India, housing an extensive collection of art, antiques, and artifacts from various periods and cultures.", image: salar, Id: 33, category: "Museum" },
        { name: "Ramoji Film City", description: "Ramoji Film City is the world's largest film studio complex, located in Hyderabad. It is a major tourist attraction offering guided tours, live shows, and various entertainment activities.", image: ramoji, Id: 34, category: "Amusement" },
        { name: "Chowmahalla Palace", description: "Chowmahalla Palace is a historical palace in Hyderabad that once served as the seat of the Asaf Jahi dynasty. It is known for its magnificent architecture and rich history.", image: chomo, Id: 35, category: "Historical" }
      ]
    },
    bengaluru: {
      name: "Bengaluru",
      description: "Bengaluru, also known as Bangalore, is the capital city of Karnataka. It is often referred to as the 'Silicon Valley of India' due to its role as the nation's leading information technology (IT) exporter. The city is known for its pleasant climate, vibrant culture, and lush green spaces.",
      places: [
        { name: "Bangalore Palace", description: "Bangalore Palace is a grand architectural landmark in Bengaluru, inspired by England's Windsor Castle. It features Tudor-style architecture and beautiful gardens.", image: palace, Id: 36, category: "Historical" },
        { name: "Lalbagh Botanical Garden", description: "Lalbagh Botanical Garden is a well-known botanical garden in Bengaluru, famous for its annual flower shows and diverse collection of plants from around the world.", image: garden, Id: 37, category: "Park" },
        { name: "Cubbon Park", description: "Cubbon Park is a large, green park in the heart of Bengaluru, offering a tranquil escape from the bustling city. It is home to many indigenous and exotic plant species.", image: park, Id: 38, category: "Park" },
        { name: "Vidhana Soudha", description: "Vidhana Soudha is a grand legislative building in Bengaluru that houses the Karnataka State Legislature and Secretariat. It is known for its magnificent neo-Dravidian architecture.", image: soudha, Id: 39, category: "Monument" },
        { name: "ISKCON Temple", description: "ISKCON Temple is a renowned Hindu temple dedicated to Lord Krishna, located in Bengaluru. It is a major spiritual center and architectural marvel.", image: iskon, Id: 40, category: "Religious" },
        { name: "Bannerghatta National Park", description: "Bannerghatta National Park is a popular biological reserve near Bengaluru, offering a zoo, safari, and a butterfly park, making it a favorite among nature enthusiasts.", image: bann, Id: 41, category: "Park" }
      ]
    },
    amritsar: {
      name: "Amritsar",
      description: "Amritsar, a city in the northwestern state of Punjab, India, is renowned for its deep history, cultural heritage, and religious significance. It is home to the iconic Golden Temple, the spiritual and cultural center for the Sikh religion.",
      places: [
        { name: "Golden Temple", description: "The Golden Temple, also known as Harmandir Sahib, is the holiest Gurdwara and the most important pilgrimage site of Sikhism. It is renowned for its stunning gold-covered structure and serene pond.", image: golden, Id: 42, category: "Religious" },
        { name: "Jallianwala Bagh", description: "Jallianwala Bagh is a historic garden and memorial in Amritsar, commemorating the massacre of peaceful Indian protestors by British forces in 1919. It is a poignant reminder of India's struggle for independence.", image: jaliya, Id: 43, category: "Historical" },
        { name: "Wagah Border", description: "Wagah Border is the border crossing between India and Pakistan, near Amritsar. It is famous for the daily flag-lowering ceremony performed by the Indian and Pakistani military.", image: waga, Id: 44, category: "Monument" },
        { name: "Akal Takht", description: "Akal Takht is one of the five seats of power in Sikhism, located within the Golden Temple complex. It holds immense religious and historical significance for Sikhs.", image: akal, Id: 45, category: "Religious" },
        { name: "Maharaja Ranjit Singh Museum", description: "The Maharaja Ranjit Singh Museum is dedicated to the life and achievements of Maharaja Ranjit Singh, the leader of the Sikh Empire. It showcases his personal artifacts, weapons, and paintings.", image: ranjit, Id: 46, category: "Museum" },
        { name: "Partition Museum", description: "The Partition Museum in Amritsar is dedicated to preserving the history and stories of the partition of India in 1947. It offers a poignant insight into the impact of this event on millions of people.", image: partition, Id: 47, category: "Museum" }
      ]
    }  

};
const LocationPage = () => {
  const { location } = useParams();
  const [data, setData] = useState(null);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (locationData[location]) {
      setData(locationData[location]);
    } else {
      setData(null);
    }
  }, [location]);

  if (!data) {
    return <div className="text-center text-red-600 mt-10">Location not found</div>;
  }

  return (
    <Layout title={data.name}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">{data.name}</h1>
        <p className="mb-6 font-bold text-red-700 text-center">{data.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Places to Visit:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.places.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center">
              {place.image && (
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <StarRating placeId={place.Id} userId={auth.user.email} />
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LocationPage;
