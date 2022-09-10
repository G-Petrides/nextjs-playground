import {useDispatch, useSelector} from "react-redux";
import {getUserState, setEmail, setName} from "../../store/slices/slice";
import Link from "next/link";
import {wrapper} from "../../store/store";

export default function Page1() {
    const dispatch = useDispatch()
    const data = useSelector(getUserState);

    function changeToRichard() {
        dispatch(setName("Richard"))
    }

    return (
        <div>
            <p>
                {data.name}
                <br/>
                {data.email}
            </p>
            <p>
                <button onClick={changeToRichard}>Change to Richard</button>
            </p>
            <p>
                <Link href="/"><a>Home</a></Link>
            </p>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async () => {
            store.dispatch(setName("Geoff"));
            store.dispatch(setEmail("geoff@quaysports.com"));
            return {props: {}}
        }
);