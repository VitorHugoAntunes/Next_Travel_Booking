import RoomFeatures from "@/components/RoomFeatures";
import { CategoriesContainer, HomeContainer, ImageContainer, RoomCard, RoomCardContainer, RoomCardDetails } from "@/styles/pages/home";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMapPin, FiStar } from 'react-icons/fi';

import { roomsData } from '../data/rooms';

export default function Home() {
  return (
    <HomeContainer>
      <CategoriesContainer>
        <Link href="/">Tropical</Link>
        <Link href="/">Islands</Link>
      </CategoriesContainer>

      <RoomCardContainer>

        {roomsData.map(room => (
          <Link href={`/room/${room.id}`} key={room.id}>
            <RoomCard>
              <ImageContainer>
                <div>
                  <div>
                    <FiMapPin size={20} />
                    <span>{room.city}, {room.country}</span>
                  </div>
                  <button>
                    <FiHeart size={24} />
                  </button>
                </div>
                <Image src={room.image} width={300} height={250} alt="" />
              </ImageContainer>

              <RoomCardDetails>
                <div>
                  <span>{room.name}</span> <div><FiStar size={20} color="#F2C90F" fill="#F2C90F" /> <span>{room.rating}</span></div>
                </div>
                <span>${room.price}</span>
                <RoomFeatures beds={room.beds} baths={room.baths} size={room.size} />
              </RoomCardDetails>

            </ RoomCard>
          </Link>
        ))}


      </RoomCardContainer>

    </HomeContainer>
  )
}
