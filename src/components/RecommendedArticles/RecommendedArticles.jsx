import React, { useState } from "react";
import { Link } from "react-router-dom";
import CharacterPng from "../../assets/characters/character2.png";
import Game1 from "../../assets/game/Teken.jpg";
import tekenMini from "../../assets/game/tekenMini.jpg";
import Codmini from "../../assets/game/Codmini.jpg";
import Game2 from "../../assets/game/game6.jpg";
import Game3 from "../../assets/game/game3.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import LoginModal from "./LoginModal"; 

const game1Cover = {
  backgroundImage: `url(${Game1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "450px",
};
const game2Cover = {
  backgroundImage: `url(${Game2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const game3Cover = {
  backgroundImage: `url(${Game3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const RecommendedArticles = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLinkClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-10 bg-primary text-white w-full overflow-hidden">
        <div className="container relative hidden sm:block">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Recommended Articles</h1>
          </div>
          {/* Recommended Articles Card section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 mt-8">
              <Link 
                to="/Teken"
                style={game1Cover}
                className="row-span-1 sm:row-span-2 sm:col-span-2 bg-red-400 h-[350px] rounded-xl relative"
                onClick={handleLinkClick}
              >
                <div className="bg-black/20 h-full w-full">
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent">
                      <div>
                        <img
                          src={tekenMini}
                          alt=""
                          className="h-[140px] min-w-[110px] object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">
                          Tekken 7: Mastering Combos and Strategies for Ultimate Victory{" "}
                        </h1>
                        <p className="text-sm text-white/80">
                          Tekken 7, the latest installment in the legendary fighting game series, has captivated gamers...........
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
             
              <Link 
                to="Godofwar"
                style={game2Cover}
                className="sm:row-span-1 bg-orange-400 rounded-xl relative"
                onClick={handleLinkClick}
              >
                <div className="bg-black/20 h-full w-full">
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent">
                      <div>
                        <h1 className="font-semibold text-xl">
                          God Of War 
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="Cod"
                style={game3Cover}
                className="sm:row-span-1 bg-blue-500 rounded-xl relative"
                onClick={handleLinkClick}
              >
                <div className="bg-black/20 h-full w-full">
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent">
                      <div>
                        <img
                          src={Codmini}
                          alt=""
                          className="h-[80px] min-w-[60px] object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">
                          CALL OF DUTY MODERN WARFARE
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Character Png  */}
          <img
            src={CharacterPng}
            alt="Not found"
            className="absolute right-[-160px] top-[50px] z-[1] h-[340px]"
          />
        </div>
      </section>
      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLogin={loginWithRedirect}
      />
    </>
  );
};

export default RecommendedArticles;
