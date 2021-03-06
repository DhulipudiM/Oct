import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = (props) => {
    const news = props.news.map((item,i)=>(
        <NewsListItem item={item} key={i}/>
));

    return(
        <>
            {news} {props.children}
        </>
    )
}

export default NewsList;


