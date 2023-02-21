import React from "react";



function Slider() {



    return(
        <div className="card">
            <div className="card-body">
            {/* Output slideVal state here */}
            <h5 className="card-title">Slider Value: </h5>
                <div class="slidecontainer">
                    <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    class="slider" 
                    id="myRange"
                    // Update slideVal state here
                    


                    
                    />
                </div>
            </div>
        </div>
    )
}

module.exports = Slider;