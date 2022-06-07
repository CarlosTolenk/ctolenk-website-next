import React from 'react';

interface IPropsTitle {
    title: string;
    slogan: string;
}

const Title = ({title, slogan}: IPropsTitle) => {
    return (
        <div className="section-title">
            <div className="main-title">
                <div className="title-main-page">
                    <h4>{title}</h4>
                    <p>{slogan}</p>
                </div>
            </div>
        </div>
    )
}

export default Title
