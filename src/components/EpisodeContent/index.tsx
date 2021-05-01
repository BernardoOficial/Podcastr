import Wrapper from "./styles"

interface Episode {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  description: string;
  fileUrl: string;
  duration: number;
  durationString: string;
}

interface EpisodeContentProps {
    content: Episode,
}

const EpisodeContent = ({ content: {
    id,
    title,
    members,
    publishedAt,
    durationString,
    description } }: EpisodeContentProps) => {

    return (
        <Wrapper>
            <header>
                <h1 className="title">{title}</h1>
                <span className="info-episode">{members}</span>
                <span className="info-episode">{publishedAt}</span>
                <span className="info-episode">{durationString}</span>
            </header>

            <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
        </Wrapper>
    )
}

export default EpisodeContent;