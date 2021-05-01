import Image from "next/image"
import Link from "next/link";

import Wrapper from "./styles"

interface ThumbnailProps {
    urlThumb: string;
}

const Thumbnail = ({ urlThumb }: ThumbnailProps) => {

    return (
        <Wrapper>
            <Link href="/">
                <button className="last">
                    <img src="/icons/arrow-left.svg" alt="Voltar"/>
                </button>
            </Link>
            <Image
                src={urlThumb}
                width={700}
                height={160}
                objectFit="cover"
                objectPosition="center"
                className="thumbnail"
            />
            <button className="play">
                <img src="/icons/play.svg" alt="Tocar podcast"/>
            </button>
        </Wrapper>
    )
}

export default Thumbnail;