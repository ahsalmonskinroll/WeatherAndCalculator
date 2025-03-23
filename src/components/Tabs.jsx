import React from "react";
import { useNavigate } from "react-router-dom";

const Tabs = ({ className }) => {
  const navigate = useNavigate();

  return (
     <div className={`container df jc ${className}`}>
    
      <div className="tabWrapper">
        <div className="row row-cols-2">
          <div
             className="col tab df jc aic "
            
            onClick={() => navigate("/weather")}
          >
            Hava Durumu
          </div>
          <div
             className="col tab df jc aic "
            
            onClick={() => navigate("/calculator")}
          >
            Hesap Makinesi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
