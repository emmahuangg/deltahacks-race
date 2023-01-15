import React from 'react'
import { useState, useEffect } from 'react';

export const Article = (props) => {
  const [content, setContent] = useState(props.string);

    // function checkString(str) {
    //     https://api.datamuse.com/words?sp=the&md=f&max=1
    // }

    function simplify(str) {
      const strArr = str.split(' ');
      strArr.forEach((word) => {
        var start, end;
        if (!!word.match(/^[.,:!?()]/)) {
          start = word[0];
        }
        word = word.replace(/[^\w\s\']|_/g, "")
            fetch(`https://api.datamuse.com/words?sp=` + word + `&md=f&max=1`)
              .then((response) => response.json())
              .then((data) => {
                if (data[0]) {
                  console.log(data[0].word + " Original: " + word)
                  console.log(data[0].tags[0][0])
                } else { 
                  console.log("NOTENOTNEOTNOENTOENOTNTONE" + word)
                }
              })
              .catch((err) => { console.log(err.message) });
        })
    }
  useEffect(() => { simplify(props.string) }, []);

  return (
    
    <div>{ content }</div>
  )
}

export default Article;