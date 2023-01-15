import React from 'react'
import { useState } from 'react';

export const Summarize = () => {

    const [string, setString] = useState("");

    const NLPCloudClient = require('nlpcloud');
    const client = new NLPCloudClient('bart-large-cnn', 'b064200011562b9e156c5188f5f9faee9793e7c1')
    
    function handleClick() {
        console.log("hi");
        const jsonData = "One month after the United States began what has become a troubled rollout of a national COVID vaccination campaign, the effort is finally gathering real steam.Close to a million doses-- over 951, 000, to be more exact-- made their way into the arms of Americans in the past 24 hours, the U.S.Centers for Disease Control and Prevention reported Wednesday.That s the largest number of shots given in one day since the rollout began and a big jump from the previous day, when just under 340, 000 doses were given, CBS News reported. That number is likely to jump quickly after the federal government on Tuesday gave states the OK to vaccinate anyone over 65 and said it would release all the doses of vaccine it has available for distribution. Meanwhile, a number of states have now opened mass vaccination sites in an effort to get larger numbers of people inoculated, CBS News reported."
        fetch("/summarized/" + jsonData, {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setString(data.result.summary_text);
            })
            .catch(error => {
                console.log('Too many requests per minute for the summarization API. Please try again later.');
            });
    }
    
    return (
      <>
      <button onClick={handleClick} className="h-96 w-96 bg-black"> hi </button>
            <div>{string}</div>
        </>
  )
}

export default Summarize;