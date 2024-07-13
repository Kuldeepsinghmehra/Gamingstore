import React from 'react'
import Image1 from "../../assets/Article/image1.webp";

export const Article1 = () => {
  return (
    <>
     <div className="min-h-screen bg-primary text-white flex justify-center items-center p-4">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Tekken 7: Mastering Combos and Strategies for Ultimate Victory
        </h1>
        <img
          src={Image1}
          alt="Tekken 7"
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-lg leading-relaxed mb-4">
          Tekken 7, the latest installment in the legendary fighting game series, has captivated gamers around the world with its intricate combat mechanics and stunning visuals. Whether you're a seasoned veteran or a newcomer to the series, mastering combos and strategies is crucial to achieving ultimate victory in this fast-paced, competitive game.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          One of the key elements to success in Tekken 7 is understanding the basics of movement and positioning. Utilizing sidesteps, dashes, and backdashes effectively can help you avoid your opponent's attacks and create openings for your own. Additionally, learning to block and parry attacks can significantly reduce the damage you take and turn the tide of battle in your favor.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Combos are another essential aspect of Tekken 7. Practicing and perfecting your character's combo strings can lead to high-damage opportunities and pressure your opponent into making mistakes. Spend time in the training mode to experiment with different combo sequences and discover the most effective ones for various situations.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Finally, studying your opponents and adapting your strategies is key to becoming a formidable player. Each character in Tekken 7 has unique strengths, weaknesses, and playstyles. By understanding these characteristics, you can develop counter-strategies that exploit your opponent's vulnerabilities and maximize your advantages.
        </p>
        <p className="text-lg leading-relaxed">
          Tekken 7 offers a deep and rewarding experience for those willing to invest the time and effort to master its mechanics. With dedication and practice, you can rise through the ranks and achieve victory in this thrilling fighting game.
        </p>
      </div>
    </div>
    
    </>
  )
}
export default Article1
