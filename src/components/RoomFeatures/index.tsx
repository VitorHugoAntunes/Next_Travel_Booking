import { BiBath, BiBed, BiExpand } from "react-icons/bi";
import { FeaturesContainer } from "./styles";

interface RoomFeaturesProps {
    beds: number,
    baths: number,
    size: number,
}

export default function RoomFeatures({ beds, baths, size }: RoomFeaturesProps) {
    return (
        <FeaturesContainer className="roomFeatures">
            <div><BiBed size={24} /> <span>{beds} camas</span></div>
            <div><BiBath size={24} /> <span>{baths} banheiras</span></div>
            <div><BiExpand size={24} /> <span>{size}km</span></div>
        </FeaturesContainer>
    )
}