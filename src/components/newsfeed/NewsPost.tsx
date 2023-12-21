import style from './styles/NewsPost.module.scss';

export type INews = {
    id: number
    date: number
    post_type: string
    text: string
    attachments: {
                    type: string
                    video: {
                                id: number
                                title: string
                                description: string
                                date: number
                                comments: number
                                views: number
                                image:  {
                                            url: string
                                        }[]
                            }
                 }[]
}

export default function NewsPost(news: INews) {
    return(
        <div key={news.id} className={style.container}>
            <div className={style.header}>
                <div className={style.title}>{ news.text }</div>
                <div className={style.date}>{ news.date }</div>
            </div>
        </div>
    )
}