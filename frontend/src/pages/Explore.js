import React from "react";
import Navigation from "../components/Navigation";
import { TypeAnimation } from 'react-type-animation';

export const Explore = () => {
  return (
    <>
    <div className="wrapper">
    <div className="w-screen h-auto pb-20">
      <div className="w-screen h-600 bg-bottom bg-[url('../public/abstract.jpg')] bg-cover">
        <Navigation />
        <span className='flex justify-center mt-16 px-20' data-aos="zoom-in">
          <h1 className="p-0 text-8xl font-extrabold inline-block text-black">Wiki</h1>
          <h1 className="p-0 text-8xl font-extrabold inline-block text-blue">Learn</h1>
        </span>
        <div className="text-2xl absolute pl-32 rounded-full py-6 w-screen h-20 w-screentext-black focus:outline-0">

          <TypeAnimation
            sequence={[
              'Agriculture', // Types 'One'
              2000, // Waits 1s
              'Calculus', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'University of Waterloo',
              2000,
              'University',
              2000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.2em', color: "#0EACE3", fontWeight: "bold" }}
          />
        </div>
        </div>

      <div class="explore-card-container">
        <div class="explore-card" data-aos="slide-left">
          <img
            src="https://orientation.engsci.utoronto.ca/wp-content/uploads/2022/07/best-calculus-textbooks.png"
            alt=""
          />
          <div class="explore-card__body">
            <span class="tag">
              <p>Mathematics</p>
            </span>
            <p class="topic">Calculus</p>
            <p class="description">
            Calculus, originally called infinitesimal calculus or "the calculus of infinitesimals", is the mathematical study of continuous change, in the same way that geometry is the study of shape, and algebra is the study of generalizations of arithmetic operations. It has two major branches, differential calculus and integral calculus; the former concerns ...
            </p>
            <a href="/" class="btn">Learn</a>
          </div>
        </div>

        <div class="explore-card" data-aos="slide-right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Knight_academy_lecture_%28Rosenborg_Palace%29.jpg"
            alt=""
          />
          <div class="explore-card__body">
            <span class="tag">
              <p>Humanities & Social Science</p>
            </span>
            <p class="topic">Rhetorics</p>
            <p class="description">
              Rhetoric (/ˈrɛtərɪk/) is the art of persuasion, which along with grammar and logic (or dialectic), is one of the three ancient arts of discourse. Rhetoric aims to study the techniques writers or speakers utilize to inform, persuade, or motivate particular audiences in specific situations. Aristotle defines rhetoric as "the faculty of observing in any given ...
            </p>
            <a href="/" class="btn">Learn</a>
          </div>
        </div>

        <div class="explore-card" data-aos="slide-left">
          <img
            src="https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg"
            alt=""
          />
          <div class="explore-card__body">
            <span class="tag">
              <p>Technologies</p>
            </span>
            <p class="topic">Blockchain</p>
            <p class="description">
            A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). The timestamp proves that the transaction ...
            </p>
            <a href="/" class="btn">Learn</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Explore;
