import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';
import All from '/Users/sophielebron/Desktop/coding-projects/what-to-do-in-denver/src/pages/all/all.js';

function Questionnaire() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [allActivities, setAllActivities] = useState([]);
    const navigate = useNavigate();

    const all = [
        {
            id: 0,
            "title": "Ski at Copper Mountain",
            "image": "https://cdn.5280.com/2022/12/00_Copper-50th_hero-2022-960x720.jpg",
            "description": "Copper mountain has ski runs for all levels, with the West side of the mountain perfect for beginners, and the East side perfect for more advanced skiers.",
            "details": "Copper Mountain is 80 miles west of Denver. There is a bus (SnowStang) that can take you from Denver Union Station or Denver Federal Center to Copper Mountain. If you're planning to drive to Copper Mountain on a weekend, be sure to leave very early, as there will be traffic! Lift tickets can be purchased in advance or on the mountain. You can use your Ikon Pass if you have one! ",
            "webUrl": "https://www.coppercolorado.com/?gad=1&gclid=CjwKCAjwvJyjBhApEiwAWz2nLTRE0uQhhwPWLZodgz0BoOK4v_snaemFEBG_UMGRDX9AMDrQrzfRsBoCYlYQAvD_BwE&gclsrc=aw.ds",
            "halfDay": true,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            id: 1,
            "title": "Visit Denver Museum of Nature & Science",
            "image": "https://media2.westword.com/den/imager/u/slideshow/10120352/dmnsdino.jpg",
            "description": "Learn about everything from dinosaurs to astronomy at the Denver Museum of Nature & Science!",
            "details": "The Denver Museum of Nature & Science is located in City Park, near the Denve Zoo. Tickets can be purchased online prior to visiting the museum.",
            "webUrl": "https://www.dmns.org/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 2,
            "title": "Go to a Rockies Game at Coors Field",
            "image": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/Colorado-Rockies_7C649933-EFF0-51B0-9A02E85385D86848_7c6e2c50-dc33-ec19-aec679274174a195.jpg",
            "description": "Watch the Rockies play at the iconic Coors Field. There are lots of bars and restaurants nearby to visit before or after the game!",
            "details": "Tickets can be purchased ahead of time online, or at Coors Field. Coors Field is 2 blocks away from Union Station, so the light rail or train into Union Station is a good transportation option to get to Coors Field.",
            "webUrl": "https://www.mlb.com/rockies/ballpark",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": false,
        },
        {
            id: 3,
            "title": "Ski at Steamboat Ski Resort",
            "image": "https://www.steamboat-springs.com/assets/page_headers/Steamboat_Ski_Resort.jpg",
            "description": "Ski during the day or night at Steamboat Ski Resort!",
            "details": "Steamboat Springs is located about 150 miles form Denver. Steamboat is on the Ikon Pass, although the base pass only allows limited days at Steamboat. Lift tickets can be purchased ahead of time online, or at the resort.",
            "webUrl": "https://www.steamboat.com/",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            id: 4,
            "title": "Go to Broncos Game at Mile High",
            "image": "https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/milehigh21951.jpg",
            "description": "See the Broncos play at Empower Field at Mile High Stadium.",
            "details": "Last minute tickets to Broncos games can be purchased on resell sites such as Ticketmaster or Stubhub. There are several parking lots at Mile High, so driving is an option, which is a good option if you plan on tailgating! Another transportation option is the C light rail, although this will include a short walk.",
            "webUrl": "https://www.empowerfieldatmilehigh.com/events-tickets/denver-broncos",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": true,
        },
        {
            id: 5,
            "title": "Go to an Avalanche Game",
            "image": "https://kdvr.com/wp-content/uploads/sites/11/2022/06/GettyImages-1403173601.jpg?w=2560&h=1440&crop=1",
            "description": "See Colorado's NHL team play at Ball Arena.",
            "details": "Ball Arena is located in downtown Denver, and can be accessed by the light rail. Tickets to an Avalanche game can be purchased ahead of time online. Popular games typically sell out, but the average game usually has tickets available for purchase at Ball Arena.",
            "webUrl": "https://www.nhl.com/avalanche",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": true,
        },
        {
            id: 6,
            "title": "Ski at Winter Park",
            "image": "https://res.cloudinary.com/miles-extranet-dev/image/upload/v1582130613/Winter_Park/account_photos/45/5b529c7b4d8857a8d81c9a2117ee42aa_2019_WP_CharlesStemen_DSC024631.jpg",
            "description": "Winter Park is a very beginner friendly ski resort located just 75 miles from Denver.",
            "details": "Winter Park is on the Ikon Pass, or if you don't have an Ikon Pass you can purchase a lift ticket online ahead of time or at Winter Park. The Winter Park Express is a seasonal train that runs on weekends from January-April. It takes passengers from Union Station directly to Winter Park Resort.",
            "webUrl": "https://www.winterparkresort.com/",
            "halfDay": true,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            id: 7,
            "title": "Ski at Aspen Snowmass Ski Resort",
            "image": "https://www.aspensnowmass.com/-/media/aspen-snowmass/images/hero/hero-image/winter/2021-22/snowmass-hero-08182021.jpg?mw=1506&mh=930&hash=8711362070C02D29B00C0D09593FB504",
            "description": "Ski at one of the four resorts (Aspen, Aspen Highlands, Snowmass, and Buttermilk) that make up the Aspen Snowmass Ski Resort!",
            "details": "Lift tickets for Aspen Snowmass must be purchased online ahead of time, as this resort requires reservations. Aspen Snowmass is on the Ikon Pass, but the reservation is still required with the Ikon Pass. The resort is about 200 miles from Denver. Buttermilk is the most beginner friendly of the four mountains, Aspen and Snowmass are best suited for intermediate skiers, and Aspen Highlands is for advanced skiers.",
            "webUrl": "https://www.aspensnowmass.com/",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            id: 8,
            "title": "Go to a Nuggets Game at Ball Arena",
            "image": "https://www.denverpost.com/wp-content/uploads/2023/06/TDP-L-NUGGS-HEAT-GAME-ONE_DSC5093.jpg?w=1024",
            "description": "See Denver's NBA team, the Nuggets, play at Ball Arena.",
            "details": "Tickets can be purchased online before the game, or last minute tickets can often be purchased at Ball Arena. Ball Arena is located in downtown Denver, can be accessed by the light rail.",
            "webUrl": "https://www.ballarena.com/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": true,
            "summer": false,
            "fall": true,
        },
        {
            id: 9,
            "title": "Visit Rocky Mountain National Park",
            "image": "https://www.jellystoneofestes.com/wp-content/uploads/2016/12/rockymountain.jpg",
            "description": "Hike, drive, camp, and see wildlife at Rocky Mountain National Park.",
            "details": "Timed entry permits may be required, depending on the time of year you are visiting the park. Rocky Mountain National Park is approximately a two hour drive from Denver. The nearest entrances from Denver are near Estes Park. Entrance fees are required to enter the park, unless you have an annual pass to the National Parks.",
            "webUrl": "https://www.nps.gov/romo/index.htm",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 10,
            "title": "Devil's Head Lookout Hike",
            "image": "https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2013/03/devils_head_northtolongs.jpg",
            "description": "Hike to a U.S. Forest Service fire lookout tower for a beautiful view of Pike National Forest.",
            "details": "Devil's Head Lookout is an hour and a half drive outside of Denver. It is a 2.7 mile, out and back hike that ends at a fire lookout tower. It's considered a moderate hike, and to reach the top of the lookout tower requires climbing many stairs. The trail sometimes has snow and ice, so it is important to check trail conditions.",
            "webUrl": "https://www.alltrails.com/trail/us/colorado/devil-s-head-lookout-trail--2",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 11,
            "title": "Go To Washington Park",
            "image": "https://img1.10bestmedia.com/Images/Photos/334671/p-IMG-4408_55_660x440.jpg",
            "description": "Have a picnic, play volleyball, or go for a walk in Washington Park.",
            "details": "Washington Park is a beautiful park located near downtown Denver. There is a walking path that loops through the park, two small lakes, large grassy areas, and flower gardens.",
            "webUrl": "https://www.denver.org/listing/washington-park/6828/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 12,
            "title": "Hike the Manitou Incline",
            "image": "https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/4/32/432e47c8-df3b-52bb-9f2a-5add02b8ddd3/5f501230a7b39.image.jpg?crop=1247%2C1247%2C207%2C0&resize=1247%2C1247&order=crop%2Cresize",
            "description": "Hike this challenging route which consists of over 2,700 steps.",
            "details": "The Manitou Incline hike is located outside Colorado Springs, Colorado, about an hour drive away from Denver. Reservations are required to hike this trail. Reservations are free, but there is a $10 parking fee. A free shuttle from Colorado Springs to Manitou Incline is available. Bring lots of water on this hike, it's a tough one!",
            "webUrl": "https://manitousprings.org/where-to-play/manitou-incline/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": false,
            "summer": true,
            "fall": true,
        },
        {
            id: 13,
            "title": "Peak to Peak Scenic Byway",
            "image": "https://www.gocolorado.com/wp-content/uploads/2010/11/peaktopeak.jpg",
            "description": "A 55 mile drive that has views of the Rocky Mountains.",
            "details": "Beginning in Estes Park, about an hour outside of Denver, this scenic drive winds through the Rocky Mountains for 55 miles. This drive is particularly breathtaking in the fall, when the trees are changing color.",
            "webUrl": "https://www.codot.gov/travel/colorado-byways/north-central/peak-to-peak",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": false,
            "summer": true,
            "fall": true,
        },
        {
            id: 14,
            "title": "Visit Union Station",
            "image": "https://media.cntraveler.com/photos/5bdb4ac22e350417aea9d74b/16:9/w_2560,c_limit/Denver%20Union%20Station_DUSExtJune20_2.jpg",
            "description": "Explore restaurants and shops in Denver's downtown train station.",
            "details": "Union Station is a transportation hub in downtown Denver that has restaurants, cafes, bars, shops, communal seating areas, and a hotel. Be sure to check out the event calendar for fun upcoming events.",
            "webUrl": "https://www.denverunionstation.com/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 15,
            "title": "Go to a Concert at Red Rocks",
            "image": "https://images.squarespace-cdn.com/content/v1/52991237e4b06b094787fe1d/1558644190914-6TOUJP92QK2JY0NNH9JW/printshop11.jpg?format=1500w",
            "description": "Enjoy live music at one of the country's most beautiful natural outdoor venues.",
            "details": "Red Rocks Amphitheater is near Morrison, CO, approximately 30 minutes outside of Denver. Tickets to Red Rocks shows can be purchased from the Red Rocks website, as well as from resale websites.",
            "webUrl": "https://www.theredrocksamphitheater.com/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 16,
            "title": "Go Tubing at Clear Creek",
            "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/goldenco/TubingClearCreek_1_5c3c2930-cc7d-433d-88c4-e6657b85a169.jpg",
            "description": "Clear Creek is a popular spot for tubing during the summer.",
            "details": "Clear Creek runs through Golden, CO. Tubes can be rented at multiple rental shops in Golden.",
            "webUrl": "https://www.cityofgolden.net/play/recreation-attractions/clear-creek-white-water-park/",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": false,
            "oneHr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": false,
            "summer": true,
            "fall": false,
        },
        {
            id: 17,
            "title": "Visit Great Sand Dunes National Park",
            "image": "https://www.nps.gov/grsa/planyourvisit/images/grsa-fresh-snow-mts-gold-cottonwoods-2018-jpg.jpg?maxwidth=1300&maxheight=1300&autorotate=false",
            "description": "Experience the tallest sand dunes in North America!",
            "details": "Located in southern Colorado, Great Sand Dune National Park is a 4 hour drive from Denver. There are no reservations or timed entries required to enter the park, but an entrance pass is required. Entrance passes can be purchased as you enter the park for $25.",
            "webUrl": "https://www.nps.gov/grsa/index.htm",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 18,
            "title": "Hike to Maroon Bells",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Maroon_Bells_%2811553%29a.jpg",
            "description": "Hike to see one of the most recognizable mountains in the United States.",
            "details": "Located outside of Aspen, the Maroon Bells are a few hours from Denver. Parking reservations are required, or there is the option of taking the RFTA shuttle from Aspen Highlands. There are multiple hiking trails in Maroon Bells scenic area, as well as a nearby campsite.",
            "webUrl": "https://www.colorado.com/articles/explore-maroon-bells-what-you-need-know",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": false,
            "summer": true,
            "fall": true,
        },
        {
            id: 19,
            "title": "Visit Mesa Verde National Park",
            "image": "https://eoimages.gsfc.nasa.gov/images/imagerecords/88000/88632/99C97231-1DD8-B71B-0B80F0D734C77303_lrg.jpg",
            "description": "See the cliff dwellings that Ancestral Puebloans lived in hundreds of years ago.",
            "details": "Mesa Verde National Park is in southwestern Colorado, a several hours drive from Denver. Plan to stay overnight, either camping in the park or staying in a nearby town like Durango. Entrance passes are required to enter the park, and can be purchased online ahead of time or as you enter the park.",
            "webUrl": "https://www.nps.gov/meve/index.htm",
            "halfDay": false,
            "fullDay": false,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 20,
            "title": "Visit Black Canyon of the Gunnison National Park",
            "image": "https://www.magnificentworld.com/wp-content/uploads/2021/02/Black-Canyon-of-the-Gunnison.jpg",
            "description": "Head to western Colorado to see one of the most narrow canyons in North America.",
            "details": "Located approximately 5 hours outside of Denver, Black Canyon of the Gunnison is a day trip or stay overnight to see the stars at this International Dark Sky Park. You can enter the North or South Rim. An entrance pass is required to enter, which can be purchased online in advance, or upon arrival only at the South Rim.",
            "webUrl": "https://www.nps.gov/blca/index.htm",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "oneHr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 21,
            "title": "Go for a Bike Ride on Cherry Creek Trail",
            "image": "https://res.cloudinary.com/simpleview/image/upload/v1476756488/clients/denver/cherry-creek-path-bikes_57313449-f0ae-5102-065bde7317fe103b.jpg",
            "description": "Ride your bike down part or all of this 40 mile paved trail.",
            "details": "Beginning in Confluence Park and ending in Franktown, the Cherry Creek Trail is a paved path that winds through several Denver neighborhoods. It is mostly used by walkers, runners, and bikers, and offers access to multiple parks, restaurants, and shopping areas.",
            "webUrl": "https://www.alltrails.com/trail/us/colorado/cherry-creek-trail",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
        id: 22,
            "title": "Go to Cherry Creek Dog Off Leash Area",
            "image": "https://i.imghippo.com/files/se9yD1708896014.pdf",
            "description": "Enjoy the day running and splashing around with your pooch!",
            "details": "Located in Cherry Creek State Park, this 107 acre area is the perfect spot to let your dog run and play. Day passes can be purchased at the entrance, as well as year passes.",
            "webUrl": "https://cpw.state.co.us/placestogo/parks/CherryCreek/Pages/DogOff-LeashArea.aspx",
            "halfDay": true,
            "fullDay": true,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            id: 23,
            "title": "Go Horseback Riding at 12 Mile Stables",
            "image": "https://i.ytimg.com/vi/rnDGyGGQXww/sddefault.jpg",
            "description": "Spend an afternoon horseback riding through Cherry Creek State Park.",
            "details": "Choose from the 1 hour Prairie Ride, 1.5 hour Stream Crossing Ride, 2 hour Cowboy Ride and Sunset and Dinner Rides. Visit their website to make a reservation!",
            "webUrl": "https://www.horserentalsdenver.com/horse-rentals",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "oneHr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
    ];

    const questions = [
        {
            id: 0,
            question: "How long would you like the activity to take?",
            options: [
                { id: 1, label: "Half day" },
                { id: 2, label: "Full day" },
                { id: 3, label: "Overnight" },
            ],
        },
        {
            id: 1,
            question: "How far from Denver would you like to travel?",
            options: [
                { id: 4, label: "Within the city" },
                { id: 5, label: "1 hour" },
                { id: 6, label: "Few hours" },
            ],
        },
        {
            id: 2,
            question: "Would you like to do an indoor or outdoor activity?",
            options: [
                { id: 7, label: "Indoors" },
                { id: 8, label: "Outdoors" },
            ],
        },
        {
            id: 3,
            question: "In what season will you be doing the activity?",
            options: [
                { id: 9, label: "Winter" },
                { id: 10, label: "Spring" },
                { id: 11, label: "Summer" },
                { id: 12, label: "Fall" },
            ],
        }
    ]

    const handleCheckboxChange = (optionId) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(optionId)) {
                return prevSelectedOptions.filter((id) => id !==optionId);
            } else {
                return [...prevSelectedOptions, optionId];
            }
        });
    };

    const pushToAllActivities = () => {
        const filteredActivities = all.filter(activity => {
            return (
                (
                (selectedOptions.includes(1) && activity.halfDay) ||
                (selectedOptions.includes(2) && activity.fullDay) ||
                (selectedOptions.includes(3) && activity.overnight)
                )
                &&

                (
                (selectedOptions.includes(4) && activity.inCity) ||
                (selectedOptions.includes(5) && activity.oneHr) ||
                (selectedOptions.includes(6) && activity.fewHours)
                )
                &&

                (
                (selectedOptions.includes(7) && activity.indoors) ||
                (selectedOptions.includes(8) && activity.outdoors)
                )
                &&

                (
                (selectedOptions.includes(9) && activity.winter) ||
                (selectedOptions.includes(10) && activity.spring) ||
                (selectedOptions.includes(11) && activity.summer) ||
                (selectedOptions.includes(12) && activity.fall)
                )
            );
    });

    allActivities.push(...filteredActivities);

    setAllActivities(filteredActivities);

    console.log(allActivities);
    console.log(filteredActivities);

    // filteredActivitiesRef.current = newFilteredActivities;
    // allActivitiesRef.current = newFilteredActivities;

    // console.log(allActivitiesRef.current);
    // console.log(newFilteredActivities);
    }

    // useEffect(() => {
    //     const saveToLocalStorage = () => {
    //         window.localStorage.setItem('ALLACTIVITIES_STATE', JSON.stringify(allActivities));
    //     };
    //     saveToLocalStorage();
    // }, [allActivities]);

    // useEffect(() => {
    //     const data = window.localStorage.getItem('ALLACTIVITIES_STATE');
    //     if (data !== null) setAllActivities(JSON.parse(data));
    // }, []);

    const navigateToAll = () => {
        pushToAllActivities();
        navigate('/all', { state: { selectedOptions, allActivities } });
    }

    const navigateToRandom = () => {
        navigate('/random');
        // pushToAllActivities();
    }

    return (
        <div className="questionnaire">
        <div className="questionnaireContainer">
            <div className="qTitle">Questionnaire</div>
            <div className="questions">
                {questions.map((questions) => (
                    <div className="question" key={questions.id}>
                        <div className="questionOnly">{questions.question}</div>
                        {questions.options.map((option) => (
                        <label key={option.id} className="options">
                            <input 
                                type="checkbox"
                                className="selectbox"
                                checked={selectedOptions.includes(option.id)}
                                onChange={() => handleCheckboxChange(option.id)}
                            />
                            {option.label}
                        </label>
                        ))}
                    </div>
                ))}
            </div>
            <div className="buttons">
                    <button onClick={navigateToAll} className="allBtn">All Activities</button>
                    <button onClick={navigateToRandom} className="randomBtn">Random Activity</button>
            </div>
        </div>
        <All allActivities={ allActivities } />
        <All selectedOptions={ selectedOptions } />
        </div>
    )

}

export default Questionnaire;