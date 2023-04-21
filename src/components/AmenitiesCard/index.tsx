import { AmenitiesContainer } from "./styles";

import { TbToolsKitchen, TbBeach, TbWifi, TbCar, TbBath } from 'react-icons/tb'
import { FaHamburger, FaCity } from 'react-icons/fa'
import Link from "next/link";

export default function AmenitiesCard() {
    return (
        <AmenitiesContainer>
            <div>
                <h2>Amenities</h2>

                <div>
                    <TbToolsKitchen size={20} />
                    <span>Kitchen</span>
                </div>
                <div>
                    <TbBeach size={20} />
                    <span>Beach Access</span>
                </div>
                <div>
                    <TbWifi size={20} />
                    <span>Free WiFi 24/7</span>
                </div>
                <div>
                    <TbCar size={20} />
                    <span>Free parking</span>
                </div>
                <div>
                    <TbBath size={20} />
                    <span>Free clean bathroom</span>
                </div>
                <div>
                    <FaHamburger size={20} />
                    <span>Breakfast included</span>
                </div>
                <div>
                    <FaCity size={20} />
                    <span>Nearby city</span>
                </div>
            </div>
            <div>
                <Link href="#">
                    Show all amenities
                </Link>
            </div>

        </AmenitiesContainer>
    )
}