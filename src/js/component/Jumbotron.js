import React from 'react';

const Jumbotron = () => {
    let jumboTitle = "A Warm Wellcome!";
    let jumboText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor libero, luctus sit amet aliquam eu, vulputate sed odio. Vivamus mollis erat at lectus vestibulum, quis feugiat leo porta. Nullam et velit ac lectus fringilla feugiat. Fusce eu elit sapien."
    let jumboBtnName = "Call to action!";

    return (
        <div className="card-body bg-secondary-subtle text-start my-3 p-3">
            <h1 className="card-title">{jumboTitle}</h1>
            <p className="card-text">{jumboText}</p>
            <a href="#" className="btn btn-primary">{jumboBtnName}</a>
        </div>
    );
}

export default Jumbotron;