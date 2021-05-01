import { GetStaticPaths, GetStaticProps } from "next";

import { api } from "../../services/axios";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { convertNumberToHour } from "../../utils/convertNumberToHour";

import Thumbnail from "../../components/Thumbnail";
import EpisodeContent from "../../components/EpisodeContent";

interface EpisodeType {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
  fileUrl: string;
  duration: number;
  durationString: string;
}

interface EpisodeType {
    episode: EpisodeType
}

export default function Episode({ episode }: EpisodeType) {

    return (
        <main>
            <Thumbnail urlThumb={episode.thumbnail} />
            <EpisodeContent
                content={{
                    id: episode.id,
                    title: episode.title,
                    members: episode.members,
                    publishedAt: episode.publishedAt,
                    description: episode.description,
                    fileUrl: episode.fileUrl,
                    duration: episode.duration,
                    durationString: episode.durationString
                }}
            />
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { id } = ctx.params;
    
    const { data } = await api.get(`/episodes/${id}`);

    const episode = {
        id: data.id,
        title: data.title,
        members: data.members,
        thumbnail: data.thumbnail,
        description: data.description,
        fileUrl: data.file.url,
        duration: Number(data.file.duration),
        durationString: convertNumberToHour(Number(data.file.duration)),
        publishedAt: format(parseISO(data.published_at), "d MMM yy", { locale: ptBR }),
    };

    return {
        props: {
            episode,
        },
        revalidate: 60 * 60 * 24, // 24 horas
    }
}