import { CategoriesContainer, HomeContainer, ImageContainer, RoomCard, RoomCardContainer, RoomCardDetails } from "@/styles/pages/home";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMapPin, FiStar } from 'react-icons/fi';
import { BiBed, BiBath, BiExpand } from 'react-icons/bi';

import { data } from '../data/rooms';

export default function Home() {
  return (
    <HomeContainer>
      <CategoriesContainer>
        <Link href="/">Tropical</Link>
        <Link href="/">Islands</Link>
      </CategoriesContainer>

      <RoomCardContainer>

        {data.map(room => (
          <RoomCard key={room.id}>
            <ImageContainer>
              <div>
                <div>
                  <FiMapPin size={20} />
                  <span>{room.city}, {room.country}</span>
                </div>
                <div>
                  <FiHeart size={24} />
                </div>
              </div>
              <Image src={room.image} width={300} height={250} alt="" />
            </ImageContainer>

            <RoomCardDetails>
              <div>
                <span>{room.name}</span> <div><FiStar size={20} color="#F2C90F" fill="#F2C90F" /> <span>{room.rating}</span></div>
              </div>
              <span>${room.price}</span>
              <div>
                <div><BiBed size={24} /> <span>{room.beds} camas</span></div>
                <div><BiBath size={24} /> <span>{room.baths} banheiras</span></div>
                <div><BiExpand size={24} /> <span>{room.size}km</span></div>
              </div>

            </RoomCardDetails>

          </ RoomCard>
        ))}


      </RoomCardContainer>

    </HomeContainer>
  )
}
