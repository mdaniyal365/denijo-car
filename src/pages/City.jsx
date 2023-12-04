import React, { useState } from 'react';

const SuggestionsInput = () => {
  const [value, setValue] = useState('');
//   const [open,isOpen]=useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const suggestions = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur'];
  
  const suggestionArr = suggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(value.toLowerCase())
  );

  const changeHandler = e => {
    setValue(e.target.value);
  
    
  };
  const rewst =(suggestion)=>{
    setValue(suggestion)
   
  }

  return (
    <div className='input__wrapper'>
     
      <input type='text' onChange={changeHandler} onFocus={() => setShowDropdown(true)} value={value} className="border p-2 rounded-md" />
      {showDropdown && (
        <div className='suggestions__dropdown mt-2 border p-2 rounded-md bg-white'>
          {suggestionArr && suggestionArr.length > 0 ? (
            suggestionArr.map((suggestion, index) => (
              open?"":<div key={'suggestion_' + index} className='suggestion__item' onClick={() => rewst(suggestion)} >
                {suggestion}
              </div>
            ))
          ) : (
            <div className='no__suggestions'>No suggestions found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SuggestionsInput;
