import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import './widgets.css'

const Widgets = () => {

    const newsArticles = (heading, subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">

            <h2>LinkedIn News</h2>
            <InfoIcon />
            </div>
            {newsArticles('Mohammed Alkhalaf', 'Top rated front end developer 9999')}
            {newsArticles('Mohammed Alkhalaf', 'Top rated front end developer 9999')}
            {newsArticles('Mohammed Alkhalaf', 'Top rated front end developer 9999')}
            {newsArticles('Mohammed Alkhalaf', 'Top rated front end developer 9999')}
            {newsArticles('Mohammed Alkhalaf', 'Top rated front end developer 9999')}
            {newsArticles('Taimullah is my son', 'Top news 9999')}
            {newsArticles('Taimullah is my son', 'Top news 9999')}
            {newsArticles('Taimullah is my son', 'Top news 9999')}
            {newsArticles('Taimullah is my son', 'Top news 9999')}
        </div>
    )
}

export default Widgets
