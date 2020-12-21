import elevatedsf from '../img/dispensaries/elevatedsf.jpg'
import drgreenthumb from '../img/dispensaries/drgreenthumb.jpg'
import prophet from '../img/dispensaries/prophet.png'
import purplestar from '../img/dispensaries/purplestar.jpg'
import stiiizy from '../img/dispensaries/stiiizy.png'
import stiiizymission from '../img/dispensaries/stiiizymission.jpg'

export const dispensariesData = [
  {
    id: 0,
    name: "Elevated San Francisco",
    averageRating: 4.8,
    numRatings: 629,
    image: elevatedsf,
    types: ["Dispensary", "Recreational"],
    // open: true / false
    // hours: [[]]
    // 
    tags: ["Closed", "Order online", "Curbside pickup"], // if there is "Order Online", then show the View menu button
    latitude: 37.752839,
    longitude: -122.474971,
    location: 'San Francisco, California',
    distance: '2 mi',
  },
  {
    id: 1,
    name: "Elevated San Francisco",
    averageRating: 4.8,
    numRatings: 629,
    image: drgreenthumb,
    locationType: ['storefront', 'delivery'],
    types: ["Dispensary", "Recreational"],
    tags: ["Open Now", "Order online", "Curbside pickup"],
    latitude: 37.775543,
    longitude: -122.469988,
    location: 'San Francisco, California',
    distance: '3 mi',
  },
  {
    id: 2,
    name: "Elevated San Francisco",
    latitude: 37.775672,
    averageRating: 4.8,
    numRatings: 629,
    image: prophet,
    types: ["Dispensary", "Recreational"],
    tags: ["Closed", "Order online", "Curbside pickup"],
    longitude: -122.464973,
    location: 'San Francisco, California',
    distance: '1 mi',
  },
  {
    id: 3,
    name: "Elevated San Francisco",
    latitude: 37.774513,
    averageRating: 4.8,
    numRatings: 629,
    image: purplestar,
    types: ["Dispensary", "Recreational"],
    tags: ["Closed", "Order online", "Curbside pickup"],
    longitude: -122.450224,
    location: 'San Francisco, California',
    distance: '3 mi',
  },
  {
    id: 4,
    name: "Elevated San Francisco",
    latitude: 37.769019,
    averageRating: 4.8,
    numRatings: 629,
    image: stiiizy,
    types: ["Dispensary", "Recreational"],
    tags: ["Closed", "Order online", "Curbside pickup"],
    longitude: -122.435962,
    location: 'San Francisco, California',
    distance: '2 mi',
  },
  { 
    id: 5,
    name: "Elevated San Francisco",
    latitude: 37.787776,
    averageRating: 4.8,
    numRatings: 629,
    image: stiiizymission,
    types: ["Dispensary", "Recreational"],
    tags: ["Closed", "Order online", "Curbside pickup"],
    longitude: -122.428928,
    location: 'San Francisco, California',
    distance: '2 mi',
  },
]