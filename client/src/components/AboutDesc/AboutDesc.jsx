import React from "react";

function AboutDesc() {
    const bottomDescription = (
        
      <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-center flex justify-center">
        At Arts Studios, we are dedicated to highlight top of class artists and showcase great arts and features on all kinds of styles. Please be sure to contribute and support the site by donating 
      </p>
    );
  
    return (
      <div className="flex justify-end"> {/* Move the paragraph to the right */}
        {bottomDescription}
      </div>
    );
  }
  
  export default AboutDesc;
  