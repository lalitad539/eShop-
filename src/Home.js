import React from 'react';
import "./Home.css";
import Product from "./Product";
import { Margin } from '@mui/icons-material';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">

                <img src="https://www.selleractive.com/hubfs/SA/Amazon-Header.png"
                    alt="" className="home_image" />

              
                <div className="home_row">
                    <Product 
                    id="12321341"
                    title="Boat Stone 352 Pro/Stone 358 Pro w/ 14W Signature Sound, Up to 12 Hours
                     Playback, RGB LEDs, TWS Feature, Built-in Mic, BTv5.3, Free Music Streaming on..."
                     price={11.96}
                     rating={5}
                    image="https://m.media-amazon.com/images/I/71o6CU8MqVL._SL1500_.jpg"
                     />
                    <Product
                    id="12321341"
                    title="Zebronics Silencio 200T Wireless Headphones, Hybrid ANC 48dB, Upto 100Hrs Playback, 
                    40mm Drivers, Dual Mic ENC, BT v6.0, Gaming Mode, Dual Pairing, Touch Controls, App Support, AUX, Blue"
                     price={16.96}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/61jSiM-HbJL._SL1500_.jpg"
                     />
                      <Product 
                    id="12321341"
                    title="Boat Airdopes 219, 4Mics ENx, 40H Battery, Best in Segment for Calling, Stream Ad Free Music via App Support,
                     Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Carbon Black)"
                     price={50.06}
                     rating={3}
                     price={30.56}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/71FOccCOQmL._SL1500_.jpg"

                    />
                  

                </div>
                <div className="home_row">
                    <Product
                    id="12321341"
                    title="ASUS Vivobook 15, Smartchoice,Intel Core i3 13th Gen 1315U, 12GB RAM, 512GB SSD, FHD 15.6,
                     Win 11, Office 2024, Quiet Blue, 1.7Kg, X1504VA-BQ332WS, Intel UHD iGPU, M365 Basic (1Year)*, 42Whrs Laptop"
                     price={26.15}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/61JUHhbEMxL._SL1500_.jpg"
                     />
                    <Product 
                    id="12321341"
                    title="Lava Bold N2 (Siachen White, 4 GB RAM, 64 GB Storage) | 13MP AI Dual Rear Camera | Largest 6.75
                     HD+ Display | 5000 mAh Battery & 10W Charging | IP64 Water & Dust Proof | Charger & Phone-Case in Box"
                     price={22.06}
                     rating={2}
                    image="https://m.media-amazon.com/images/I/7145QM-EBcL._SL1500_.jpg"
                    />
                    <Product
                    id="12321341"
                    title="ECOVACS DEEBOT N30 Plus White 2 in 1 Robot Vacuum & Mop, New Launch, Bagless Eco-Friendly Multi-Cyclone Auto Empty Station,
                     10000 Pa Suction, 5200mAh Battery, Covers 3500+sq ft, Zero Tangle 2.0"
                     price={30.56}
                     rating={2}
                    image="https://m.media-amazon.com/images/I/6166RQH8dIL._SL1500_.jpg"
                    />

                </div>
                <div className="home_row">
                    <Product 
                    id="12321341"
                    title="Dyazo 15.6 Inch Laptop Sleeve with Charger Pouch | Front Pocket with Handle Water Resistant Sleeve Case |
                     Compatible for MacBook, HP, Dell, Acer, Asus, Microsoft, Samsung and Other Notebooks (Grey)"
                     price={50.06}
                     rating={3}
                     price={30.56}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/719+YnugMoL._SL1500_.jpg"

                    />
                    <Product 
                    id="12321341"
                    title="Boat Airdopes 219, 4Mics ENx, 40H Battery, Best in Segment for Calling, Stream Ad Free Music via App Support,
                     Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Carbon Black)"
                     price={50.06}
                     rating={3}
                     price={30.56}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/71FOccCOQmL._SL1500_.jpg"

                    />
                    </div>
                   <div className="home_row">
                    <Product 
                    id="12321341"
                    title="Boat Stone 352 Pro/Stone 358 Pro w/ 14W Signature Sound, Up to 12 Hours
                     Playback, RGB LEDs, TWS Feature, Built-in Mic, BTv5.3, Free Music Streaming on..."
                     price={11.96}
                     rating={5}
                    image="https://m.media-amazon.com/images/I/71o6CU8MqVL._SL1500_.jpg"
                     />
                    <Product
                    id="12321341"
                    title="Zebronics Silencio 200T Wireless Headphones, Hybrid ANC 48dB, Upto 100Hrs Playback, 
                    40mm Drivers, Dual Mic ENC, BT v6.0, Gaming Mode, Dual Pairing, Touch Controls, App Support, AUX, Blue"
                     price={16.96}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/61jSiM-HbJL._SL1500_.jpg"
                     />
                      <Product 
                    id="12321341"
                    title="Boat Airdopes 219, 4Mics ENx, 40H Battery, Best in Segment for Calling, Stream Ad Free Music via App Support,
                     Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Carbon Black)"
                     price={50.06}
                     rating={3}
                     price={30.56}
                     rating={4}
                    image="https://m.media-amazon.com/images/I/71FOccCOQmL._SL1500_.jpg"

                    />

                </div>
            </div>

        </div>
    );
}

export default Home
