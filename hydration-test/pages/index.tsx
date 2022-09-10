import {wrapper} from "../store/store";
import {getUserState, setEmail, setName} from "../store/slices/slice";
import {useSelector} from "react-redux";
import Link from "next/link"

export default function Home() {
    const data = useSelector(getUserState);

    return (
        <div>
            <p>
                {data.name}
                <br/>
                {data.email}
            </p>
            <p>
                <Link href="/page1"><a>Page1</a></Link>
            </p>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async () => {
            store.dispatch(setName("Richard"));
            store.dispatch(setEmail("richard@quaysports.com"));
            return {props: {}}
        }
);