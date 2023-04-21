
import ReviewCard from "@/components/ReviewCard";
import { DetailsContainer, RoomDetails, RoomHeader, RoomImagesContainer } from "@/styles/pages/details";
import Image from "next/image";
import { FiHeart, FiHome, FiMapPin, FiStar, FiUpload } from "react-icons/fi";

import dynamic from 'next/dynamic'
import RoomFeatures from "@/components/RoomFeatures";
import AmenitiesCard from "@/components/AmenitiesCard";
import Calendar from "@/components/Calendar";

const DynamicMap = dynamic(() => import('../components/Map'), {
    ssr: false,
})

export default function Details() {
    return (
        <DetailsContainer>
            <RoomHeader>
                <div>
                    <h1>Room name</h1>
                    <div>
                        <div><FiStar size={20} color="#F2C90F" fill="#F2C90F" /> <span><strong>4.8</strong> (256 reviews)</span></div>
                        <div><FiHome size={20} /> <span>Superhost</span></div>
                        <div><FiMapPin size={20} /> <span>Mauritius</span></div>
                    </div>
                </div>

                <div>
                    <button><FiUpload size={20} /></button>
                    <button><FiHeart size={20} /></button>
                </div>
            </RoomHeader>

            <RoomImagesContainer>
                <div>
                    <Image src="https://images5.alphacoders.com/361/361643.jpg" alt="" width={500} height={300} />
                </div>
                <div>
                    <Image src="https://images5.alphacoders.com/361/361643.jpg" alt="" width={280} height={200} />
                </div>
                <div>
                    <Image src="https://images5.alphacoders.com/361/361643.jpg" alt="" width={280} height={200} />
                </div>
                <div>
                    <Image src="https://images5.alphacoders.com/361/361643.jpg" alt="" width={280} height={200} />
                </div>
                <div>
                    <Image src="https://images5.alphacoders.com/361/361643.jpg" alt="" width={280} height={200} />
                    <button>Show all</button>
                </div>
            </RoomImagesContainer>

            <RoomDetails>
                <section>
                    <h2>Private room in house</h2>
                    <RoomFeatures beds={4} baths={3} size={22} />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus sunt maxime molestiae fuga. Provident magni aliquam dolorum consequuntur, minima fuga, accusamus non commodi excepturi quaerat, ipsa rerum eveniet beatae.</p>

                    <h3>Where you&apos;ll be</h3>

                    <DynamicMap />
                </section>
                <aside>
                    <ReviewCard />
                    <AmenitiesCard />
                </aside>
            </RoomDetails>

            <Calendar />
        </DetailsContainer>
    )
}
