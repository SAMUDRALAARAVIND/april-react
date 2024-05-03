import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { suggestionsSelector } from "./redux/selectors";
import { fetchSuggestions } from "./redux/thunks";
import { Spinner } from "../components/Spinner";
import { Empty } from "antd";
import { User } from "./User";

export const SuggestionsList = () => {
    const suggestionsInfo = useSelector(suggestionsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSuggestions);
    }, []);

    if (suggestionsInfo.apiStatus === "pending" || suggestionsInfo.apiStatus === "init") {
        return <Spinner />
    }

    const suggestions = suggestionsInfo.users;

    return <div className="users-list">
        {suggestions.length === 0 ? <Empty description="No suggestions for you" /> :
            suggestions.map(user => <User key={user._id} user={user} />)
        }
    </div>
}