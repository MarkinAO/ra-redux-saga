import { useDispatch, useSelector } from "react-redux";
import NewsPost, { INews } from "./NewsPost";
import { RootState } from "./redux/store";
import { useEffect } from "react";
import { getStartPosts, getPosts } from "./redux/postsSlice";
import Loder from "../../UI/Loder";
import style from "./styles/NewsfeedList.module.scss";

export default function NewsfeedList() {
    const { list, load } = useSelector((store: RootState) => store.posts);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getStartPosts())        
    }, [])

    return(
        <div className={style.container}>            
            { list.map((news: INews) => NewsPost(news)) }
            { load && 
                <div>
                    <Loder /> 
                </div>                
            }
            { list.length > 0 && !load &&
                <button 
                    className={style.button}
                    onClick={() => {
                        const id = list[list.length - 1].id;
                        dispatch(getPosts(String(id)));
                    }}                    
                >
                    К предыдущим записям
                </button>
            }
        </div>        
    )
}