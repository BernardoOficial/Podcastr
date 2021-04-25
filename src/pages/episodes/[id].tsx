import { useRouter } from "next/router";

export default function Episodes() {

    const router = useRouter();

    return (
        <h1>
            Hello world
            <br/>
            {router.query.id}
        </h1>
    )
}