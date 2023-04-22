import ReviewCard from "@/components/ReviewCard";
import { DetailsContainer, RoomDetails, RoomHeader, RoomImagesContainer } from "@/styles/pages/details";
import Image from "next/image";
import { FiHeart, FiHome, FiMapPin, FiStar, FiUpload } from "react-icons/fi";

import dynamic from 'next/dynamic'
import RoomFeatures from "@/components/RoomFeatures";
import AmenitiesCard from "@/components/AmenitiesCard";
import Calendar from "@/components/Calendar";
import { GetStaticPaths, GetStaticProps } from "next";

import { roomsData } from '../../data/rooms'
import Head from "next/head";

const DynamicMap = dynamic(() => import('../../components/Map'), {
    ssr: false,
})

interface RoomProps {
    room: {
        id: number,
        name: string,
        image: string,
        description: string,
        beds: number,
        baths: number,
        size: number,
        city: string,
        country: string,
        category: string,
        price: number,
        rating: number,
        coordX: number,
        coordY: number,
        zoom: number
    }
}

export default function Details({ room }: RoomProps) {
    const myLoader = () => {
        return "https://lh3.googleusercontent.com/gps-proxy/AE4_-5FPjDfjyWoaKgMZM9FmKXXUZP9dUNE_sc5xtXyXm-2sX61lhN3gY2I9dUQQGe8ejE0iYDsXBAbXQNtOKAEvnALxrZ54EIWfgN6xVFsPUAAXuGdJqH-E-H6GxdtPZgir42Mfht2wZN3xiwkP8sn9I9SwEFtaiSr7iLtpGAcm_tElH0zJUxGJG3k=w296-h202-n-k-no-v1-rj"
    }

    console.log(room.name, room.coordX, room.coordY)
    return (
        <>
            <Head>
                <title>{room.name}</title>
            </Head>
            <DetailsContainer>
                <RoomHeader>
                    <div>
                        <h1>{room.name}</h1>
                        <div>
                            <div><FiStar size={20} color="#F2C90F" fill="#F2C90F" /> <span><strong>{room.rating}</strong> (256 reviews)</span></div>
                            <div><FiHome size={20} /> <span>{room.category}</span></div>
                            <div><FiMapPin size={20} /> <span>{room.country}</span></div>
                        </div>
                    </div>

                    <div>
                        <button><FiUpload size={20} /></button>
                        <button><FiHeart size={20} /></button>
                    </div>
                </RoomHeader>

                <RoomImagesContainer>
                    <div>
                        <Image loading={"lazy"} src={room.image} alt="" width={500} height={300} placeholder="blur" blurDataURL={room.image} />
                    </div>
                    <div>
                        <Image loading={"lazy"} src={room.image} alt="" width={280} height={200} placeholder="blur" blurDataURL={room.image} />
                    </div>
                    <div>
                        <Image loading={"lazy"} src={room.image} alt="" width={280} height={200} placeholder="blur" blurDataURL={room.image} />
                    </div>
                    <div>
                        <Image loading={"lazy"} src={room.image} alt="" width={280} height={200} placeholder="blur" blurDataURL={room.image} />
                    </div>
                    <div>
                        <Image loading={"lazy"} src={room.image} alt="" width={280} height={200} placeholder="blur" blurDataURL={room.image} />
                        <button>Show all</button>
                    </div>
                </RoomImagesContainer>

                <RoomDetails>
                    <section>
                        <h2>Private room in house</h2>
                        <RoomFeatures beds={room.beds} baths={room.baths} size={room.size} />

                        <p>{room.description}</p>

                        <h3>Where you&apos;ll be</h3>

                        <DynamicMap x={room.coordX} y={room.coordY} z={room.zoom} />
                    </section>
                    <aside>
                        <ReviewCard rating={room.rating} />
                        <AmenitiesCard />
                    </aside>
                </RoomDetails>

                <Calendar price={room.price} />
            </DetailsContainer>
        </>
    )
}

// Vai executar mostrar o conteudo na tela apenas quando os dados da API carregarem
// Paths: pode-se escolher quais conteudos deixar pre-carregado para diminuir tempo de carregamento da pagina
// Ex: produtos mais vendidos
// Deixar mais enxuto possivel, pois isso carrega na build e nao deve demorar
// "API" utilizada e bem pequena, isso serve mais para APIs externas que podem demorar pra carregar, como o stripe
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const roomId = Number(params!.id);

    const room = roomsData[roomId - 1]; // Esta solucao e somente porque o data utilizado e um array de objetos, desconsiderando que se pode apagar uma room

    return {
        props: {
            room: {
                id: room.id,
                name: room.name,
                image: room.image,
                description: room.description,
                beds: room.beds,
                baths: room.baths,
                size: room.size,
                city: room.city,
                country: room.country,
                category: room.category,
                price: room.price,
                rating: room.rating,
                coordX: room.coordX,
                coordY: room.coordY,
                zoom: room.zoom
            }
        }
    }
}