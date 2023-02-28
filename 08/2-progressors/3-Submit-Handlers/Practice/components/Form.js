// import useState
import React from "react";
// import Character component


function Form() {
    // Create state variables here



    
    // Create handleSubmit function here
    



    return (
    <div className="create">
        <form>
            <label>Character Name:</label>
            <input 
                type="text" 
                required 
            />
            <label>What is your backstory?</label>
            <textarea
                required
            ></textarea>
            <label>Superpower:</label>
            <select>
                <option value="🔥">🔥</option>
                <option value="💨">💨</option>
                <option value="⚡️">⚡️</option>
                <option value="️️🌪️">🌪️</option>
            </select>
            <label>Icon:</label>
            <select>
                <option value="😀">😀</option>
                <option value="🥹">🥹</option>
                <option value="😎">😎</option>
                <option value="🫡">🫡</option>
                <option value="🧐">🧐</option>
            </select>
            <button>Create Character</button>
        </form>
        
        {/* Import Character component here */}



    </div>
  );
}
 
export default Form;