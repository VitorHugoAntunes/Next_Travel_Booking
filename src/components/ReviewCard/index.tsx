import { FiStar } from "react-icons/fi";
import { ReviewCardContainer } from "./styles";

interface ReviewCardProps {
    rating: number;
}

export default function ReviewCard({ rating }: ReviewCardProps) {
    return (
        <ReviewCardContainer>
            <div className="rating"><FiStar size={30} color="#F2C90F" fill="#F2C90F" /> <span><strong>{rating}</strong> (256 reviews)</span></div>

            <div>
                <span>Cleanlines</span>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <span>4.8</span>
                </div>

            </div>
            <div>
                <span>Communications</span>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <span>4.8</span>
                </div>
            </div>
            <div>
                <span>Check in</span>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <span>4.8</span>
                </div>
            </div>
            <div>
                <span>Locations</span>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <span>4.8</span>
                </div>
            </div>
            <div>
                <span>Value</span>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <span>4.8</span>
                </div>
            </div>
        </ReviewCardContainer>
    )
}